import {
  baseUrl
} from './env';

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase();
  url = baseUrl + url;
  //GET数据拼接字符串
	if (type == 'GET') {
		let dataStr = '';
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})
		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}
  //如果fetch存在则使用fetch，否则用Promise
	if (window.fetch && method !== 'fetch') {
		let requestConfig = {
			credentials: 'include',
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			mode: "cors",
			cache: "force-cache"
		}

		if (type == 'POST') {
      //添加body属性
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}
    console.log(requestConfig);
		try {
      const response = await fetch(url, requestConfig);
			const responseJson = await response.json();
			return responseJson;
		} catch (error) {
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let xhr;
			if (window.XMLHttpRequest) {
				xhr = new XMLHttpRequest();
			} else {
        xhr = new ActiveXObject('Microsoft.XMLHttp');
      }

			let sendData = '';
			if (type == 'POST') {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        sendData = JSON.stringify(data); 
			}
      
			xhr.open(type, url, true);
			xhr.send(sendData);
      　
			xhr.onreadystatechange = () => {
				if (xhr.readyState == 4) {
          //此处不判断304，因为增加随机数后，不命中缓存
					if (xhr.status >= 200 && xhr.status < 300) {
						let obj = xhr.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj); //转换回数据结构
						}
						resolve(obj)
					} else {
						reject(xhr)
					}
				}
			}
		})
	}
}

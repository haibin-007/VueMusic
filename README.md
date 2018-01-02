# VueMusic

> Fork或借鉴请注明出处 [@ HeavenBin](https://github.com/HeavenBin/VueMusic)  
> 本项目仅供学习交流使用，切勿用于商业用途，如有侵犯第三方版权问题及时联系我

## 项目构成

<pre>
├── build                  // webpack配置文件
├── config            		 // 不同环境的打包配置
├── dist               		 // 生产目录
├── index.html          	 // 入口html文件
├── package.json      		 // 项目配置文件
├── static       			     // 放置静态资源
├── src                		 // 开发目录
│   ├── pages     		     // 页面
│   ├── components     		 // 组件
│   ├── config     		     // 基本配置
│   ├── images     		     // 公共图片
│   ├── plugins     		   // 引用插件
│   ├── router     		     // 路由配置
│   ├── service         	 // 数据交互
│   ├── store     		     // vuex状态管理
│   ├── style     		     // 公共样式
│   ├── App.vue          	 // 页面入口文件
│   └── main.js       	   // 程序入口文件
</pre>

## 构建步骤

``` bash
# 安装依赖
npm install

# localhost:8080 本地热加载
npm run dev

# 打包
npm run build

# 打包 + 分析报告
npm run build --report
```

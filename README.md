# VueMusic

> CloudMusic
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
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


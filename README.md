# 网易云音乐(2018)

> Fork或借鉴请注明出处 [@ HeavenBin](https://github.com/HeavenBin/VueMusic)  
> 如果觉得对你有帮助的话，请也不要吝啬你手中宝贵的Star,使劲砸向我吧！   
> 这将是对我最大的鼓励！！！✧(∗≧ꇴ≦)人(≧ꈊ≦∗)✧

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

## 技术栈
+ Vue2：采用现代渐进式框架Vue2的版本
+ Vuex：管理公共组件状态量
+ vue-router：管理单页面应用路由
+ vue-lazyload：懒加载
+ fastclick：取消点击延时
+ 自定义ajax：基于xmlhttprequest对象以及新兴Fetch对象结合封装的http请求
+ CSS3：CSS3动画及样式。
+ Sass：css预处理语言。
+ Webpack：自动化构建工具，主要配置vue-cli脚手架提供。
+ ES6：采用ES6语法。
+ SVG：基于可扩展标记语言的可缩放矢量图形。
+ [接口来源](https://github.com/Binaryify/NeteaseCloudMusicApi)(感谢Binaryify不断更新的网易云音乐接口)
## 效果演示
![music](https://github.com/HeavenBin/myGif/blob/master/music.gif)
![video](https://github.com/HeavenBin/myGif/blob/master/video.gif)
## 傻瓜式步骤
> 需要NodeJS环境、git环境、推荐用cnpm安装依赖

### 构建后台服务
+ git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git  
+ cd NeteaseCloudMusicApi/
+ cnpm install
+ npm start

### 构建前端项目
+ git clone https://github.com/HeavenBin/VueMusic.git
+ cd VueMusic/
+ cnpm install
+ npm start




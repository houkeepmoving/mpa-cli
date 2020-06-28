#####

*react多页面应用的模板*
技术栈：react16.x + webpack4.x

1. 安装依赖：
```
npm install
```

2. dev环境服务启动：
```
npm start
```

3. build环境服务启动：
```
npm run build
```
* 启动build之后，项目打包过后的文件会自动打包dist文件下
* 流水线部署准生产&生产环境

开发和发布版本的配置文件是分开的，多入口页面的目录结构。
```
    |
    |──dist/                                   * 发布版本构建输出路径
           |
           |
           | —— images
           | —— css
           | —— js
           | —— *.html
    |
    |──public/                                     * html模板
    |
    |──src/
    |     |
    |     |
    |     |—— pages/
    |     |      |—— page1/                     * 页面代码
    |     |      |        |—— main.js            * 入口文件
    |     |      |
    |     |      |—— page2/                    * 页面代码
    |     |      |        |—— main.js            * 入口文件
    |     |
    |     |—— static/                           * 静态文件js，css
    |
```
* main.js是每个页面的入口文件，必须有,pages中的文件名就是生成的页面名字;

* public中index.html是默认html模版文件

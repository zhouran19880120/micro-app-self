# Micro-App-DevTools

<p align="center">
  <a href="https://micro-zoe.github.io/micro-app/">
    <img src="https://zeroing.jd.com/micro-app/media/logo.png" alt="logo" width="200"/>
  </a>
</p>

# 📖简介
`Micro-App-DevTools`是基于京东零售推出的一款为`micro-app`框架而开发的`chrome`插件，旨在方便开发者对微前端进行数据查看以及调试,提升工作效率。adfasf

# 如何使用

在chrome中输入`chrome://extensions`打开扩展程序，下载[插件地址](https://github.com/micro-zoe/micro-app-chrome-plugin/releases/download/v1.0.0/micro-app-chrome-plugin.zip)，（提示：无需解压），将已下载的插件拖入。

![扩展程序](https://img12.360buyimg.com/imagetools/jfs/t1/119438/16/38287/53001/646b50e3F9012f2e8/3bba9844bbb1431b.png)

# 功能
打开控制台，选中`Micro app`

## 1、Environment环境

可查看`Micro app`的`Environment`环境如下

```js
'__MICRO_APP_ENVIRONMENT__': '判断应用是否在微前端环境中'
'__MICRO_APP_VERSION__': '微前端版本号'
'__MICRO_APP_NAME__': '应用名称'
'__MICRO_APP_PUBLIC_PATH__': '子应用的静态资源前缀'
'__MICRO_APP_BASE_ROUTE__': '子应用的基础路由'
```

![控制台](https://m.360buyimg.com/babel/jfs/t1/92170/34/45320/165007/650c20d5F5db8671a/7472d637694733c6.png)

## 2、Communicate通讯
查看父子应用通讯
数据通信面板

### 功能一、获取父应用数据
点击按钮获取当前被嵌入页面基座应用的JSON格式数据

![数据](https://m.360buyimg.com/babel/jfs/t1/134966/38/37257/31060/650bfcb8Fd7206838/d80ac758e26cab7d.png)


### 功能二、子应用开发环境模拟
点击按钮跳转至功能一中子应用开发环境模拟页面，此处模仿内嵌子应用，使用说明如下所示：

在子应用开发环境模拟页面中输入子页面`URL`等信息

> a、子页面URL：此处输入被基座应用嵌入的子应用链接

> b、父应用数据：此处输入JSON格式的父应用需要传给子应用的数据

> c、子应用嵌入代码：此处显示子应用嵌入的代码


以上即完成微前端的嵌入，效果如下：

![嵌入页面](https://img10.360buyimg.com/imagetools/jfs/t1/34172/26/15026/142590/646b51afF00535320/d9d0fd6c7b1590cb.png)

#### 快捷打开方式一
点击右上角图标出现目录,选择"打开子应用开发环境模拟"
![快捷方式](https://img12.360buyimg.com/imagetools/jfs/t1/99019/19/29391/10185/646b51dfF326dcc6c/04273f1a3daf9f9d.png)

#### 快捷打开方式二
点击鼠标右键，选择micro-app下，二级菜单点子应用开发环境模拟

![快捷方式](https://github.com/micro-zoe/micro-app-chrome-plugin/assets/14011130/91b40f7c-a826-4ffe-8c20-0b43a5c3bc6f)

## 3、View子应用视图
查看子应用相关视图信息
### 查看子应用范围
点击按钮即可获取当前被嵌入页面基座应用的视图

![嵌入页面](https://m.360buyimg.com/babel/jfs/t1/122818/13/33795/75508/64a6376dFda233623/601deb9d6e6c01ec.png)
#### 快捷打开方式
点击鼠标右键，选择micro-app下，二级菜单点击查看子应用范围
![快捷方式](https://m.360buyimg.com/babel/jfs/t1/138697/34/36942/29835/64a637f4F11b0ec84/87108f5df15e1b4b.png)

## 4、Route路由
查看子应用路由信息

![快捷方式](https://m.360buyimg.com/babel/jfs/t1/104185/16/45873/134059/650bf92cFd2de845e/83d692c452ce2abb.png)
### 功能一、获取子应用路由
点击查看子应用URL按钮即可获取当前页面下所有子应用的路由地址
### 功能二、复制及打开子应用路由链接
点击复制按钮复制子应用路由，点击打开按钮直接在浏览器打开子应用链接地址

## 🤝 参与共建

如果您对这个项目感兴趣，欢迎提[pull request](https://github.com/micro-zoe/micro-app-chrome-plugin/pulls)参与贡献，也欢迎 [Star](https://github.com/micro-zoe/micro-app-chrome-plugin) 支持一下 ^_^
欢迎小伙伴们加入`Micro-App-DevTools`微信群交流^ ^   

![image](https://img12.360buyimg.com/imagetools/jfs/t1/29962/13/20207/70265/646c9851Fe104e7c1/fed2ab97e2cf5f29.png)




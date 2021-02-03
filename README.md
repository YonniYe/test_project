# 测试项目0.0.1

综合运用了[Vue](https://vuejs.org/)， [Vuex](https://vuex.vuejs.org/installation.html) ， [Vue-Router](https://router.vuejs.org/en/) 和 [Vuetify](https://vuetifyjs.com/en/)。

## 开始

- 从[Nodejs page](https://nodejs.org/en/) 安装node.js
- 从[Yarn installation page](https://classic.yarnpkg.com/en/docs/install/#windows-stable) 安装yarn（一个类似npm的包）
- 打开终端，cd到项目文件夹中
- 执行 `yarn install`
- 执行 `yarn serve` 进行本地开发部署

现在用不到的：

- 执行`yarn run build` 来部署生产环境
- 执行`yarn run lint` 来检查是否符合ESlint的规范

## 说明

- 仅参考设计了大体的页面UI，没有参数传值的过程。页面整体框架如下：

![image-20210203112328639](https://i.loli.net/2021/02/03/kJX7mSwuVTKW2B4.png)

- 组件间的通信目前遇到了一些问题，还在继续学习vuex和把ol与vue结合，路由方面已经学得差不多了。
- 地图放置在了“实时水情”模块下，仅载入了最简单控件，尚未加入复杂的功能。
- 对地图操作的细节和具体逻辑还没有理清楚。
- 暂时引入OSM地图用作测试，最后应该要换成天地图或百度地图。


## 简介

Pokemon

<!-- ![ice-design-pro](https://img.alicdn.com/tfs/TB1_bulmpOWBuNjy0FiXXXFxVXa-1920-1080.png) -->

## 框架

- 前端应用框架: [UmiJS](https://umijs.org/zh-CN)
- UI 组件库: [Ant Design of React](https://ant.design/docs/react/introduce-cn)

## 技术点

- react
- react hooks
- antdesign
- express
- mysql
- axios
- formidable
- etc...

## 目录结构

```
React_Pokemon
├── dist        // 打包资源
├── mock        // 模拟数据
├── server      // 服务器
│   ├── mysql       // 数据库
│   ├── routes      // 服务器接口
│   ├── static      // 服务器资源
├── src
│   ├── assets   // 静态资源
│   ├── layouts      // 通用布局
│   ├── pages        // 页面
│   ├── components   // 公共组件
├── .gitignore       // git 忽略目录配置
├── .umirc.config.js // 路由
├── .umirc.js        // 配置
├── package.json     // package.json
└── README.md        // 项目说明
```

## 使用

1.  服务端:

```bash
  -- mysql -uroot<文件路径
  等待数据库导入 
  # 下载XAMPP运行Mysql,进入命令行模式输入 mysql -uroot -p  
  # 回车键跳过'Enter password输入密码'的指令
  在servers文件夹下运行app.js（node app.js） 
  服务器运行完成
```

2.  Cli 命令使用:

```bash
$ npm run start  // 启动预览服务器
$ npm run build  // 构建 dist
```
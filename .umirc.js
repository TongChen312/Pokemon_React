
// ref: https://umijs.org/config/
import umircConfig from './.umirc.config'
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index/index',
      routes: umircConfig.router.index
    }
  ],
  theme: {
    "primary-color": "#fadb14",
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'Pokemon_React',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    '/pokemon': {
      enable: true,
      target: 'http://127.0.0.1:8080',
      pathRewrite: {
        '^/pokemon': '/pokemon',
      }
    },
    '/user': {
      enable: true,
      target: 'http://127.0.0.1:8080',
      pathRewrite: {
        '^/user': '/user',
      }
    },
  }
}

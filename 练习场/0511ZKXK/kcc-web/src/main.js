import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 地图引用
import VueAMap from 'vue-amap';
// 懒加载
// import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

// 自适应浏览器
// import './utils/flexible.js'
import './assets/css/common.css';

// 引入自定义方法
import common from './utils/common'
Vue.prototype.$common = common;

Vue.config.productionTip = false;

// 使用
Vue.use(ElementUI);
Vue.use(VueAMap);

// Vue.use(VueLazyload, {
//   loading: require('./assets/img/pic_loading.png'), // 加载中图片，一定要有，不然会一直重复加载占位图
//   error: require('./assets/img/pic_error.png') // 加载失败图片
// })

// 根据环境变量决定是否引入mock
// if (process.env.NODE_ENV !== 'production' && !process.env.VUE_APP_BACK_END_URL) {
//   const Mock = require('./mock/index').default
//   Mock.mockData()
// }

// 地图插件初始化
VueAMap.initAMapApiLoader({
  // 高德key
  key: '829412cdc27680a4089962e6047e30e9', // 自己到官网申请，目前用的自己的
  // 插件集合 （插件按需引入）
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor',
    'AMap.MarkerClusterer'
  ],
  v: '1.4.15', // 我也不知道为什么要写这个，不写项目会报错，而且我随便写的，跟我下载的版本对应不了
  uiVersion: '1.0.11' // ui版本号，也是需要写
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

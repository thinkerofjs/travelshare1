import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

// 引入全局样式
import './style/common.less';

// 引入富文本插件的图标依赖的样式
import   "font-awesome.css";

// 引入全局UI组件库 vant
import './plugins/vant';

// 图片放大浏览插件
import preview from 'vue-photo-preview';
import 'vue-photo-preview/dist/skin.css';
Vue.use(preview);

// 引入vue富文本插件并进行初始化操作
import initRichText from './plugins/vueHtml5Editor';
initRichText();

Vue.config.productionTip = false;

import axios from 'axios'
Vue.prototype.$ajax = axios;
Vue.prototype.host = '/api';

// 引入全局尺寸 rem
import './config/rem'


import FastClick from 'fastclick';
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
      FastClick.attach(document.body);
  }, false);
}
// 引入全局过滤器
import './config/filter';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

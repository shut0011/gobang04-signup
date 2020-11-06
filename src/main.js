import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

import 'weui/dist/style/weui.min.css'
import 'assets/css/reset.scss'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,  // 将语言包对象配置给全局组件使用
  render: h => h(App)
}).$mount('#app')

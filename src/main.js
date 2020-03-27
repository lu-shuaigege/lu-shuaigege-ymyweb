import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
Vue.config.productionTip = false
// import Api from "./api/index.js";
// Vue.prototype.$api = Api;
// Vue.use(Swiper);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import 'vant/lib/index.css';
import {
  List,
  Icon,
  Popup,
  Toast,
  Progress
} from 'vant';
Vue.use(List).use(Icon).use(Popup).use(Toast).use(Progress)

import { Button } from 'vant';

Vue.use(Button);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

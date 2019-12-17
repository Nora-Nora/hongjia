// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/style/reset.css'
import {sendHttp} from "./assets/js/request";
//引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.prototype.sendHttp = sendHttp

Vue.prototype.seoName = '深圳鸿佳餐饮管理有限公司'

//引入饿了么组件
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)



//设置页面title
Vue.directive('title',{
  inserted:function (el,binding) {
    document.title = el.dataset.title;
  }
})

//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

router.afterEach(function (to) {
  window.scrollTo(0, 0)
})

//环境变量
if (process.env.NODE_ENV === 'development') {
  //测试环境
  Vue.prototype.baseUrl = 'https://sys.duoduiduo.com';
  Vue.prototype.accountUrl = 'https://account.duoduiduo.com';

} else if (process.env.NODE_ENV === 'production') {
  //生产环境
  Vue.prototype.baseUrl = 'https://sys.duoduiduo.com';
  Vue.prototype.accountUrl = 'https://account.duoduiduo.com';
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


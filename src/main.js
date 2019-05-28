// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import iview from 'iview'
/*import Verify from "vue-drag-verify"*/
import qs from "qs"
axios.defaults.baseURL='http://127.0.0.1:8888/Educationl_war/'
axios.defaults.headers = {
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
}
Vue.prototype.$ajax=axios
Vue.use(ElementUI)
Vue.prototype.$qs=qs
Vue.use(iview)

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  name:'app',
  render:h=>h(App),
  router,
  store,
 /* components:{
    dragVerify
  }*/
})
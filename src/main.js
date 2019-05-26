// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:8888/Educationl_war/'
Vue.prototype.$ajax=axios
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store
})

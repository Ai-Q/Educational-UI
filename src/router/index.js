import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login.vue"
import Notice from '../components/Notice.vue'
import Student from '../components/Student.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/student',
      name:'student',
      component:Student
    },
    {
      path:'/notice',
      name:'notice',
      component:Notice
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})

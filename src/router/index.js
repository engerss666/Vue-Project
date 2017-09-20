import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
// import Login from '@/components/login/Login'

Vue.use(Router)

// const login = r => require.ensure([], () => r(require('@/components/login/login')), 'login');
// const home = r => require.ensure([], () => r(require('@/components/home/Home')), 'login');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

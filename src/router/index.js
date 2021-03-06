import Vue from 'vue'
import Router from 'vue-router'
import UserDetail from '@/components/UserDetail'
import Dashboard from '@/components/Dashboard'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users/:id',
      name: 'users',
      component: UserDetail,
      props: true
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

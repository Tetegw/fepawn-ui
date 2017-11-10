import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Loading from '@/components/ModulePage/loadingPage'
import CheckList from '@/components/ModulePage/checkListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/checkList',
      name: 'CheckList',
      component: CheckList
    }
  ]
})

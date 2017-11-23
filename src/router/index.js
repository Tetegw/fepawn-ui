import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Loading from '@/components/ModulePage/loadingPage'
import Toast from '@/components/ModulePage/toastPage'
import CheckList from '@/components/ModulePage/checkListPage'
import Switch from '@/components/ModulePage/switchPage'
import ActionSheet from '@/components/ModulePage/actionSheetPage'
import buttonTab from '@/components/ModulePage/buttonTab'

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
      path: '/toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/checkList',
      name: 'CheckList',
      component: CheckList
    },
    {
      path: '/switch',
      name: 'Switch',
      component: Switch
    },
    {
      path: '/actionSheet',
      name: 'ActionSheet',
      component: ActionSheet
    },
    {
      path: '/buttonTab',
      name: 'buttonTab',
      component: buttonTab
    }
  ]
})

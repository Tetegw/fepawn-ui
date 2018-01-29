import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Loading from '@/components/_ModulePage/loadingPage'
import Alert from '@/components/_ModulePage/alertPage'
import Toast from '@/components/_ModulePage/toastPage'
import CheckList from '@/components/_ModulePage/checkListPage'
import Switch from '@/components/_ModulePage/switchPage'
import ActionSheet from '@/components/_ModulePage/actionSheetPage'
import ButtonTab from '@/components/_ModulePage/buttonTabPage'
import BetterScroll from '@/components/_ModulePage/betterScroll'
import PullLoadMore from '@/components/BetterScroll/pullLoadMore'
import PickerPage from '@/components/BetterScroll/pickerPage'
import WaterRipple from '@/components/_ModulePage/waterRipple'
import Dial from '@/components/_ModulePage/dial'
import CountUp from '@/components/_ModulePage/countUp'
import Range from '@/components/_ModulePage/range'
import Security from '@/components/_ModulePage/security'
import CodeTest from '@/components/_ModulePage/codeTest'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: HelloWorld
  },
  {
    path: '/alert',
    name: 'Alert',
    component: Alert
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
    name: 'ButtonTab',
    component: ButtonTab
  },
  {
    path: '/betterScroll',
    name: 'BetterScroll',
    component: BetterScroll,
    children: [{
      path: 'pullLoadMore',
      name: 'pullLoadMore',
      component: PullLoadMore
    },
    {
      path: 'pickerPage',
      name: 'pickerPage',
      component: PickerPage
    }
    ]
  },
  {
    path: '/waterRipple',
    name: 'WaterRipple',
    component: WaterRipple
  },
  {
    path: '/dial',
    name: 'Dial',
    component: Dial
  },
  {
    path: '/countUp',
    name: 'CountUp',
    component: CountUp
  },
  {
    path: '/range',
    name: 'Range',
    component: Range
  },
  {
    path: '/security',
    name: 'Security',
    component: Security
  },
  {
    path: '/codeTest',
    name: 'CodeTest',
    component: CodeTest
  }
  ]
})

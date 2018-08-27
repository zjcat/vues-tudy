import Vue from 'vue' //引入vue
import Router from 'vue-router' //引入vue-router
import HelloWorld from '@/components/HelloWorld' //引入根目录
import HiPage from '@/view/hiPage/Hipage'
import ChildOne from '@/view/child/ChildOne'
import ChildTown from '@/view/child/ChildTown'
import ToPage from '@/view/toPage/ToPage'
import UrlPage from '@/view/urlPage/UrlPage'
Vue.use(Router) //vue全局使用Router

export default new Router({
  routes: [ //配置路由，这里是数组
    { //每一个连接都有一个对象
      path: '/', //连接路径
      name: 'HelloWorld', //连接名称
      component: HelloWorld //对应组件模板
    },
    { //每一个连接都有一个对象
      path: '/HiPage', //连接路径
      component: HiPage, //对应组件模板
      children: [{
        path: '/',
        component: HiPage
      },
      {
        path: 'ChildOne',
        name:"我是子页面1",
        component: ChildOne
      },
      {
        path: 'ChildTown',
        component: ChildTown
      }]
    },
    {
      path: '/ToPage', 
      name: 'ToPage',
      component: ToPage
    },
    {
      path: '/UrlPage/:nameId/:nameTitle', 
      name: 'UrlPage',
      component: UrlPage
    }
  ]
})

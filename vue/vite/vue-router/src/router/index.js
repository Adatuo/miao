import { createRouter, createWebHistory ,createMemoryHistory,createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FrindLinks from '../views/FriendLinks.vue'
import NotFound from '../views/NotFound.vue'
import Product from '../views/Product.vue'
import {h} from 'vue'

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),//通过地址栏以及history.pushstate,onpopstate等api实现的修改地址
  history:createWebHashHistory(),//使用地址栏的hash部分记录页面状态
  //history:createMemoryHistory(),//不使用地址来记录页面状态,需要使用history.pushstate,onpopstate等api实现的页面后退或者更新
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },{
      path:'/links',
      component:FrindLinks,
      children:[{
        path:'/links/mi', //另一种写法 mi
        component:{
          render(){
            return h('div','米米')
          }
          // template:`<div>咪咪卡</div>` 没有编译器不能这样写
        }
      },
      {
        path:'tao',
        component:{
          render(){
            return h('div','桃桃')
          }
          //template:`<div>淘洗</div>` 没有编译器不能这样写
        }
      },
    ]
    },{
      path:'/:pathMatch(.*)',
      component:NotFound,
    },{
      path:'/product/:id',
      component:Product
    }
  ]
})

export default router

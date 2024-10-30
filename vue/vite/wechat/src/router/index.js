import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      alias:['/'],//用来为一个路径指定一个或多个别名
      component: () => import('../views/home.vue'),
      children:[
        {
          path: 'chat',
          name: 'chat',
          component: () => import('../views/chatList.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/contact.vue')
        },
        {
          path: 'discover',
          name: 'disover',
          component: () => import('../views/discover.vue')
          // children:[{}],
        },
        {
          path: 'me',
          name: 'me',
          component: () => import('../views/me.vue')
        },
      ],
    }, {
      path: '/frined-circle',
      name: 'frined-circle',
      component: () => import('../views/frined-circle.vue')
    },{
      path:'/chat/:id',
      component: () => import('../views/chat.vue')
    }
  ]
})

export default router

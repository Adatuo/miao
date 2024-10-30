import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      alias:['/'],
      component: () => import('../views/homeView.vue'),
      children:[
        {
          path: 'chatList',
          name: 'chatList',
          component: () => import('../views/chatListView.vue'),
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/contactView.vue'),
        },
        {
          path: 'discover',
          name: 'discover',
          component: () => import('../views/discoverView.vue'),
        },
        {
          path: 'me',
          name: 'me',
          component: () => import('../views/meView.vue'),
        },
      ]
    },
    {     
      path: '/friend-circle',
      name: 'friend-circle',
      component: () => import('../views/friend-circleView.vue'),
    },
    {     
      path: '/chat/:id',
      name: 'chatView',
      component: () => import('../views/chatView.vue'),
    }

  ]
})

export default router

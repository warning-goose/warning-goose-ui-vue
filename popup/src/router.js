import Vue from 'vue'
import Router from 'vue-router'

import WgTopics from './pages/topics.vue'
import WgWassup from './pages/wassup.vue'
import WgOffensive from './pages/offensive.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'topics',
      component: WgTopics
    },
    {
      path: '/wassup',
      name: 'wassup',
      component: WgWassup
    },
    {
      path: '/offensive',
      name: 'offensive',
      component: WgOffensive
    }
  ]
})


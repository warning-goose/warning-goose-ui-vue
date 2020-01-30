import Vue from 'vue'
import Router from 'vue-router'

import WgTopics from './pages/topics.vue'
import WgWassup from './pages/wassup.vue'
import WgOffensive from './pages/offensive.vue'
import WgHuman from './pages/human.vue'
import WgFinish from './pages/finish.vue'
import WgAbout from './pages/about.vue'
import WgPreferences from './pages/preferences.vue'

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
    },
    {
      path: '/human',
      name: 'human',
      component: WgHuman
    },
    {
      path: '/finish',
      name: 'finish',
      component: WgFinish
    },
    {
      path: '/about',
      name: 'about',
      component: WgAbout
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: WgPreferences
    }
  ]
})


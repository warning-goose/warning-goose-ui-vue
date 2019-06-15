
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import i18n from './lang'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')


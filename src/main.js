import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import store from './store'
import { sync } from 'vuex-router-sync'
import Buefy from 'buefy'

Vue.use(Buefy, {
  defaultIconPack: 'fa',
})

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App'
import router from './router'
// import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

// sync(router);
Vue.use(router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

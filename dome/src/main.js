// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import VueResource from 'vue-resource'
import state from './vuex/state'
import mutations from './vuex/mutations'
import getters from './vuex/getters'

Vue.use(Vuex);
Vue.use(VueResource);
Vue.config.productionTip = false

const store = new Vuex.Store({
	state,
	getters,
	mutations
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 	Vuex from 'vuex'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import getters from './vuex/getters/getters'
import mutations from './vuex/mutations/mutation'
import state from './vuex/state/state'

Vue.use(Vuex);
Vue.use(VueResource)
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
  components: { App },
  template: '<App/>'
})

import Vue from 'vue';
import App from './App.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import getters from './vuex/getters/getters'
import mutations from './vuex/mutations/mutation'
import state from './vuex/state/state'
import routes from './router/routes'
//注册：是让所有文件的，都可以使用vuex 也就是store
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource)
var store = new Vuex.Store({
  getters,
  mutations,
  state
})
var router = new VueRouter({
  routes
})
new Vue({
  el: "#app",
  store,
  router,
  render: function(h) {
    return h(App)
  }
})
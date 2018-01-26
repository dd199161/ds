// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.use(VueAxios, axios)
Vue.use(Vuex);
Vue.config.productionTip = false;
const store = new Vuex.Store({
  state: {
    cartCount: 1,
    kk: 1,
    yi: ' + ？ - '
  },
  mutations: {
    updataCartCount(state) {
      state.yi = "加";
      if(state.cartCount < 5) {
        state.cartCount += 1;
        state.kk = state.cartCount;
        if(state.cartCount === 5) {
          state.kk = 'Ok';
        }
      }
    },
    jian(state) {
      state.yi = "减";
      if(state.cartCount > 0) {
        state.cartCount -= 1;
        state.kk = state.cartCount;
        if(state.cartCount < 1) {
          state.kk = 'No';
        }
      }
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
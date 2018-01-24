import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  cartCount: 1
}
export default new Vuex.Store({
  state
});
const mutations = {
  updataCartCount(state, cartCount) {
    state.cartCount += 2;
  },
  jian(state, jian) {
    if(state.cartCount > 0) {
      state.cartCount--;
    }
  }
}
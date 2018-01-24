import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    num: 10
  },
  getters: {
    filterNum(state) {
      return state.num <= 0 ? "最小了" : state.num
    }
  },
  mutations: {
    addIncrement(state, stark) {
      if(state.num < 30) {
        state.num += stark.n;
      }
    },
    minIncrement(state) {
      if(state.num > 0) {
        state.num -= 5;
      }
    }
  },
  actions: {
    addAction({
      commit,
      dispatch
    }) {
      setTimeout(() => {
        commit('addIncrement', {
          n: 5
        })
        dispatch('shudongAction', {
          name: 'stark',
          age: 18,
          sex: 'man'
        })
      }, 100)
    },
    shudongAction(context, stark) {}
  }
})
export default store
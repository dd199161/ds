import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    count: 0,
    username: 'abc',
    pw: '123'
}

const mutations = {
    increment(state) {
        state.count = state.count + 1
    },
    decrement(state) {
        state.count = state.count - 1
    },
    login(state) {
        state.username = state.username,
            state.pw = state.pw
    }
}
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    login: ({ username, pw }) => commit('login')
}
const getters = {

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
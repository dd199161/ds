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
	//也可以这样写
//	increment:({context}){
//		context.commit('increment');
//	}
//	decrement:({context}){
//		context.commit('increment');
//	}
//	login:({context}){
//		context.commit('login')
//	}
	//下面是缩写
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    login: ({ commit }) => commit('login')
}
const getters = {

}
const modules = {

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const state = {
	count: 1
}
export default new Vuex.Store({
	state
});
const mutations = {
	add(state) {
		state.count ++ ;
	},
	reduce(state) {
		state.count -- ;
	}
}
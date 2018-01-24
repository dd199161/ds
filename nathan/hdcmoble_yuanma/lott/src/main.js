import Vue from 'vue';
window.Vue = Vue;
import App from './App';
import store from './vuex/user';
import VueCookie from "vue-cookie";
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'vue2-animate/dist/vue2-animate.min.css';
import "./assets/js/hotcss";
import VueTouch from 'vue-touch';
import 'swiper/dist/css/swiper.css' ;
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueCookie);
Vue.use(VueAxios, axios);
Vue.component('icon', Icon);
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false
new Vue({
	el: '#app',
	store,
	template: '<App/>',
	components: {
		App,
	},
})

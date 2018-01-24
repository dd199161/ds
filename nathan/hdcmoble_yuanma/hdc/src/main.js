import Vue from 'vue';
window.Vue = Vue;
import App from './App';
import store from './vuex/user';
import VueCookie from "vue-cookie";
import axios from 'axios';
import VueAxios from 'vue-axios';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' ;
import 'vue2-animate/dist/vue2-animate.min.css';
import "./assets/js/flexible";
import './assets/js/flexible_css';
import VueTouch from 'vue-touch';
Vue.use(VueCookie);
Vue.use(VueAxios, axios);
Vue.use(VueTouch, {name: 'v-touch'});
Vue.use(VueAwesomeSwiper);
Vue.component('icon', Icon);
Vue.config.productionTip = false
new Vue({
	el: '#app',
	store,
	template: '<App/>',
	components: {
		App,
	}
})

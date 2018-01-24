import Vue from 'vue'
import App from './App'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

//  import Vuex from 'vuex';
//  Vue.use(Vuex);
/* eslint-disable no-new */

import store from '../../vuex/store';

new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
})
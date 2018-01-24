//es6 引入写法
import '../css/style.css'
import Vue from 'vue'  //  >   var Vue = require('vue')
import App from './App.vue' // 引入主入口文件


new Vue({
    el : '#app',
    render : function(h){
        return h(App)
    }
})
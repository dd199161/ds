import "../css/style.css"
import Vue from "vue"//   var Vue=require("vue")
import App from "./App.vue"

new Vue({
    el:"#app",
    render:function(h){
        return h(App)
    }
})

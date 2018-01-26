import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import count from '@/components/count'
import abck from '@/components/abck'
import search from '@/components/search'
import vueAxios from '@/components/vueAxios'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/count',
            name: 'count',
            component: count
        },
        {
            path: '/abck',
            name: 'abck',
            component: abck
        },
        {
            path: '/search',
            name: 'search',
            component: search
        },
        {
            path: '/',
            name: 'vueAxios',
            component: vueAxios
        }
    ]
})
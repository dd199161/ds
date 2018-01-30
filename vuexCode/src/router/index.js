import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import count from '@/components/count'
import vuexcount from '@/components/vuexcount'
import abck from '@/components/abck'
import search from '@/components/search'
import vueAxios from '@/components/vueAxios'
import formtab from '@/components/formtab'
import headers from '@/components/login/headers'

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
            path: '/vuexcount',
            name: 'vuexcount',
            component: vuexcount
        },
        {
            path: '/',
            name: 'headers',
            component: headers
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
            path: '/vueAxios',
            name: 'vueAxios',
            component: vueAxios
        },
        {
            path: '/formtab',
            name: 'formtab',
            component: formtab
        }
    ]
})
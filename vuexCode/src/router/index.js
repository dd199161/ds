import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import count from '@/components/count'
import vuexcount from '@/components/vuexcount'
import ds from '@/components/ds'
import scroll from '@/components/scroll'
import jade from '@/components/jade'
import abck from '@/components/abck'
import search from '@/components/search'
import vueAxios from '@/components/vueAxios'
import formtab from '@/components/formtab'
import fetch from '@/components/fetch'
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
            path: '/ds',
            name: 'ds',
            component: ds
        },
        {
        	path: '/scroll',
        	name: 'scroll',
        	component: scroll
        },
        {
        	path: '/',
        	name: 'jade',
        	component: jade
        },
        {
            path: '/vuexcount',
            name: 'vuexcount',
            component: vuexcount
        },
        {
        	path: '/fetch',
        	name: 'fetch',
        	component: fetch
        },
        {
            path: '/headers',
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
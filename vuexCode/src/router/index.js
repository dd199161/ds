import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import count from '@/components/count'
import abck from '@/components/abck'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'count',
            component: count
        },
        {
            path: '/abck',
            name: 'abck',
            component: abck
        }
    ]
})
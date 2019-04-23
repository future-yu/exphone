import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import User from './views/User'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL||'/',
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/user',
        name: 'user',
        component: User
    }],
    linkActiveClass:'link_active'
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import User from './views/User'
import PostDetail from './views/PostDetail'
import NoFoundPage from './views/404Page'
import PostImage from './views/PostImage'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL || '/',
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/user',
        name: 'user',
        component: User
    }, {
        path: '/post/detail/:post_id',
        component: PostDetail,
        props: true
    }, {
        path:'/post/image',
        component:PostImage,
        props:(route)=>({
            post_id:route.query.post_id,
            img_id:route.query.img_id
        })
    }, {
        path: '*',
        component: NoFoundPage
    }],
    linkActiveClass: 'link_active'
})

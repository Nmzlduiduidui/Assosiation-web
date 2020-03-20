import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/common/Login.vue'
import Index from "../components/common/Index";
import Association from "../components/user/Association";
import My from "../components/user/My";
import userModify from "../components/user/userModify";
import Home from "../components/common/Home";
import Information from "../components/user/Information";
import Detail from "../components/common/Notice/Detail";
import Notice from "../components/common/Notice/Notice";
import noticeModify from "../components/common/Notice/noticeModify";


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            // 定义主页路由地址
            path: '/',
            redirect:'/index'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/association',
            name: 'Association',
            component: Association
        },
        {
            path: '/my',
            name: 'My',
            component: My,
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
            children:[
                {
                    path:"/Home/user/information",
                    name:'Information',
                    component:Information,
                    meta: {
                        requireAuth: true,
                        breadNumber: 1
                    }
                },
                {
                    path:"/Home/user/userModify",
                    name:'userModify',
                    component:userModify,
                    meta: {
                        requireAuth: true,
                        breadNumber: 2
                    }
                },
                {
                    path:"/Home/notice",
                    name:'Notice',
                    component:Notice,
                    meta: {
                        requireAuth: true,
                        breadNumber: 1
                    }
                },
                {
                    path:"/Home/notice/detail",
                    name:'Detail',
                    component:Detail,
                    meta: {
                        requireAuth: true,
                        breadNumber: 2
                    }
                },
                {
                    path:"/Home/notice/noticeModify",
                    name:'noticModify',
                    component:noticeModify,
                    meta: {
                        requireAuth: true,
                        breadNumber: 2
                    }
                }
            ]
        }

    ]
})
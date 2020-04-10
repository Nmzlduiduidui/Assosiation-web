import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Index from "@/views/Index";
import Association from "@/views/user/Association";
import My from "@/views/user/My";
import Home from "@/views/Home";
import Information from "@/views/user/Information";
import List from "@/views/user/List";

import Detail from "@/views/notice/Detail";
import Notice from "@/views/notice/Index";
import Menu from "@/views/menu/Index";
import Dict from "../views/dict/index";
import Data from "../views/dict/data";

import noticeModify from "../views/notice/Modify";
import Layout from '@/layout/Index.vue'
import Register from "@/views/user/Register";

Vue.use(Router)

/**
 * Note: 路由配置项
 *
 * hidden: true                   // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    roles: ['admin','editor']    // 设置该路由进入的权限，支持多个权限叠加
    title: 'title'               // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             // 设置该路由的图标，对应路径src/icons/svg
    breadcrumb: false            // 如果设置为false，则不会在breadcrumb面包屑中显示
  }
 */

// 公共路由
export const constantRoutes = [
    {
        // 定义主页路由地址
        path: '/redirect',
        component: Layout,
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect')
            }
        ]
    },
    {
        path: '/404',
        component: () => import('@/views/error/404'),
        hidden: true,
    },
    {
        path: '/401',
        component: () => import('@/views/error/401'),
        hidden: true,

    },
    {
        path: '/index',
        name: 'Index',
        component: Index,

    },
    {
        path: '/login',
        component: Login,
        hidden: true,
    },
    {
        path: '/Register',
        component: Register,
        hidden: true,
    },
    {
        path: '',
        component: Layout,
        redirect: 'index',
        children: [
            {
                path: '/index',
                component: () => import('@/views/Index'),
                name: '首页',
                meta: {title: '首页', icon: 's-home', noCache: true, affix: true},
            }
        ]
    },
    {
        path: '/user',
        component: Layout,
        //redirect: 'noredirect',
        meta: {title: '个人中心', icon: 'user'},
        children: [
            {
                path: '/user/Index',
                component: (Index) => import('@/views/user/Index'),
                name: 'Index',
                meta: {title: '我的'},
            },
            {
                path: '/user/Information',
                component: (Information) => import('@/views/user/Information'),
                name: 'Information',
                meta: {title: '个人信息'},
            },
            {
                path: '/user/List',
                component: (List) => import('@/views/user/List'),
                name: 'List',
                meta: {title: '用户管理'},
            }

        ]
    },
    {
        path: '/notice',
        component: Layout,
        //redirect: 'noredirect',
        meta: {title: '公告管理', icon: 'message'},
        children: [
            {
                path: '/notice/Index',
                component: (Notice) => import('@/views/notice/Index'),
                name: 'Notice',
                meta: {title: '公告'},
            },
            {
                path: '/notice/Modify',
                component: (Modify) => import('@/views/notice/Modify'),
                name: 'Modify',
                meta: {title: '修改公告'},
            }
        ]
    },
    {
        path: '/menu',
        component: Layout,
        meta: {title: '菜单管理', icon: 'message'},
        children: [
            {
                path: '/menu/Index',
                component: (Menu) => import('@/views/menu/Index'),
                name: 'Menu',
                meta: {title: '菜单'},
            }
        ]
    },
    {
        path: '/dict',
        component: Layout,
        meta: {title: '字典管理', icon: 'message'},
        children: [
            {
                path: '/dict/Index',
                component: (Dict) => import('@/views/dict/index'),
                name: 'Dict',
                meta: {title: '字典'},
            },
            {
                path: '/dict/type/data/:dictId',
                component: (Data) => import('@/views/dict/data'),
                name: 'Data',
                meta: {title: '字典类型'},
                hidden: true
            }
        ]
    }

];

export default new Router({
    mode: 'history', // 去掉url中的#
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
})


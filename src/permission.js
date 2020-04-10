import router from './router'
import store from './store/index'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from './utils/auth'

//页面跳转，顶部进度条
NProgress.configure({ showSpinner: false })

//定义白名单
const whiteList = ['/login','/index','/auth-redirect', '/bind', '/register']

//路由钩子函数，进入页面的操作
router.beforeEach((to, from, next) => {

  //进度条开始
  NProgress.start()

  if (getToken()) {

    /* 有token的情况下*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {

        // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(res => {

          // 拉取user_info
          const roles = res.roles

          // //调用vuex中store的方法
          // store.dispatch('GenerateRoutes', { roles }).then(accessRoutes => {

          //测试 默认静态页面
          store.dispatch('permission/generateRoutes', { roles }).then(accessRoutes => {

            // 根据roles权限生成可访问的路由表
            router.addRoutes(accessRoutes) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
          })
        })
          .catch(err => {
            store.dispatch('FedLogOut').then(() => {
              Message.error(err)
              next({ path: '/' })
            })
          })
      } else {
        next()
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        // if (hasPermission(store.getters.roles, to.meta.roles)) {
        //   next()
        // } else {
        //   next({ path: '/401', replace: true, query: { noGoBack: true }})
        // }
        // 可删 ↑
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
       // next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      next()
      NProgress.done()
    }
  }


})

router.afterEach(() => {
  NProgress.done()
})

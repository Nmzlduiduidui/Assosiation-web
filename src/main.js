import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import router from './router/index'
import config from './config/index'

import store from '@/store' //状态管理
import axios from 'axios/index'   //Axios是一个基于promise的HTTP库，发送get和post请求
import qs from 'qs'
import validators from '@/assets/js/validators' //自定义验证器
import './permission'
import permission from './directive/permission'

// 通用js方法封装处理
import { parseTime, resetForm, addDateRange, selectDictLabel, download, handleTree } from "@/utils/index";

//分页组件
import Pagination from "@/components/Pagination";

//字典
import { getDicts } from "@/api/system/dict/data";


// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'
import './assets/styles/index.scss'  //全局引入樣式

import '@/assets/icons' // 引入icon

//引入富文本编辑器quill-editor
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

//通过Vue.use进行引用
Vue.use(VueQuillEditor)
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(permission)

// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.$store = store

//全局方法挂载
Vue.prototype.getDicts = getDicts
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree

Vue.prototype.msgSuccess = function (msg) {
    this.$message({ showClose: true, message: msg, type: "success" });
}

Vue.prototype.msgError = function (msg) {
    this.$message({ showClose: true, message: msg, type: "error" });
}

Vue.prototype.msgInfo = function (msg) {
    this.$message.info(msg);
}

//将自定义验证方法绑定到全局
Vue.prototype.validators = validators
Vue.config.productionTip = false

// 全局组件挂载
Vue.component('Pagination', Pagination)




// 配置公共url
// 引用axios，并设置基础URL为后端服务api地址
/*axios.defaults.baseURL= 'http://localhost:8088/api'*/
/*axios.defaults.headers.post['Content-Type'] = "application/json"
axios.defaults.headers.common['Authorization'] = store.state.token*/
/*axios.defaults.withCredentials = true   ///允许跨域*/

// 登录流程控制中，根据本地是否存在token判断用户的登录情况
// 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
// 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
// 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。

//登录模块
//添加请求拦截器，在请求头加入token
axios.interceptors.request.use(
    config =>{
        if(store.state.token){// 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = 'token ${store.state.token}';
        }
        return config;
    },
    error =>{
        //对请求错误做什么
        return Promise.reject(error);
    })

//http reponse响应拦截器
axios.interceptors.response.use(
    response =>{
        return response;
    },
    error=>{
        if(error.response){
            switch(error.response.status){  //验证返回状态码为401
                case 401:
                    localStorage.removeItem('token');//清除token信息跳转到登录页面
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}//登录后跳入浏览的当前页面
                    });
                case 403:
                    alert("403")
                    localStorage.removeItem('token');//清除token信息跳转到登录页面
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}//登录后跳入浏览的当前页面
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });
/*

// 全局路由构造函数，判断是否登录和要跳转到页面
router.beforeEach((to, from, next) => {

    store.state.token = sessionStorage.getItem('token');//获取本地存储的token

    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token !== "") {  // 通过vuex state获取当前的token是否存
            next();
        }
        else {
            next({
                path: '/home',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})*/


//实例化vue
new Vue({
  router,
  store,
  //实例化Vue对象时加入store对象，把store实例注入到所有子组件
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import router from './router/index'
import validators from './assets/js/validators'
import store from './store' //状态管理
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'

//引入富文本编辑器quill-editor
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)

// 引用axios，并设置基础URL为后端服务api地址
var axios = require('axios')
axios.defaults.baseURL = 'https://localhost:8443/api'

// 将API方法绑定到全局
Vue.prototype.$axios = axios

//将自定义验证方法绑定到全局
Vue.prototype.validators = validators

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter)


//实例化vue
new Vue({
  router,
  store,
  //实例化Vue对象时加入store对象，把store实例注入到所有子组件
  render: h => h(App),
}).$mount('#app')

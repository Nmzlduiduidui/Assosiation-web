import Vue from 'vue'
import Vuex from 'vuex'// 引用Vuex
import getters from './getters'
import permission from './modules/permission'
import user from './modules/user'
import settings from './modules/settings'
import app from './modules/app'
import tagsView from './modules/tagsView'

//通过Vue.use进行引用
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user,
        permission,
        app,
        tagsView,
        settings
    },
    getters

});

export default store

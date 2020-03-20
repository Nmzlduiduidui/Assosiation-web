import Vue from 'vue'
// 引用Vuex
import Vuex from 'vuex'

//通过Vue.use进行引用
Vue.use(Vuex);
const state = {
    breadListState: [] // 面包屑列表数据
};

export default new Vuex.Store({
    state,
    mutations: {
        breadListMutations (getters, list) {
            getters.breadListState = list;
        }
    }
});
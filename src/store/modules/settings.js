import defaultSettings from '../../setting'
const { showSettings,  sidebarLogo, tagsView, fixedHeader, } = defaultSettings

const state = {
    showSettings: showSettings,
    sidebarLogo: sidebarLogo,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
}

const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    }
}

const actions = {
    changeSetting({ commit }, data) {
        commit('CHANGE_SETTING', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}


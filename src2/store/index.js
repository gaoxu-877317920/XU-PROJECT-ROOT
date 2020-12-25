import Vue from 'vue'
import Vuex from 'vuex'
import user from './moudles'

Vue.use(Vuex)
//向外暴露store对像
export default new Vuex.Store({
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        home,
        user
    }
})

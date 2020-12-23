import Vue from 'vue'
import VueRouter from 'vue-router'
//声明并注册
Vue.use(VueRouter)

import routes from './routes'

// import routes from './router'

export default new VueRouter({
    mode:'history',
    routes
})
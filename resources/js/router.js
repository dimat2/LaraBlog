import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components/pages/first'

const routes = [
    { path: "/home", component: firstPage }
]

export default new Router({
    mode: 'history',
    routes
})

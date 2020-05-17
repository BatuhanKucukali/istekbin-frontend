import Vue from 'vue'
import VueRouter from "vue-router"
import Moment from "vue-moment"

Vue.use(VueRouter)
Vue.use(Moment)

import App from './App.vue'
import Home from "./components/Home";
import Request from "./components/Request";

Vue.config.productionTip = false

const routes = [
    {path: '/', component: Home},
    {path: '/r/:uuid', component: Request},
]

const router = new VueRouter({
    routes,
    mode: 'hash'
})

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

import App from './App.vue'
import Home from "./components/Home";
import Request from "./components/Request";

Vue.config.productionTip = false

const routes = [
    {path: '/', component: Home},
    {path: '/r', component: Request},
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')

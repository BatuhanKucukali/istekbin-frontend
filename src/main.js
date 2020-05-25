import Vue from 'vue'
import VueRouter from "vue-router"
import Moment from "vue-moment"
import VueClipboard from "vue-clipboard2";
import App from './App.vue'
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Request from "./components/Request";
import Toasted from "vue-toasted";
import VueHighlightJS from "vue-highlightjs";

import 'highlight.js/styles/idea.css';

Vue.use(VueRouter)
Vue.use(Moment)
Vue.use(VueClipboard)
Vue.use(Toasted)
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

const routes = [
    {path: '/', component: Home},
    {path: '/r/:uuid', component: Request},
    {path: '/*', component: NotFound},
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')

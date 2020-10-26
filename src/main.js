import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import LyTab from 'ly-tab'
Vue.use(MintUI)
Vue.use(LyTab)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
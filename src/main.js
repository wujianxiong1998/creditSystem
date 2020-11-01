import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import less from 'less'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import './element/index'
Vue.use(less)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

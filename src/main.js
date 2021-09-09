import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './style/index.less'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入axios
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 请求拦截，增加
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 绑定到vue上
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

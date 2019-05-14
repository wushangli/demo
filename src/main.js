import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import VueResource from 'vue-resource'

//声明使用vue-resource
Vue.use(VueResource)//内部会给vm对象和组件添加一个属性$http

Vue.config.productionTip = false

Vue.prototype.$moment = moment;//赋值使用
moment.locale('zh-cn');//需要汉化
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

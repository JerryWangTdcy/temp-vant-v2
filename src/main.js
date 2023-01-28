import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Storage from 'vue-ls'
import store from './store'
import { axios } from "@/utils/request"
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/stylus/index.styl'

import vueBus from '@/utils/vueBus'
import {
  ACCESS_TOKEN
} from "@/store/mutation-types"
Vue.config.productionTip = false
const storageOptions = {
  namespace: 'pro__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local', // storage name session, local, memory
}
Vue.use(Storage, storageOptions)
Vue.use(Vant)
Vue.use(axios, router)
Vue.use(vueBus)

new Vue({
  router,
  store,
  mounted() {
    store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))
  },
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import axios from 'axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'
/**
 * 【指定 axios的 baseURL】
 * 如果手工指定 baseURL: '/api'
 * 则映射后端域名，通过 vue.config.js
 * @type {*|string}
 */
const apiBaseUrl = process.env.VUE_APP_API_BASE_URL || '/api'
// 创建 axios 实例
const service = axios.create({
  // baseURL: '/api',
  baseURL: apiBaseUrl, // api base_url
  timeout: 9000 // 请求超时时间
})
const err = (error) => {
  if (error.response) {
    const data = error.response.data
    const token = Vue.ls.get(ACCESS_TOKEN)
    console.log(data, token)
  } else if (error.message) {
    console.log(error.message)
  }
  return Promise.reject(error)
}
// request interceptor
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  if (token) {
    config.headers['X-Access-Token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  if (config.method === 'get' || config.method === 'GET') {
    config.params = {
      _t: Date.parse(new Date()) / 1000,
      ...config.params
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, err)
export { service as axios }
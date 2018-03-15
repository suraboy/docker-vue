import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

axios.defaults.baseURL = process.env.API_URL || 'https://docker-rails.georg-ledermann.de/api/v1'
axios.defaults.headers.post['Accept'] = 'application/json'

axios.interceptors.request.use(function (config) {
  // Auth auth token before request is sent
  if (localStorage.token) {
    config.headers.common['Authorization'] = 'Bearer ' + localStorage.token
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

Vue.use(VueAxios, axios)

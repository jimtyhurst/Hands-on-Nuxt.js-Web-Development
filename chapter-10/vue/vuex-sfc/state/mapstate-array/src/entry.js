'use strict'

import Vue from 'vue/dist/vue.js'
import App from './app.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'John',
    age: 20,
    job: 'designer'
  }
})

new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: {
    App
  }
})
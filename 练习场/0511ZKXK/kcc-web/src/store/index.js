import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    source: {
      token: null,
      cancel: null
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});

export default store;

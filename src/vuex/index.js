/**
 * Created by zyzhang on 17/7/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import system from './modules/system'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {user, system},
  getters
});

export default store

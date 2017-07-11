// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './config/routes';
import store from './vuex/index';
import './mock/index.js';  // 该项目所有请求使用mockjs模拟

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  router,
  store
}).$mount('#app')

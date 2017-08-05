// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './config/routes';
import store from './vuex/index';
import './mock/index.js';  // 该项目所有请求使用mockjs模拟
import Comm from './assets/javascript/Comm'

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log("main  isLogin   ", Comm.getSessionSave("isLogin"));
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (Comm.getLoginLabel()) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});

new Vue({
  router,
  store
}).$mount('#app')

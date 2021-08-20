import Vue from 'vue'
import App from './App.vue'
import contextManage from './page/contextManage';
import vueRouter from 'vue-router';
Vue.config.productionTip = false;
Vue.use(vueRouter);
new Vue({
  router: new vueRouter({
    routes: [{
      path: '/contextManage',
      component: contextManage,
    }]
  }),
  render: h => h(App),
}).$mount('#app')

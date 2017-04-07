
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 // The Vue build version to load with the `import` command
 import Vue from 'vue';
 import VueRouter from 'vue-router';
 import App from './App';
 Vue.use(VueRouter);

 var routes = [{
   path: '/',
   name: 'home',
   component: resolve => require(['./components/task_list.vue'], resolve)
 }, {
   path: '/create',
   name: 'create',
   component: resolve => require(['./components/create_task.vue'], resolve)
 }, {
   path: '/login',
   name: 'login',
   component: resolve => require(['./components/login.vue'], resolve)
 }, {
   path: '/register',
   name: 'register',
   component: resolve => require(['./components/register.vue'], resolve)
 }
 ];

 const router = new VueRouter({
     routes,
     linkActiveClass: "active"
 });

 new Vue({
     router,
     template: '<App/>',
     components: { App }
 }).$mount('#app');

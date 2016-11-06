/* eslint-disable no-new */

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import '../node_modules/semantic-ui/dist/semantic.min.css';

// Components for routing
import TodoList from './components/todo/TodoList';
import Base from './components/vue/Base';

const routes = [
  { path: '/', component: Base },
  { path: '/todo', component: TodoList },
];

const router = new VueRouter({ routes });

Vue.use(VueRouter);
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});

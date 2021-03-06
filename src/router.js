import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
          {
              path: 'list',
              name: 'list',
              component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
          },
          {
              path: 'user',
              name: 'user',
              component: () => import( './views/User.vue')
          }
      ]
    },
    {
        path: '/add',
        name: 'add',
        component: Add
    },
    {
        path: '/ceshi',
        name: 'ceshi',
        component: () => import('./views/lianxi/Ceshi.vue')
    },
    {
        path: '/animation',
        name: 'animation',
        component: () => import('./views/lianxi/Animation.vue')
    },
    {
        path: '/filter',
        name: 'filter',
        component: () => import('./views/lianxi/Filter.vue')
    },
    {
        path: '/hello',
        name: 'hello',
        component: () => import('./views/lianxi/Hello.vue')
    },
    {
        path: '/lianxi',
        name: 'lianxi',
        component: () => import('./views/lianxi2/App.vue')
    },
    {
        path: '/todo',
        name: 'todo',
        component: () => import('./views/ToDoLianxi/App.vue')
    },
    {
        path: '/todo',
        name: 'todo',
        component: () => import('./views/ToDoLianxi1/App.vue')
    },
    {
        path: '/axios',
        name: 'axios',
        component: () => import('./views/axions/App.vue')
    },
    {
        path: '/userpage',
        name: 'userpage',
        component: () => import('./views/users/App.vue')
    },
  ]
})

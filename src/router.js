import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import(/* webpackChunkName: "index" */ 'views/Index.vue')
const Map = () => import(/* webpackChunkName: "map" */ 'views/Map.vue')
const Ball = () => import(/* webpackChunkName: "ball" */ 'views/Ball.vue')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/map',
    name: 'map',
    component: Map
  }, {
    path: '/ball',
    name: 'ball',
    component: Ball
  }]
})

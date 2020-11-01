import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      { path: 'introduce', component: ()=>import('../views/introduce/Introduce.vue')},
      { path: 'designBackground', component: ()=>import('../views/designBackground/DesignBackground.vue')},
      { path: 'designAim', component: ()=>import('../views/designAim/DesignAim.vue')},
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Promociones from '../views/Promociones.vue'
import Accesorios from '../views/Accesorios.vue'
import CartView from '../views/CartView.vue'
import CheckOut from '../views/CheckOut.vue'
import Confirmacion from '../views/Confirmacion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Catalogo.vue')
  },
  {
    path: '/promociones',
    name: 'Promociones',
    component: Promociones
  },
  {
    path: '/accesorios',
    name: 'Accesorios',
    component: Accesorios
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut
  },
  {
    path: '/confirmacion',
    name: 'Confirmacion',
    component: Confirmacion
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

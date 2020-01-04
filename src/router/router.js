import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OurWork from '../views/OurWork'
import Login from '../views/Login'
import Logout from '../views/Logout'
import Posts from '../views/Posts'
import Post from '../views/Post'
import Media from '../views/Media'
import Users from '../views/Users'
import User from '../views/User'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/our-work',
    name: 'our-work',
    component: OurWork
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/post',
    name: 'post',
    component: Post
  },
  {
    path: '/media',
    name: 'media',
    component: Media
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

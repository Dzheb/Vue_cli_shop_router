import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopHome from '../views/ShopHome.vue'
import ShopBlog from '../views/ShopBlog.vue'
import ShopBlogDetails from '../views/ShopBlogDetails.vue'
import ShopProject from '../views/ShopProject.vue'
import ShopProjectDetails from '../views/ShopProjectDetails.vue'
import ShopNot from '../views/ShopNot.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ShopHome
  },
  {
    path: '/blog',
    name: 'blog',
    component: ShopBlog
  },
  {
    path: '/project',
    name: 'project',
    component: ShopProject
  },
  {
    path: '/blogdetails',
    name: 'blogdetails',
    component: ShopBlogDetails
  },
  {
    path: '/Projectdetails',
    name: 'Projectdetails',
    component: ShopProjectDetails
  },
  {
    path: '/404',
    name: 'NotFound',
    component:   ShopNot
  },
  {
    path: '*',
    redirect:'/404',
  },

 
]

const router = new VueRouter({
  routes
})

export default router

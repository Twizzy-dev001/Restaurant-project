import { createRouter, createWebHistory } from 'vue-router'
import Home_Page from '@/components/Home_Page.vue'
import About from '@/components/About.vue'
import Menu from '@/components/Menu.vue'
import contact from '@/components/contact.vue'
import Order from '@/components/Order.vue'
import Restaurantlist from '@/components/Restaurantlist.vue'
import Booking from '@/components/Booking.vue'
import Feedback from '@/components/Feedback.vue'


const routes = [
  {
    path:'/',
    component: Home_Page
  },
  {
    path:'/About',
    component: About
  },
  {
    path:'/Menu',
    component: Menu
  },
  {
    path:'/Feedback',
    component: Feedback
  },{
    path:'/Booking',
    component: Booking
  },{
    path:'/Feedback',
    component: Feedback
  },{
    path:'/Order',
    component: Order
  },{
    path:'/Restaurantlist',
    component: Restaurantlist
  },{
    path:'/contact',
    component: contact
  }


  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router


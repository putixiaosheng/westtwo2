import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import FirstPageView from '../views/FirstPageView.vue'
import UserHomeView from '../views/users/UserHomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'/firstpage',
    children:[
      {
        path:'/register',
        name:'register',
        component:RegisterView
      },
      {
        path:'/login',
        name:'login',
        component:LoginView
      },
      {
        path:'/firstpage',
        name:'firstpage',
        component:FirstPageView
      },
    ]
  },
  {
    path:'/userhome',
    name:'userhome',
    component:UserHomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path=='/login'&&localStorage.getItem('token')!=''){
    router.push('/userhome')
  }else{
    next()
  }
  
})

export default router

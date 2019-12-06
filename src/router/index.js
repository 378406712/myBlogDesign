import Vue from 'vue'
import Router from 'vue-router'

//前台
const Home = () => import('@/components/FrontTable/Home')


const Register = () => import('@/components/Register')
const Login = () => import('@/components/Login')
const NotFound = () => import('@/components/NotFound')

// /狗太
const BackHome = () => import('@/components/BackTable/BackHome')
const Mine = () => import('@/components/BackTable/ChildrenBH/Mine')
const Essay = () => import('@/components/BackTable/ChildrenBH/Essay')
const Edit = () => import('@/components/BackTable/ChildrenBH/Edit')
const Compile = () => import('@/components/BackTable/ChildrenBH/Compile')
const Comment = () => import('@/components/BackTable/ChildrenBH/Comment')

//对后台backhome所有页面设置路由独享守卫




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,

    },
    {
      path: '/login',
      name: 'Login',
      component: Login,

    },
    {
      path: '/register',
      name: 'Register',
      component: Register,

    },

    {
      path: '/backhome',
      name: 'BackHome',
      
      component: BackHome,
     beforeEnter:(to,from,next)=>{

      let token = localStorage.getItem('token')
      if(token){
          next()
      }
      else{
        alert("请先登录")
        next({path:'/login'})
      }
     },

      children: [
        {
          path: '/backhome',
          component: Mine
        },
        {
          path: 'mine',
          name:"mine",
          component: Mine
        }, {
          path: 'essay',
          component: Essay
        },
        {
          path: 'edit',
          component: Edit
        },
        {
          path: 'compile/:id',
          component: Compile
        },
        {
          path: 'comment',
          component: Comment
        },
      ]
    },
    {
      path:'*',
      name:'NotFound',
      component:NotFound
    }

  ]
})

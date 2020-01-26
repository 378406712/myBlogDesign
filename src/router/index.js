import Vue from 'vue'
import Router from 'vue-router'

//前台
const Home = () => import('@/components/FrontTable/Home')

//注册 登陆 404
const Register = () => import('@/components/Register')
const Login = () => import('@/components/Login')
const NotFound = () => import('@/components/NotFound')

//后台主界面
const BackHome = () => import('@/components/BackTable/BackHome')

//后台子页面
const Center = () => import('@/components/BackTable/ChildrenBH/Center')
const Essay = () => import('@/components/BackTable/ChildrenBH/Essay')
const Edit = () => import('@/components/BackTable/ChildrenBH/Edit')
const Compile = () => import('@/components/BackTable/ChildrenBH/Compile')
const Comment = () => import('@/components/BackTable/ChildrenBH/Comment')
const Personal = () => import('@/components/BackTable/ChildrenBH/Personal')
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
        swal({
          title: "请先登录!",
          icon: "info",
          button: "OK"
        }).then(()=>{
          next({path:'/login'})
        })
       
      }
     },

      children: [
        {
          path: '/backhome',
          component: Center
        },
        {
          path: 'center',
          name:"center",
          component: Center
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
        {
          path:'personal',
          component: Personal
        }
      ]
    },
    {
      path:'*',
      name:'NotFound',
      component:NotFound
    }

  ]
})

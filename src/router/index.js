import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/components/Home')
const Register = () => import('@/components/Register')
const Login = () => import('@/components/Login')



const BackHome = () => import('@/components/BackHome')
const Mine = () => import('@/components/ChildrenBH/Mine')
const Essay = () => import('@/components/ChildrenBH/Essay')
const Edit = () => import('@/components/ChildrenBH/Edit')
const Compile = () => import('@/components/ChildrenBH/Compile')
const Comment = () => import('@/components/ChildrenBH/Comment')

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
      redirect: '/backhome/mine',

      children: [

        {
          path: 'mine',
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

  ]
})

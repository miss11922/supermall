import Vue from 'vue'
import Router from 'vue-router'


// 路由懒加载
const Home  = () => import('../views/home/Home.vue')
const Kind = () => import('../views/kind/Kind.vue')
const Shopcart  = () => import('../views/shopcart/Shopcart.vue')
const My  = () => import('../views/my/My.vue')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title: '首页'
    }
  },
  {
    path: '/kind',
    component: Kind,
    meta:{
      title: '分类'
    }
  },
  {
    path: '/shopcart',
    component: Shopcart,
    meta:{
      title: "购物车"
    }
  },
  {
    path: '/my',
    component: My,
    meta:{
      title: '我的'
     }
  }
]

const router = new Router({
  routes: routes,
  mode: 'history'
})
// 更改页面标题  前置钩子（hook）  前置守卫（guard）
router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title;
  next();
})

export default router

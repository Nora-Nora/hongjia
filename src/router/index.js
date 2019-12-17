import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/index/index'
import community from '@/pages/community/community'
import family from "../pages/family/family";
import module from "../pages/module/module";
import news from "../pages/news/news";
import newsContent from "../pages/news/newsContent";
Vue.use(Router)

export default new Router({
  linkActiveClass:"on",
  mode:'history',
  routes: [
    //首页
    {
      path: '/',
      name: 'home',
      component: home
    },
    //智慧社区
    {
      path: '/community',
      name: 'community',
      component: community
    },
    //智慧家庭
    {
      path: '/family',
      name: 'family',
      component: family
    },
    //联网模块
    {
      path: '/module',
      name: 'module',
      component: module
    },
    //新闻资讯
    {
      path: '/news',
      name: 'news',
      component: news
    },
      //新闻内容
    {
      path:'/newsContent/:id',
      name:'newsContent',
      component:newsContent
    }
]
})

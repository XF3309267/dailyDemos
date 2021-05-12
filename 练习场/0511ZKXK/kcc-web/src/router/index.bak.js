import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    title: '首页'
  }
},
{
  path: '/search',
  name: 'Search',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue'),
  meta: {
    title: '搜索'
  }
},
// {
//   path: '/information',
//   name: 'Information',
//   component: () => import('../views/information/index.vue'),
//   meta: {
//     title: '创投圈'
//   },
//   children: []
// },
{
  path: '/information',
  name: 'Information',
  meta: {
    title: '创投圈'
  },
  component: () => import('../views/empty.vue'),
  children: [{
    path: '/information/more',
    name: 'InformationMore',
    component: () => import('../views/information/Information.vue'),
    meta: {
      title: '更多资讯'
    },
    children: [{
      path: '/information/detail',
      name: 'InformationDetail',
      component: () => import('../views/information/InformationDetail.vue'),
      meta: {
        title: '资讯详情'
      }
    }]
  }]
}, {
  path: '/needs',
  name: 'Needs',
  component: () => import('../views/needs/Needs.vue'),
  meta: {
    title: '技术需求'
  }
},
{
  path: '/needs/detail',
  name: 'NeedsDetail',
  component: () => import('../views/needs/NeedsDetail.vue'),
  meta: {
    title: '需求详情'
  }
},
{
  path: '/mechanism',
  name: 'Mechanism',
  component: () => import('../views/mechanism/Mechanism.vue'),
  meta: {
    title: '投资机构'
  }
},
{
  path: '/mechanism/detail',
  name: 'MechanismDetail',
  component: () => import('../views/mechanism/MechanismDetail.vue'),
  meta: {
    title: '机构详情'
  }
},
{
  path: '/enterprise',
  name: 'Enterprise',
  component: () => import('../views/enterprise/Enterprise.vue'),
  meta: {
    title: '融资企业'
  }
},
{
  path: '/enterprise/detail',
  name: 'EnterpriseDetail',
  component: () => import('../views/enterprise/EnterpriseDetail.vue'),
  meta: {
    title: '企业详情'
  }
},
{
  path: '/activity/more',
  name: 'ActivityMore',
  component: () => import('../views/activity/Activity.vue'),
  meta: {
    title: '更多活动'
  }
},
{
  path: '/activity/detail',
  name: 'ActivityDetail',
  component: () => import('../views/activity/ActivityDetail.vue'),
  meta: {
    title: '活动详情'
  }
},
{
  path: '/footer/index',
  name: 'Footer',
  component: () => import('../views/footer/index.vue'),
  meta: {
    title: '关于中科心客'
  }
},
{
  path: '/services/',
  name: 'Services',
  component: () => import('../views/services/index.vue'),
  meta: {
    title: '科技服务'
  }
}
]

const router = new VueRouter({
  routes
})

export default router

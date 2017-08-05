/**
 * Created by xltao on 2017/6/29.
 */
import App from '../App'
import footer from '../components/comm/footer'
import home from '../components/page/home/home'

import find from '../components/page/home/sub/find'
import friends from '../components/page/home/sub/friends'
import me from '../components/page/home/sub/me'
import wechat from '../components/page/home/sub/wechat'
import register from '../components/page/index/register'
import addFriend from '../components/page/friend/addFriend.vue'
import friendInfo from '../components/page/friend/friendInfo.vue'
import login from '../components/page/index/login.vue'

export default [{
  path: '/',
  name: 'home',
  component: App,//顶层路由
  children: [
    {
      path: '',
      name: 'home',
      redirect: '/home/wechat',
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/home/find',
          name: 'find',
          component: find,
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/home/friends',
          name: 'friends',
          component: friends,
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/home/me',
          name: 'me',
          component: me,
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/home/wechat',
          name: 'wechat',
          component: wechat,
          meta: {
            requireAuth: true,
          }
        }
      ]
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        requireAuth: false,
      }
    }, {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requireAuth: false,
      }
    }, {
      path: '/addFriend',
      name: 'addFriend',
      component: addFriend,
      meta: {
        requireAuth: true,
      }
    }, {
      path: '/friendInfo/:openid',
      name: 'friendInfo',
      component: friendInfo,
      meta: {
        requireAuth: true,
      }
    }
  ]
}]

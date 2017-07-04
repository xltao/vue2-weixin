/**
 * Created by xltao on 2017/6/29.
 */
import App from '../App'
import index from '../page/index'
import content from '../page/content'
import footer from '../components/footer'
import home from '../page/home'

import find from '../page/find'
import friends from '../page/friends'
import me from '../page/me'
import wechat from '../page/wechat'

export default [{
  path: '/',
  name: 'home',
  component: App,//顶层路由
  children: [
    {
      path: '',
      name: 'home',
      redirect: '/home/wechat'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/find',
          name: 'find',
          component: find
        },
        {
          path: '/home/friends',
          name: 'friends',
          component: friends
        },
        {
          path: '/home/me',
          name: 'me',
          component: me
        },
        {
          path: '/home/wechat',
          name: 'wechat',
          component: wechat
        }
      ]
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    }
  ]
}]

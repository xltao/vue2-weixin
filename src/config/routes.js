/**
 * Created by xltao on 2017/6/29.
 */
import App from '../App'
import index from '../components/page/index'
import content from '../components/page/content'
import footer from '../components/footer'
import home from '../components/page/home'

import find from '../components/page/find'
import friends from '../components/page/friends'
import me from '../components/page/me'
import wechat from '../components/page/wechat'

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

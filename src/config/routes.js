/**
 * Created by xltao on 2017/6/29.
 */
import App from '../App'
import index from '../page/index'
import content from '../page/content'
import footer from '../components/footer'

import find from '../page/find'
import friends from '../page/friends'
import me from '../page/me'
import wechat from '../page/wechat'

export default [{
  path: '/',
  name: 'index',
  component: App,//顶层路由
  children: [
    {
      path: '',
      name: 'index',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
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
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/friends',
      name: 'friends',
      component: friends
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/wechat',
      name: 'wechat',
      component: wechat
    }
  ]
}]

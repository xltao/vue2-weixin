/**
 * Created by zyzhang on 17/7/11.
 */
import fetch from 'utils/fetch';

export function getList() {
  return fetch({
    url: '/user/chatrecord',
    method: 'get'
  })
}

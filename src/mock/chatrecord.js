/**
 * Created by zyzhang on 17/7/11.
 * 仅测试用，正式打包可删除
 */
import Mock from 'mockjs';

const List = [];
const count = 20;

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    headerPic: '../../static/header/2.jpg',
    friendName: '@cname',
    content: '@ctitle(8,18)',
    chatTime: '@datetime'
  }));
}

export default {
  getchatList: () => List
}

/**
 * Created by zyzhang on 17/7/11.
 */
import Mock from 'mockjs';
import Chatrecord from './chatrecord';

Mock.mock(/\/user\/chatrecord/, 'get', Chatrecord.getchatList());

export default Mock;

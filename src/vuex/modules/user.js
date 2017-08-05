/**
 * Created by zyzhang on 17/7/8.
 */
const user = {
  state: {
    name: 'zyzhang',
    userInfo: null
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_USER: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },

  actions: {
    // 获取用户信息
    // GetInfo({commit, state}) {
    //   commit('SET_NAME',data,name);
    // }
  }
}
export default user;

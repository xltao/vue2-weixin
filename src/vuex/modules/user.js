/**
 * Created by zyzhang on 17/7/8.
 */
const user = {
  state: {
    name: 'zyzhang'
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
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

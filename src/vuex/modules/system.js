/**
 * Created by xltao on 2017/7/17.
 */
const system = {
  state: {
    socket: null
  },
  mutations: {
    SET_SOCKET: (state, socket) => {
      state.socket = socket;
    }
  },
  actions: {
    // 获取用户信息
    // GetInfo({commit, state}) {
    //   commit('SET_NAME',data,name);
    // }
  }
}
export default system;

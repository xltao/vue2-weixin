/**
 * Created by zyzhang on 17/7/8.
 */
import Comm from '../assets/javascript/Comm'
const getters = {
  socket: function (state) {
    // socket连接为空，重新打开连接
    if (!state.system.socket || state.system.socket.readyState != WebSocket.OPEN) {
      state.system.socket = Comm.openSocket();
    }
    return state.system.socket
  },
  userInfo: state => {
    return state.user.userInfo;
  }
}

export default getters

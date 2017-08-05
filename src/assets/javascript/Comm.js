/**
 * Created by xltao on 2017/7/8.
 */
export default {
  socketServer: "ws://localhost:8080/ws",
  /**
   * J获取dom绝对位置
   * @param obj dom
   * @returns {{x: number, y: number}}
   */
  getElemPos: function (obj) {
    if (!obj) {
      return null;
    }
    var pos = {"top": 0, "left": 0};
    if (obj.offsetParent) {
      while (obj.offsetParent) {
        pos.top += obj.offsetTop;
        pos.left += obj.offsetLeft;
        obj = obj.offsetParent;
      }
    } else if (obj.x) {
      pos.left += obj.x;
    } else if (obj.x) {
      pos.top += obj.y;
    }
    return {x: pos.left, y: pos.top};
  },
  openSocket: function () {
    if (!window.WebSocket) {
      window.WebSocket = window.MozWebSocket;
    }
    if (window.WebSocket) {
      return new WebSocket(this.socketServer);
    } else {
      alert("你的浏览器不支持 WebSocket！");
    }
  },
  socketSend: function (mySocket, config) {
    if (!mySocket || mySocket.readyState != WebSocket.OPEN) {
      mySocket = this.openSocket();
      mySocket.onopen = function (event) {
        mySocket.send(JSON.stringify(config));
      }
    } else {
      mySocket.send(JSON.stringify(config));
    }
  },
  setSessionSave: function (data) {
    sessionStorage.setItem(data.key, data.value);
  },
  setLoginLabel: function () {
    this.setSessionSave({
      key: "isLogin",
      value: 1
    })
  },
  getLoginLabel: function () {
    return this.getSessionSave("isLogin");
  },
  getSessionSave: function (key) {
    return sessionStorage.getItem(key);
  }
}

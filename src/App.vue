<template>
  <div id="index">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import Comm from "./assets/javascript/Comm"
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        userInfo: {},
      }
    },
    methods: {
      bindSocket: function () {
        var _this = this;
        var openid = "";
        for (var i = 0; i < 3; i++) {
          openid += Number.parseInt(Math.random() * 10);
        }
        openid += " 先生";
        _this.userInfo = {
          openid: openid,
          userName: openid
        }
        var socketMsg = {
          method: "bindSocket",
          data: _this.userInfo
        }
        this.socket.send(JSON.stringify(socketMsg));
//        setInterval(_this.sendMessgae, 3000);
      },
      sendMessgae: function () {
        var _this = this;
        var socketMsg = {
          method: "message",
          data: {
            message: Math.random().toString(36).substr(2),
            userInfo: _this.userInfo
          }
        }
        this.socket.send(JSON.stringify(socketMsg));
      },
      initEvent: function () {
        var _this = this;

        _this.socket.onopen = function (event) {
          // 绑定socket
          _this.bindSocket();
        }
      },
      ...mapMutations({
        setSocket: "SET_SOCKET"
      })
    },
    computed: {
      ...mapGetters([
        "socket"
      ])
    },
    created () {
      // 缓存socket连接
      this.setSocket(Comm.openSocket());
      // 初始化socket事件
      this.initEvent();
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  // 全局引入公共css
  @import "./assets/style/public.less";

  #index {
    padding-bottom: 60px;
  }
</style>

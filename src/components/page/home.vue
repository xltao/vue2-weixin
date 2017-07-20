<template>
  <div>
    <my-header></my-header>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import footer from "../comm/footer.vue"
  import header from "../comm/header.vue"
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        userInfo: {},
      }
    },
    components: {
      myFooter: footer,
      myHeader: header
    },
    methods: {
      login: function () {
        var _this = this;
        var userId = "";
        for (var i = 0; i < 10; i++) {
          userId += Number.parseInt(Math.random() * 10);
        }
        userId += " 先生";
        _this.userInfo = {
          userId: userId,
          userName: userId
        }
        _this.socket.emit("login", _this.userInfo);
        setInterval(_this.sendMessgae, 3000);
      },
      sendMessgae: function () {
        this.socket.emit('message', {msg: Math.random().toString(36).substr(2), user: this.userInfo});
      },
      initEvent: function () {
        this.socket.on("message", function (data) {
          console.log("message:   ", data);
        });
        this.socket.on("loginSuccess", function (data) {
          console.log("loginSuccess:   ", data);
        });
        this.socket.on("login", function (data) {
          console.log("login:   ", data);
        });
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
      this.setSocket(window.mySocket);
      // 初始化socket事件
      this.initEvent();
      // 登录成功
      this.login();
    }
  }
</script>

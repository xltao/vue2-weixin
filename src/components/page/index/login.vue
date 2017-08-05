<template>
  <div>
    <my-header :type="1" :title="headerTitle" :showBack="false"></my-header>
    <div class="row" style="margin-top: 1rem">
      <span>手机号：</span>
      <input type="text" v-model="loginUser.phoneNum"/>
    </div>
    <div class="row">
      <span>密码：</span>
      <input type="password" v-model="loginUser.password"/>
    </div>
    <router-link to="/register" class="register">注册>></router-link>
    <button class="login" @click="login()">登录</button>
  </div>
</template>

<script>
  import header from "../../comm/header.vue"
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import Comm from "../../../assets/javascript/Comm"
  export default {
    data() {
      return {
        headerTitle: "登录",
        loginUser: {
          phoneNum: null,
          password: null
        }
      }
    },
    methods: {
      initEvent: function () {
        var _this = this;
        _this.socket.onmessage = function (event) {
          _this.loginUser = eval("(" + event.data + ")");
          if (_this.loginUser) {
            Comm.setLoginLabel();
            _this.setUser(_this.loginUser);
          }
          var redirect = _this.$route.query.redirect;
          if (redirect) {
            _this.$router.push(redirect);
          } else {
            _this.$router.push("/");
          }
        }
      },
      login: function () {
        var _this = this;
        debugger
        if (!_this.loginUser.phoneNum || !_this.loginUser.password) {
          return;
        }
        var config = {
          method: 'loginChk',
          data: {
            loginUser: _this.loginUser
          }
        }
        Comm.socketSend(_this.socket, config);
      },
      ...mapMutations({
        setUser: "SET_USER"
      })
    },
    components: {
      myHeader: header
    },
    mounted () {
      document.getElementsByClassName("register")[0].style.marginLeft = "calc(100% - 100px)";
      // 初始化socket事件
      this.initEvent();
    },
    computed: {
      ...mapGetters([
        "socket"
      ])
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/style/base";
  @import "../../../assets/style/func";

  .row {
    border: 0 !important;
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    height: 1rem;
  }

  .row > span {
    .setColWidth(2);
  }

  .row > input {
    .setColWidth(6);
    border-bottom: 1px solid #51B245;
  }

  .login {
    background-color: #19AD17;
    color: #fff;
    width: 50%;
    margin-left: 25%;
    border-radius: 5px;
    height: 1rem;
    margin-top: 0.5rem;
  }

  .register {
    color: @weuiColorPrimary;
    margin-top: 10px;
  }
</style>

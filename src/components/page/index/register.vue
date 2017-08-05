<template>
  <div>
    <my-header :type="1" :title="headerTitle" :showBack="true"></my-header>
    <div class="row" style="margin-top: 1rem">
      <span>手机号：</span>
      <input type="text" v-model="loginUser.phoneNum"/>
    </div>
    <div class="row">
      <span>验证码：</span>
      <input class="code" type="text" v-model="code"/>
      <button @click="sendMsg()">发送验证码</button>
    </div>
    <div class="row">
      <span>密码：</span>
      <input type="password" v-model="loginUser.password"/>
    </div>
    <button :class="isDisable" class="register" @click="register()">注册</button>
    <div class="toast" v-if="showToast">{{toastText}}</div>
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
        headerTitle: "注册",
        code: null,
        loginUser: {
          phoneNum: null,
          password: null
        },
        showToast: false,
        toastText: null
      }
    },
    methods: {
      socketMsgHandler: function (obj) {
        var _this = this;
        _this.showToastInfo(obj.msg);
        if (obj.method == "register") {
          if (obj.code == "1") {
            Comm.setLoginLabel();
            _this.setUser(obj.UserInfo);
            _this.$router.push("/");
          }
        }
      }
      ,
      sendMsg: function () {
        var _this = this;
        if (_this.loginUser.phoneNum) {
          var config = {
            method: 'getCode',
            data: {
              phoneNum: _this.loginUser.phoneNum
            }
          }
          Comm.socketSend(_this.socket, config);
        }
      }
      ,
      showToastInfo: function (msg) {
        var _this = this;
        _this.showToast = true;
        _this.toastText = msg;
        setTimeout(function () {
          _this.showToast = false;
        }, 3000);
      }
      ,
      register: function () {
        var _this = this;
        if (!_this.isDisable) {
          return;
        }
        var config = {
          method: 'register',
          data: {
            code: _this.code,
            UserInfo: _this.loginUser
          }
        }
        Comm.socketSend(_this.socket, config);
      },
      ...mapMutations({
        setUser: "SET_USER"
      })
    },
    mounted () {
      var _this = this;
      _this.socket.onmessage = function (event) {
        console.log(event.data);
        _this.socketMsgHandler(eval("(" + event.data + ")"));
      }
    },
    components: {
      myHeader: header
    },
    computed: {
      ...mapGetters([
        "socket"
      ]),
      isDisable: function () {
        return {
          disable: !(this.loginUser.phoneNum && this.loginUser.password) || this.code == null || this.code.length != 4
        }
      }
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

  .register {
    background-color: #19AD17;
    color: #fff;
    width: 50%;
    margin-left: 25%;
    border-radius: 5px;
    height: 1rem;
    margin-top: 0.5rem;
  }

  .code {
    .setColWidth(3.5) !important;
  }

  .row > button {
    .setColWidth(2.5);
    background-color: lighten(#19AD17, 10%);
    color: #fff;
  }

  .disable {
    background-color: lighten(#666666, 10%);
  }

  .toast {
    position: fixed;
    z-index: 5000;
    width: 2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    top: 180px;
    left: 50%;
    margin-left: -3.8em;
    background: rgba(17, 17, 17, 0.7);
    text-align: center;
    border-radius: 5px;
    color: #FFFFFF;
  }
</style>

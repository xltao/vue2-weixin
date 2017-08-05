<template>
  <div>
    <my-header :type="1" :title="headerTitle"></my-header>
    <div class="row">
      <div class="col col-2">
        <img class="headerPic" :src="userInfo.headerPic"/>
      </div>
      <div class="friendInfo">
        <div class="">{{userInfo.userName}}<img class="sexPic" :src="sexPic"/></div>
        <div class="userPhone">手机号码：{{userInfo.phoneNum}}</div>
      </div>
    </div>
    <div class="row">
      <button @click="login()">{{buttonText}}</button>
    </div>
  </div>
</template>
<script>
  import Comm from "../../../assets/javascript/Comm"
  import header from "../../comm/header.vue"
  import {getList} from 'api/chatrecord';
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        headerTitle: "详细资料",
        openid: null,
        userInfo: [],
        buttonText: "发起聊天"
      }
    },
    methods: {
      initSocketEvent: function () {
        var _this = this;
        if (_this.socket.readyState == WebSocket.OPEN) {
          _this.getUserInfoByOpenid();
        } else {
          _this.socket.onopen = function (event) {
            _this.getUserInfoByOpenid();
          }
        }
        _this.socket.onmessage = function (event) {
          _this.userInfo = eval('(' + event.data + ')');
        }
      },
      getUserInfoByOpenid: function () {
        var _this = this;
        var config = {
          method: 'getUserInfoByOpenid',
          data: {
            openid: _this.openid
          }
        }
        Comm.socketSend(_this.socket, config);
      }
    },
    mounted () {
      this.openid = this.$route.params.openid;
      this.initSocketEvent();
    },
    computed: {
      ...mapGetters([
        "socket"
      ]),
      sexPic: function () {
        return this.userInfo ? "/static/friend/male.png" : "/static/friend/female.png"
      }
    },
    components: {
      myHeader: header
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/style/base";
  @import "../../../assets/style/func";

  .friendInfo {
    .setColWidth(8);
    font-size: 0.5rem;
  }

  .sexPic {
    .setHeaderSize(0.5rem);
    margin-left: 0.5rem;
  }

  .userPhone {
    font-size: 0.3rem;
  }

  button {
    background-color: #19AD17;
    color: #fff;
    width: 50%;
    margin-left: 25%;
    border-radius: 5px;
    height: 1rem;
    margin-top: 0.5rem;
  }
  .row:last-child {
    border-bottom: 0 !important;
  }
</style>

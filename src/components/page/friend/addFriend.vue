<template>
  <div>
    <my-header :type="1" :title="headerTitle" :showBack="true"></my-header>
    <div class="container">
      <div class="searchbar">
        <div class="searchbar-container">
          <img src="/static/friend/searchIcon.png" class="searchbar-icon">
          <input type="text" v-model="condition" class="searchbar-input" placeholder="手机号/昵称" @keydown="search()"/>
        </div>
      </div>

      <div class="searchResult">
        <template v-for="result in searchResult">
          <a class="row" @click="toAddress(result.openid)">
            <div class="col col-2">
              <img class="headerPic" :src="result.headerPic"/>
            </div>
            <div class="result-name">
              <div class="">{{result.userName}}</div>
            </div>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
  import header from "../../comm/header.vue"
  import Comm from "../../../assets/javascript/Comm"
  import {getList} from 'api/chatrecord';
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        headerTitle: "添加朋友",
        condition: '',
        searchResult: null
      }
    },
    components: {
      myHeader: header
    },
    methods: {
      search: function () {
        var _this = this;
        // 回车搜索
        if (event.keyCode == 13) {
          if (_this.condition.trim()) {
            var config = {
              method: 'searchStranger',
              data: {
                condition: _this.condition
              }
            }
            Comm.socketSend(_this.socket, config);
          }
        }
      },
      toAddress: function (openid) {
        this.$router.push('/friendInfo/' + openid);
      },
      initEvent: function () {
        var _this = this;
        this.socket.onmessage = function (event) {
          _this.searchResult = eval('(' + event.data + ')');
        }
      }
    },
    mounted() {
    },
    computed: {
      ...mapGetters([
        "socket"
      ])
    },
    created () {
      // 初始化socket事件
      this.initEvent();
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/style/base";
  @import "../../../assets/style/func";

  .container {
    background-color: #EBEBEB;
  }

  .searchbar {
    background-color: #fff;
    margin-top: 20px;
  }

  .searchbar-container {
    border-bottom: 1px solid #51B245;
    .setColWidth(9);
    margin-left: 5%;
  }

  .searchbar-icon {
    .setHeaderSize(24px);
    vertical-align: middle;
  }

  .searchbar-input {
    .setColWidth(7);
    margin-left: 5px;
    height: 50px;
  }

  .result-name {
    .setDefaultCol();
    .setColWidth(6);
    font-size: 16px;
  }
</style>

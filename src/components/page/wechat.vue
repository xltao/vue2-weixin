<template>
  <div class="chatLst">
    <template v-for="chat in chatLst">
      <div class="row">
        <div class="col col-2">
          <img class="headerPic" :src="chat.headerPic"/>
        </div>
        <div class="col col-6 chat_info">
          <div class="info_name">{{chat.friendName}}</div>
          <div class="info_content">{{chat.content}}</div>
        </div>
        <div class="col col-2 textCenter">
          <div class="chat_time">{{chat.chatTime}}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>

  import {getList} from 'api/chatrecord';

  export default {
    data() {
      return {
        chatLst: ''
      }
    },
    created() {
      /**
       * 获取聊天记录
       */
      getList().then(response => {
        this.chatLst = response.data;
      })
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .col_header {
    height: 100%;
    width: 100%;
    max-width: 1.3333333333333333rem;
    max-height: 1.3333333333333333rem;
  }

  .chat_info {
    padding-left: 0.16666666666666666rem;
  }

  .info_name {
    display: block;
    font-weight: 500;
    font-family: "黑体" !important;
  }

  .info_content {
    font-size: 0.2rem;
    color: #979797;
    margin-top: 0.3333333333333333rem;
  }

  .chat_time {
    font-size: 0.2rem;
    color: #979797;
  }
</style>

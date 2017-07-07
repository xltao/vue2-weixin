<template>
  <div class="chatLst">
    <template v-for="chat in chatLst">
      <div class="row">
        <div class="col col-2">
          <img class="headerPic" :src="chat.headerPic" />
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
  export default {
      data() {
          return {
            chatLst: [{
              headerPic: '/static/header/1.jpg',
              friendName: '张益达',
              content: "你的益达",
              chatTime: '09:24'
            },{
              headerPic: '/static/header/2.jpg',
              friendName: '张大炮',
              content: "你的大炮",
              chatTime: '昨天'
            },{
              headerPic: '/static/header/3.jpg',
              friendName: '斯奈克',
              content: "你的斯奈克",
              chatTime: '前天'
            },{
              headerPic: '/static/header/1.jpg',
              friendName: '张益达',
              content: "你的益达",
              chatTime: '09:24'
            },{
              headerPic: '/static/header/2.jpg',
              friendName: '张大炮',
              content: "你的大炮",
              chatTime: '昨天'
            },{
              headerPic: '/static/header/3.jpg',
              friendName: '斯奈克',
              content: "你的斯奈克",
              chatTime: '前天'
            },{
              headerPic: '/static/header/1.jpg',
              friendName: '张益达',
              content: "你的益达",
              chatTime: '09:24'
            },{
              headerPic: '/static/header/2.jpg',
              friendName: '张大炮',
              content: "你的大炮",
              chatTime: '昨天'
            },{
              headerPic: '/static/header/3.jpg',
              friendName: '斯奈克',
              content: "你的斯奈克",
              chatTime: '前天'
            }]
          }
      }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .col_header {
    height: 100%;
    width: 100%;
    max-width: 40px;
    max-height: 40px;
  }

  .chat_info {
    padding-left: 5px;
  }

  .info_name {
    display: block;
    font-weight: 500;
    font-family: "黑体" !important;
  }

  .info_content {
    font-size: 6px;
    color: #979797;
    margin-top: 10px;
  }

  .chat_time {
    font-size: 6px;
    color: #979797;
  }
</style>

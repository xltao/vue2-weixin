<template>
  <div>
    <section class="header">
      <div class="header-title">微信</div>
      <!--<div class="header-operate" @click="showOrHide()">+</div>-->
      <a class="header-operate" @click="showOrHide()">+</a>
      <div class="operate" v-if="showOperate">
        <a class="operateItem">
          <div class="operateIcon">
            <img src="/static/home/createGroup.png"/>
          </div>
          <span class="operateText">发起群聊</span>
        </a>
        <a class="operateItem">
          <div class="operateIcon">
            <img src="/static/home/addFriend.png"/>
          </div>
          <span class="operateText">添加朋友</span>
        </a>
        <a class="operateItem">
          <div class="operateIcon">
            <img src="/static/home/scan.png"/>
          </div>
          <span class="operateText">扫一扫</span>
        </a>
      </div>
    </section>
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showOperate: true
      }
    },
    methods: {
      showOrHide: function () {
        this.showOperate = !this.showOperate;
      }
    },
    mounted() {
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/style/base";
  @import "../../assets/style/func";

  .header {
    height: 50px;
    line-height: 50px;
    background-color: @wechatHeaderColor;
    .setColWidth(10);
  }

  .header-title {
    .setTextAlign(center);
    .setColWidth(2);
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }

  .header-operate {
    .setFloat(right);
    .setColWidth(2);
    .setTextAlign(center);
    font-size: 30px;
    color: #fff;
  }

  .operate {
    background-color: @wechatHeaderColor;
    width: 180px;
    height: 180px;
    position: absolute;
    top: 51px;
    right: 10px;
  }

  .operateItem {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px dotted rgb(34, 40, 53);
  }

  .operateIcon {
    .setColWidth(3);
    .setTextAlign(center);
  }

  .operateIcon > img {
    .setHeaderSize(32px);
    vertical-align: middle;
  }

  .operateText {
    color: #fff;
    .setColWidth(6);
    font-size: 16px;
  }

  a:active {
    background-color: @wechatActive;
  }

  a {
    text-decoration: none !important;
  }
</style>

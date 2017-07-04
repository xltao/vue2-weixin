<template>
  <div class="page">
    <div class="page__bd" style="height: 100%;">
      <div class="weui-tab">
        <div class="weui-tabbar">

          <a href="javascript:;" class="weui-tabbar__item" :class="curMenu == 'wechat' ? 'weui-bar__item_on' : ''" @click="choseMenu('wechat')">
						<span style="display: inline-block;position: relative;">
              <div class="weui-tabbar__icon" :class="curMenu == 'wechat' ? 'wechat_light' : 'wechat'"></div>
							<!--<span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>-->
            </span>
            <p class="weui-tabbar__label">微信</p>
          </a>

          <a href="javascript:;" class="weui-tabbar__item" :class="curMenu == 'friends' ? 'weui-bar__item_on' : ''" @click="choseMenu('friends')">
            <div class="weui-tabbar__icon" :class="curMenu == 'friends' ? 'friends_light' : 'friends'"></div>
            <p class="weui-tabbar__label">通讯录</p>
          </a>

          <a href="javascript:;" class="weui-tabbar__item" :class="curMenu == 'find' ? 'weui-bar__item_on' : ''" @click="choseMenu('find')">
						<span style="display: inline-block;position: relative;">
              <div class="weui-tabbar__icon" :class="curMenu == 'find' ? 'find_light' : 'find'"></div>
							<!--<span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>-->
						</span>
            <p class="weui-tabbar__label">发现</p>
          </a>

          <a href="javascript:;" class="weui-tabbar__item" :class="curMenu == 'me' ? 'weui-bar__item_on' : ''" @click="choseMenu('me')">
            <div class="weui-tabbar__icon" :class="curMenu == 'me' ? 'me_light' : 'me'"></div>
            <p class="weui-tabbar__label">我</p>
          </a>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      data() {
        return {
            curMenu: "wechat"
        }
      },
    methods: {
      choseMenu(menu) {
        this.curMenu = menu;
        this.$router.push('/home/' + menu);
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../assets/style/weui-tabbar.less";
  .wechat {
    background: url(@menuPic) -15px -8px no-repeat scroll transparent
  }
  .wechat_light {
    background: url(@menuPic) -11px -54px no-repeat scroll transparent
  }

  .friends {
    background: url(@menuPic) -58px -8px no-repeat scroll transparent
  }
  .friends_light {
    background: url(@menuPic) -55px -53px no-repeat scroll transparent
  }

  .find {
    background: url(@menuPic) -110px -8px no-repeat scroll transparent
  }
  .find_light {
    background: url(@menuPic) -107px -51px no-repeat scroll transparent
  }

  .me {
    background: url(@menuPic) -152px -8px no-repeat scroll transparent
  }
  .me_light {
    background: url(@menuPic) -148px -51px no-repeat scroll transparent
  }
</style>

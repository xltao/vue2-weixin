<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {}
</script>
<style lang="less" rel="stylesheet/less">
  // 全局引入公共css
  @import "./assets/style/public.less";
</style>

<template>
  <div>
    <section class="col-10 header"></section>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import footer from "../footer.vue"
  export default {
    components: {
      myFooter: footer
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .header {
    height: 50px;
    background-color: #333333;
  }
</style>

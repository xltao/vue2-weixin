<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import footer from "../components/footer.vue"
  export default {
    components: {
      myFooter: footer
    }
  }
</script>

<template>
  <div>
    <my-header :type="0"></my-header>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import footer from "../../comm/footer.vue"
  import header from "../../comm/header.vue"
  import {mapGetters} from 'vuex'
  export default {
    created () {
      this.socket.onmessage = function (event) {
        console.log("home  ");
      }
    },
    components: {
      myFooter: footer,
      myHeader: header
    },
    computed: {
      ...mapGetters([
        "socket"
      ])
    },
  }
</script>

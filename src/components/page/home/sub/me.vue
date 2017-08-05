<template>
  <div>
    <div class="row">
      <div class="col col-2">
        <img class="headerPic" :src="userInfo.headerPic"/>
      </div>
      <div class="col col-8 col-middle">
        {{userInfo.userName}}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {
      ...mapGetters([
        "userInfo"
      ])
    }
  }
</script>

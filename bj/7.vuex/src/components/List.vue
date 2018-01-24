<template>
  <div> {{list}}
    <div>
      <input type="text" v-model="msg">
      <button @click="push">push</button>
    </div>
    <button @click="res">updateAll</button>
  </div>
</template>
<script>
  export default {
    computed: {
      list() {
        return this.$store.getters.getList
      }
    },
    methods: {
      push() {
        this.$store.commit('insPush', this.msg);
      },
      res() {
        var t = [],
          i = 0;
        while(i < 7) {
          t.push(Math.random())
          i++
        }
        var _this = this;
        setTimeout(function() {
          _this.$store.commit('resList', t)
        }, 1000)
      }
    },
    data: function() {
      return {
        msg: ''
      }
    }
  }
</script>
<style scoped>

</style>
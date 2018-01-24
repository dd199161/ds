<template>
  <div> {{count}}
    <button @click="inc">+</button>
    <button @click="dec">-</button>
    <span> {{history}} </span>
  </div>
</template>
<script>
  export default {
    computed: {
      count() {
        return this.$store.getters.getCount
      },
      history() {
        return this.$store.getters.getHistory
      }
    },
    methods: {
      inc() {
        this.$store.commit('inc')
      },
      dec() {
        this.$store.commit('dec')
      }
    }
  }
</script>
<style scoped>

</style>
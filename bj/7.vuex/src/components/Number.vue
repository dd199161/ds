<template>
  <div> {{count}}
    <button @click="inc">+</button>
    <button @click="dec">-</button>
  </div>
</template>
<script>
  export default {
    computed: {
      count() {
        return this.$store.getters.getCount
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
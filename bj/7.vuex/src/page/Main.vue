<template>
  <div>
    <p>Hello!</p>
    <div v-show="user">
      <p>欢迎{{user.name}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      user() {
        return this.$store.getters.getUser
      }
    }
  }
</script>
<style>

</style>
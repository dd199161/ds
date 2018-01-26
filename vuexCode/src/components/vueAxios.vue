<template>
  <div class="vueAxios">
    <button @click="asyncData">打印</button>
    <button @click="asyn">打印</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ip:''
    }
  },
  methods: {
    // http://alpha-api.test.bestsnake.com/docs/api-docs.json

    async asyncData() {
      this.ip = await this.axios.get('http://icanhazip.com')
      console.log("A:" + this.ip.data);
    },
    asyn() {
      this.axios.get('http://icanhazip.com').then(response => {
        console.log("B:" + response.data);
      })
    }
  },
}
</script>
<style>

</style>
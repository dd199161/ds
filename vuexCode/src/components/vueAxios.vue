<template>
  <div class="vueAxios">
    <button @click="asyncData">打印A</button>
    <div class="">
    	<p v-for="(kk,index) in ip">{{ kk.message }}</p>
    	<button @click="asyn">打印B</button>
    </div>
    
    <button @click="asynn">打印C</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ip: {}
      }
    },
    created(){
//  	this.asyn();
    },
    methods: { // http://alpha-api.test.bestsnake.com/docs/api-docs.json
      async asyncData() {
        this.ip = await this.axios.get('http://icanhazip.com')
        console.log("A:" + this.ip.data);
      },
      asyn() {
        this.axios.get('https://bird.ioliu.cn/v1/?url=IP').then(response => {
        	this.ip = response.data;
          console.log("B:" + this.ip)
        })
      },
      async asynn() {
        this.ip = await this.axios.get('/movie/top250')
        console.log("A:" + data.Info);
      },
      
      //  asynn() {
      //    this.axios.get('https://api.douban.com//v2/movie/in_theaters').then(response => {
      //      console.log("C:" + response.data);
      //    })
      //  }
    },
  }
</script>
<style>

</style>
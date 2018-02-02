<template>
  <div class="fetch">
    <img :src="imgs" /> </div>
</template>
<script>
  export default {
    data() {
      return {
        imgs: ''
      }
    },
    created(){
    	this.fetchs();
    },
    methods: {
      fetchs() {
        this.imgs = document.querySelector('img');
        fetch('aaa.jpg').then(function(response) {
          return response.blob();
        }).then(function(myBlob) {
          var objectURL = URL.createObjectURL(myBlob);
          myImage.src = objectURL;
        });
      }
    }
  }
</script>
<style>
  .fetch {
    width: 300px;
    height: 300px;
    padding: 4px;
    border: 1px solid #ddd;
    $>img {
      width: 300px;
      height: 300px;
    }
  }
</style>
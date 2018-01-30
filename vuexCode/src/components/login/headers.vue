<template>
    <div class="headers">
        <div class="box">
            <div class="top">
                daf
            </div>
            <titles></titles>
        </div>
    </div>
</template>
<script>
import titles from '@/components/login/titles'
export default {
  data() {
    return {}
  },
  methods: {},
  components:{
      titles
  }
}
</script>
<style>
.box {
  width: 1000px;
  height: 500px;
  margin: 0 auto;
  border: 1px solid #ddd;
}
.top{
    background:#888;
    height: 48px;
    line-height: 48px;
}
</style>


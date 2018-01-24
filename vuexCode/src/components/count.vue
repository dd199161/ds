<template>
  <div>
    <hr/>
    <h3>{{this.$store.state.yi}} : {{this.$store.state.cartCount}}</h3>
    <div>
      <input type="text" v-model="msg" style="text-align: center;" />
      <button @click="add">+</button>
      <button @click="jian">-</button>
    </div>
    <input type="checkbox" name="" id="" value="" />
    <input type="number" v-model="age" />
    <div class="all" style="background:#ddd">
      <label for="checkbox"><input type="checkbox" id="checkbox" v-model="checked" @click="changeAllChecked()">{{checked ? "已全选" : "没全选"}}</label>
      <p> 多个复选框： </p>
      <label for="runoob"><input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">Runoob</label>
      <label for="google"><input type="checkbox" id="google" value="Google" v-model="checkedNames">Google</label>
      <label for="taobao"><input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">taobao</label>
      <br>
      <span>选择的值为:{{checkedNames}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        age: '',
        msg: this.$store.state.kk,
        checked: false,
        checkedNames: [],
        checkedArr: ["Runoob", "Taobao", "Google"]
      }
    },
    methods: {
      add() {
        this.$store.commit("updataCartCount")
        this.msg = this.$store.state.kk
      },
      jian() {
        this.$store.commit("jian")
        this.msg = this.$store.state.kk
      },
      changeAllChecked() {
        if(this.checked===false) {
          this.checkedNames = this.checkedArr
        } else {
          this.checkedNames = []
        }
      }
    },
    watch: {
      "checkedNames": function() {
        if(this.checkedNames.length == this.checkedArr.length) {
          this.checked = true
        } else {
          this.checked = false
        }
      }
    }
  }
</script>
<style type="text/css">

</style>
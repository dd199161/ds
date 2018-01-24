<template>
  <div>
    <h2>加减法计算器</h2>
    <div>
      <input type="button" value="-" @click="minHandle" />
      <span>{{num}}</span>
      <input type="button" value="+" @click="addHandle" />
      <div>{{num2 >= 30 ? '停止':num2}}</div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    computed: { ...mapState(['num']),
      ...mapGetters({
        num2: 'filterNum'
      })
    },
    methods: {
      addHandle() {
        this.$store.dispatch("addAction");
      },
      minHandle() {
        this.$store.commit("minIncrement")
      }
    }
  }
</script>
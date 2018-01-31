<template>
  <div class="counta">
    <p>{{ $store.state.count }}</p>
    <button>{{ $store.state.count }}</button>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <vuexa></vuexa>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import vuexa from './vuexcounta'
  export default {
    data() {
      return {
        counts: 0
      }
    },
    /* 1、这是一种简单的写法，用mapActions 前提是前面要引入*/
    methods: { ...mapActions(['increment', 'decrement'])
    }
    computed: { ...mapGetters([])
    }
    /*
     * 2、与上面的是一样的，如果不用再写其它的方法或属性，就可以直接简写 
     * 
    */
    //  methods: mapActions(['increment', 'decrement']),
    //  computed: mapGetters([]),
    /* 
     * 3、还有就是dispatch,用来分发actions的 
     * 
    */
    //	methods:{
    //		increment(){
    //			this.$store.dispatch('increment')
    //		},
    //		decrement(){
    //			this.$store.dispatch('decrement')
    //		}
    //	}
    components: {
      vuexa
    }
  }
</script>
<style>

</style>
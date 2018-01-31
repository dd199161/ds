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
    methods:{
    	...mapActions(['increment','decrement'])
    }
    computed:{
		...mapGetters([])
	}
    
    /* 与上面的是一样的，如果不用再写其它的就可以直接简写 */
//  methods: mapActions(['increment', 'decrement']),
//  computed: mapGetters([]),
    components: {
      vuexa
    }
  }
</script>
<style>

</style>
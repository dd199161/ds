<template>
  <lotto-order :isChase="true" :serverData="serverData" />
</template>

<script>
import LottoOrder from '~/components/admin/LottoOrder'

export default {
  name:'user-chase-order',
  async asyncData({app}){
    return {
      serverData:(await app.$axios.$post('user-chase-bet-lottery/get')).data || {}
    }
  },
  components:{
    LottoOrder
  }
}
</script>

<template>
  <div>
    <lotto-order :isChase="true" />
  </div>
</template>

<script>
import LottoOrder from '~/components/admin/LottoOrder'

export default {
  name:'user-chase-order',
  components:{
    LottoOrder
  }
}
</script>

<template>
  <message-box type="inbox" :serverData="serverData" />
</template>

<script>
import MessageBox from '~/components/admin/MessageBox'

export default {
  name: 'inbox',
  async asyncData({store}){
    return {
      serverData:await store.dispatch('admin/getBox')
    }
  },
  components: {
    MessageBox
  }
}
</script>

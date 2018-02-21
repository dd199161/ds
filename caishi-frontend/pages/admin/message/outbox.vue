<template>
  <message-box type="outbox" :serverData="serverData" />
</template>

<script>
import MessageBox from '~/components/admin/MessageBox'

export default {
  name: 'outbox',
  async asyncData({ store }) {
    return {
      serverData: await store.dispatch('admin/getBox',{ key: 'outbox' })
    }
  },
  components: {
    MessageBox
  }
}
</script>

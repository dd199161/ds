<template src="../templates/default.html">
</template>


<style lang="scss">
/* nuxt app start */
#cssload-loader {
  display: none;
}
body {
  background: #fff;
}
</style>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import logout from '~/util/logout'
export default {
  data() {
    return {
      navIndex: 0,
      refreshing: false
    }
  },
  methods: {
    logout() {
      logout(this)
    },
    getBal() {
      this.refreshing = true
      setTimeout(() => {
        this.$store.dispatch('pay/getBal', () => (this.refreshing = false))
      }, 800)
    }
  },
  computed: {
    ...mapGetters({
      lottoTypes: 'lotto/types',
      bal: 'pay/bal',
      unreadCount: 'admin/unreadCount'
    }),
    ...mapGetters(['username', 'news','isAgent'])
  }
}
</script>
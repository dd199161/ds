<template src="../../../templates/admin/payment/withdraw.html">

</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  name: 'withdraw',
  fetch({ store, redirect }) {
    if (!store.state.user.token) return Promise.resolve()
    if (!store.getters.hasPayPw) {
      redirect('/admin/user?paypw=true')
    }
    if (store.getters['pay/bankCards'].length) return Promise.resolve()
    return store.dispatch('pay/getBankCards')
  },
  data() {
    return {
      bankId: '',
      amount: '',
      fund_password: ''
    }
  },
  created() {},
  methods: {
    submit() {
      const { client_ip, amount, fund_password, bankId: user_bank_id } = this
      // const id = this.platform.content.id

      this.$axiosPlus(
        'user-bank-withdraw/create',
        { user_bank_id, client_ip, amount, fund_password },
        () => {
          this.$message({
            message: `提现成功！`,
            type: 'success',
            duration: 1500,
            onClose:this.getBal
          })
        }
      )
    },
    ...mapActions({
      getBal: 'pay/getBal'
    })
  },
  computed: {
    enabled() {
      if (!this.bankId) return true
      return (
        +new Date(
          this.bankCards.find(_ => this.bankId === _.id).end_locked_at
        ) < Date.now()
      )
    },
    ...mapGetters({
      bal: 'pay/bal',
      client_ip: 'ip',
      bankCards: 'pay/bankCards'
    })
  }
}
</script>

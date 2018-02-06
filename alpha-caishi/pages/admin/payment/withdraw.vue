<template src="../../../templates/admin/payment/withdraw.html"> </template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'withdraw',
  fetch({store, redirect}) {
    if (!store.state.user.token) return Promise.resolve()
    if (!store.getters.hasPayPw) {
      redirect('/admin/user?paypw=true')
    }
    if (store.getters['pay/bankCards'].length) return Promise.resolve()
    return store.dispatch('pay/getBankCards')
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      bankId: '',
      amount: '',
      fund_password: '',
      payIndex: 0,
      game_acc: [
        {
          name: '彩票账户',
        },
        {
          name: '百家乐账户',
        },
        {
          name: '快乐彩账户',
        },
      ],
      defaultWithdraw: 100,
      ruleForm: {
        pass: '',
        checkPass: '',
        region: '',
      },
      rules: {
        pass: [
          {
            validator: validatePass,
            trigger: 'blur',
          },
        ],
        region: [
          {
            required: true,
            message: '请选择银行卡',
            trigger: 'change',
          },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      const {client_ip, amount, fund_password, bankId: user_bank_id} = this
      this.$refs[formName].validate(valid => {
        if (valid) {
          /*判断有没有冻结资金*/
          // this.$alert('submit!')
          // if (this.$store.state.pay.bal.frozen_balance) {
          //   this.$alert('暂有金额冻结中，无法提现！', '温馨提示', {
          //     confirmButtonText: '确定',
          //   })
          // } else {
            this.$axiosPlus('user-bank-card/get', data => {
              this.userBankCards = data.user_bank_cards
              if (
                this.totalBal < 100 ||
                this.bal < 100
              ) {
                this.$message({
                  message: `余额不足100元整,不能提现！`,
                  duration: 800,
                  type: 'error',
                })
              } else {
                this.getBal()
                this.$message({
                  message: `提现成功！`,
                  type: 'success',
                  duration: 1500,
                  onClose: this.getBal,
                })
              }
            })
          // }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    ...mapActions({
      getBal: 'pay/getBal',
    }),
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
      client_ip: 'ip',
      bankCards: 'pay/bankCards',
      bal: 'pay/bal',
      totalBal: 'pay/totalBal',
      loTcon: 'pay/loTcon',
      withdrawAt: 'pay/withdrawAt',
      withdrawCt: 'pay/withdrawCt',
      withdrawLapd: 'pay/withdrawLapd',
      withdrawLcpd: 'pay/withdrawLcpd',
      withdrawCwf: 'pay/withdrawCwf',
    }),
  },
}
</script>
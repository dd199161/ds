<template src="../../../templates/admin/payment/withdraw.html"> </template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'withdraw',
    fetch({
      store,
      redirect
    }) {
      if(!store.state.user.token) return Promise.resolve()
      if(!store.getters.hasPayPw) {
        redirect('/admin/user?paypw=true')
      }
      if(store.getters['pay/bankCards'].length) return Promise.resolve()
      return store.dispatch('pay/getBankCards')
    },
    data() {
    	var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
          callback();
      };
      return {
      	ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          pass: ''
       },
        rules: {
          name: [
            { required: true, message: '请输入提现金额', trigger: 'blur' },
            { min: 100, max: 5555555555, trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择银行卡', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        },
        bankId: '',
        amount: '',
        fund_password: '',
        bankId: '',
        payIndex: 0,
        game_acc: [{
          name: "彩票账户"
        }, {
          name: "百家乐账户"
        }, {
          name: "快乐彩账户"
        }],
        defaultWithdraw: 100,
        total_balance: '',
        allow_withdraw_balance: '',
        lottery_to_consume: '',
        withdraw_amount_today: '',
        withdraw_count_today: '',
        withdraw_limit_amount_per_day: '',
        withdraw_limit_count_per_day: '',
        withdraw_count_without_fee: '',
        userBankCards: '',
        bankWithdrawTime: ''
      }
    },
    created() {
      this.getBanck();
    },
    methods: {
      getBanck() {
        this.$axiosPlus('user-balance-account/get-account-info', data => {
//        this.total_balance = data.total_balance
        	this.total_balance = this.totalBal
          this.allow_withdraw_balance = data.allow_withdraw_balance
          this.lottery_to_consume = data.lottery_to_consume
          this.withdraw_amount_today = data.withdraw_amount_today
          this.withdraw_count_today = data.withdraw_count_today
          this.withdraw_limit_amount_per_day = data.withdraw_limit_amount_per_day
          this.withdraw_limit_count_per_day = data.withdraw_limit_count_per_day
          this.withdraw_count_without_fee = data.withdraw_count_without_fee
        });
        this.$axiosPlus('user-bank-card/get', data => {
          this.userBankCards = data.user_bank_cards
          this.bankWithdrawTime = this.userBankCards[0].content.bank_withdraw_time
        })
      },
      keyup() {
        if(Number(this.defaultWithdraw) < 100) {
          this.defaultWithdraw = 100;
        }
        if(Number(this.defaultWithdraw) > this.withdraw_limit_amount_per_day) {
          this.defaultWithdraw = this.withdraw_limit_amount_per_day
          if(Number(this.defaultWithdraw) > this.allow_withdraw_balance) {
            this.defaultWithdraw = this.allow_withdraw_balance
          }
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submit() {
//      if(this.$store.state.pay.bal.frozen_balance) {
//        this.$alert('暂有金额冻结中，无法提现！', '温馨提示', {
//          confirmButtonText: '确定'
//        });
//      } else {
          this.$axiosPlus('user-bank-card/get', data => {
            this.userBankCards = data.user_bank_cards
            if(this.total_balance < 100 || this.allow_withdraw_balance < 100) {
              this.$message({
                message: `余额不足100元整！`,
                duration: 800,
                type: 'error'
              })
            }
            if(this.bankId === '') {
              this.$message({
                message: `请选择银行卡！`,
                duration: 800,
                type: 'error'
              })
            } else if(this.fund_password === '') {
              this.$message({
                message: `支付密码不能为空！`,
                duration: 800,
                type: 'error'
              })
            } else {
              this.total_balance -= this.defaultWithdraw
              this.allow_withdraw_balance -= this.defaultWithdraw
              this.withdraw_amount_today = Number(this.withdraw_amount_today) + Number(this.defaultWithdraw)
              this.withdraw_count_today = Number(this.withdraw_count_today) + 1
              this.getBal()
              this.$message({
                message: `提现成功！`,
                type: 'success',
                duration: 1500,
//              onClose: this.getBal
              })
            }
          })
//      }
      },
      ...mapActions({
        getBal: 'pay/getBal'
      })
    },
    computed: {
      enabled() {
        if(!this.bankId) return true
        return(+new Date(this.bankCards.find(_ => this.bankId === _.id).end_locked_at) < Date.now())
      },
      ...mapGetters({
        bal: 'pay/bal',
        client_ip: 'ip',
        totalBal: 'pay/totalBal',
        bankCards: 'pay/bankCards'
      })
    },
    directives: {
      focus: {
        inserted: function(el) {
          el.focus()
        }
      }
    }
  }
</script>
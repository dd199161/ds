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
        if(value === '') {
          callback(new Error('请输入密码'));
        } else {
          if(this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        bankId: '',
        amount: '',
        fund_password: '',
        payIndex: 0,
        game_acc: [{
          name: "彩票账户"
        }, {
          name: "百家乐账户"
        }, {
          name: "快乐彩账户"
        }],
        defaultWithdraw: 100,
        bankWithdrawTime: '',
//      total_balance: '',
//      allow_withdraw_balance: '',
//      lottery_to_consume: '',
//      withdraw_amount_today: '',
//      withdraw_count_today: '',
//      withdraw_limit_amount_per_day: '',
//      withdraw_limit_count_per_day: '',
//      withdraw_count_without_fee: '',
//      userBankCards: '',
        
        ruleForm: {
          pass: '',
          checkPass: '',
          region: ''
        },
        rules: {
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          region: [{
            required: true,
            message: '请选择银行卡',
            trigger: 'change'
          }]
        }
      }
    },
    created() {
      this.getBanck();
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            //          this.$alert('submit!');
            //          if(this.$store.state.pay.bal.frozen_balance) {
            //            this.$alert('暂有金额冻结中，无法提现！', '温馨提示', {
            //              confirmButtonText: '确定'
            //            });
            //          } else {
            this.$axiosPlus('user-bank-card/get', data => {
              this.userBankCards = data.user_bank_cards
              if(this.total_balance < 100 || this.allow_withdraw_balance < 100) {
                this.$message({
                  message: `余额不足100元整,不能提现！`,
                  duration: 800,
                  type: 'error'
                })
              } else {
//            	this.totalBal -=this.defaultWithdraw
//            	this.bal -= this.defaultWithdraw
//            	this.withdrawCt = Number(this.withdrawCt) + Number(this.defaultWithdraw)
//              this.withdrawLcpd = Number(this.withdrawLcpd) + 1
                
//              this.total_balance -= this.defaultWithdraw
//              this.allow_withdraw_balance -= this.defaultWithdraw
//              this.withdraw_amount_today = Number(this.withdraw_amount_today) + Number(this.defaultWithdraw)
//              this.withdraw_count_today = Number(this.withdraw_count_today) + 1
                this.getBal()
                this.$message({
                  message: `提现成功！`,
                  type: 'success',
                  duration: 1500,
                  onClose: this.getBal
                })
              }
            })
            //          }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      getBanck() {
//      this.$axiosPlus('user-balance-account/get-account-info', data => {
//      	
//      		total_balance帐户现有总余额
//					allow_withdraw_balance可提金额
//					lottery_to_consume彩票所需消费量
//					withdraw_amount_today今日已提金额
//					withdraw_count_today今日已提次数
//					withdraw_limit_amount_per_day提领每日限制金额
//					withdraw_limit_count_per_day提领每日限制次数
//					withdraw_count_without_fee提领免手续费次数
//				
//        this.total_balance = data.total_balance
//        this.allow_withdraw_balance = data.allow_withdraw_balance
//        this.lottery_to_consume = data.lottery_to_consume
//        this.withdraw_amount_today = data.withdraw_amount_today
//        this.withdraw_count_today = data.withdraw_count_today
//        this.withdraw_limit_amount_per_day = data.withdraw_limit_amount_per_day
//        this.withdraw_limit_count_per_day = data.withdraw_limit_count_per_day
//        this.withdraw_count_without_fee = data.withdraw_count_without_fee
//      });
        this.$axiosPlus('user-bank-card/get', data => {
          this.userBankCards = data.user_bank_cards
          this.bankWithdrawTime = this.userBankCards[0].content.bank_withdraw_time
        })
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
      	client_ip: 'ip',
      	bankCards: 'pay/bankCards',
      	
        bal: 'pay/bal',
        totalBal: 'pay/totalBal',
        loTcon: 'pay/loTcon',
        withdrawAt: 'pay/withdrawAt',
        withdrawCt: 'pay/withdrawCt',
        withdrawLapd: 'pay/withdrawLapd',
        withdrawLcpd: 'pay/withdrawLcpd',
        withdrawCwf: 'pay/withdrawCwf'     
      })
    }
  }
</script>
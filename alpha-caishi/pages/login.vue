<template src="../templates/login/index.html"> </template>
<style src="../assets/c8css/index1.css">

</style>
<script>
  import { DeviceType } from '~/plugins/UA'
  import { mapMutations, mapGetters } from 'vuex'
  import { createQR } from '~/plugins/common'
  export default {
    name: 'login',
    layout: 'empty',
    filters: {
      dataTime() {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
        var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
        var hour = d.getHours();
        var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes()
        var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds();
        return year + '/' + month + '/' + day + ' ' + hour + ':' + minutes + ':' + seconds;
      }
    },
    data() {
      return {
        timewu: Date.now(),
        topname: [{
          name: '活动专区'
        }, {
          name: '我的账户  ∨'
        }, {
          name: '人民币：0.00元  ∨'
        }, {
          name: '充值'
        }, {
          name: '提款'
        }, {
          name: '转账'
        }, {
          name: '公告'
        }, {
          name: '客服'
        }],
        dlk_sTop: [{
          name: '会员中心'
        }, {
          name: '资金管理'
        }, {
          name: '订单管理'
        }, {
          name: '代理管理'
        }],
        dlk_sTops: [{
          name: '人民币：0.0000'
        }, {
          name: '比特币：0.0000'
        }, {
          name: '莱特币：0.0000'
        }, {
          name: '以太坊：0.0000'
        }, {
          name: '以太经典：0.0000'
        }, {
          name: '以太坊代币：0.0000'
        }],
        payIndex:0,
        payIndexf:0,
        payIndexs:0,
        loginscc: false,
        dlksTop:false,
        dlksTops:false,
        form: {
          name: `frank0${process.env.NODE_ENV === 'production' ? 3 : 2}`,
          password: '1234',
          device_type: DeviceType,
          GAKey: ''
        },
        reloadTimer: null,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          paginationClickable: true,
          simulateTouch: false,
          autoplay: 10000,
          loop: true,
          speed: 1400,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        qrImgSrc: '',
        randCode: '',
        qrTimer: null
      }
    },
    watch: {
      isLogout(val) {
        val && this.reload(val)
      }
    },
    async created() {
      //fix app.html #cssload-loader
      process.browser && this.$root.$el.classList.add('loaded')
      //preload lotto types
      this.$store.dispatch('lotto/getTypes')
      await createQR(this, 'user-login-qr-code/create', 'rand_code')
      this.checkQrLogin()
      document.addEventListener('visibilitychange', this.handleVisibilityChange)
    },
    methods: {
    	dlksTopL() {
    		this.dlksTop = !this.dlksTop
    		this.dlksTops = false
    	},
			dlksTopsR() {
				this.dlksTops = !this.dlksTops
				this.dlksTop = false
			},
      login() {
        const {
          ip,
          form
        } = this
        this.$axiosPlus('/user/login', {
          ip,
          ...form,
          code: form.GAKey
        }, data => {
          if(data.message) {
            //errorCode 100102 不存在的用户
            // 100131 密码错误
            this.errorMsg = data.message
          } else if(data.user_token) {
            this.done(data)
          }
        }, {
          errCb: true,
          showError: false
        })
      },
      done(data) {
        const {
          user_token: {
            token,
            expired_at: expires
          },
          user,
          user_balance_account,
          user_role: role
        } = data
        this.$axios.setHeader('Token', token)
        this.setUser({
          token,
          expires,
          role,
          ...user,
          ip: this.ip
        })
        this.setBal(user_balance_account)
        this.$router.push('/home')
      },
      reload(errorCode) {
        this.$message({
          message: `${
          errorCode === 102901
            ? '网络超时，请'
            : errorCode === 100002 ? '系统更新，请稍后' : ''
        }重新登录！`,
          type: 'error'
        })
      },
      ...mapMutations({
        setUser: 'setUser',
        setBal: 'pay/setBal'
      }),
      checkQrLogin() {
        this.$axiosPlus('user-login-qr-code/login-info', {
          rand_code: this.randCode
        }, data => {
          if(!data.user_token && !document.hidden) {
            if(this.$route.name === 'login') {
              this.qrTimer = setTimeout(this.checkQrLogin, 2000)
            } else {
              clearTimeout(this.qrTimer)
            }
          } else {
            clearTimeout(this.qrTimer)
            this.done(data)
          }
        })
      },
      handleVisibilityChange() {
        document.hidden ? clearTimeout(this.qrTimer) : this.checkQrLogin()
      },
      jQueryRun() {
        if(!this.jQueryRunEnd) {
          $('.down_btn').click(function() {
            // var index=$(this).index();
            $('.box-shade').show()
            $('.box-shade .two_code').show()
          })
          $('.close_list').click(function() {
            $('.box-shade,.two_code').hide()
          })
        }
        this.jQueryRunEnd = true
      }
    },
    computed: { ...mapGetters(['ip']),
      isLogout() {
        return this.$store.state.isLogout
      }
    },
    mounted() {
      const {
        isLogout
      } = this
      if(isLogout === true) {
        this.$message({
          message: '登出成功！',
          type: 'success'
        })
      } else if(typeof isLogout === 'number') {
        this.reload(isLogout)
      }
    },
    destroyed() {
      clearTimeout(this.reloadTimer)
      clearTimeout(this.qrTimer)
      document.removeEventListener('visibilitychange', this.handleVisibilityChange)
    }
  }
</script>
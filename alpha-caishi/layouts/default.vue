<template src="../templates/default.html"> </template>
<style lang="scss">
  /* nuxt app start */
  
  #cssload-loader {
    display: none;
  }
  body {
    width: 100%;
    background: #fff;
    .nav {
      & a {
        & span.toactive {
          color: #CD4D00;
        }
        & b.toactive {
          color: #E07700;
        }
      }
    }
    & .pop {
      position: fixed;
      z-index: 101;
      top: 25%;
      right: 25px;
      & ul {
        display: flex;
        flex-direction: column;
        width: 155px;
        height: 378px;
        background: url(../assets/img/indexHome/pop.jpg) no-repeat;
        padding: 11px 8px 0px 10px;
        & li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: auto;
          & a {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          & .pop1 {
            margin: 12px 0px 8px;
          }
          & .pop2 {
            width: 124px;
            height: 33px;
            background: url(../assets/img/indexHome/Shape-11.png) no-repeat;
          }
          & .pop3 {
            width: 124px;
            height: 33px;
            margin: 6px 0px 10px;
            background: url(../assets/img/indexHome/Forma-11.png) no-repeat;
          }
          & .pop2.active {
            width: 124px;
            height: 33px;
            background: url(../assets/img/indexHome/Shape-1.png) no-repeat;
          }
          & .pop3.active {
            width: 124px;
            height: 33px;
            margin: 6px 0px 10px;
            background: url(../assets/img/indexHome/Forma-1.png) no-repeat;
          }
          & .pop4 {
            margin-bottom: 2px;
          }
        }
      }
    }
  }
</style>
<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import logout from '~/util/logout'
  export default {
    data() {
      return {
        navIndex: 0,
        refreshing: false,
        pop: true,
        andr: false,
        ioss: true,
      }
    },
    mounted(){
		   this.kkccdd()
		},
    methods: {
    	kkccdd(){
    		const $ = require('jquery')
    		$('.nav a').click(function(){
    			$(this).find('span,b').addClass("toactive").parent("a").siblings("a").find("span,b").removeClass("toactive");
    			var num = $(this).index();
    			if(num === 1){
    				$('.reds').css('display','block')
    			}else{
    				$('.reds').css('display','none')
    			}
    		})
    	},
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
    computed: { ...mapGetters({
        lottoTypes: 'lotto/types',
        bal: 'pay/bal',
        unreadCount: 'admin/unreadCount'
      }),
      ...mapGetters(['username', 'news', 'isAgent'])
    }
  }
</script>
<template lang="jade">
#app
  img.screenTip(src="./assets/screenTip.png",v-show="$store.state.register.screenTip")
  .slidermain(v-show="$store.state.register.regHide")
    .head(v-show="$store.state.headToggle")
      .logo
      .reg(v-show="$store.state.register.loginbe")
        v-touch(class="headbtn",@tap="$store.commit('loginShow')")
         span 登录
        v-touch(class="headbtn",@tap="$store.commit('register')")
         span 注册
      .regAfter(v-show="$store.state.register.loginaf")
        span 您好 , {{this.$store.state.register.centerusername}}
        v-touch(@tap='$store.commit("loginout")',tag="span",class="headbtn")
         span 退出
    swiper( class="noSwiper",:options="swiperOption",ref="mySwiper")
        swiper-slide
          indexOne
        swiper-slide
          indexSecond
        swiper-slide
          indexThree
        swiper-slide
          indexFour
        swiper-slide(v-show="$store.state.centerPage")
          indexFive
    .mainNavs(v-show="$store.state.navToggle")
        v-touch(v-for="(nav,$index) in $store.state.navs",class="mainNav",:class="{'navH':nav.toggle}",@tap="iswiper(nav,$index)")
          p
          p(ref="navword") {{nav.text}}
  register(v-if="$store.state.register.regShow")
  login(v-if="$store.state.register.loginShow")
  a.contact(href="https://kf1.learnsaas.com/chat/chatClient/chatbox.jsp?companyID=698888&configID=68742&jid=3919179152&s=1",v-if="$store.state.register.contact_toggle")
  .paynow(v-show='$store.state.paynowToggle')
   div
    a(:href='"http://fastpay.hdc07.com/?site_id=3017&isMobile=1&username="+$store.state.register.Globalusername+"&domain="+$store.state.url')
    .paynow_bo
    .paynow_bo.paynow_bo2
  transition(enter-active-class="bounceIn")
    .main_layer(v-show="$store.state.layer.main_layer")
      layer
  .noticeLay(v-if="false")
   .noticeMain
    img(src="./assets/live.jpg")
    v-touch.close(@tap="noticeClose")
</template>
<script>
import indexOne from './components/indexPageOne.vue';
import indexSecond from './components/indexPagesecond.vue';
import indexThree from './components/indexPageThree.vue';
import indexFour from './components/indexPageFour.vue';
import indexFive from './components/indexPageFive.vue';
import register from './components/index_reg.vue';
import login from './components/index_login.vue';
import layer from './components/public/main_layer.vue';
export default {
  data(){
    return{
      swiperOption:{
          noSwiping:true,
          noSwipingClass:'noSwiper',
      },
      opp:false
    }
  },
  computed:{
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods:{
    noticeClose(){
      this.opp=false;
    },
    iswiper(nav,index){
      this.$store.commit("swiperTo",{nav,index});
      this.$store.commit('swiperTopage',index);
    },
    cookie(){

      if(this.$cookie.get('username')){
        this.$store.state.register.loginbe=false;
        this.$store.state.register.loginaf=false;
        this.$store.state.register.Globalusername=this.$cookie.get('username');
        this.$store.state.register.Globalpassword=this.$cookie.get("password");
        this.$store.state.register.oid=this.$cookie.get("oid");
        this.$store.state.register.ulevel=this.$cookie.get('ulevel');
        this.$store.state.register.realname=this.$cookie.get('realname');
        this.$store.state.register.user_type=this.$cookie.get('user_type');
        this.$store.commit('bindToggle');
        this.$store.commit('chauser');
     }
    }
  },
  mounted:function(){
     this.$nextTick(function(){
         if(process.env.NODE_ENV!=='development'){
           this.$store.state.url=window.location.href;
           if(navigator.userAgent.match(/mobile/i)) {
           }else{
              var str = window.location.href;
              if(str.match("7788.com")){
                 window.location.href = "https://hdc5566.com";
              }else{
                 window.location.href = "https://xhdc100.com";
              }
           }
         }
         let  value= this.swiper;
         this.$store.commit('swiper',value);
         this.cookie();
     });
    let scroll =(value)=>{
      this.$store.state.register.screenTip=value;
      this.$store.state.register.regHide=!value;
      this.opp=!value;
      this.$store.state.paynowToggle=!value;
      this.$store.state.register.contact_toggle=!value;
      this.$store.state.register.regShow=false;
      this.$store.state.register.loginShow=false;
    }
   let reside =function* (value){
     while(true){
       if(value=='ver'){
         yield scroll(true);
         yield scroll(false);
       }else{
         yield scroll(false);
         yield scroll(true);
       }
     }
   }
     const scWidth=window.screen.availWidth;
     const scHeight=window.screen.availHeight;
     let verStart=reside('ver');
     let lanStart=reside('lan');
     if(scWidth>scHeight){
       scroll(true);
       window.addEventListener("orientationchange",()=> {
            lanStart.next();
        }, false);
     }else{
       window.addEventListener("orientationchange",()=> {
            verStart.next();
        }, false);
     }
  },
  components:{
    indexOne,indexThree,indexSecond,indexFour,indexFive,register,login,layer
  }
}
</script>
<style lang="scss">
@import "assets/css/main.scss";
@import "assets/css/reset.scss";
.noticeLay{
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,0.25);
  position: fixed;
  z-index: 99999;
  top:0;
  .close{
      @include iBg('close.jpg',0.7rem,0.7rem);
      @extend %abso;
      top:-0.3rem;
      right:-0.3rem;
      background-size:100%;
      border-radius:100%;
      box-shadow:0 0.1rem 0.1rem rgba(0,0,0,0.2);
  }
  img{
    width:7rem;
    border-radius:0.3rem;
    box-shadow:0 0.15rem 0.4rem 0.1rem rgba(0,0,0,0.2);
  }
  .noticeMain{
    @extend %posr,%m0a;
    top:35%;
    width:7rem;
  }
}

.screenTip{
  @extend %m0a;
  display:block;
  width:7.5rem;
  height:3.8rem;
  margin-top:1.2rem;
  border-radius:0.4rem;
  box-shadow:0.1rem 0.15rem 0.35rem rgba(0,0,0,0.25);
  align-self:center;
}
@media screen and (min-width: 768px) and (max-width:1000px) {
    html{font-size: 75px !important;}
}
.main_layer{
  @extend %font25;
}
.contact{
  @include iBg('contract.png',0.68rem,2.43rem);
  @extend %bsc;
  display:block;
  position:fixed;
  top:2.45rem;
  right: -0.05rem;
  z-index: 999;
}
.head{
  height:0.90rem;
}
.reg{
   @extend %fr;
   margin:0.230rem 0.39rem 0 0;
   >div:first-child{
    margin-right: 0.2rem;
   }
}
.headbtn{
  @extend %font24;
  background-color: #ea4558;
  color: #fff;
  width: 1.125rem;
  line-height: 0.468rem;
  border-radius: 0.08rem;
  display:inline-block;
}
.mainNavs{
  @extend %flex_center;
  border-top:0.078rem solid #499fca;
  position:fixed;
  z-index:9999;
  bottom:0;
  height:1.39rem;
  width:100%;
  background-color:#0e5375;
  >div:not(:last-child){
     margin-right:1rem;
  }
  .navH{
    background-color:#196489;
  }
}
.mainNav{
   @extend %posr,%fl,%bz;
   z-index:10001;
   color:#fff;
   width:1.4rem;
   height:100%;
   padding-top:0.2187rem;
  p{
     @extend %m0a;
    background-size:contain !important;
  }
  p:last-child{
      @extend %scale0.9,%font24;
      margin-top:0.13rem;
  }
}

@for $i from 1 through 4{
  .mainNav:nth-child(#{$i}) p:first-child{
    @include iBg("nav"+$i+'.png',0.59rem,0.59rem);
  }
}

//站内转账 站内信息
.ctitle{
    @extend %bz,%font28,%m0a;
    text-align:left;
    width:10rem;
    margin-top:0.46rem;
    color:#858585;
    svg{
      @extend %posr;
      width:0.468rem;
      height:0.468rem;
      top:0.105rem;
      margin-right: 0.156rem;
    }
}
.regAfter{
  @extend %flex_center;
  height:0.468rem;
  align-items:flex-end;
  padding:{
    top:0.25rem;
    right:0.6rem;
  }
  @extend %fr;
  >span:first-child{
    @extend %scale0.9;
  }
  >span:last-child{
    margin-left:0.35rem;
   }
}
//个人中心输入框
.t_input{
  @extend %bz;
  width:4.5rem;
  height:0.7rem;
  margin-top:0.4rem;
  padding-left:0.23rem;
  border:1px solid #b3b3b3;
  margin-left:0.45rem;
}
.t_btn{
  @extend  %font32;
  width:8.6rem;
  height:1.21875rem;
  outline: none;
  border:none;
  background-color:#2a8fbd;
  color:#fff;
  border-radius:0.2rem;
  margin-top:0.7rem;
  box-shadow:0.0rem 0.15rem 0.3rem rgba(0,0,0,0.3);
  letter-spacing: 0.1rem;
}
  .wechat,.alipay{
    height:12.5rem;
  }
   .rewrap{
      @extend %textAlign_left;
      height:5.7rem;
      background-color:#fff;
      margin-top: 0.5rem;
      border:{
        top:1px solid #dbdbdb;
        bottom:1px solid #dbdbdb;
      }
      .title{
        margin-top:0.39rem;
        height:1.65rem;
        border-bottom:1px solid $bc;
        padding-left:0.39rem;
      }
      .rehead{
        color:#898989;
        @extend %font25;
        span:first-child{
            @extend %posr,%font16,%textAlign_center;
            width:0.375rem;
            line-height:0.375rem;
            top:-0.05rem;
            background-color:#2a8fbd;
            display: inline-block;
            border-radius:100%;
            color:#fff;
        }
        .tip{
          @extend %font24;
          color:#d0d0d0;
          margin-left:0.3rem;
        }
      }
      .message{
        @extend %bz;
        padding-left:0.39rem;
        padding-top:0.625rem;
        height:3.2rem;
        border:{
          top:1px solid $bc;
          bottom:1px solid $bc;
        }
      .content{
          margin-top:0.2rem;
          line-height:0.5rem;
        }
      }
      .input{
        @extend %bz;
        padding-left:0.39rem;
        padding-top:0.39rem;
      }
      .input_tip{
        @extend %font16;
        margin-top:0.20rem;
        margin-left:0.45rem;
        color:#898989;
        span{
          @extend %font24;
          color:#ff0000;
        };
      }
      .mesl{
        @extend %font16;
        margin-top:0.125rem;
        display:flex;
        width:4rem;
        height:0.5rem;
        border:1px solid #e7e7e7;
         span{
           @extend %textAlign_center;
           display:inline-block;
           line-height:0.5rem;
          }
          span:first-child{
            @extend %scale0.8;
            width:1.8rem;
            height:100%;
            border-right:1px solid  #e7e7e7;
          }
          span:last-child{
            @extend %scale0.75,%textAlign_center;
            color:#51bcf0;
            width:2.1rem;
          }
      }
      .mesr{
        margin-top:0.35rem;
         height:1.4rem;
        span:first-child{
          line-height:1.03rem;
        }
        span:last-child{
          @extend %scale0.75,%textAlign_left;
          line-height:0.3rem;
          margin:{top:0.125rem;};
          padding-left:0.14rem;
        }
      }

   }
  .rechoice{
    @extend %textAlign_center;
    width:2.6rem;
    line-height:0.70rem;
    border:1px solid #5fb7e1;
    border-radius:0.04rem;
    margin:{
      top:0.25rem;
      left:0.45rem;
    }
     svg{
       @extend %posr;
       width:0.6rem;
       height:0.43rem;
       color:#00c800;
       top:0.12rem;
       right::0.08rem;
     }
   }
   .rechoiceh{
    background-color:#d6f1ff;
   }
   .Backindex{
     @extend %font26;
      width:3.5rem !important;
      color:#6e6e6e;
      letter-spacing:0.06rem;
      display:flex;
      justify-content:space-between;
      vertical-align:top;
      transform:scale(0.88);
      margin:0 auto;
     svg{
       vertical-align:bottom;
       width:0.50rem;
       height:0.50rem;
     }
   }
    .mtitle{
      @extend %font28,%w10rem;
      background-color:#1c648a;
      line-height:1.218rem;
      color:#fff;
    }
    .backend{
      @extend %fl,%abso,%font26;
      width:2rem;
      top:0.03rem;
      svg{
        @extend %posr;
        margin-right:0.1rem;
        top:0.12rem;
        width:0.35rem;
        height:0.55rem;
      }
    }
.promoNav,.re_nav,.gameNav{
  @extend %flex_center,%w10rem;
  height:1.171rem;
  background-color:#e4f6ff;
  >div{
    @extend %font26,%fl;
    width:2.5rem;
    line-height:1.171rem;
    color:#696969;
    font-weight:500;
  }
  >div:not(:first-child){
    margin-left:0.3rem;
  }
}
.promoNavH,.gameNavH{
  background-color:#c5ebff;
  color:#1c648a !important;
}
.paynow{
  position:fixed;
  right:0.40rem;
  bottom:1.85rem;
  z-index:10;
  width:1.3rem;
  height:1.3rem;
  >div{
    @extend %abso;
    width:1.3rem;
    height:1.3rem;
  }
 a{
  @include iBg('pay_bg.png',1.3rem,1.3rem);
  @extend %bsc,%posr;
   display: inline-block;
   z-index:10;
   color:#000;
 }
}
.paynow_bo{
    @extend %posr;
    border-radius: 50%;
    opacity:0;
    background-color:#0e5375;
    top:-1.39rem;
    height: 100%;
    width: 100%;
    z-index:9;
    animation-duration: 2.5s;
    animation-iteration-count: inherit;
    animation-name:c;
    animation-iteration-count: infinite;
}
.paynow_bo2{
  top:-2.69rem;
  animation-delay:0.8s;
}

</style>

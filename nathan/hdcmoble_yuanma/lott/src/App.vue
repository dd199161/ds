<template lang="jade">
#app
  img.screenTip(src="./assets/screenTip.png",v-show="$store.state.register.screenTip")
  .slidermain(v-show="$store.state.register.regHide")
    .head(v-show="$store.state.headToggle")
      .link
       v-touch(tag='a',@tap="link('we')")
       v-touch(tag='a',@tap="link('ph')")
       v-touch(tag='a',@tap="link('qq')")
      .logo
      .reg(v-show="$store.state.register.loginbe")
        v-touch(class="headbtn",@tap="login")
         span 登录
        v-touch(class="headbtn",@tap="register")
         span 注册
      .regAfter(v-show="$store.state.register.loginaf")
        span 您好 , {{this.$store.state.register.centerusername}}
        v-touch(@tap='$store.commit("loginout")',tag="span",class="headbtn")
         span 退出
    swiper(class="noSwiper",:options="swiperOption",ref="mySwiper")
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
  register(v-if="$store.state.register.regShow")
  login(v-if="$store.state.register.loginShow")
  a.contact(href="https://chat7.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=913399&configID=61797&jid=6150774221&s=1",target="_self",v-if="$store.state.register.contact_toggle")
  .paynow(v-show='$store.state.paynowToggle')
   div
    a(target='_self',:href='"http://fastpay.hdc07.com/?site_id=3019&isMobile=1&username="+$store.state.register.Globalusername+"&domain="+$store.state.url')
    .paynow_bo
    .paynow_bo.paynow_bo2
  transition(enter-active-class="bounceIn")
    .main_layer(v-show="$store.state.layer.main_layer")
      layer
  transition(enter-active-class="fadeIn",leave-active-class="fadeOut")
   .downloadApp(v-show="$store.state.App_layer")
    .main
     p {{$store.state.Tip_1}} :
      a(href="http://fir.im/loAn",target="_self",v-if="$store.state.downloadAppToggle")   http://fir.im/loAn
      span(v-else) {{$store.state.tipDet_1}}
     p {{$store.state.Tip_2}} :
      a(href="http://fir.im/loIos",target="_self",v-if="$store.state.downloadAppToggle")   http://fir.im/loIos
      span(v-else) {{$store.state.tipDet_2}}
     v-touch(tag='p',@tap="appDown_close()") 我知道了
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
      }
    }
  },
  computed:{
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods:{
    link(value){
      this.$store.state.App_layer=true;
      this.$store.state.downloadAppToggle=false;
      if(value=='ph'){
        this.$store.state.App_layer=false;
        window.PhoneUtils.callNumber('+6309453412082');
      }else if(value=='we'){
        this.$store.state.App_layer=false;
        window.PhoneUtils.callWebChat('9151509685');
      }else{
        this.$store.state.App_layer=false;
        window.PhoneUtils.callQQ('2697785572');
      }
    },
    iswiper(nav,index){
      this.$store.commit("swiperTo",{nav,index});
      this.$store.commit('swiperTopage',index);
    },
    register(){
       this.$store.commit('register');
    },
    login(){
      this.$store.commit('loginShow');
    },
    appDown_close(){
      this.$store.state.App_layer=false;
    },
    cookie(){
      if(process.env.NODE_ENV!=='development'){
        this.$store.state.url=window.location.href;
        if(navigator.userAgent.match(/mobile/i)) {
            }else{
              window.location.href ='https://a708090.com/';
            }
      }
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
         let  value= this.swiper;
         this.$store.commit('swiper',value);
         this.cookie();
         this.$store.commit('TestAndIos');
     });
    let scroll =(value)=>{
      this.$store.state.register.screenTip=value;
         this.$store.state.register.regHide=!value;
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
@import 'assets/css/reset.scss';
:root{
  @include iBg('bg.jpg',100%,100%);
  background-size:100% 100%;
}
.downloadApp{
  position:fixed;
  top:rem2px(400);
  z-index:9999;
  width:100%;
  .main{
    @extend %posr;
    background-color:rgba(255,255,255,0.9);
    margin:0 auto;
    padding:rem2px(65) rem2px(65)  rem2px(35) rem2px(60);
    p{
      @extend %font25;
      color:#000;
      a{
        text-decoration:underline !important;
        color:blue;
        margin-left:rem2px(12);
      }
      span{
        margin-left:rem2px(12);
      }
    }
    p:nth-child(2){
      margin-top:rem2px(30);
    }
    p:last-child{
      @extend %font24;
      border-radius:rem2px(5);
      box-shadow:rem2px(0) rem2px(5) rem2px(12) rgba(0,0,0,0.2);
      color:#7b5b23;
      margin:0 auto;
      margin-top:rem2px(40);
      padding:rem2px(8) 0;
      width:rem2px(150);
      background-color:#f7ba4d;
    }
  }
}
.screenTip{
  @extend %m0a;
  display:block;
  width:rem2px(500);
  height:rem2px(250);
  margin-top:2.4rem;
  border-radius:0.4rem;
  box-shadow:0.1rem 0.15rem 0.35rem rgba(0,0,0,0.25);
  align-self:center;
}
.main_layer{
  @extend %font25;
}
.link{
  @extend %flex,%posr;
  @for $i from 1 through 3{
    >a:nth-child(#{$i}){
      display:block;
      @include iBg('link'+$i+".png",rem2px(41),rem2px(34));
      @extend %bsc;
      margin-left:rem2px(30);
    }
    @if($i==2){
      >a:nth-child(2){
        width:rem2px(33);
        height:rem2px(33);
      }
    }@else if($i==3){
      >a:nth-child(3){
        width:rem2px(32);
        height:rem2px(34);
      }
    }
  }
}
.contact{
  display:block;
  width:rem2px(50);
  height:rem2px(162);
  background:url(./assets/contract.jpg) no-repeat 0 0 /100%;
  border-radius:rem2px(10) rem2px(0) rem2px(0) rem2px(10);
  position:fixed;
  right:rem2px(-8);
  top:rem2px(180);
  z-index: 999;
}
.swiper-pagination-bullet{
  width: 0.15rem;
  height:0.15rem;
}
.swiper-container{
  width:100%;
}
.swiper-slide{
  width:100%;
}
.head{
  height:rem2px(90);
  @extend %flex,%flex_alin;
  justify-content:space-between;
}
.reg{
   @extend %flex;
   margin-right:rem2px(25);
   >div:first-child{
    margin-right:rem2px(20);
   }
}
.headbtn{
  @extend %font24;
  @include iBg('headbtn_bg.png',rem2px(80),rem2px(32));
  background-size:contain;
  color:$color_1;
  line-height:rem2px(30);
  border-radius: rem2px(5);
  display:inline-block;
}

.mainNavs{
  @extend %flex;
  @extend %flex_just;
  @extend %flex_alin;
  position:fixed;
  z-index:9999;
  bottom:0;
  height:rem2px(105);
  width:100%;
  background-color:#fff;
  >div:not(:last-child){
     margin-right:rem2px(35);
  }
}
.mainNav{
  height:rem2px(105);
  width:rem2px(140);
}
.mainNav p{
   @extend %m0a;
  background-size:contain !important;
}
.navH{
   box-shadow:rem2px(0) rem2px(0) rem2px(35)  rgba(0,0,0,0.3);
}
@for $i from 1 through 4{
  .mainNavs>div:nth-child(#{$i})>p{
    @include iBg("nav"+$i+'.jpg',rem2px(90),rem2px(100));
    @extend %bsc;
  }
}


//站内转账 站内信息
.ctitle{
    @extend %bz,%font28;
    text-align:left;
    width:10rem;
    @extend %m0a;
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
  @extend %flex;
  align-items:flex-end;
  height:0.468rem;
  padding:{
    top:0.25rem;
    right:0.6rem;
  }
  >span:first-child{
    color:#f7b747;
    @extend %font24;
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
  @extend %bz,%font24;
  width:rem2px(360);
  height:rem2px(45);
  margin-top:rem2px(42);
  padding-left:0.23rem;
  border:1px solid #b3b3b3;
  margin-left:0.45rem;
}
.t_btn{
  width:rem2px(450);
  height:rem2px(70);
  outline:none;
  border:none;
  background-color:#f2b345;
  color:#000;
  border-radius:0.2rem;
  margin-top:rem2px(50);
  @extend  %font28;
  box-shadow:0.0rem 0.15rem 0.3rem rgba(0,0,0,0.3);
  letter-spacing: 0.1rem;
}
// 充值开始

  .wechat,.alipay{
    height:12.5rem;
  }
   .rewrap{
      height:rem2px(440);
      margin-top:rem2px(60);
      background-color:#fff;
      text-align:left;
      border:{
        top:1px solid #dbdbdb;
        bottom:1px solid #dbdbdb;
      }
      .title{
        margin-top:rem2px(30);
        height:rem2px(125);
        border-bottom:1px solid $bc;
        padding-left:0.39rem;
      }
      .rehead{
        color:#898989;
        @extend %font25;
        span:first-child{
           @extend %font16,%posr,%text_align;
            width:rem2px(24);
            line-height:rem2px(24);
            background-color:#f7b747;
            display: inline-block;
            border-radius:100%;
            color:#fff;
            top:-0.05rem;
            margin-right:rem2px(10);
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
        margin-top:0.20rem;
        margin-left:0.45rem;
        color:#898989;
        @extend %font16;
        span{
          @extend %font24;
          color:#ff0000;
        };
      }
      .mesl{
        @extend %font16,%flex;
        margin-top:0.125rem;
        width:rem2px(300);
        height:rem2px(40);
        border:1px solid #e7e7e7;
         span{
           display:inline-block;
           text-align: center;
           line-height:0.5rem;
           color:#828282;
          }
          span:first-child{
            @extend %scale0.8;
            width:30%;
            height:100%;
            border-right:1px solid  #e7e7e7;
          }
          span:last-child{
            @extend %scale0.75,%text_align;
            color:$color_1;
            width:50%;
          }
      }
      .mesr{
        height:rem2px(90);
        span:first-child{
          line-height:1.03rem;
        }
        span:last-child{
          @extend %scale0.75;
          line-height:rem2px(20);
          text-align:left;
          margin:{top:0.125rem;};
          padding-left:0.14rem;
        }
      }

   }
  .rechoice{
    width:rem2px(160);
    line-height:rem2px(42);
    @extend %font24;
    text-align:center;
    border:1px solid $color_2;
    color:#000;
    border-radius:rem2px(5);
    margin:{
      top:rem2px(20);
      left:0.45rem;
    }
     svg{
       @extend %posr;
       width:rem2px(30);
       height:rem2px(30);
       color:#00c800;
       top:rem2px(9);
       right::0.08rem;
     }
   }
   .rechoiceh{
    background-color:#fee1ad;
   }
   .Backindex{
      @extend %font26,%flex,%m0a;
      width:rem2px(240) !important;
      color:#f7b847;
      letter-spacing:0.06rem;
      transform:scale(0.88);
      justify-content:space-between;
      vertical-align:top;
     svg{
       vertical-align:bottom;
       width:rem2px(36);
       height:rem2px(36);
     }
   }
   //游戏中心和优惠中心
    .mtitle{
      @extend %font28;
      @include iBg('mtitle_bg.jpg',100%,rem2px(75));
       line-height:rem2px(90);
       height:rem2px(90);
       color:#f7b747;
       font-weight:500;
    }
    .backend{
      @extend %fl,%abso,%font25;
      width:2rem;
      top:0.03rem;
      color:#fff;
      svg{
        @extend %posr;
        margin-right:0.1rem;
        top:rem2px(8);
        width:rem2px(36);
        height:rem2px(36);
      }
    }
//promotion
.promoNav,.re_nav,.gameNav{
  @extend %flex,%flex_just;
  height:rem2px(70);
  background-color:#b59c70;
  >div{
    @extend %font25,%fl;
    width:rem2px(150);
    height:100%;
    line-height:rem2px(72);
    color:#4a3615;
  }
  >div:not(:first-child){
    margin-left:rem2px(35);
  }
}
.promoNavH,.gameNavH{
  background-color:#fff;
  color:#000 !important;
}
//快捷支付样式
.paynow{
  position:fixed;
  right:rem2px(30);
  bottom:rem2px(140);
  z-index:10;
  width:rem2px(80);
  height:rem2px(80);
  >div{
    @extend %abso;
    width:1.3rem;
    height:1.3rem;
  }
 a{
   @extend %posr;
   background:url(./assets/pay_bg.png) no-repeat 0 0 /100% 100%;
   display: inline-block;
   width:rem2px(80);
   height:rem2px(80);
   z-index:10;
   color:#000;
 }
}
.paynow_bo{
    @extend %posr;
    border-radius:50%;
    opacity:0;
    background-color:#f7b746;
    top:rem2px(-82);
    left:rem2px(9);
    height: 100%;
    width: 100%;
    z-index:9;
    animation-duration: 2.9s;
    animation-iteration-count: inherit;
    animation-name:c;
    animation-iteration-count: infinite;
}
.paynow_bo2{
  top:rem2px(-142);
  left:rem2px(9);
  animation-delay:1s;
}
.loginlogo{
    @extend %bz;
    .content {
        @include iBg("logo.png",rem2px(190),rem2px(70));
        background-size: rem2px(190) rem2px(70);
        @extend %m0a;
    }
}
@keyframes c{
  0%{
    opacity:0;
    -webkit-transform:scale(.6);
    transform:scale(.6)
  }
  18%{
     opacity:.3;
     -webkit-transition-timing-function:linear;
     transition-timing-function:linear
  }
  50%{
    -webkit-transform:scale(0.5);
    transform:scale(0.5);
    -webkit-transition-timing-function:cubic-bezier(.1,.55,.95,.5);
    transition-timing-function:cubic-bezier(.1,.55,.95,.5);
  }
  55%{
    opacity:.5;
    -webkit-transform:scale(.9);transform:scale(.9);
    -webkit-transition-timing-function:linear;
    transition-timing-function:linear
  }
  80%{
    opacity:0.28;
    -webkit-transition-timing-function:ease-in;
    transition-timing-function:ease-in;
  }
  to{
    opacity:0.0;
    -webkit-transform:scale(2);
    transform:scale(2);
  }
}
</style>

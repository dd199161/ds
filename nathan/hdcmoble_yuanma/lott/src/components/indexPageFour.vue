<template lang="jade">
.center
 .cshow
  p {{$store.state.register.centerusername}}
  p 主账户 :
   span(v-if="moneyToggle") {{$store.state.register.amountmoney}}
   | 元
  .topNav
   v-touch(tag="p",@tap="swiper(2)")
    span
   v-touch(tag="p",@tap="swiper(3)")
    span
   v-touch(tag="p",@tap="swiper(3)")
    span
 .cnav
  ul.navup
   v-touch(tag="li",@tap="swiper(1)")
   v-touch(tag="li",@tap="swiper(4)")
   v-touch(tag="li",@tap="swiper(5)")
  ul.navmiddle
   v-touch(tag="li",@tap="swiper(6)")
   v-touch(tag="li",@tap="swiper(7)")
   v-touch(tag="li",@tap="swiper(8)")
</template>
<script>
	export default{
		  data(){
				return{
						moneyToggle:true
				}
			},
      methods:{
				toggle(){
					this.moneyToggle=!this.moneyToggle;
				},
				refresh(){
					this.$store.commit('chauser','showTip');
				},
      	swiper(value){
						this.$store.dispatch("showWating")
	      		this.$store.commit("togglemain",value)
      	},
				witSwiper(value){
					 if(this.$store.state.center.secNavs[0].toggle==true){
						 this.$store.commit('centerTip',23);
					 }else{
						 this.$store.dispatch("showWating");
 	      		this.$store.commit("togglemain",value);
					 }
				}
      }
	}
</script>
<style lang="scss">
   @import  '../assets/css/main.scss';
	 .eye_close{
	 	 position:relative;
		 top:0.135rem;
	 	 width:0.25rem;
		 display:block;
	   margin:0 auto !important;
	 }
	 .handleIcon{
	 	position:relative;
		margin-left:0.1rem;
    top:0.05rem;
    width:0.42rem;
	  height:0.34rem;
	  border:0.012rem solid #7f7f7f;
    display:inline-block;
	  border-radius:0.08rem;
	   svg{
	   	display:block;
	   	top:-0.04rem !important;
      bottom:0 !important;
			margin:0 auto !important;
	   }
	 }
   .cshow{
       @include Bg("cshowBg.jpg",100%,rem2px(400))
       @extend %bsc;
       @extend %font26;
       @extend %posr;
        display:flex;
        flex-direction:column;
       >p{
        color:#01bad4;
       	text-align:center;
        width:100%;
        @extend %abso;
       	top:rem2px(225);
       }
			 >p:nth-child(2){
			 	top:rem2px(260);
        @extend %abso;
        color:#d03d88;
			 }
       .topNav{
         @extend %abso;
         bottom:0;
         background-color:rgba(0,0,0,0.3);
         width:100%;
         height:rem2px(80);
         display:flex;
         align-items:center;
         justify-content:center;
         >p{
          width:rem2px(200);
          height:rem2px(50);
          display:flex;
          align-items:center;
          margin-right:rem2px(30);
          background:linear-gradient(to bottom,#f7b746,#f7b746) no-repeat right /rem2px(2) 100%;
         }
         >p:last-child{
           background:none;
           margin-right:rem2px(0);
         }
         @for $i from 1 through 3{
           >p:nth-child(#{$i})>span{
             display:block;
              @include Bg('sc_'+$i+'.png',rem2px(160),rem2px(35))
              background-size:100%;
           }
         }
       }
   }
   .cnav{
   	@include Bg("cnavBg.png",rem2px(700),rem2px(377));
   	@extend %bsc;
		margin:0 auto;
    margin-top:rem2px(100);
   }
   .center{
   	  ul{
   	  	 width:100%;
         justify-content: center;
         display:flex;
         justify-content:flex-start;
   	     height:rem2px(160);
   	  }
   	  li{
   	  	 @extend %bsc;
   	   	 @extend %fl;
   	   	margin-top:0.46rem;
   	  }
   }
   .navup{
       @for $i from 1 through 3{
          li:nth-child(#{$i}){
           @include Bg("function_"+$i+".png",rem2px(145),rem2px(160));
           @if($i==2){
            margin-left:rem2px(90);
            margin-right:rem2px(90);
           }
          }
       }
   }
   .navmiddle{
      @for $i from 1 through 3{
        li:nth-child(#{$i}){
          @include Bg('function_'+ ( 3 + $i ) + ".png",rem2px(145),rem2px(160));
          @if($i==2){
             margin:{
              left:rem2px(90);
              right:rem2px(90);
             }
          }
        }
      }
   }
</style>

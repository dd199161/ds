<template lang="jade">
.center
 .cshow
  p 下午好 {{$store.state.register.centerusername}}
  p
   icon(name="database")
   | 余额  :
   span(v-if="moneyToggle",style="margin-left:0.1rem;")
    {{$store.state.register.amountmoney}}
   span(style="margin-left:0.1rem",v-else) *****
   v-touch.handleIcon(@tap="moneyToggle=!moneyToggle")
    icon(v-if="moneyToggle",style="width:0.26rem",name="eye")
    img(v-else class="eye_close",src="../assets/eye_close.png")
   v-touch.handleIcon(@tap="$store.commit('chauser','showTip')")
    icon(style="width:0.2rem",name="refresh")
 .marqu
  .marr
   icon(name="bullhorn")
   marquee(scrollamount=4)
    span {{$store.state.getNotice}}
 .cnav
  ul.navup
   v-touch(tag="li",@tap="swiper(1)")
   v-touch(tag="li",@tap="swiper(2)")
   v-touch(tag="li",@tap="swiper(3)")
  ul.navmiddle
   v-touch(tag="li",@tap="swiper(4)")
   v-touch(tag="li",@tap="swiper(5)")
   v-touch(tag="li",@tap="swiper(6)")
  ul.navbottom
   v-touch(tag="li",@tap="swiper(7)")
   v-touch(tag="li",@tap="swiper(8)")
   v-touch(tag="li")
</template>
<script>
	export default{
		  data(){
				return{
						moneyToggle:true
				}
			},
      methods:{
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
     @extend %posr,%m0a;
		 top:0.135rem;
	 	 width:0.25rem;
		 display:block;
	 }
	 .handleIcon{
	 	@extend %posr;
		margin-left:0.2rem;
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
       @include Bg("cshowBg.jpg",100%,4.6875rem)
       @extend %bsc,%font26;
       color:#535353;
       svg{
          @extend %posr;
       	  width:0.448rem;
       	  height:0.448rem;
       	  top:0.08rem;
					margin-right:0.12rem;
					margin-bottom:0.05rem;
       }
       p{
        @extend %m0a,%posr,%textAlign_left;
       	padding-left:0.8rem;
       	width:5.4rem;
        top:1.25rem;
       	left:.3rem;
       }
			 p:nth-child(2){
			 	margin-top:0.12rem;
			 }
   }
   .cnav{
   	@include Bg("cnavBg.jpg",100%,10.200rem);
   	@extend %bsc,%m0a;
   }
   .center{
   	  ul{
   	      @extend %flex_center;
   	  	  width:100%;
   	      height: 2.26rem;
   	  }
   	  li{
   	  	@extend %bsc,%fl;
   	   	margin-top:0.46rem;
   	  }
   }
   .navup{
       @for $i from 1 through 3{
          li:nth-child(#{$i}){
           @include Bg("function_"+$i+".png",1.75rem,1.45rem);
           @if($i==2){
            margin-left:1.64rem;
            margin-right:1.64rem;
           }
          }
       }
   }
   .navmiddle{
      @for $i from 1 through 3{
        li:nth-child(#{$i}){
          @include Bg('function_'+ ( 3 + $i ) + ".png",1.75rem,1.48rem);
          @if($i==2){
             margin:{
              left:1.64rem;
              right:1.64rem;
             }
          }
        }
      }
   }
     .navbottom{
      @for $i from 1 through 3{
        li:nth-child(#{$i}){
          @include Bg('function_'+( 6 + $i )+".png",1.75rem,1.48rem);
          @if($i==2){
            margin-left:1.50rem;
            margin-right:1.64rem;
          }@else if($i==1){
            width:1.95rem;
          }@else if($i==3){
            width:1.80rem;
          }
        }
      }
   }
</style>

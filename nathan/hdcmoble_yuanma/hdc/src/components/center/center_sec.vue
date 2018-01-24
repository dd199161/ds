<template lang="jade">
.security
 ul.secNav
  li.secNavs(v-for='(nav,$index) in $store.state.center.secNavs')
   p
    icon(:name='nav.name')
   p {{nav.text}}
   v-touch(tag='p',@tap="$store.commit('bind',$index)",v-show='nav.toggle') {{nav.bind}}
   p {{nav.tip}}
 layer(v-show="$store.state.layer.cen_layer")
</template>
<script>
import layer from "./layer/cen_layer.vue"
	export default{
		components:{
			layer
		}
	}
</script>
<style lang="scss">
     @import "../../assets/css/main.scss";
     .security{
      @extend %m0a;
     	width:10rem;
     	height:17.5rem;
     }
    .secNav{
      @extend %bz,%posr;
    	width:10rem;
    	height:10.625rem;
    	background-color:#fff;
    	padding-top:0.4rem;
    	border-bottom:2px solid #d5d5d5;
    	color:#737373;
    }
	.secNavs{
		@extend %m0a;
		width:8.67rem;
		height:1.4843rem;
		line-height: 1.4843rem;
		border-bottom:1px solid #d5d5d5;
		vertical-align: middle;
		>p{
      @extend %fl;
		}
		p:nth-child(1){
		  @extend %posr;
		  width:0.65rem;
      height:0.65rem;
      border-radius:100%;
      top:0.36rem;
      margin-left:0.1rem;
		}
		p:nth-child(2){
      margin-left:0.1875rem;
		}
		p:nth-child(4){
      @extend %fr,%font24,%abso,%textAlign_center;
      color:#d5d5d5;
      width:3.5rem;
      left:4rem;
		}
		p:nth-child(3){
		  @extend %posr,%fr;
			width:1.5rem;
			height:0.7rem;
			border:1px solid #d5d5d5;
			border-radius:0.12rem;
			top:0.38rem;
			line-height:0.7rem;
      margin-right:0.15625rem;
		}
		svg{
		  @extend %posr;
			width:0.4375rem;
			height:0.35rem;
			color:#fff;
			top:-0.36rem;
		}
	}
	.secNav{
	 @for $i from 1 through 6{
	   li:nth-child(#{$i}){
	     @if $i==1{
	       p:first-child{background-color:#b0b3fe;}
	     }@else if $i==2{
	       p:first-child{background-color:#60d3ff;}
	     }@else if $i==3{
	       p:first-child{background-color:#e4adff;}
	     }@else if $i==4{
	       p:first-child{background-color:#ecb4b4;}
	     }@else if $i==5{
	       p:first-child{background-color:#fb9696;}
	     }@else if $i==6{
	       p:first-child{background-color:#56c560;}
	     }
	   }
	 }
	}
</style>

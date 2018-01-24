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
     	width:rem2px(750);
      @extend %m0a;
     }
    .secNav{
      @extend %bz,%abso;
    	width:rem2px(750);
    	background-color:#fff;
    	border-bottom:1px solid #d5d5d5;
    	color:#737373;
    }
	.secNavs{
		@extend %m0a,%bz,%font24;
		width:rem2px(680);
		height:rem2px(130);
    padding-top:rem2px(30);
		line-height:rem2px(60);
		border-bottom:rem2px(1) solid #d5d5d5;
		vertical-align:middle;
		>p{
      @extend %fl;
		}
		p:nth-child(1){
		  @extend %posr;
		  width:rem2px(48);
      height:rem2px(48);
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:100%;
      top:rem2px(10);
      margin-left:rem2px(10);
		}
    svg{
      width:rem2px(24);
      height:rem2px(24);
      color:#fff;
    }
		p:nth-child(2){
		  @extend %font24;
      margin-left:rem2px(30);
		}
		p:nth-child(4){
       color:#d5d5d5;
       @extend %fr,%font16,%abso;
       text-align:center;
       width:7rem;
       left:6rem;
		}
		p:nth-child(3){
		  @extend %fr,%font24,%posr;
			width:rem2px(80);
			height:rem2px(40);
			border:1px solid #d5d5d5;
			border-radius:rem2px(5);
			top:rem2px(15);
			line-height:rem2px(40);
      margin-right:rem2px(20);
		}

	}
	.secNav{
    @for $i from 1 through 6{
      @if $i==1 {
        li:nth-child(#{$i}){
          p:first-child{background-color:#b0b3fe;}
        }
      }@else if $i==2{
        li:nth-child(#{$i}){
          p:first-child{background-color:#60d3ff;}
        }
      }@else if $i==3{
        li:nth-child(#{$i}){
          p:first-child{background-color:#e4adff;}
        }
      }@else if $i==4{
        li:nth-child(#{$i}){
          p:first-child{background-color:#ecb4b4;}
        }
      }@else if $i==5{
        li:nth-child(#{$i}){
          p:first-child{background-color:#fb9696;}
        }
      }@else if $i==6{
        li:nth-child(#{$i}){
          p:first-child{background-color:#56c560;}
        }
      }
    }
	}
</style>

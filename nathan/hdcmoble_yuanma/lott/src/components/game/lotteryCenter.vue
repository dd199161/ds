<template lang="jade">
div.lottery
 .lrow
  v-touch(tag="a",data-lottery="niucai",@tap="$store.dispatch('loginGame','nn')")
  v-touch(tag="a",data-lottery="SA",href="javascript:;",@tap="$store.dispatch('loginGame','sa_lotto')")
  //-
   v-touch(tag="a",data-lottery="BBIN",href="javascript:;",@tap="$store.dispatch('loginGame','bb_lotto')")
</template>
<style lang="scss">
    @import "../../assets/css/main.scss";
	 .lrow{
     @extend %flex,%flex_alin;
    height:rem2px(520);
    padding:0 rem2px(155);
    justify-content:space-between;
	 	a{
      background-size:rem2px(130),rem2px(165) !important;
	 	}
    @for $i from 1 through 2{
      a:nth-child(#{$i}){
        @include cBg('lottery_'+$i+'.png',rem2px(130),rem2px(165))
      }
    }
	 }
</style>

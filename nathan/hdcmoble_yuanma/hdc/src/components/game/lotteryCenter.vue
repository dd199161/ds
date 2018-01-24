<template lang="jade">
div.lottery
 .lrow
  v-touch(tag="a",data-lottery="SA",href="javascript:;",@tap="$store.dispatch('loginGame','sa_lotto')")
  //-
   v-touch(tag="a",data-lottery="BBIN",href="javascript:;",@tap="$store.dispatch('loginGame','bb_lotto')")
</template>
<style lang="scss">
    @import "../../assets/css/main.scss";
	 .lrow{
    width:10rem;
	 	padding-top:1rem;
	 	background-color: #fafafa;
	 	border-bottom:1px solid $bc;
	 	a{
      @extend %m0a,%bsc;
	 		display: block;
	 	}
	 	a:first-child{
	 		@include cBg('lottery_1.png',6.65rem,2.92rem);
	 	};
	 }
</style>

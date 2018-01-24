<template lang="jade">
.dealer
 .drow_1
   v-touch(data-dealer="AG",tag="a",href="javascript:;",@tap="$store.dispatch('loginGame','ag_live')")
   v-touch(data-dealer="MG",tag="a",href="javascript:;",@tap="$store.dispatch('loginGame','mg_live')")
 div.drow_2
   v-touch(data-dealer="BBIN",tag="a",href="javascript:;",@tap="$store.dispatch('loginGame','bb_live')")
   v-touch(data-dealer="SA",tag="a",href="javascript:;",@tap="$store.dispatch('loginGame','sa_live')")
 div.drow_3
   v-touch(data-dealer="PT",tag="a",href="javascript:;",@tap="$store.dispatch('loginGame','pt_live')")
</template>
<style lang="scss">
 @import "../../assets/css/main.scss";
	.dealer{
	     @extend %bz;
	     padding-top:0.9375rem;
       width:10rem;
       height:9.375rem;
       background-color:#fafafa;
       border-bottom:1px solid $bc;
       a{
          @extend %fl;
          background-size:contain !important;
       }
       >div{
        display:flex;
        justify-content:space-between;
        padding:0 0.8rem;
       	height:1.79rem;
      	margin-bottom:0.828rem;
       }
	}
	.drow_1{
		a:first-child{
      @include cBg("dealer_1.png",4.2rem,1.79rem);
		};
		a:last-child{
			@include cBg('dealer_2.png',4.2rem,1.79rem);
			margin-left:0.4rem;
		}
	}
	.drow_2{
		a:first-child{
			@include cBg("dealer_3.png",4.2rem,1.79rem);
		};
		a:last-child{
			@include cBg('dealer_4.png',4.2rem,1.79rem);
			margin-left:0.75rem;
		}
	}
  .drow_3 a{
    @include cBg('dealer_5.png',4.2rem,1.79rem);
  }
</style>

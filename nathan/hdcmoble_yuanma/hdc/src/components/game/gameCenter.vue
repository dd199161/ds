<template lang="jade">
.game
 .grow_1
  v-touch(tag="a",data-game="AG",href="javascript:;",@tap="$store.dispatch('loginGame','ag_game')")
  v-touch(tag="a",data-game="GG",href="javascript:;",@tap="$store.dispatch('loginGame','gg_game')")
 .grow_2
  //-
   v-touch(tag="a",data-game="BBIN",href="javascript:;",@tap="$store.dispatch('loginGame','bb_game')")
  v-touch(tag="a",data-game="MG",@tap="$store.dispatch('loginGame','mg_game')")
  v-touch(tag="a",data-game="SA",href="javascript:;",@tap="$store.dispatch('loginGame','sa_game')")
 .grow_3
  v-touch(tag='a',data-game='PT',href="javascript:;",@tap="$store.dispatch('loginGame','pt_game')")
</template>
<style lang="scss">
  @import "../../assets/css/main.scss";
  .game{
       @extend %bz;
	     padding-top:0.9375rem;
       height:9.375rem;
       background-color: #fafafa;
       border-bottom:1px solid $bc;
       a{
        @extend %bsc;
       }
       >div{
        display:flex;
        justify-content:space-between;
        padding:0 0.6rem;
       	height:1.79rem;
      	margin-bottom:0.828rem;
       }
	}
	.grow_1{
		a:first-child{
      @include cBg("game_1.png",4.2rem,1.79rem);
		};
		a:last-child{
			@include cBg('game_2.png',4.2rem,1.79rem);
			margin-left:0.4rem;
		}
	}
	.grow_2{
		a:first-child{
			@include cBg("game_4.png",4.2rem,1.79rem);
		};
		a:last-child{
			@include cBg('game_5.png',4.2rem,1.79rem);
			margin-left:0.4rem;
		}
	}
	.grow_3{
		a{
		 @include cBg("game_6.png",4.2rem,1.79rem);
		};
    margin-left:0.25rem;
	}
</style>

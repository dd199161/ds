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
	     padding-top:rem2px(100);
       @extend %bz;
       a{
          @extend %fl;
          background-size:cover !important;
       }
       >div{
        @extend %bz,%flex;
         width:rem2px(750);
         height:rem2px(180);
         padding:0 rem2px(155);
       	 margin-bottom:rem2px(60);
         justify-content:space-between;
       }
	}
	.grow_1{
		a:first-child{
      @include cBg("game_1.png",rem2px(148),rem2px(180))
		};
		a:last-child{
			@include cBg('game_2.png',rem2px(148),rem2px(180))
		}
	}
	.grow_2{
		a:first-child{
			@include cBg("game_4.png",rem2px(148),rem2px(180))
		}
		a:last-child{
			@include cBg('game_5.png',rem2px(148),rem2px(180))
		}
	}
	.grow_3{
		a:first-child{
		 @include cBg("game_6.png",rem2px(148),rem2px(180));
		}
	}
</style>

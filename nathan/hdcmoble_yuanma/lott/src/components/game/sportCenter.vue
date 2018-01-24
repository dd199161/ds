<template lang='jade'>
div
 .srow
  //-
   v-touch(tag="a",data-sport="BBIN",href="javascript:;",@tap="$store.dispatch('loginGame','bb_sport')")
  v-touch(tag="a",data-sport="ww",href="javascript:;",@tap="$store.dispatch('loginGame','ww_sport')")
</template>
<style lang="scss">
@import "../../assets/css/main.scss";
.srow{
 height:rem2px(420);
 @extend %flex,%flex_alin,%flex_just;
 a{
   background-size:rem2px(160),rem2px(195) !important;
   @include cBg('sport_2.png',rem2px(160),rem2px(195));
 }
 // @for $i from 1 through 2{
 //   a:nth-child(#{$i}){
 //     @include cBg('sport_'+$i+'.png',rem2px(160),rem2px(195));
 //   }
 //   a:nth-child(2){
 //     margin-left:rem2px(120);
 //   }
 // }
}
</style>

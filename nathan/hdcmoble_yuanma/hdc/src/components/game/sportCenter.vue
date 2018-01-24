<template lang='jade'>
div
 .srow
  v-touch(tag="a",data-sport="ww",href="javascript:;",@tap="$store.dispatch('loginGame','ww_sport')")
</template>
<style lang="scss">
@import "../../assets/css/main.scss";
.srow{
 width:10rem;
 padding-top:1rem;
 background-color:#fafafa;
 border-bottom:1px solid $bc;
 a{
   @extend %m0a,%bsc;
   display: block;
 }
 a:first-child{
   @include cBg('sport_2.png',6.65rem,2.92rem);
 }
}
</style>

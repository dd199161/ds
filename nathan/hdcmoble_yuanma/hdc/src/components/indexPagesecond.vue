<template lang="jade">
.gamecenter
  .mtitle
    游戏中心
   .gameNav
    v-touch(style="width:2.3rem;",option="option",v-for='(nav,$index) in $store.state.navsGame',:class="{'gameNavH':nav.toggle}",@tap='$store.commit("swiperToGame",$index)') {{nav.text}}
  swiper(ref='gSwiper',class="noSwiper",:options="gameOption")
       swiper-slide
        dealer
       swiper-slide
        game
       swiper-slide
        lottery
       swiper-slide
        sport
</template>
<script>
import dealer from './game/dealerCenter.vue';
import game from  './game/gameCenter.vue';
import lottery from './game/lotteryCenter.vue';
import sport from './game/sportCenter.vue';
export default{
	 data(){
	    return{
	       gameOption:{
             noSwiping:true,
             noSwipingClass:'noSwiper'
	       }
	    }
	 },
	 computed:{
      swiper(){
      	return this.$refs.gSwiper.swiper
      }
	 },
   mounted:function(){
     this.$nextTick(()=>{
       let value= this.swiper;
       this.$store.commit('swipergame',value);
     });
     setTimeout(()=>{
       this.$store.dispatch('getStatusMaintain');
     },50);
   },
	 components:{
	 	dealer,game,lottery,sport
	 }
	}
</script>

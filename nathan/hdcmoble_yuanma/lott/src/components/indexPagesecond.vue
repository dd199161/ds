<template lang="jade">
div.gamecenter
  div.mtitle
    游戏中心
  div.gameNav
    v-touch(option="option",v-for='(nav,$index) in $store.state.navsGame',:class="{'gameNavH':nav.toggle}",@tap='swiperTo($index)') {{nav.text}}
  swiper(ref='gSwiper',class="noSwiper",:options="gameOption")
       swiper-slide
        lottery
       swiper-slide
        game
       swiper-slide
        dealer
       swiper-slide
        sport
</template>
<script>
import dealer from './game/dealerCenter.vue'
import game from  './game/gameCenter.vue'
import lottery from './game/lotteryCenter.vue'
import sport from './game/sportCenter.vue'
export default{
	 data(){
	    return{
	       gameOption:{
             noSwiping:true,
             noSwipingClass:'noSwiper'
	       },
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
     })
   },
	 methods:{
	 	swiperTo(index){
      this.$store.commit('swiperToGame',index);
	 	}
	 },
	 components:{
	 	dealer,game,lottery,sport
	 }
	}
</script>

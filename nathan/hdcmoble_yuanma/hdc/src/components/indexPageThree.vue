<template lang="jade">
.promotion
 .mtitle
  优惠中心
 .promoNav
  v-touch(v-for="(nav,$index) in navs",:class="{'promoNavH':nav.toggle}",@tap="swiperTo(nav,$index)") {{nav.text}}
 swiper.noSwiping(:options="promotionOption",ref="pSwiper")
  swiper-slide
   promotion_2
  swiper-slide
   promotion_3
  swiper-slide
   promotion_1
</template>
<script>
import promotion_1 from './promotions/promotion_1.vue';
import promotion_2 from './promotions/promotion_2.vue';
import promotion_3 from './promotions/promotion_3.vue';
export default{
	data(){
		return {
			promotionOption:{
         noSwiping:true,
         noSwipingClass:"noSwiper"
			},
			navs:[{
				text:"圣诞豪礼",
				toggle:true
			},{
				text:"首存",
				toggle:false
			},{
				text:"救援金",
				toggle:false
			}],
		}
	},
	computed:{
		swiper(){
			return this.$refs.pSwiper.swiper
		}
	},
	methods:{
      swiperTo(nav,index){
          this.navs.forEach(function(nav){
          	Vue.set(nav,'toggle',false)
          })
          Vue.set(nav,'toggle',true)
          this.swiper.slideTo(index,500,false)
      }
	},
	components:{
        promotion_1,
        promotion_2,
        promotion_3
	}
}

</script>

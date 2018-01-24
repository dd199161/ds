<template lang="jade">
.message
 .ctitle
  icon(name="bullhorn")
  | 信息通知
 .icontent
  .nu
   .time 2017-03-29
   div ★☆请注意☆★因第三方支付网络不稳定，建议会员多加利用银行卡入款，还可享有2％回馈。708090娱乐感谢您的支持与爱护!! 官网右侧708090娱乐QQ联系（请备注您的会员帐号）
  .nu
   .time 2017-03-29
   div 【重要公告】若无法使用在线客服服务 请会员朋友多加利用本公司QQ线上客服或微信客服！不便之处敬请见谅！
  .nu
   .time 2017-03-29
   div ★OG视讯★平台例行维护：于北京时间每周一 06：00～08：00结束。 为您带来的不便，敬请见谅！
</template>

<style lang="scss">
     @import "../../assets/css/main.scss";
	.message{
    @extend %m0a;
    width:rem2px(750);
		height:rem2px(600);
		border-bottom:1px solid $bc;
		background-color:#fff;
		padding:{
			top:rem2px(15);
			left:rem2px(30);
		}
	}
	.ctitle{
		@extend %font25;
		text-align:left;
		width:rem2px(750);
		svg{
			width:rem2px(24);
			height:rem2px(24);
      margin-right: rem2px(15);
      @extend %posr;
			color:#858585;
			top:0.105rem;
		}
	}
	.icontent{
    color:#878787;
    @extend %bz;
    margin-top:rem2px(30);
    padding:rem2px(20) rem2px(30) 0;
    border-radius:rem2px(10);
  	width:rem2px(640);
  	height:rem2px(440);
  	background-color:#f8fdff;
  	border:1px solid $bc;
  	overflow:scroll;
    	.nu{
    	  @extend %font16;
    		text-align:left;
    		margin-bottom:0.2rem;
    	}
   }
</style>

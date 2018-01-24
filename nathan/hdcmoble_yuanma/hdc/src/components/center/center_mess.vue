<template lang="jade">
.message
 .ctitle
 icon(name="bullhorn") 信息通知
 .icontent
  .nu
   .time 2017-03-29
   div ★☆请注意☆★因第三方支付网络不稳定，建议会员多加利用银行卡入款，还可享有2％回馈。热点感谢您的支持与爱护!! 官网右侧热点QQ联系:2133778450（请备注您的会员帐号）
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
    width:10rem;
		height:9rem;
		border-bottom:1px solid $bc;
		background-color:#fff;
		padding:{
			left:0.3rem;
			right:0.3rem;
		}
	}
	.ctitle{
		@extend %font25;
		text-align:left;
		margin-top:0.46rem;
		svg{
		  @extend %posr;
			width:0.468rem;
			height:0.468rem;
			color:#858585;
			top:0.105rem;
			margin-right: 0.156rem;
		}
	}
	.icontent{
		   color:#878787;
		    @extend %bz;
		    margin-top:0.3rem;
		    padding:0.359rem 0.23rem 0;
        border-radius:0.1rem;
      	width:8.375rem;
      	height:6.7rem;
      	background-color:#f8fdff;
      	border:1px solid $bc;
      	overflow:scroll;
        	.nu{
        	  @extend %font24;
        		text-align:left;  		
        		margin-bottom:0.2rem;
        	}
        }
</style>

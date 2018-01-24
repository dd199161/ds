<template lang="jade">
.promotion_c
 .title 活动内容
 table(border="0")
  thead
   tr
    th 当日负盈利
    th 主账户
    th 救援金比例
    th 当日最高金额
    th 流水倍数
  tbody
   tr
    td ≥200元
    td ≤5元
    td 10%
    td 3,000
    td 10倍
 .title 活动说明
 .content
  p 1.救援金计算例子：玩家充值2,000元，提款1,000元，救援金 = (2,000元–1,000元) x 10% = 100元
  p 2. 此奖金仅限玩家当天在老虎机所累积的负盈利。玩家当天可以多次申请。
  p 3.玩家领取救援金后，需达到10倍流水要求，即可申请提款。
  p 4.玩家如当日已经申请首存优惠将不可以申请救援金。
  p 5.申请救援金后，正在进行中的首存或再存优惠将被取消。
  p 6.玩家不可将获得的救援金使用参加其它优惠，否则将扣除礼金以及全部盈利。
  p 7.此活动与返水优惠共享。
  info
</template>
<script>
  import info from './info/info.vue';
   export default{
    components:{
       info
    }
  }
</script>
<style lang="scss">
@import "../../assets/css/main.scss";
.promotion_c{
  @extend %textAlign_left;
  background:#fff;
  padding:{
  	top:0.25rem;
  	left:0.8rem;
  	bottom:0.25rem;
  	right:0.8rem;
  }
  .title{
    @extend %textAlign_left;
  	margin-bottom:0.1rem;
  	color:#2a8fbd;
  	line-height:0.5rem;
  	border-radius: 0.08rem;
  	 @extend %font24;
  }
  .content{
    p{
    @extend %font16,%scale0.9;
    margin-bottom:0.03rem;
    }
  }
  table{
  	width:100%;
    margin:{
    	top:0.25rem;
    	bottom:0.25rem;
    }
  }
  thead{
  	tr{
  		width:100%;
  		background: #2A8FBD;
  		color:#fff;
  		 th{
  		  @extend %font16,
        %scaleTable0.8,
        %textAlign_center;
        height:0.6rem;
  		 	border:1px #fff solid;
  		 	font-weight: 200;
  		 }
  	}
  }
  tbody{
  	td{
      @extend %font16,
      %scaleTable0.8,
      %textAlign_center;
      min-height: 0.3rem;
      padding:0.05rem 0rem;
      border:1px solid #eee;
  	}
  	tr:nth-child(2n){
  		background: #eee;
  	}
  }
}
</style>

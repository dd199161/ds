<template lang="jade">
.promotion_c
 .title 活动详情
 table(border="0")
  thead
   tr
    th 月累计有效投注额
    th 288万
    th 488万
    th 888万
    th 1688万
  tbody
   tr
    td 月度礼品
    td 飞天茅台
    td IPAD Mini4
    td IPHONE X
    td 菲你莫属豪华游
   tr
    td 季度累计有效投注额
    td 8888万
    td 3亿
    td 8亿
    td 8亿
   tr
    td 季度奖品
    td 菲比寻常5天4夜豪华私人游
    td 2017款宝马1系（同价格品牌可自选）
    td(colspan="2") 宝马7系730LI领先型（同价格品牌可自选）
 .content
  div
   span(style="color:#b2996c;") 活动开始时间：
   | 2018年1月1日
  div
   span(style="color:#b2996c;") 活动结束时间：
   | 以官网通知为准
 .content
  div 为了回馈广大会员，热火娱乐特此推出打码大作战，玩家在活动期间（统计时间于每月最后一天达到有效投注即可参与领取礼物）达到以下有效投注即可领取热火娱乐为您准备的丰厚大礼（部分奖品可累计），最高奖项（宝马七系730）奖品不限名额！
 .title 申请方式
 .content
  div 符合以上条件的会员，请于每月最后一天，24小时之内添加官方微信rh100kf23或向您的专属经理：rd100yy进行登记信息确认，并提供会员账号，真实姓名，手机号码，收货地址，以便专员派送礼品。礼品会在次月7日内进行派发。
 .title 活动细则
 .content
  div 1.本项优惠可与其他优惠活动同时进行，所获礼品会以邮寄的方式在次月7日内进行派发，礼物为热火娱乐回馈会员所用故不可折现。
  div 2.符合以上条件的会员，请务必于每月最后一天，24小时之内添加官方微信：rh100kf23或向您的专属经理：rd100yy进行登记信息确认以便专员派送礼品，礼品会在次月7日内进行派发，逾期则视为自动放弃。
  div 3.月度礼品与季度礼品可依次领取，如有特殊需求，请于客户经理联系确认或者联系在线客服即可。
  div 4.登记信息需在每月最后一日确认，一旦提交将不予更改。
  div 5.热火娱乐所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人账户及账户结余的权利。
  div 6.参与该优惠，即表示您同意《优惠规则与条款》
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
.contentx,.content{
	@extend %font8;
}
.promotion_c{
  text-align:left;
  background:#fff;
  padding:rem2px(30);
  .title{
    @extend %font16;
  	margin-bottom:rem2px(10);
  	color:#b2996c;
  	text-align:left;
    height:rem2px(20);
  }
  .content{
    div{
     width: 100%;
     display:block;
     margin-bottom:rem2px(6);
    }
  }
  table{
  	width:100%;
    margin:{
    	top:rem2px(25);
    	bottom:rem2px(25);
    }
  }
  thead{
  	tr{
  		width:100%;
  		background:#b59c70;
  		color:#fff;
  		 th{
  		  @extend %font16;
  		 	text-align:center;
  		 	font-weight: 200;
  		 }
  	}
  }
  tbody{
  	td{
      @extend %font16;
      text-align: center;
      line-height: 0.45rem;
      border:1px solid #eee;
      padding:0 rem2px(5);
  	}
  	tr:nth-child(2n){
  		background: #eee;
  	}
  }
}
</style>

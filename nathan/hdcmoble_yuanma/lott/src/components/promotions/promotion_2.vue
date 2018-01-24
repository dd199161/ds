<template lang="jade">
.promotion_c
 .title 活动内容
 table(border="0")
  thead
   tr
    th 存款要求
    th 礼金比例
    th 单笔最高赠送
    th 流水要求
  tbody
   tr
    td 1000+
    td 1.1%
    td 500
    td 1倍
 .title 活动说明
 .content
  div 1.会员在银行卡存款前请先与在线客服联系索取银行账号；
  div 2.会员银行卡存款必须达到存款要求，方可获得相应比例礼金。
  div 3.会员请于存款后投注前联系在线客服申请，通过审核后礼金会自动存入会员主帐户。如未提交申请进行投注则视为放弃此优惠礼金；
  div 4.银行卡入款礼金每天限申请三次（即取款后三次）。
  div 5.您所获得的礼金需要完成存款加礼金的一倍有效投注才可以从您的账户提出；
  div 6.参与该优惠，即表示您同意《活动规则与条款》。
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

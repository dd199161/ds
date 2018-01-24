<template lang="jade">
.promotion_c
 .title 活动内容
 table(border="0")
  thead
   tr
    th 申请类别
    th 存款金额
    th 红利比例
    th 最高限额
    th 流水要求
  tbody
   tr
    td 首存1
    td 100+
    td 100%
    td 888
    td 30倍
   tr
    td 首存2
    td 100+
    td 30%
    td 1888
    td 20倍
 .title 活动说明
 .content
  p 1.此优惠面向《热点100》新注册玩家，每个玩家仅可申请一次首存优惠。
  p 2.玩家完成首次存款后未进行任何投注前，向在线客服申请。
  p 3. 所获彩金需要完成您存款加礼金相应的流水才可以从您的账户提出。
  p 4.彩金期限为30天，逾期系统将自动清零。
  p 5.此优惠不与其它优惠共享；申请此优惠不得在申请其它优惠。
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

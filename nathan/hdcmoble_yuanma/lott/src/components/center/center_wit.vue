<template lang="jade">
.withdraw
 .witbank
  span {{$store.state.center.bank_name}}
   span(style="margin-left:0.5rem") {{$store.state.center.bank_account}}
 ul.witcontent
  li
   p 开户地区 :
   p {{$store.state.center.bank_address}}
  li
   p 账户姓名 :
   p {{$store.state.register.realname}}
  li
   p 主账户 :
   p {{$store.state.register.amountmoney}}
  li
   p 提现金额 :
   p
    input.winput(v-model="$store.state.center.wit_money",placeholder="请输入",type="text")
  li(style={height:"0.7rem"})
   .wtip 我们接受的最小提现金额为100元。&nbsp;&nbsp;&nbsp;
  li
   p 提现密码 :
   p
    input.winput(v-model="$store.state.center.wit_password",placeholder="请输入",type="password")
  li(style={height:"0.7rem"})
   .wtip 完成入款金额一倍的有效投注(领取优惠则依照优惠规则计算)&nbsp;&nbsp;&nbsp;
  li.wtip_2
   table(border="0")
    tr
     td(rowspan="2",style="width:5%") 存款时间
     td(rowspan="2",style="width:4%") 存款
     td(rowspan="2",style="width:4%") 优惠
     td(rowspan="2",style="width:5%") 有效投注
     td(colspan="2",style="width:8%") 常态投注要求
     td(colspan="2",style="width:8%") 优惠投注要求
     td(rowspan="2",style="width:4%") 需扣金额
    tr
     td 通过
     td 手续费
     td 通过
     td 扣除
    tr(v-for='item in $store.state.center.sum_data.slice(0,2)')
     td {{item.start_time}}
     td {{item.save_money}}
     td {{item.promos_money}}
     td {{item.bet_sum_money}}
     td {{item.normal_is_ok}}
     td {{item.normal_is_kouchu_money}}
     td {{item.promotion_is_ok}}
     td {{item.promotion_kouchu_money}}
     td {{item.all_kouchu_free}}
    tr
     td(colspan="5")
     td {{$store.state.center.all_normal_free}}
     td
     td {{$store.state.center.all_delete_poroms}}
     td {{$store.state.center.all_free}}
    tr.tip_wit
     td.down_tip(colspan="9")
      p *出款金额限制：100 - 10000000
      p *24小时内3次出款。不需扣行政手续费
      p *出款总需扣除（存款有效投注审核手续费+优惠扣除+24小时超次数出款行政手续费）：3000
      p *本次信息展现仅限最后两条，如有疑问请联系客服。
 v-touch.t_btn(tag="button",@tap="wit_move()") 提现
</template>
<script>
	export default{
    mounted:function(){
      this.$store.commit("getEsWitFo");
    },
		methods:{
			wit_move(){
				this.$store.commit("wit_move");
			}
		}
	}
</script>
<style lang="scss">
   @import "../../assets/css/main.scss";
    .withdraw{
      @extend %m0a;
      width:rem2px(750);
    	padding-bottom:0.5rem;
      color:#4d4c4c;
    }
	.witbank{
    @extend %font32,%txtAlign_left;
		line-height:rem2px(100);
		background-color:#fff;
		padding-left:0.46rem;
		border-bottom:1px solid $bc;
		font-weight:600;
		.selected{
      @include cBg("bank.jpg",0.7rem,0.7rem);
      @extend %bsc;
      @extend %posr;
			margin-right:0.26rem;
		  display: inline-block;
      top:0.1rem;
		}
	}
	.witcontent{
		margin-top:rem2px(60);
		background-color:#fff;
    padding-left:0;
    margin-bottom:rem2px(20);
		border:{
			top:1px solid $bc;
			bottom:1px solid $bc;
		}
		li:last-child{
			border:none;
		}
		li{
			@extend %font26;
			height:rem2px(90);
			border-bottom:1px solid $bc;
			p{
				padding-top:0.4rem;
			}
			p:first-child{
            @extend %fl;
            margin-left:0.46rem;
            font-weight:600;
			}
			p:last-child{
           @extend %fr;
           margin-right:0.625rem;
			}
		}
	}
	.wtip{
	  @extend %font24,%txtAlign_right,%bz;
		height:rem2px(35) !important;
    padding-top:0.08rem;
		color:#d0d0d0;
	}
	.wtip_2{
    padding: 0.2rem 0.1rem 0.1rem 0.1rem;
		height:100% !important;
    color:#d0d0d0;
		table{
			border-color:$bc;
			width:100%;
			td{
			  @extend %font16,%txtAlign_center;
			}
		}
		.down_tip{
			padding-left:0.2rem;
			padding-top:0.1rem;
			padding-bottom:0.1rem;
			p{
        @extend %font16,%txtAlign_left;
				float:none !important;
				margin:0 !important;
				padding:0 !important;
			}
		}
	}
	.winput{
	  @extend %font25,%txtAlign_right;
	  height:rem2px(48);
    width:rem2px(380);
	  border:none;
	  color:#d0d0d0;
	}
  .tip_wit{
    p{
      @extend %font16;
    }
  }
</style>

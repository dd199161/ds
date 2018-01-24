<template lang="jade">
.transform
 .ctranT
  icon(name="database",style="top:0.05rem")
  | 中心钱包
  span(style="margin-left:0.6rem;") 余额 :
   span(style="margin-left:0.25rem;") {{$store.state.register.amountmoney}}
   |  元
  v-touch.ctraf(tag="span",@tap="$store.commit('chauser','showTip')")
   icon(style="width:0.25rem;height:0.3rem",name="refresh")
 .ccontent
  .t_title
   .from 从
    select(v-model="cout")
     option(value="ms") [主账户]
     option(value="ag") [AG平台]
     option(value="bb") [BBIN平台]
     option(value="pt") [PT平台]
     option(value="mg") [MG平台]
     option(value="sa") [SA平台]
     option(value="gg") [GG平台]
     option(value='ww') [ww平台]
   .to 到
    select(v-model="cin")
     option(value="ag") [AG平台]
     option(value="bb") [BBIN平台]
     option(value="pt") [PT平台]
     option(value="mg") [MG平台]
     option(value="sa") [SA平台]
     option(value="gg") [GG平台]
     option(value='ww') [ww平台]
     option(value="ms") [主账户]
  .t_choice
   ul
    li(v-for="(item,$index) in $store.state.register.choices")
     p {{item.text}}
     p
      span 转出|
      span 转入
     p {{item.eachMoney}}
     p
      v-touch(tag="span",@tap="$store.dispatch('getEachMoney',{num:$index,m:'c'})")
       icon(name="refresh")
  input.t_input(style="width:8.6rem;margin:0 auto;",v-model="$store.state.register.tranforMoney",placeholder="请输入转账金额",type="text")
 v-touch(tag="button",@tap="$store.dispatch('tranformMoney')",class="t_btn") 开始转账
</template>
<script>
	export default{
    data(){
      return{
        cin_ms:false,
        cin_rest:true,
        cout:'ms',
        cin:'ag'
      }
    },
    watch:{
        cout:function(){
          this.$store.state.register.cout=this.cout;
          if(this.cout!=='ms'){
             this.cin='ms';
          }else{
            this.cin='ag';
          }
       },
       cin:function(){
        this.$store.state.register.cin=this.cin;
        if(this.cin!=='ms'){
          this.cout='ms';
        }else{
          this.cout='ag';
        }
       }
     },
	   mounted:function(){
	   	if(this.$store.state.register.loginStatus!==null){
	   		for(let i = 0;i<this.$store.state.register.choices.length;i++){
	   	    this.$store.dispatch("getEachMoney",{num:i,m:'c'});
	   	    }
	   	}
	   }
	}
</script>
<style lang="scss">
	@import '../../assets/css/main.scss';
  .transform{
    @extend %m0a;
  }
	.ctranT{
	    @extend %font26,%bz,%textAlign_left;
	    background-color:#fff;
	    padding-top:0.500rem;
	    padding-left:0.625rem;
	    height:1.52rem;
	    border-bottom:2px solid $bc;
      color: #858585;
      svg{
       @extend %posr;
       width: 0.468rem;
       height: 0.468rem;
       top: 0.105rem;
       margin-right: 0.2rem;
      }
	}
	.ctraf{
		margin-left:0.65rem;
		display:inline-block;
		svg{
			width:0.30rem;
			height:0.30rem;
      border-radius:0.08rem;
      padding:0.10rem;
      border:1px solid #858585;
		}
	}
	.ccontent{
		background-color:#fff;
		margin-top:0.35rem;
		padding-top:0.46rem;
    padding-bottom:0.46rem;
		@extend %bz;
		border:{
			top:2px solid $bc;
			bottom:2px solid $bc;
		}
	}
	.t_title{
		>div{
			@extend %fl;
		}
		option{
			   font-size: 65%;
		}
		.from{
        color:#5478b3 ;
        margin-left: 0.5rem;
			select{
			  @extend %bz;
			  margin-left:0.1rem;
		    padding-left:0.3rem;
        color:#5478b3 ;
        width:3.6rem;
        height:0.578rem;
        border:1px solid #5478b3;
			}
		}
		.to{
			margin-left:0.6rem;
			color:#ff9000;
			select{
				margin-left:0.1rem;
				padding-left:0.3rem;
        color:#5478b3;
        width:3.6rem;
        height:0.578rem;
				color:#ff9000;
				border:1px solid #ff9000;
			}
		}
	}
	.t_choice{
	  @extend %bz;
		border-top:1px solid $bc;
		clear:both;
		padding-top:0.2125rem;
		padding-left:0.9375rem;
		color:#737373;
		margin-top:1.0rem;
		li{
      width:8.375rem;
			height:1.015625rem;
		}
		p{
			@extend %fl;
		}
		p:first-child{
      @extend %textAlign_left;
			width:3rem;
		}
		p:nth-child(2){
			margin-right:1.7rem;
		}
		p:last-child{
      @extend %fr;
			span:last-child{
				display:block;
        margin-right:0.2rem;
          svg{
            border:1px solid #1f8aba;
            padding:0.1rem 0.1rem;
          	color:#1f8aba;
            width:0.265rem;
            height:0.265rem;
            border-radius:0.05rem;
          }
			}
		}
	}
</style>

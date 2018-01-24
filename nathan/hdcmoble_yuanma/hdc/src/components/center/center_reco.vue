<template lang="jade">
.record(ref="record")
 .rwrap
  .title
   icon(name="credit-card-alt")
   {{$store.state.centerTitle}}
  ul(class="recontent")
   li(class="status",v-if="$store.state.status")
    p
     span {{$store.state.select_1}}
     select(v-model="$store.state.selectData_1",@change="in_select2")
      option(v-for="select in $store.state.recordSelect_1",:value="select.value") {{select.text}}
    p(v-show="$store.state.select2") {{$store.state.select_2}}
     select(v-model="$store.state.selectData_2")
      option(v-for="select in $store.state.recordSelect_2",:value="select.value") {{select.text}}
   li.search
    span 起止日期:
    date-picker(:date="startTime",:option="option",disabled="value")
    date-picker(:date="endtime",:option="option",disabled="value")
    v-touch(tag="button",class="rebtn",@tap="checkdate")
     span 查询
   li.betToggle(v-show='$store.state.betToggle')
    span 总投注 :  {{$store.state.betamount}}
    span 总收益 :  {{$store.state.winlose}}
  table(class="input_record")
   th
    tr
     td(v-for="item in $store.state.records") {{item.text}}
   tbody(ref="viewBox")
    tr(v-for="Data in $store.state.recordDatas")
     td {{Data.order}}
     td {{Data.number}}
     td {{Data.time}}
     td {{Data.quota}}
     td {{Data.winlost}}
</template>
<script>
    import myDatepicker from "vue-datepicker";
    const data={
    	selected_1:"",
    	selected_2:"",
    	ths:[{
           text:"订单号"
    	},{
          text:"日期"
    	},{
          text:"类别"
    	},{
    	  text:"说明"
    	},{
    	  text:"金额"
    	}],
    	startTime:{
    		time:""
    	},
    	endtime:{
    		time:""
    	},
    	option: {
	   		type: 'day',
	   		week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
	   		month: ['一月份', '二月份', '三月份', '四月份', '五月份', '六月份', '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份'],
	   		format: 'YYYY-MM-DD',
	   		color: {
	   			header: '#1c648a',
	   			headerText: '#fff'
	   		},
	   		inputStyle: {
	   			'display': 'inline-block',
	   			'padding': '6px',
	   			'line-height': '22px',
	   			'font-size': '16px',
	   			'border': '2px solid #fff',
	   			'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
	   			'border-radius': '2px',
	   			'color': '#000'
	   		},
	   		buttons:{
	   			ok: '确认',
	   			cancel: '取消'
	   		},
	   		overlayOpacity: 0.3,
	   	},
    }
	export default{
		data(){
			return data;
		},
		components:{
			'date-picker':myDatepicker
		},
		mounted:function(){
				let times = new Date();
				let startmonth = times.getMonth() + 1;
				let startyear = times.getFullYear();
				let startday = times.getDate();
				let starttimer = startyear + "-" + startmonth + "-" + startday;
				this.endtime.time = starttimer;
				let dayBefore = new Date().getTime() - 24 * 60 * 60 * 1 * 1000;
				let before = new Date(dayBefore);
				let endmonth = before.getMonth() + 1;
				let endyear = before.getFullYear();
				let endday = before.getDate();
				let endtimer = endyear + "-" + endmonth + "-" + endday;
				this.startTime.time= endtimer;
			   this.scroll();
			   this.$nextTick(function(){
			   	let H = window.innerHeight;
			   	let mtitle=document.getElementById("mtitle");
			    var mtitle_height=mtitle.offsetHeight
			   	this.$refs.record.style.height=H-mtitle_height+"px";
			   })
		},
		methods:{
			checkdate(){
        this.$store.state.showEnd=true;
				this.$store.state.page=1;
				this.$store.state.recordDatas=[];
				this.$store.state.totalNumber=1;
        this.$store.state.startTime=this.startTime.time;
        this.$store.state.endTime=this.endtime.time;
        this.$store.dispatch("recordData");
			},
			scroll(){
	         	var viewBox=this.$refs.viewBox;
	         	viewBox.addEventListener('scroll',()=>{
	 	             const top=viewBox.scrollTop
	               const viewBox_child_h=viewBox.childNodes[1].clientHeight;
	               const viewBox_child_n=viewBox.childNodes.length;
	               const viewBox_child_total=viewBox_child_h*viewBox_child_n;
                const viewBox_minus=viewBox_child_h*(8+viewBox_child_n/100);
                  if(top>viewBox_child_total-viewBox_minus){
                    if(this.$store.state.showEnd){
	 	              	this.$store.dispatch("recordData");
                    }
                  }
	         	})
			},
			in_select2(){
				this.$store.commit("change_select2",this.$store.state.selectData_1);
			}
		}
	}
</script>
<style lang="scss">
   @import "../../assets/css/main.scss";
  .betToggle{
    @extend %font24;
    height:1rem !important;
    display:flex;
    align-items:center;
    >span{
      margin-right:0.5rem;
    }
  }
  .record{
    @extend %m0a;
  }
	.rwrap{
    @extend %font25,%bz;
		color:#666666;
		background-color:#fff;
		border-bottom:2px solid $bc;
		padding-left:0.3125rem;
		padding-right:0.3125rem;
		padding-top:0.46875rem;
		font-weight:600;
		.title{
     @extend %textAlign_left;
        svg{
          @extend %posr;
        	width:0.46rem;
        	height: 0.3125rem;
        	top:0.05rem;
        	margin-right:0.1rem;
        }
		}

	}
	.recontent{
		background-color:#f9f9f9;
		margin-top:0.39rem;
		>li{
			@extend %bz;
			height:1.09375rem;
			border-top:1px solid $bc;
			padding-left:0.3rem;
		}
		.status{
			padding-top:0.28rem;
			option{
				font-size:50%;
			}
			p{
        @extend %fl;
          span{
            @extend %font25;
            transform:scale(0.95);
         };
			 }
			p:last-child{
				margin-left:0.3rem;
			}
			select{
			  @extend %font24;
				width:1.5rem;
				padding-left:0.1rem;
				margin-left:0.2rem;
				height:0.48rem;
			}
		}
		.search{
      @extend %textAlign_left;
      display:flex;
      align-items:center;
      height:1.3rem;
      span{
        @extend %font25;
        transform:scale(0.95);
      };
			input{
        @extend %bz,%border,%font24;
				width:2.34rem;
				height:0.500rem;
				padding-left:0.2 !important;
				padding-top:0rem !important;
				padding-bottom:0rem !important;
				padding-right:0rem !important;
				box-shadow:none;
				margin-left:0.25rem;
			}
		}
	}
	.rebtn{
		background-color:#2a8fbd;
		color:#fff;
		outline:none;
		border:none;
		width:1.0625rem;
    height:0.58rem;
		line-height:0.58rem;
		border-radius:0.1rem;
		margin-left:0.23rem;
    span{
      @extend %font24,%scale0.9;
    }
	}
	.input_record{
		width:100%;
		th{
			display: block;
			line-height:0.70rem;
			border:{
				top:1px solid $bc;
				bottom:1px solid $bc;
			}
       td{
        @extend %font24,%scaleTable0.9,%textAlign_center;
       	width:20%;
       	width:1.9rem;
       	font-weight:600;
       }
		}
		tbody{
			margin:0.5rem 0 0.6rem 0;
			height:6.4rem;
			overflow-y: scroll;
			display: block;
			border-bottom:1px solid $bc;
			tr{
			 height:0.8rem;
       display:flex;
       align-items:center;
				td{
           @extend %font16,%scaleTable0.75,%textAlign_center;
			     width:20%;
           flex-shrink:1;
         	 font-weight:normal;
				}
			}
		}
	}
.cov-date-body[data-v-60d492c0] {
    left: 45rem !important;
    width:6.25rem !important;
    @extend %font24;
}
[data-dpr="1"] .cov-date-body[data-v-60d492c0] {
    left: 5rem !important;
    width:7.25rem !important;
    margin:0 auto;
    @extend %font24 ;
}
.cov-date-caption[data-v-60d492c0]{
	 @extend %font26;
}
[data-dpr="1"] .cov-date-caption[data-v-60d492c0]>span,
.cov-date-caption[data-v-60d492c0]>span>small{
	 @extend %font26;
}
.datepicker-overlay[data-v-60d492c0] {
    left: 40rem !important;
}
[data-dpr="1"] .datepicker-overlay[data-v-60d492c0]{
  left: 0rem !important;
}
.cov-picker-box[data-v-60d492c0] {
	 width:6.25rem !important;
	 height:4.375rem !important;
}
[data-dpr="1"] .cov-picker-box[data-v-60d492c0]{
	 width:8rem !important;
	 height:6rem !important;
   padding:0.4rem 0.4rem 0 0.4rem !important;
}
//头部
.cov-date-monthly>div[data-v-60d492c0] {
    height: 2.34rem !important;
}
[data-dpr="1"] .cov-date-monthly{
    height: 2.8rem !important;
}
[data-dpr="1"] .cov-date-monthly>div[data-v-60d492c0] {
    height: 2.8rem !important;
}
.button-box[data-v-60d492c0] {
    height: 0.78rem !important;
}
[data-dpr="1"] .button-box[data-v-60d492c0] {
    height: 0.8rem !important;
    padding-bottom: 0.18rem;
}
</style>

<template lang="jade">
#overlayer
 .layContent
  ul.cen_bind(v-show="$store.state.layer.binds[0].main_bind")
   v-touch.sec_close(tag="li",@tap="sec_close") Ⅹ
   li
    label 账户姓名
    input(v-model="$store.state.center.truename")
   li
    label 账(卡)号
    input(v-model="$store.state.center.bank_account")
   li
    label 出款密码
    input(type="password",v-model="$store.state.center.bank_password")
   li
    label 银行名称
    select(v-model="$store.state.center.bankselect")
      option(value="7") 工商银行
      option(value="9") 交通银行
      option(value="11") 农业银行
      option(value="13") 建设银行
      option(value="15") 招商银行
      option(value="17") 民生银行
      option(value="19") 深圳银行
      option(value="21") 中信银行
      option(value="23") 光大银行
      option(value="25") 华夏银行
      option(value="27") 广东发展银行
      option(value="29") 中国邮政储蓄银行
      option(value="31") 中国银行
      option(value="33") 兴业银行
      option(value="83") 东莞农村商业银行
      option(value="81") 北京农商银行
      option(value="79") 浙江稠州商业银行
      option(value="77") 顺德农商银行
      option(value="73") 汉口银行
      option(value="71") 广州农商银行
      option(value="69") 晋商银行
      option(value="67") 温州银行
      option(value="63") 杭州银行
      option(value="61") 广州银行
      option(value="59") 东莞银行
      option(value="57") 渤海银行
      option(value="55") 东亚银行
      option(value="51") 上海农村商业银行
      option(value="49") 广州市商业银行
      option(value="47") 南京银行
      option(value="45") 宁波银行
      option(value="43") 平安银行
      option(value="41") 上海银行
      option(value="39") 天津银行
      option(value="37") 北京银行
      option(value="35") 上海浦东发展银行
      option(value="85") 甘肃银行
      option(value="95") 浙商银行
   li
    label 银行支行
    input(v-model="$store.state.center.bank_address")
   v-touch.binBtn(@tap="bankbind") 确定

  ul.cen_bind(v-show="$store.state.layer.binds[1].main_bind")
   v-touch.sec_close(tag="li",@tap="sec_close") Ⅹ
   li
    label 旧密码
    input(v-model="$store.state.center.oldNewMoney",type="password")
   li
    label 新密码
    input(v-model="$store.state.center.outNewMoney",type="password")
   li.secTip 由4-12位数字组成
   li
    label 确认密码
    input(v-model="$store.state.center.conNewMoney",type="password")
   v-touch.binBtn(@tap="outNewMoney") 确定
   //-修改登录密码
  ul.cen_bind(v-show="$store.state.layer.binds[2].main_bind")
   v-touch.sec_close(tag="li",@tap="sec_close") Ⅹ
   li
    label 旧密码
    input(v-model="$store.state.center.oldPass",type="password")
   li
    label 新密码
    input(v-model="newPass",type="password")
   li
    label 确认密码
    input(v-model="$store.state.center.newPass",type="password")
   v-touch.binBtn(@tap='changeloginpassword') 确认
  //-绑定邮箱
  ul.cen_bind(v-show="$store.state.layer.binds[3].main_bind")
   v-touch.sec_close(tag="li",@tap="sec_close") Ⅹ
   li
    label 您的邮箱
    input(v-model="$store.state.center.qwenumber")
   v-touch.binBtn(@tap='qewBind("email")') 确认
   //-QQ账号绑定
  ul.cen_bind(v-show="$store.state.layer.binds[4].main_bind")
   v-touch.sec_close(tag="li",@tap="sec_close") Ⅹ
   li
    label QQ账号
    input(v-model="$store.state.center.qwenumber")
   v-touch.binBtn(@tap='qewBind("qq")') 确认
   //-微信账号绑定
  ul.cen_bind(v-show="$store.state.layer.binds[5].main_bind")
   v-touch.sec_close(tag="li",@tap="sec_close") Ⅹ
   li
    label 微信账号
    input(v-model="$store.state.center.qwenumber")
   v-touch.binBtn(@tap='qewBind("wechat")') 确认
</template>
<script>
	export default{
    data(){
      return{
        newPass:""
      }
    },
	   mounted:function(){
	   	this.$nextTick(function(){
	   	})
	   },
	   methods:{
	   	 cen_firm(){
           this.$store.commit("close_cenlayer");
	   	 },
       bankbind(){
          this.$store.commit('bankBind');
       },
       sec_close(){
          this.$store.commit("sec_close");
       }
       ,
       qewBind(value){
         if(value=="email"){
           const reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
           let testEmail =reg.test(this.$store.state.center.qwenumber);
            if(testEmail){
              this.$store.commit('qewBind',value);
            } else if(this.$store.state.center.qwenumber==""){
              this.$store.commit("centerTip",7);
            }else{
              this.$store.commit("centerTip",10);
            }
         }else if(value=="qq"){
           if(this.$store.state.center.qwenumber==""){
             this.$store.commit("centerTip",7);
           }else{
            this.$store.commit('qewBind',value);
           }
         }else if(value=="wechat"){
           if(this.$store.state.center.qwenumber==""){
             this.$store.commit("centerTip",7);
           }else{
             this.$store.commit('qewBind',value);
           }
         }
       },
       //出款密码修改
       outNewMoney(){
         let [password,cpword]=[this.$store.state.center.outNewMoney,this.$store.state.center.conNewMoney]
        const numReg=/^\d{4,12}$/g;
        const n=numReg.test(password);
        if(password!==''&&cpword!==''&&password!==cpword){
          this.$store.commit('registerTip','输入两次密码不相等');
        }else if(password==""||cpword==""){
          this.$store.commit("centerTip",7);
        }else if(n){
          this.$store.commit("outNewMoney");
        }else{
          this.$store.commit('registerTip','输入格式错误');
        }

       },
       changeloginpassword(){
          const promise = new Promise((resolve, reject)=> {
            if(this.$store.state.center.oldPass==""||this.newPass==""||this.$store.state.center.newPass==""){
               resolve();
            }else{
              reject();
            }
          });
         promise.then(()=>{
           this.$store.commit("centerTip",7);
         },()=>{
             let password=/[\w]{8,16}$/g;
             var passwordz=password.test(this.newPass);
              if(!passwordz){
                this.$store.commit("centerTip",12);
              } else if(this.newPass!==this.$store.state.center.newPass){
                this.$store.commit("centerTip",13);
              }else{
                this.$store.commit("changeloginpassword");
                this.newPass=this.$store.state.center.newPass
              }
         })
       }
	   }
	}
</script>
<style lang="scss">
  @import "../../../assets/css/main.scss";
  .sec_close{
    @extend %abso;
    width:0.78rem;
    height:0.78rem !important;
    line-height:0.78rem;
    border-radius:100%;
    color:#fff;
    text-align:center;
    background-color:#1c648a;
    top:-0.4rem;
    right:-0.3rem;
  }
	#overlayer{
		width:100%;
		height:100%;
		background-color:rgba(0,0,0,0.25);
		position:fixed;
		z-index:9999;
    top:0;
	}
	.layContent{
	  @extend %posr,%bz;
		width:7rem;
		background-color:#fff;
		margin:0 auto;
		padding-top:0.8rem;
		padding-bottom:0.5rem;
    box-shadow:0rem 0.18rem 0.35rem rgba(0,0,0,0.25);
		top:3rem;
	}
	.cen_bind{
	  @extend %m0a;
		width:80%;
		text-align:left;
    li:first-child{
      line-height:0.75rem;
    }
		li{
			margin-bottom:0.3rem;
			height:0.7rem;
      line-height:0.7rem;
			label{
				line-height:0.5rem;
			}
      input{
       @extend %fr;
       border:1px solid #dedede;
       width:3.5rem;
       height:0.6rem;
       display:block;
			}
      select{
        @extend %fr;
        width:3.55rem;
        height:0.6rem;
      }
		}
	}
	.binBtn{
	  @extend %m0a;
		margin-top:0.5rem;
		width:1.5rem;
		line-height:0.6rem;
		background-color:#1c648a;
		color:#fff;
		border-radius:0.1rem;
		text-align:center;
	}
  .secTip{
    @extend %font24,%bz,%posr;
    height:0.5rem !important;
    margin:0!important;
    top:-0.45rem;
    text-align:right;
    color:#ea4558;
  }
</style>

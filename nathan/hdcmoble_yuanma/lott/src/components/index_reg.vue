<template lang='jade'>
.register
  .loginlogo(style="height:4rem;padding-top:1rem;")
    .content
  .regMod
    form(@submit.prevent="")
      .modItem
       label.label 推广码 :
       input(@click='showTip("proCode")',placeholder="请输入推广码",v-model="prmCode")
       .showerror(:class="{'errorH':prmtip.error,'trueH':prmtip.succ}",v-show='prmtip.showerror')
       .tip(v-show='prmtip.showtip') 4位纯数字(必填)
        span
         icon(name='info')
      .modItem
        label(class='label') 用户名 :
        input(@click='showTip("username")',v-model='username',placeholder="请输入用户名")
        div(class='showerror',:class="{'errorH':utip.error,'trueH':utip.succ}",v-show='utip.showerror')
        .tip(v-show='utip.showtip') 6-12位,小写字母或数字(不支持符号)
          span
            icon(name='info')
      .modItem
        label(class='label') 密码 :
        input(@click='showTip("password")',v-model='password',placeholder="请输入密码",type="password")
        .showerror(:class="{'errorH':ptip.error,'trueH':ptip.succ}",v-show='ptip.showerror')
        .tip(v-show='ptip.showtip') 6-16位,数字或英文(不支持符号)
          span
            icon(name='info')
      .modItem
        label(class="label") 确认密码 :
        input(@click='showTip("con_password")',v-model='con_password',placeholder="再次输入密码",type="password")
        .showerror(:class="{'errorH':fptip.error,'trueH':fptip.succ}",v-show='fptip.showerror')
        .tip(v-show='fptip.showtip') 保持确认密码一致
          span
            icon(name='info')
      .modItem
        label(class="label") 手机 :
        input(@click='showTip("phone")',v-model='phone',placeholder="请输入手机号",type="text")
        .showerror(:class="{'errorH':phtip.error,'trueH':phtip.succ}",v-show='phtip.showerror')
        .tip(v-show='phtip.showtip') 手机号码须符合规格且必须填写
          span
            icon(name='info')
      .modItem
        label(class="label") 验证码 :
        input(style="width:4.5rem;",v-model="vid",@click="showTip('yzm')",placeholder="请输入验证码",type="text")
        img(class="regvic",:src="$store.state.url+'dist/php/vc.php'")
        .showerror(:class="{'errorH':yztip.error,'trueH':yztip.succ}",v-show='yztip.showerror')
        .tip(v-show='yztip.showtip') 请输入验证码
          span
            icon(name="info")
      v-touch(tag="button",@tap="post()",class="t_btn",style="box-shadow:none;margin-bottom:1rem;margin-top:1rem;")  注册
  v-touch(@tap="backend('register')",style="margin-top:1rem",class="Backindex")
   icon(name="home",style="width:0.75rem;")
   span(style="width:2.8rem;text-align:center;") 返回首页
</template>
<script>
	export default{
        data(){
        	return {
            username:null,
            password:null,
            con_password:null,
            phone: "",
            vid: "",
            vid_boolean:null,
            prmCode:null,
            prmtip:{
              showtip:false,
        			showerror:false,
        			error:false,
        		  succ:false,
            },
        		utip:{
        			showtip:false,
        			showerror:false,
        			error:false,
        		  succ:false,
        		},
        		ptip:{
        			showtip:false,
        			showerror:false,
        			error:false,
        		  succ:false,
        		},
        		fptip:{
        			showtip:false,
        			showerror:false,
        			error:false,
        		    succ:false,
        		},
        		phtip:{
        			showtip:false,
        			showerror:false,
        			error:false,
        		    succ:false,
        		},
        		yztip:{
        			showtip:false,
        			showerror:false,
        			error:false,
        		  succ:false,
        		}
        	}
        },
        watch:{
         prmCode(){
           this.prmjude();
         },
         username(){
             this.$store.state.register.Globalusername=this.username;
             this.usejudg();
         },
         password(){
           this.$store.state.register.Globalpassword=this.password;
           this.passjudg();
         },
         con_password(){
           this.fpassjudg();
         },
         phone(){
           this.phonejudg();
         }
        },
        mounted:function(){
          this.$store.state.register.Globalusername=""
          this.$store.state.register.Globalpassword=""
        },
        methods:{
        	// prevent(e){
        	// 	e.preventDefault();
        	// 	return false
        	// },
        	showTip(value){
            switch(value){
              case 'proCode':
              this.prmtip.showtip=true;
              break;
              case 'username':
              this.utip.showtip=true;
              break;
              case 'password':
               this.ptip.showtip=true;
              break;
              case 'con_password':
               this.fptip.showtip=true;
              break;
              case 'phone':
               this.phtip.showtip=true;
              break;
              case 'yzm':
               this.yztip.showtip=true;
              break;
            }
        	},
          prmjude(){
            let prm=/^[0-9]{4}$/g;
            if(prm.test(this.prmCode)){
              this.prmtip.succ=true;
              this.prmtip.error=false;
              this.prmtip.showerror=true;
              this.prmtip.showtip=false;
            }else{
              this.prmtip.succ=false;
              this.prmtip.error=true;
              this.prmtip.showerror=false;
              this.prmtip.showtip=true;
            }

          },
        	usejudg(){
        		let num=this.$store.state.register.Globalusername.length;
        		if(6<=num&&num<=12){
        			this.utip.succ=true
              this.utip.error=false
              this.utip.showerror=true
              this.utip.showtip=false
        		}else{
        			this.error=true
        			this.utip.showerror=true
        		}
        		//长短
        		let username=/^[^A-Z][a-z0-9]{5,11}$/g;
        		if(!username.test(this.$store.state.register.Globalusername)){
        			this.utip.error=true
        			this.utip.showerror=true
        		}
        	},
        	//判断密码
            passjudg(){
            	 let num=this.$store.state.register.Globalpassword.length;
            	 if(6<=num&&num<=16){
            	 	this.ptip.succ=true
                this.ptip.error=false
                this.ptip.showerror=true
                this.ptip.showtip=false
            	 }else{
            	 	this.ptip.error=true
        			  this.ptip.showerror=true
            	 }
            	 let password=/[a-z0-9]{6,16}$/g;
            	 if(!password.test(this.$store.state.register.Globalpassword)){
            	 	this.ptip.error=true
        			  this.ptip.showerror=true
            	 }
            },
            fpassjudg(){
            	let pass= this.password;
              let fpass=this.con_password;
                if(pass==fpass){
            	 	this.fptip.succ=true
                    this.fptip.error=false
                    this.fptip.showerror=true
                    this.fptip.showtip=false
                }
        	     if(pass!=fpass||fpass==""){
    	       	    this.fptip.error=true
    	       	    this.fptip.showerror=true
    	       	    this.fptip.showtip=true
                 }
            },
            phonejudg(){
                 let num =this.phone.length;
                 if(num!==11){
                    this.phtip.error=true
    	       	    this.phtip.showerror=true
    	       	    this.phtip.showtip=true
                 }
                 let phone=/^1[3|4|5|7|8|][0-9]{9}/g;
                 if(phone.test(this.phone)){
                 	this.phtip.succ=true
                  this.phtip.error=false
                  this.phtip.showerror=true
                  this.phtip.showtip=false
                 }
            },
            post(){
                this.axios({
                 method:"get",
                 url:this.$store.state.url+'dist/php/check/check-vcode.php',
                 headers:this.$store.state.register.headers,
                 params:{
                     name:this.vid
                 }
                }).then((response)=>{
                  this.vid_boolean=response.data;
                  if(this.prmtip.showerror&&this.fptip.showerror&&this.utip.showerror&&this.ptip.showerror&&this.phtip.showerror&&this.vid_boolean==true){
                    this.ref_user();
                 	}else if(this.prmtip.showerror&&this.fptip.showerror&&this.utip.showerror&&this.ptip.showerror&&this.phtip.showerror&&this.vid_boolean==false){
                     this.$store.commit("registerTip","验证码输入错误");
                   }else if(this.prmtip.showerror==false||this.fptip.showerror==false||this.utip.showerror==false||this.ptip.showerror==false||this.phtip.showerror==false){
                       this.$store.commit("registerTip","注册格式填写错误");
                   }
                })
            },
            ref_user(){
              this.axios({
                method:'get',
                  url:this.$store.state.url+"dist/php/check/check-user.php",
                  headers:this.$store.state.register.headers,
                  params:{
                    username:this.$store.state.register.Globalusername,
                  }
              }).then((response)=>{
                if(response.data==211004){
                    this.$store.commit("registerTip","用户名已经存在");
                }else{
                  this.register();
                }
              })
           },
            register(){
              this.axios({
                method:'get',
                url:this.$store.state.url+"dist/php/ac.php?action=register",
                headers:this.$store.state.register.headers,
                params:{
                   username:this.$store.state.register.Globalusername,
                   password:this.$store.state.register.Globalpassword,
                   url:window.location.href,
                   phone:this.phone,
                   agent:this.prmCode
                }
              }).then((response)=>{
                if(response.data.code==211020){
                    this.$store.commit("registerTip",response.data.msg);
                }else if(response.data.code==201018){
                    this.$store.commit("registerTip","用户注成功");
                    this.$store.dispatch("login");
                }
              })
            },
            backend(value){
              this.$store.commit("regbackend",value);
            }
        }
	}
</script>
<style lang="scss">
	@import "../assets/css/main.scss";
  .regvic{
    width:rem2px(140);
    height:rem2px(55);
    position:relative;
    top:0.3rem;
    right:0rem;
  }
	.regMod{
		padding-left:rem2px(80);
		padding-right:rem2px(80);
		@extend %bz;
		width:100%;
		background-color:#fff;
		form{
			padding-top:.5rem;
		}
		.modItem{
			position: relative;
			display: table;
			padding:rem2px(12) 0;
			width: 100%;
			height: rem2px(100);
			border-bottom: 1px solid #dbdbdb;
			input{
       @extend %fl;
       @extend %font25;
       width:rem2px(320);
       height: rem2px(50);
       position:relative;
       top:0.3rem;
       border:none;
       padding-left:0.3rem;
			}
			::-webkit-input-placeholder{
				color:#a9a9a9;
			}
		}
	}
	.label {
    @extend %font26;
    display:table-cell;
    width: rem2px(150);
    text-align: left;
    line-height:1.23rem;
    letter-spacing: 0.01rem;
    color:#000;
    text-align:left;
    padding-left:0.16rem;
    }
    .r_btn{
    	text-align: center;
	    height: 1.14rem;
	    line-height: 1.14rem;
	    border-radius: .08rem;
    }
   .tip{
      @extend %font24;
      width:100%;
      position:absolute;
      top:rem2px(90);
      left:rem2px(160);
      color:#886426;
      text-align:left;
      span{
        display: block;
        float:left;
      	width:rem2px(14);
        height:rem2px(14);
      	line-height:rem2px(12);
      	background-color:#886426;
      	text-align: center;
      	border-radius:100%;
      	margin-right:rem2px(8);
      	position:relative;
      	top:rem2px(5);
        svg{
        	color:#fff;
          width:rem2px(8);
          height:rem2px(8);
        }
      }
   }
   .showerror{
	    @include Bg("confirm.png",rem2px(52),rem2px(55))
	    background-size: 150%;
	    position:absolute;
	    right:0;
	    top:rem2px(25);
   }
   .trueH{
   	 background-position::rem2px(10) center;
   }
   .errorH{
   	  background-position:rem2px(-35) center;
   }
</style>

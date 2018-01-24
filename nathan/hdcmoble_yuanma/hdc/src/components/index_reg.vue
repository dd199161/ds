<template lang='jade'>
.register
  .loginlogo
    .content
  .regMod
    form(@submit.prevent="")
      .modItem
        label(class='label') 用户名 :
        input(@click='showTip("username")',v-model='username',placeholder="请输入用户名",type="text")
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
        label.label QQ号码 :
        input(@click='showTip("qq")',placeholder="请输入QQ号码",v-model="qq")
        .showerror(:class="{'errorH':qqtip.error,'trueH':qqtip.succ}",v-show='qqtip.showerror')
        .tip(v-show='qqtip.showtip')  QQ号码必须填写且为6-15位数字
         span
          icon(name='info')
      .modItem
        label.label 微信号码 :
        input(@click='showTip("wechat")',placeholder="请输入微信号码",v-model='wechat')
        .showerror(:class="{'errorH':wetip.error,'trueH':wetip.succ}",v-show='wetip.showerror')
        .tip(v-show='wetip.showtip')  微信号必须填写且且为6-15位数字和字母
         span
          icon(name='info')
      .modItem
        label.label 手机 :
        input(@click='showTip("phone")',v-model='phone',placeholder="请输入手机号",type="text")
        .showerror(:class="{'errorH':phtip.error,'trueH':phtip.succ}",v-show='phtip.showerror')
        .tip(v-show='phtip.showtip') 请填写正确的号码以免已经出款
          span
            icon(name='info')
      .modItem
        label(class="label") 验证码 :
        input(v-model="vid",@click="showTip('yzm')",placeholder="请输入验证码",type="text")
        img(class="regvic",:src="$store.state.url+'dist/php/vc.php'")
        .showerror(:class="{'errorH':yztip.error,'trueH':yztip.succ}",v-show='yztip.showerror')
        .tip(v-show='yztip.showtip') 请输入验证码
          span
            icon(name="info")
      v-touch(tag="button",@tap="post()",class="t_btn",style="background-color:#4abb7a;box-shadow:none;margin:0.6rem 0;")  注册
  v-touch(@tap="$store.commit('regbackend')",style="margin-top:0.0rem",class="Backindex")
   icon(name="home",style="width:0.45rem;")
   span(style="width:2.8rem;text-align:center;") 返回首页
</template>
<script>
	export default{
        data(){
        	return {
            username:null,
            password:null,
            con_password:null,
            qq:null,
            wechat:null,
            phone: "",
            vid: "",
            vid_boolean:null,
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
            qqtip:{
              showtip:false,
              showerror:false,
              error:false,
              succ:false
            },
            wetip:{
              showtip:false,
              showerror:false,
              error:false,
              succ:false
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
         },
         qq(){
           this.qqjudg();
         },
         wechat(){
           this.wechatjudg();
         }
        },
        mounted:function(){
          this.$store.state.register.Globalusername=""
          this.$store.state.register.Globalpassword=""
        },
        methods:{
        	prevent(e){
        		e.preventDefault();
        	},
        	showTip(value){
            switch(value){
              case 'username':
              this.utip.showtip=true;
              break;
              case 'password':
               this.ptip.showtip=true;
              break;
              case 'con_password':
               this.fptip.showtip=true;
              break;
              case 'qq':
              this.qqtip.showtip=true;
              break;
              case 'wechat':
               this.wetip.showtip=true;
              break;
              case 'phone':
               this.phtip.showtip=true;
              break;
              case 'yzm':
               this.yztip.showtip=true;
              break;
            }
        	},
          qqjudg(){
            if(/^[0-9]{6,15}$/g.test(this.qq)){
              this.qqtip.succ=true;
              this.qqtip.error=false;
              this.qqtip.showerror=true;
              this.qqtip.showtip=false;
            }else{
              this.qqtip.error=true;
              this.qqtip.showerror=true;
            }
          },
          wechatjudg(){
            if(/^[0-9a-zA-Z]{6,20}$/g.test(this.wechat)){
              this.wetip.succ=true;
              this.wetip.error=false;
              this.wetip.showerror=true;
              this.wetip.showtip=false;
            }else{
              this.wetip.error=true;
              this.wetip.showerror=true;
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
        		let username=/^[^A-Z][0-9a-z]{5,11}$/g;
        		if(!username.test(this.$store.state.register.Globalusername)){
        			this.utip.error=true
        			this.utip.showerror=true
        		}
        	},
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
            	 let password=/[a-z0-9]{6,16}$/;
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
                }).then(response=>{
                  this.vid_boolean=response.data;
                  if(this.qqtip.showerror
                     &&this.wetip.showerror
                     &&this.fptip.showerror
                     &&this.utip.showerror
                     &&this.ptip.showerror
                     &&this.phtip.showerror
                     &&this.vid_boolean==true){
                     this.ref_user();
                 	}else if(
                    this.qqtip.showerror&&this.wetip.showerror
                     &&this.fptip.showerror&&this.utip.showerror
                     &&this.ptip.showerror&&this.phtip.showerror
                     &&this.vid_boolean==false){
                     this.$store.commit("registerTip","验证码输入错误");
                   }else if(this.qqtip.showerror==false||this.wetip.showerror==false||this.fptip.showerror==false||this.utip.showerror==false||this.ptip.showerror==false||this.phtip.showerror==false){
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
              }).then(response=>{
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
                   wechat:this.wechat,
                   qq:this.qq
                }
              }).then(response=>{
                if(response.data.code==211020){
                    this.$store.commit("registerTip",response.data.msg);
                }else if(response.data.code==201018){
                    this.$store.commit("registerTip","用户注成功");
                    this.$store.dispatch("login");
                }
              })
            }
        }
	}
</script>
<style lang="scss">
	@import "../assets/css/main.scss";
  .regvic{
    @extend %posr;
    width:2.4rem;
    height:0.9rem;
    top:0.3rem;
    right:-0.3rem;
  }
	.loginlogo{
    padding:1.1rem 0 .8rem;
    height:2.9rem;
    @extend %bz;
        background: linear-gradient(#549CE6,#56d3bd);
        .content{
          @include Bg("loginlogo.png",2.5rem,.9rem)
          @extend  %bsc,%m0a;
        }
   }
	.regMod{
	  @extend %bz;
		padding-left:0.48rem;
		padding-right:0.48rem;
		width:100%;
		background-color:#fff;
		form{
			padding-top:.5rem;
		}
		.modItem{
      @extend %posr;
			display: table;
			padding: .1rem 0;
			width: 100%;
			height: .8rem;
			border-bottom: 1px solid #dbdbdb;
			input{
       @extend %fl,%posr;
       width:3.75rem;
       height: .86rem;
       top:0.3rem;
       padding-left:0.3rem;
       border:none;
			}
			::-webkit-input-placeholder{
				color:#a9a9a9;
			}
		}
	}
	.label {
    @extend %font26,%textAlign_left;
    display: table-cell;
    width: 2rem;
    line-height: 1.23rem;
    letter-spacing: 0.01rem;
    padding-left:0.16rem;
    }
    .r_btn{
      @extend %textAlign_center;
	    height: 1.14rem;
	    line-height: 1.14rem;
	    border-radius: .08rem;
    }
   .tip{
      @extend %font24,%abso,%textAlign_left;
      width:5.5rem;
      top:1.15rem;
      left:2.2rem;
      color:#2a8fbd;
      span{
       @extend %fl,%posr,%textAlign_center;
        display: block;
      	width:0.26rem;
      	line-height:0.26rem;
      	background-color:#2a8fbd;
      	border-radius:100%;
      	margin-right:0.1rem;
      	top:0.02rem;
        svg{
        	color:#fff;
          width:0.15rem;
          height:0.15rem;
        }
      }
   }
   .showerror{
	    @include Bg("confirm.png",.8rem,1rem);
      @extend %abso;
	    background-size: 160%;
	    right:0;
	    top:0.4rem;
   }
   .trueH{
   	 background-position:0.1rem 0.1rem;
   }
   .errorH{
   	  background-position:-0.68125rem center;
   }
</style>

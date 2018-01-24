<template lang="jade">
.login
 .loginlogo(style="height:3.2rem;padding-top:1.2rem")
  .content
 form(@submit.prevent="")
  .passItem
    p
     icon(style="width:0.45rem;",name="user-o")
     input(v-model="$store.state.register.Globalusername",class="input",placeholder="请输入账号",type="text")
    p
     icon(name="lock")
     input(v-model="$store.state.register.Globalpassword",class="input",placeholder="请输入密码",type="password")
  .passInter
    p
     v-touch(@tap='login',tag="button",class="t_btn",type="button") 登录
 v-touch(ref="confirm",@tap="$store.commit('loginToreg')",class="Backindex",style="margin-top:1.50rem;")
  icon(name='user-plus')
  span 注册新用户
 v-touch(@tap="$store.commit('regbackend','login')",class="Backindex",style="margin:0.55rem auto")
  icon(name="home",)
  span(style="width:2.1rem;text-align:center;") 返回首页
</template>
<script>
	export default{
        data(){
            return{
                username:"",
                password:""
            }
        },
        mounted:function(){
         this.$store.state.register.Globalusername=""
         this.$store.state.register.Globalpassword=""
        },
		methods:{
            login(){
                const username=this.$store.state.register.Globalusername
                const user_yz=/^[^A-Z][0-9a-z]{2,11}$/g;
                var yz=user_yz.test(username);
                if(this.$store.state.register.Globalusername==""||this.$store.state.register.Globalpassword==""){
                       this.$store.commit('registerTip','请输入账号和密码')
                  }else{
                    if(yz==true){
                       this.$store.dispatch('login');
                     }else if(yz==false){
                         this.$store.commit("registerTip","用户名格式错误");
                     }
                  }
            }
		}
	}
</script>
<style lang="scss">
 @import "../assets/css/main.scss";
 	.loginlogo{
 	  @extend %bz;
    padding: .8rem 0 .8rem;
    height:2.5rem;
    background: linear-gradient(#549CE6,#56d3bd);
     .content{
       @include Bg("loginlogo.png",2.5rem,.9rem)
       @extend  %bsc,%m0a;
     }
    }
.passItem {
    background-color: #fff;
    border-bottom: 1px solid #dbdbdb;
    p:last-child{
       border-bottom: none;
    }
    p{
	    margin: 0 auto;
	    display: table;
	    padding: .3rem 0;
	    height: .6rem;
	    border-bottom: 1px solid #dbdbdb;
	    svg{
	      @extend %posr;
	    	width:0.65rem;
	    	height:0.65rem;
	    	top:0.2rem;
	    	color:#2c3e50;
	    }
    }
}
.login .input {
    @extend %posr;
    display: table-cell;
    padding-left: .5rem;
    height: .7rem;
    line-height: .7rem;
    width: 6rem;
    height: .86rem;
    line-height: .86rem;
    margin-left:0.2rem;
    border:none;
    ::-webkit-input-placeholder{
				color:#a9a9a9;
			}
}
.passInter{
	margin-top:0.4rem;
}
.toRegister{
  @extend %font28;
	width: 8.6rem;
  height: 1.21875rem;
  outline: none;
  border: 2px solid #2a8fbd;
  border-radius: 0.2rem;
  color:#2a8fbd;
}
</style>

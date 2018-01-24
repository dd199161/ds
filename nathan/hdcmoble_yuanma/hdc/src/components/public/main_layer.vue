<template lang="jade">
.wrap
 .tips.login(v-if="$store.state.layer.loging_status")
  icon.fa-spin(name="spinner",style="color:#52a3c8;width:1.5rem;height:1.2rem;")
 .tips(v-else) {{$store.state.layer.main_message}}
</template>
<style lang="scss">
  .main_layer{
  	 width:100%;
  	 height:100%;
  	 position:absolute;
  	 top:0;
  	 z-index:100;
     .wrap{
      display:-webkit-flex;
      justify-content: center;
     }
     .login{
       top:8rem;
       background-color:rgba(0,0,0,.14) !important;
       width:1.6rem;
       padding:0.5rem 0.5rem 0.1rem 0.5rem !important;
       margin:0 !important;
     }
  	 .tips,.tips_2{
  	 	background:rgba(0,0,0,0.4);
  	 	color:#fff;
  	 	position:relative;
  	 	z-index:200;
  	 	padding:0 0.5rem;
  	 	margin:0 auto;
  	 	line-height:1rem;
      top:8rem;
      border-radius: 0.18rem;
      letter-spacing: 0.05rem;
  	 }
  }
</style>

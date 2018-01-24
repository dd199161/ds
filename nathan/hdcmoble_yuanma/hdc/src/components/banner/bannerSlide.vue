<template lang="jade">
 .banner
  -for(var i=0;i<3;i++)
   transition(enter-active-class="fadeIn")
    div(class='bann_src#{i+1}',v-show='banners[#{i}].toggle')
</template>
<script>
	export default{
    data(){
      return {
        banners:[{
          toggle:true,
        },{
          toggle:false,
        },{
          toggle:false
        }]
      }
    },
    mounted:function(){
      let bannertoggle=(value)=>{
        this.banners.forEach((banner)=>{
          Vue.set(banner,'toggle',false)
        });
        Vue.set(this.banners[value],'toggle',true);
      }
       function* banner(){
        while(true){
           yield bannertoggle(0);
           yield bannertoggle(1);
           yield bannertoggle(2);
         }
       }
       var b=banner();
       setInterval(()=>{
         b.next()
      },4000);
    }
	}
</script>
<style lang="scss">
.banner{
  width:10rem;
  height:4.01rem;
  display:flex;
}
@for $i from  1 through 3{
  .bann_src#{$i}{
    width:10rem !important;
    height:4.01rem !important;
    background:url(../../assets/banner-#{$i}.jpg) no-repeat 0 0 /10rem 4.01rem;
  }
}
</style>

<template lang="jade">
.index
 bSlide
 .marqu
  .marr
   icon(name="bullhorn")
   marquee(scrollamount=4)
    span {{$store.state.getNotice}}
 .ishow
  .head
  .center
   v-touch(tag="p",@tap="swiperTo(1,1)")
   v-touch(tag="p",@tap="swiperTo(1,0)")
   v-touch(tag="p",@tap="swiperTo(1,3)")
  div.tipHead_1(style="margin-top:0.51rem;")
  p(style="width:1.03rem;margin-top:0.230rem;",class="line")
 .ipromotion
  -for(var i=0;i<3;i++)
   v-touch(tag="p",@tap="swiperTo(2)")
 .iseu
  div.tipHead(style="margin-top:0.35rem;")
  .line(style="width:1.03rem;margin-top:0.265rem;")
  .up
   p
   p
  .down
   p
   p
</template>
<script>
  import bSlide from './banner/bannerSlide.vue';
	export default{
       components:{
       	 bSlide
       },
       methods:{
          swiperTo(mainValue,gameValue){
            if(mainValue==1){
              this.$store.commit("showToCenter",{main:mainValue,game:gameValue});
            }else{
              this.$store.commit("swiperTopage",mainValue);
            }
          },
          getNotice(){
            this.axios({
              method:'get',
              url:this.$store.state.url+'dist/php/ac.php?action=getnotice',
              headers:this.$store.state.register.headers,
              params:{
                note_type:1
              }
            }).then((response)=>{
              this.$store.state.getNotice="";
              response.data.info.forEach((item)=>{
                this.$store.state.getNotice+=`${item.note_content} `;
              })
            })
          }
       },
       mounted:function(){
         setTimeout(()=>{this.getNotice()},200)
       }
	}
</script>
<style lang="scss">
  @import "../assets/css/main.scss";
  .tipHead_1{
    @extend %m0a;
    @include Bg('showTip1.png',2.85rem,0.296875rem);
    background-size:2.85rem,0.296875rem;
  }
  .tipHead{
    @extend %m0a;
    @include Bg('showTip2.png',3.5rem,0.3125rem);
    background-size:3.5rem 0.3125rem;
  }
  .logo{
  	@extend %fl,%bsc;
    @include Bg("logo.png",1.625rem,0.64rem);
     margin:0.125rem 0 0 0.578rem;
  }
  .marqu{
  	 @include Bg('marBg.jpg',100%,0.53125rem);
     @extend %flex_center,%bz,%font16;
     justify-content:flex-end;
     width:10rem;
     height:0.53125rem;
  	 background-size:100% 0.53125rem;
  	 color:#565656;
  	 .marr{
  	   @extend %fl;
       width:75%;
       display:flex;
       align-items:center;
  	 	svg{
        display:inline-block;
  	 		color:#d1151b;
  	 		width:0.25rem;
  	 		height:0.25rem;
       vertical-align:middle;
  	 	}
	    >marquee{
	      @extend %bz;
	    	width:6.5rem;
        height:0.4rem;
        line-height:0.4rem;
	    	margin-left:0.3rem;
        span{
          @extend %scale0.8;
          padding-right:0.8rem;
        }
	    }
  	 }
  }
  .ishow{
    @extend %bz;
    width: 10rem;
    height:4.375rem;
  	padding-top:0.468rem;
  	.head{
      @extend %m0a,%bsc;
  		@include Bg("showHead.png",3.125rem,0.78rem)
  	}
  	.center{
  	  @extend %flex_center;
  		height:1.4rem;
  		margin:0.225rem 0 0 0rem ;
  		p{
        @extend %bsc;
  		}
      @for $i from 1 through 3{
        p:nth-child(#{$i}){
          @if($i==1){
             @include Bg("sgame.png",2.82rem,1.28rem)
             margin-top:0.12rem;
          }@else if($i==2){
              @include Bg("sdealer.png",3.01rem,1.56rem)
              margin:0 0.158rem;
          }@else{
            margin-top:0.10rem;
            @include Bg("slottery.png",2.82rem,1.28rem)
          }
        }
      }
  	}
  	.bottom{
      @extend %font24,%m0a;
  		color:#4b4b4b;
  		margin-top:0.50rem;
  		width:3rem;
  		font-weight:500;
  	}
  }
  .ipromotion{
    @extend %flex_center,%bz;
    width:10rem;
  	height:2.265rem;
  	background-color:#f7f7f7;
  	padding-top:0.265rem;
  	p{
  		@extend %bsc;
  	}
    @for $i from 1 through 3{
      p:nth-child(#{$i}){
        @include Bg('iprom'+$i+".png",2.93rem,1.78rem);
        border-radius:0.1rem;
        background-size:100%;
        @if($i==1){
        }@else if($i==2){
          margin:0 0.1875rem 0;
        }
      }
    }
  }
  .line{
    @extend %m0a;
  	background-color:#4b4b4b;
  	height:0.033rem;
  }
  .iseu {
     @extend %w10rem;
  		height:4.14rem;
  	 .head{
  	 	@extend %font24;
  	 }
  	 .up{
  	  @extend %m0a;
  	 	width:8rem;
  	 	height:0.65rem;
  	 	margin-top:0.56rem;
    	 	p{
    	 		@extend %bsc;
    	 	}
    	 	p:first-child{
    	 		@include Bg("scu_1.png",3.10rem,0.578rem)
    	 		@extend %fl;
    	 	}
    	 	p:last-child{
    	 		@include Bg("scu_2.png",3.375rem,0.60rem)
    	 		@extend %fr;
    	 	}
  	 }
  	 .down{
  	   @extend %m0a;
  	 	width:8.4rem;
  	 	margin-top:0.6rem;
  	 	p{
  	 		@extend %bsc;
  	 	}
  	 	p:first-child{
  	 		@include Bg("scu_3.png",3.20rem,0.6rem)
  	 		@extend %fl;
  	 		margin-left:0.22rem;
  	 	}
  	 	p:last-child{
  	 		@include Bg("scu_4.png",3.578rem,0.53rem)
  	 		@extend %fr;
  	 	}
  	 }
  }
</style>

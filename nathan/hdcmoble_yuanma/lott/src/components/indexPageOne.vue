<template lang="jade">
.index
 .bann_src1
 .marqu
  .marr
   marquee(scrollamount=4)
    {{$store.state.getNotice}}
 .ishow
  .navIndex
   .top
    v-touch(tag='div',@tap="swiperTo(1,0)")
    v-touch(tag='div',@tap="swiperTo(2)")
    v-touch(tag='div',@tap="appDown()")
   .bottom
    v-touch(tag='div',@tap="swiperTo(1,0)")
    v-touch(tag='div',@tap="swiperTo(3,0)")
</template>
<script>
	export default{
       methods:{
          swiperTo(mainValue,gameValue){
            if(mainValue==1){
              this.$store.commit("showToCenter",{main:mainValue,game:gameValue});
            }else if(mainValue==3){
              window.open('https://chat7.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=913399&configID=61797&jid=6150774221&s=1','_self')
            }else{
              this.$store.commit("swiperTopage",mainValue);
            }
          },
          appDown(){
            this.$store.state.App_layer=true;
            this.$store.state.Tip_1='android下载地址';
            this.$store.state.Tip_2='ios下载地址';
            this.$store.state.downloadAppToggle=true;
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
              for(let i=0;i<(response.data.info).length;i++){
                 this.$store.state.getNotice+=`${response.data.info[i].note_content}`;
              }
            })
          }
       },
       mounted:function(){
          setTimeout(()=>{this.getNotice();},200)
       }
	}
</script>
<style lang="scss">
  @import "../assets/css/main.scss";
  .bann_src1{
    width:rem2px(750) !important;
    height:rem2px(300) !important;
    @include Bg('banner-1.jpg',rem2px(750),rem2px(300));
    background-size:cover;
  }
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
     @include Bg("logo.png",rem2px(105),rem2px(36))
     margin-left:rem2px(30);
  }
  .marqu{
  	 @include Bg('marBg.jpg',100%,rem2px(47));
     @extend %m0a;
     display:flex;
     align-items:center;
     justify-content:flex-end;
     width:rem2px(750);
     height:rem2px(47);
  	 background-size:100% ;
  	 box-sizing:border-box;
  	 color:#fff;
  	 @extend %font16;
  	 .marr{
       width:75%;
       @extend %fl;
       display:flex;
       align-items:center;
	    >marquee{
	      color:#fff;
	    	width:rem2px(500);
        height:rem2px(40);
        line-height:rem2px(40);
        vertical-align:middle;
        span{
          margin-right:rem2px(200);
        };
	    }
  	 }
  }
  .ishow{
    @include Bg('index_bg.jpg',rem2px(750),rem2px(790));
  	box-sizing:border-box;
    background-size:rem2px(750) rem2px(790);
  }
  .navIndex{
    .top{
      display:flex;
      justify-content:center;
      padding-top:rem2px(110);
      >div:nth-child(2){
         margin:0 rem2px(90);
      }
      @for $i from 1 through 3{
        >div:nth-child(#{$i}){
          @include Bg('nav_t'+$i+".png",rem2px(148),rem2px(138));
          @extend %bsc;
        }
      }
    }
    .bottom{
      display:flex;
      justify-content:center;
      margin-top:rem2px(5);
        div:last-child{
          margin-left:rem2px(100);
        }
        @for $i from 1 through 2{
          >div:nth-child(#{$i}){
            @include Bg('nav_b'+$i+'.png',rem2px(148),rem2px(138));
            @extend %bsc;
          }
        }
    }
  }
</style>

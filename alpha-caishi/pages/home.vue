<template src="../templates/home/index.html"> </template>
<style src="../assets/c8css/index1.css">

</style>
<style lang="scss">
  .one_r .g_con ul {
    float: left;
  }
  .one_r .g_con {
    width: 100%;
    position: relative;
    overflow: hidden;
    min-height: 400px;
  }
  .one_r .g_con ul {
    float: left;
    width: 33.33%;
  }
  .qiehuan {
    position: absolute;
    top: 0;
    left: 0;
  }
  .p_n {
    width: 70px;
    text-align: center;
    line-height: 30px;
    padding: 10px 0;
    color: #cbcbcb;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
  }
  .p_n .c_prev {
    color: #6fade1;
  }
  .g_con .qiehuan {
    .cqssc {
      background-position: -198px -58px;
    }
    .sd11x5 {
      background-position: -133px -192px;
    }
    .sh11x5 {
      background-position: -133px -188px;
    }
    .plsw {
      background-position: -133px -320px;
    }
    .bjpk10 {
      background-position: 0 -382px;
    }
    .txffc {
      background-position: -463px -252px;
    }
  }
</style>
<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import { delayAjax } from '~/plugins/ajax'
  import initLikes from '~/util/initLikes'
  import { DeviceType } from '~/plugins/UA'
  import News from '~/components/News'
  import Vue from 'vue'
  import { Collapse, CollapseItem,Carousel,CarouselItem} from 'element-ui'
  Vue.use(Collapse)
  Vue.use(Carousel)
  Vue.use(CarouselItem)
  Vue.use(CollapseItem)
  export default {
    name: 'home',
    fetch({
      store,
      app,
      redirect,
      from
    }) {
      if(!store.state.user.token)
        //from.name === 'login',it fix login page f5 refresh redirect '/home'
        return from && from.name === 'login' ? redirect('/login') : Promise.resolve()
      return store.dispatch('getNews')
      // return initLikes(store,app,redirect)
    },
    async asyncData({
      app,
      store
    }) {
      if(!store.state.user.token) return {
        openList: []
      }
      return {
        openList: (await app.$axios.$post('lottery-issue/get-lottery-info-opened')).data.issues.map(_ => ({ ..._.content
        }))
      }
    },
    data() {
      return {
        gy: [{
          name: '关于我们'
        }, {
          name: '联系我们'
        }, {
          name: '合作伙伴'
        }, {
          name: '存款帮助'
        }, {
          name: '取款帮助'
        }, {
          name: '常见问题'
        }, {
          name: '负责任博彩'
        }, ],
        ssc: [{
          lotname: '重庆时时彩'
        }, {
          lotname: '天津时时彩'
        }, {
          lotname: '新疆时时彩'
        }],
        tsc: [{
          lotname: '腾讯分分彩'
        }, {
          lotname: '首尔1.5分彩'
        }, {
          lotname: '纽约1.5分彩'
        }, {
          lotname: '韩国1.5分彩'
        }, {
          lotname: '东京1.5分彩'
        }, {
          lotname: '北京5分彩'
        }, {
          lotname: '台湾5分彩'
        }],
        phc: [{
          lotname: '菲律宾1.5分彩'
        }, {
          lotname: '菲律宾2分彩'
        }, {
          lotname: '菲律宾5分彩'
        }],
        qtc: [{
          lotname: '迪拜一分彩'
        }, {
          lotname: '迪拜二分彩'
        }, {
          lotname: '迪拜五分彩'
        }],
        ocf: [{
          lotname: "上海11选5"
        }, {
          lotname: "江西11选5"
        }, {
          lotname: "广东11选"
        }],
        dpc: [{
          lotname: '体彩排列3'
        }, {
          lotname: '福彩3D'
        }],
        ksc: [{
          lotname: '江苏快3'
        }, {
          lotname: '上海快3'
        }],
        qwc: [{
          lotname: '上海时时乐'
        }, {
          lotname: '北京赛车'
        }],
        vrc: [{
          lotname: 'VR火星1.5分彩'
        }, {
          lotname: 'VR火星2分彩'
        }, {
          lotname: 'VR火星3分彩'
        }],
        openList: [],
        advertisements: [],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          simulateTouch: false,
          autoplay: 6000,
          loop: true,
          speed: 1400,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev'
        }
      }
    },
    created() {
      if(this.$store.state.version) {
        this.getAd()
        this.$store.dispatch('admin/getBox')
        this.$store.dispatch('get3rdGames')
      } else {
        this.authResolve()
      }
    },
    components: {
      News
    },
    methods: {
    	ScrollImgLeft() {
        var MyMar = null;
        var scroll_begin = document.getElementById("scroll_begin");
        var scroll_end = document.getElementById("scroll_end");
        var bannerAdvConR = document.getElementById("bannerAdvConR");
        console.log(scroll_end.innerHTML)
        scroll_end.innerHTML = scroll_begin.innerHTML;
        scroll_begin.innerHTML += scroll_begin.innerHTML;

        function Marquee() {
          if(scroll_end.offsetWidth - bannerAdvConR.scrollLeft <= 0) {
            bannerAdvConR.scrollLeft -= scroll_begin.offsetWidth;
          } else {
            bannerAdvConR.scrollLeft++;
          }
        }
        MyMar = setInterval(Marquee, 100);
        bannerAdvConR.onmouseover = function() {　　　　　　　
          clearInterval(MyMar);　　　　　
        }　　　　
        bannerAdvConR.onmouseout = function() {　　　　　　　
          MyMar = setInterval(Marquee, 100);　　　　　　　　　
        }
      },
      async authResolve() {
        this.$store.dispatch('lotto/getTypes')
        // initLikes(this.$store,this)
        delayAjax(this.$axios, this.$store, () => {
          this.$store.dispatch('getNews')
          this.$store.dispatch('admin/getBox')
          this.$store.dispatch('get3rdGames')
        })
        this.$axiosPlus('lottery-issue/get-lottery-info-opened', data => (this.openList = data.issues.map(_ => ({ ..._.content
        }))))
        this.getAd()
      },
      getAd() {
        this.$axiosPlus('advertisement/get', {
          type: 1,
          device_type: DeviceType
        }, ({
          advertisements
        }) => {
          this.advertisements = advertisements.map(_ => ({ ..._.content
          }))
          this.jQueryRun()
        })
      },
      // revertLikes() {
      //   this.$store.commit('play-likes/setPre', this.ensureLikes)
      //   this.$store.commit('play-likes/setActive', 'revert')
      // }
      jQueryRun() {
        if(process.server) return
        const $ = require('jquery')
        if(!this.jQueryRunEnd) {
          // $(".nav_menu,.nav_list").niceScroll({
          // 	cursorcolor: "#444F69",
          // 	mousescrollstep: 40,
          // 	scrollspeed: 100,
          // 	autohidemode: "hidden",
          // 	cursorborder: "0px solid #fff",
          // });
          $('.user_icon a').click(function() {
            $('.n_bg').hide()
          })
          $('.nav a').mouseover(function() {
            $('.n_bg').show()
            $('.n_bg').stop().animate({
              left: $(this).position().left + 5
            }, '3000')
          })
          $('.nav a').mouseout(function() {
            $('.n_bg').stop().animate({
              left: $('.nav a.active').position().left + 5
            }, '3000')
          })
          // $('.nav a').click(function(){
          // 	$(this).addClass('active').siblings().removeClass('active');
          // });
          $('.logo_b1').animate({
            width: '285px'
          }, 2000)
          $('.logo_b2').animate({
            width: '287px'
          }, 1800)
          $('.logo_b3').animate({
            width: '310px'
          }, 1500)
          setTimeout(function() {
            $('#top .logo img').fadeIn(300)
          }, 2000)
          $('.an_in li a').click(function() {
            $(this).addClass('active').siblings().removeClass('active')
          })
          var clickm = function() {
            $('.an_in li').eq($(this).index()).show().siblings().hide()
            $('.an-nav').addClass('mob')
            $('body').addClass('menu_active')
            if(document.body.clientWidth < 1200) {
              $('.mo_men').show()
            }
          }
          var Chuangkou = function() {
            $('body').addClass('menu_active')
            $('.nav_menu li').bind('click', clickm)
          }
          if(document.body.clientWidth < 1300) {
            Chuangkou()
          }
          // if(document.body.clientWidth<768){
          //     $('.lottery_games,.an_in a').attr('target','_blank');
          // };
          $('.mo_men').click(function() {
            $('body').removeClass('menu_active')
            $(this).hide()
            $('.an-nav').removeClass('mob')
          })
          $('.mobliem').click(function() {
            $('#top .nav').stop().slideToggle()
            $('.mobliem').toggleClass('activetm')
            $('#top .nav a').click(function() {
              $('#top .nav ').hide()
              $('.mobliem').removeClass('activetm')
            })
          })
          $(window).resize(function() {
            if(document.body.clientWidth < 1300) {
              Chuangkou()
            } else if($('body').hasClass('menu_active')) {
              $('body').removeClass('menu_active')
            }
          })
        }
        this.jQueryRunEnd = true
      }
    },
    computed: { ...mapGetters({
        likes: 'play-likes/preLikes',
        ensureLikes: 'play-likes/likes'
      })
    },
    mounted() {
      function QieHuan() {
        $('.qiehuan').css({
          width: $('.one_r .g_con').width() * $('.one_r .g_con ul').length
        })
        var i = 0
        var w = $('.one_r .g_con').width()
        var s = $('.one_r .g_con ul').length
        $('.c_prev').click(function() {
          i = i - w
          if(i < -2 * w || i == -2 * w) {
            i = -2 * w
            $(this).css({
              color: '#CBCBCB'
            })
          } else {
            $(this).css({
              color: '#6FADE1'
            })
            $('.c_next').css({
              color: '#6FADE1'
            })
          }
          $('.qiehuan').animate({
            left: i + 'px'
          }, 500)
        })
        $('.c_next').click(function() {
          i = i + w
          if(i > w || i == w) {
            i = 0
            $(this).css({
              color: '#CBCBCB'
            })
          } else {
            $(this).css({
              color: '#6FADE1'
            })
            $('.c_prev').css({
              color: '#6FADE1'
            })
          }
          $('.qiehuan').animate({
            left: i + 'px'
          }, 500)
        })
      }
      QieHuan();
      
	    this.ScrollImgLeft();
      // $(".notice_list").niceScroll({
      //         cursorcolor: "#F7F7F7",
      //         mousescrollstep: 40,
      //         scrollspeed: 100,
      //         autohidemode: "hidden",
      //         cursorborder: "0px solid #fff",
      //     });
    }
  }
</script>
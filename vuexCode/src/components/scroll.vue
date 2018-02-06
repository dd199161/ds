<template>
  <div class="scroll">
    <div id="bannerAdvConR" ref="bannerAdvConR">
      <div id="scroll_begin" ref="scroll_begin">申博太阳城即日起公司入款享受1%返利优惠，线上支付享受0.6%返利，优惠无上</span>
      </div>
      <div id="scroll_end" ref="scroll_end">1</div>
    </div>
  </div>
</template>
<script>
  export default {
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
        MyMar = setInterval(Marquee, 80);
        bannerAdvConR.onmouseover = function() {　　　　　　　
          clearInterval(MyMar);　　　　　
        }　　　　
        bannerAdvConR.onmouseout = function() {　　　　　　　
          MyMar = setInterval(Marquee, 80);　　　　　　　　　
        }
      }
    },
    mounted() {
      this.ScrollImgLeft();
    }
  }
</script>
<style>
  #bannerAdvConR {
    height: 26px;
    line-height: 26px;
    overflow: hidden;
    white-space: nowrap;
    width: 853px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #333;
  }
  #scroll_begin, #scroll_end {
    display: inline;
  }
  .pad_right {
    display: inline-block;
    padding-right: 2em;
  }
</style>
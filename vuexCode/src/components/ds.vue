<template>
  <div class="ds">
    <div class="block">
      <el-carousel trigger="click" height="500px" :interval="3000">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="bannerAdv">
      <div class="bannerAdvC">
        <div class="bannerAdvConL">
          <img src="../assets/indexHome/adv.png" />最新公告： </div>
        <div class="bannerAdvConR"> 申博太阳城即日起公司入款享受1%返利优惠，线上支付享受0.6%返利，优惠无上限，全天24小时不限次数提款0手续费， </div>
      </div>
    </div>
    <div class="content">
      <div class="contentBox"> 1 </div>
    </div>
    <div class="games">
      <div class="gamesF">
        <div class="gamesFbox">
          <div class="gameCon">
          	<div class="gameTop"></div>
          	<div class="gameTitle">
          		<b>电子游戏</b><span>SLOTS GAME</span>
          	</div>
          	<div class="gameConSize">
          		<p>目前最具创意及创新的合法博彩平台，2018年始大胆革新的思维使其<br>迅速在市场上占得一席之地</p>
          	</div>
          	<div class="ganmeBut">
          		<!--<ul class="ganmeButf">
          			<li><a href="javacrpit:;"><img src="../assets/indexHome/game_11.jpg" alt="" /></a></li>
          			<li><a href="javacrpit:;"><img src="../assets/indexHome/game_22.jpg" alt="" /></a></li>
          		</ul>
          		<ul class="ganmeButUls">
          			<li><a href="javacrpit:;"><img src="../assets/indexHome/game_33.jpg" alt="" /></a></li>
          			<li><a href="javacrpit:;"><img src="../assets/indexHome/game_44.jpg" alt="" /></a></li>
          			<li><a href="javacrpit:;"><img src="../assets/indexHome/game_55.jpg" alt="" /></a></li>
          		</ul>-->
          		<ul class="ganmeButf">
          			<li><a href="javacrpit:;"></a></li>
          			<li><a href="javacrpit:;"></a></li>
          		</ul>
          		<ul class="ganmeButUls">
          			<li><a href="javacrpit:;"></a></li>
          			<li><a href="javacrpit:;"></a></li>
          			<li><a href="javacrpit:;"></a></li>
          		</ul>
          	</div>
          	<div class="gameRight">
          	</div>
          </div>
        </div>
      </div>
      <div class="gamesS">
        <div class="gamesSbox">
          <ul class="gamesSboxT">
            <li>
              <a href="javascript:;">
                <img src="../assets/indexHome/game1.jpg" /> 
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/indexHome/game2.jpg" /> 
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/indexHome/game3.jpg" /> 
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/indexHome/game4.jpg" /> 
              </a>
            </li>
          </ul>
          <div class="gamesSboxF">
            <ul class="gamesSboxFootUl">
              <li v-for="(gys,index) in gy">
                <a href="javascript:;">{{gys.name}}</a>
              </li>
            </ul>
            <p>Copyright © 彩狮娱乐 Reserved</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
    	<ul>
    		<li></li>
    	</ul>
    </div>
  </div>
</template>
<script>
  export default {
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
        }, ]
      }
    }
  }
</script>
<style lang="scss">
	@import "../assets/css/main.scss";
  body {
    margin: 0;
    padding: 0;
  }
  .ds {
    width: 100%;
  }
  .el-carousel__item h3 {
    background: url(../assets/indexHome/banner1.jpg) no-repeat;
    height: 500px;
    width: 100%;
    background-size: 100% 100%;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  ul.el-carousel__indicators {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 38px;
    /*background: url(../assets/indexHome/el-carousel.png) no-repeat;*/
    align-items: center;
  }
  li.el-carousel__indicator {
    border-radius: 50%;
    width: 14px;
    height: 14px;
    padding: 0;
    margin-right: 4px;
  }
  .el-carousel__indicator.is-active {
    /*background: red;*/
  }
  .el-carousel__indicator button {
    border-radius: 50%;
    width: 14px;
    height: 14px;
  }
  .el-carousel__button {
    /*background: #E2B200;*/
    background: #fff;
  }
  .bannerAdv {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    background: #F3F3F3;
    & .bannerAdvC {
      display: flex;
      align-items: center;
      width: 1100px;
      height: 35px;
      font-weight: bold;
      & img {
        margin-right: 12px;
      }
      & .bannerAdvConR {
        display: flex;
        align-items: center;
        height: 33px;
        width: 80%;
        font: 16px/33px "微软雅黑";
        color: #8C8C8C;
      }
    }
  }
  .content {
    display: flex;
    justify-content: center;
    height: 436px;
    & .contentBox {
      background: red;
      width: 1100px;
    }
  }
  .games {
    padding-top: 77px;
    background: #F3F3F3;
    height: 610px;
    border-top: 1px solid #E1E1E1;
    & .gamesF {
      background: #F5F5F5;
      & .gamesFbox {
        display: flex;
        justify-content: center;
        background: #ECC233;
        height: 392px;
        & .gameCon {
          width: 1100px;
          position: relative;
          padding-top:57px;
          & .gameTop{
          	background: url(../assets/indexHome/five-game-platform.jpg) no-repeat;
          	width: 273px;
          	height: 114px;
          	position: absolute;
          	top:-57px;
          }
          & .gameTitle{
          	display: flex;
          	align-items: center;
          	font-size: 24px;
          	height: 64px;
          	& b{
          		display: flex;
          		height: 64px;
          		line-height: 64px;
          		border-bottom: 2px solid #474443;
          		margin-right: 13px;
          	}
          	& span{
          		display: flex;
          		font-size: 14px;
          	}
          }
          & .gameConSize{
          	position: relative;
          	z-index: 2;
          	font-size: 14px;
          }
          & .ganmeBut{
          	& ul{
          		display: flex;
          		margin: 0;
          		padding: 0;
          		& li{
          			display: flex;
          			margin-right: 20px;
          		}
          	}
          	& .ganmeButUls{
          		margin-left: 52px;
          	}
          	& .ganmeButf{
          		
          	}
          }
          & .gameRight{
          	position: absolute;
          	top:-76px;
          	right: -90px;
          	background: url(../assets/indexHome/gameRight.jpg) no-repeat ;
          	width: 816px;
          	height: 468px;
          }
        }
      }
    }
    & .gamesS {
      display: flex;
      justify-content: center;
      & .gamesSbox {
        width: 1100px;
        height: 218px;
        & .gamesSboxT {
          display: flex;
          margin: 0;
          padding: 0;
          & li {
            display: flex;
            height: 136px;
          }
        }
      }
      & .gamesSboxF {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        & .gamesSboxFootUl {
          display: flex;
          padding: 0;
          margin: 0;
          margin-top: 22px;
          & li {
            display: flex;
            height: 12px;
            align-items: center;
            border-right: 1px solid #B5B5B5;
            & a {
              display: flex;
              align-items: center;
              text-decoration: none;
              color: #B5B5B5;
              font-size: 12px;
              padding: 0px 15px;
            }
          }
          & li:last-child{
          	border-right: 0px solid green;
          }
        }
        & p {
          display: flex;
          flex-direction: column;
          padding: 0;
          margin: 0;
          margin-top: 15px;
          color: #B5B5B5;
          font-size: 12px;
        }
      }
    }
  }
  
  .ganmeButf li:nth-child(1){
		background: url(../assets/indexHome/game_11.jpg) no-repeat;
		width: 94px;
		height: 94px;
	}
	.ganmeButf li:nth-child(1):hover{
		background: url(../assets/indexHome/game11.jpg) no-repeat;
		width: 94px;
		height: 94px;
	}
	.ganmeButf li:nth-child(2){
		background: url(../assets/indexHome/game_22.jpg) no-repeat;
		width: 94px;
		height: 94px;
	}
	.ganmeButf li:nth-child(2):hover{
		background: url(../assets/indexHome/game22.jpg) no-repeat;
		width: 94px;
		height: 94px;
	}
	.ganmeButUls li:nth-child(1){
		background: url(../assets/indexHome/game_33.jpg) no-repeat;
		width: 94px;
		height: 94px;
	}
	.ganmeButUls li:nth-child(1):hover{
		background: url(../assets/indexHome/game33.jpg) no-repeat;
		width: 94px;
		height: 94px;
	}
	.ganmeButUls li:nth-child(2){
		background: url(../assets/indexHome/game_44.jpg) no-repeat;
		width: 94px;
		height: 94px;
	}
	.ganmeButUls li:nth-child(2):hover{
		background: url(../assets/indexHome/game44.jpg) no-repeat;
		width: 94px;
		height: 94px;
	}
	.ganmeButUls li:nth-child(3){
		background: url(../assets/indexHome/game_55.jpg) no-repeat;
		width: 94px;
		height: 94px;
	}
	.ganmeButUls li:nth-child(3):hover{
		background: url(../assets/indexHome/game55.jpg) no-repeat;
		width: 94px;
		height: 94px;
	}
	
  .footer {
    display: flex;
    justify-content: center;
    height: 72px;
    background: #1B1B1B;
    & ul{
    	display: flex;
    	margin: 0;
    	padding: 0;
    	& li{
    		display: flex;
	    	background: url(../assets/indexHome/_out_01.jpg) no-repeat;
	    	height: 72px;
	    	width: 1100px;
	    }
    }
    
  }
</style>
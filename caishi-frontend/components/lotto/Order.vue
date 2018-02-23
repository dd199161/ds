<template>
  <div class="order_list ">
    <div class="order-box">
      <div class="order-title">
        <div>
          <span></span>购彩篮
          <input type="text" v-model="num8"/>
          <i class="el-icon-arrow-up"></i>
          <ul style="display:none;">
            <li v-for="(jinbi,index) in jinbis" @click="jinbiC(index)">{{ jinbi }}</li>
          </ul>
        </div>
        <div class="order-title-but"><button>追号投注</button><button>清空</button></div>
      </div>
      <div class="order-head">
        <ul>  
          <li class="play">玩法</li>
          <li class="numb">号码</li>
          <li class="zhu">注数</li>
          <!-- <span class="multi">倍</span> -->
          <li class="money">单注金额</li>
          <li class="mode">模式</li>
          <li class="">返点</li>
          <li class="">总金额</li>
          <li class="">操作</li>
        </ul>
        <!-- <span class="play">玩法</span>
      <span class="numb">号码</span>
      <span class="zhu">注数</span>
      <span class="multi">倍</span>
      <span class="money">单注金额</span>
      <span class="mode">模式</span>
      <span class="">返点</span>
      <span class="">总金额</span>
      <span class="">操作</span> -->
      </div>
      <div class="order-bd">
        <ul class="betting-list">
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li v-for="({playName,bet_count,money_unit},index) in order" :key="index">
            <el-tooltip placement="top" :content="playName" :disabled="tipable(playName)">
              <span>{{playName}}</span>
            </el-tooltip>
            <span>{{bet_count}}</span>
            <el-input-number v-model="multiples[index]" controls-position="right" :min="1" size="mini" @change="change(null,index)" class="input-number-super-mini"></el-input-number>
            <span>{{amounts[index] | round2}}</span>
            <span>
              <i class="el-icon-close" @click="del(index)"></i>
            </span>
          </li>
        </ul>
        <div class="betting-total">共
          <em class="total-amount" lottery="total-bet-number">{{count}}1</em>注，总金额
          <em class="total-money" lottery="total-bet-money">{{totalAmount | round3}}1111</em>元，可用余额
          <em>11111</em>元
        </div>
      </div>
      <!-- <div class="betting-bottom">
        <a class="btn btn-bg betting-confirm" id="betting-confirm" lottery="add_bet" @click="lottoRoot.bet">
          <i class="icon iconfont">&#xe66b;</i> 确认投注 </a>
        <a class="btn btn-bg" id="betting-append" data-command="ZhuiHao" @click="lottoRoot.getChase">
          <i class="icon iconfont">&#xe633;</i>追号投注 </a>
      </div> -->
    </div>
    <div class="order-right">
      <h2>确认投注</h2>
      <p>截止时间</p>
      <p>00:00:00</p>
    </div>
  </div>
</template>
<script>
  import { sumBy } from 'lodash'
  import { mapMutations } from 'vuex'
  export default {
    name: 'play-order',
    data() {
      return {
        num8:"随机一注",
        jinbis: ['随机五注', '随机十注', '随机二十注'],
      }
    },
    inject: ['lottoRoot'],
    methods: {
      change(val, i) {
        this.$nextTick(() => {
          const {
            order
          } = this
          //[vuex] Do not mutate vuex store state outside mutation handlers.
          // order[i].multiple = this.multiples[i]
          order[i] = { ...order[i],
            multiple: this.multiples[i]
          }
          // this.set(order) test multiples only change 3 times
          this.set([...order])
        })
      },
      del(index) {
        const order = [...this.order]
        order.splice(index, 1)
        this.set(order)
      },
      tipable(value) {
        let length = value.length
        let cn = value.match(/[\u4e00-\u9fa5]/g)
        return(cn ? cn.length + length : length) <= 10
      },
      ...mapMutations({
        set: 'lotto/setOrder'
      })
    },
    computed: {
      order() {
        return this.$store.state.lotto.order
      },
      count() {
        // return this.order.reduce((prev,next) => ({bet_count:prev.bet_count + next.bet_count}),{bet_count:0}).bet_count
        return sumBy(this.order, 'bet_count')
      },
      amounts() {
        return this.order.map(
          ({
            bet_count,
            money_unit
          }, index) => bet_count * this.lottoRoot.betAmount * this.multiples[index] * (10 / Math.pow(10, money_unit)))
      },
      totalAmount() {
        return this.amounts.reduce((prev, next) => prev + next, 0)
      },
      multiples() {
        return this.order.map(_ => _.multiple)
      }
    }
  }
</script>

<style lang="scss">
  
</style>
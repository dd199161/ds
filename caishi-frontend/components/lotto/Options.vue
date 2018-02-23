<template>
  <div style="display:flex;">
    <div class="play-options">
      共<span class="play-count">{{count}}</span>注
      <div class="play-amount-unit d-flex align-items-center">
        单注金额
        <div>
          <input type="text" v-model="num8" />
          <i class="el-icon-arrow-up"></i>
          <ul>
            <li v-for="(jinbi,index) in jinbis" @click="jinbiC(index)">{{ jinbi }}</li>
          </ul>
        </div>
        <el-button v-for="(unit,index) in ['元','角','分']" :key="index" :class="{selected:index === unitIndex}" @click="select(index)">
          {{unit}}
        </el-button>
      </div>
      <div>共 <strong>{{amount | round3}}</strong>元</div>
      <div>赔率 1.98</div>
      <!-- <div>奖金 <strong>{{bonus | round3}}</strong>元，盈利 <strong>{{profit | round3}}</strong>元</div> -->
    </div>
    <div><button>梭哈</button>当前奖金：<strong>{{bonus || baseBonusCal * unit * groupVal | round3}}</strong>元</div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import { mapGetters } from 'vuex'
import {minus} from 'number-precision'
export default {
  name:'lotto-options',
  inject: ['lottoRoot'],
  props:['max'],
  //max value is Number,it can't reactive
  // props:{
  //   max:{
  //     default(){
  //       const {getMaxBonus,playInfo} = this.lottoRoot
  //       return getMaxBonus(playInfo.max_bet_prize_group)
  //     }
  //   }
  // },
  data(){
    return {
      unitIndex:0,
      multiple:1,
      num8: 500,
      jinbis: ['500', '1000', '10000'],
      groupVal:this.max //reposal options named value
    }
  },
  methods:{
    jinbiC(index) {
      this.num8 = this.jinbis[index];
    },
    select(index){
      this.unitIndex = index
    }
  },
  computed:{
    ...mapGetters({
      count:'lotto/betCount'
    }),
    ...mapGetters([
      'bonusGroup',
      'minBonusGroup'
    ]),
    baseBonusCal(){
      return this.lottoRoot.playInfo.cal_prize_base
    },
    unit(){
      //1=1元, 2=1角, 3=1分, 4=1厘
      return 10/Math.pow(10,this.unitIndex + 1)
    },
    amount(){
      const {count,multiple,unitIndex,unit} = this
      return count * multiple * this.lottoRoot.betAmount * unit
    },
    bonus(){
      const {groupVal,amount,baseBonusCal,unit,multiple} = this
      return amount ? groupVal * baseBonusCal * unit * multiple : 0
    },
    profit(){
      return minus(this.bonus,this.amount)
    },
    point(){
      const {bonusGroup,groupVal} = this
      return (bonusGroup - groupVal)/20
    }
    
  },
}
</script>

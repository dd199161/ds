<template>
  <div class="lottery">
    <div class="lottery_top">
      <issue ref="issue" />
      <div class="t_l fl_l">
        <!-- css selector not support '1min' -->
        <div class="c_pic fl_l" :class="lottoName === '1min' ? `s${lottoName}` : lottoName"></div>
        <div class="c_ld fl_l">
          <a :href="trendHref" target="_blank">
            走 势 图<i class="icon iconfont">&#xe6a1;</i>　</a>
          <nuxt-link :to="`/${betType[0][1]}/${lottoName}`">
            玩法说明<i class="icon iconfont">&#xe66f;</i></nuxt-link>
        </div>
      </div>
    </div>
    <div class="lottery_con">
      <play-nav />
      <div style="padding:0px 35px 0px 26px;">
        <div style="display:flex;">
        <div class="lottery-panel">
          <help :identifier="playIdentifier" />
          <layout :identifier="playIdentifier" :type="lottoType" v-bind={playText} ref="layout" />
          <!-- <options :max="getMaxBonus(playInfo.max_bet_prize_group)" ref="options" />
          <div class="betting-actions">
            <a class="btn btn-bg btn-betting" lottery="quick_bet" @click="bet(true)">
              <i class="icon iconfont">&#xe63d;</i>一键投注</a>
            <a class="btn btn-bg btn-add" id="betting-add" @click="getOrder">
              <i class="icon iconfont">
                &#xe604;</i>添加号码</a>
          </div> -->
        </div>
        <div class="lottery-basket">
          <!-- <div class="g_head">
            <div class="g_tab">
              <a href="javascript:void(0)" v-for="(item,index) in ['开奖','奖期']" :key="index" :class="{active:basketIndex === index}" @click="basketIndex = index">
                {{item}}
              </a>
            </div>
            <div class="clean" @click="setOrder([])">
              <i class="icon iconfont">&#xe64c;</i>清空
            </div>
          </div> -->
          <div class="betting-lottery">
            <!-- <order v-show="basketIndex === 0" ref="order" /> -->
            <div class="b_list kjhm" v-show="basketIndex === 0" >
              <div class="hd">
                <div class="qihao">期号</div>
                <div class="kaijiang">开奖号码</div>
              </div>
              <el-scrollbar>
                <ul>
                  <li v-for="issue in issueList" :key="issue.issue_no">
                    <div class="qh">{{issue.issue_no}}</div>
                    <div class="kj">
                      <span v-for="num in issue.win_number.split(',')">{{num}}</span>
                    </div>
                  </li>
                </ul>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:18px;">
        <options :max="getMaxBonus(playInfo.max_bet_prize_group)" ref="options" />
        <div class="betting-actions">
          <a class="btn btn-bg btn-betting" lottery="quick_bet" @click="bet(true)">直接购彩</a>
          <a class="btn btn-bg btn-add" id="betting-add" @click="getOrder">添加至购物篮</a>
        </div>
      </div>
      <order v-show="basketIndex === 0" ref="order" />
      <component :is="view" ref="chase" />

      </div>
      
    </div>
    <report ref="report" />
    <!-- <component :is="launchReport"></component> -->
  </div>
</template>
<style lang="scss" src="../../assets/scss/lotto/index.scss"></style>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { groupBy, flatten, sumBy } from 'lodash'
import { initLottoPlays } from '~/util/lotto/transform-plays'
import lotto from '~/util/mixins/lotto'
import PlayNav from '~/components/lotto/PlayNav'
import Help from '~/components/lotto/Help'
import Layout from '~/components/lotto/Layout'
import Options from '~/components/lotto/Options'
import Order from '~/components/lotto/Order'
import Report from '~/components/lotto/Report'
import { time } from '~/plugins/filters'
import { simpleCompress,simpleUnCompress } from '~/util/lotto/code'
import { AsyncComp } from '~/plugins/common'

export default {
  name: 'lotto',
  asyncData({ app, store, params, redirect, error }) {
    if (!params.name) return redirect('/lottery/cqssc')
    if (store.state.lotto.types.length == 0) {
      return {
        playList: []
      }
    }

    return initLottoPlays(store, params.name, app, error)
  },
  data() {
    return {
      bigWayIndex: 0,
      playIndex: [0, 0],
      playText: {},
      basketIndex: 0,
      view: ''
    }
  },
  mixins: [lotto],
  components: {
    PlayNav,
    Help,
    Layout,
    Options,
    Order,
    Chase: AsyncComp('lotto', 'Chase'),
    Report
  },
  methods: {
    async authResolve() {
      //the first await to avoid repeat 'static-data/lottery-version'
      await this.$store.dispatch('lotto/getTypes')
      this.getIssue()
      this.getIssueList()
      this.getBal()
      Object.assign(
        this,
        await initLottoPlays(this.$store, this.lottoName, this)
      )
    },
    ...mapMutations({
      resetBallSet: 'lotto/_ballSet',
      setBetCount: 'lotto/setBetCount',
      setOrder: 'lotto/setOrder'
    }),
    getOrder(add = true) {
      //add params is MouseEvent
      const bet_count = this.betCount
      if (bet_count === 0) {
        return add ? this.checkOrder() : this.order
      }
      const {
        playIdentifier,
        lottoName,
        lottoType,
        isPlaySimple,
        betAmount,
        ballSet,
        issue,
        isPlayCodeDouble
      } = this
      const {
        unitIndex,
        multiple,
        point,
        groupVal,
        amount,
        bonus
      } = this.$$options
      let { textArray, code, layout } = this.$layout
      const orderItem = {
        user_bet_self_return_point: point,
        user_bet_prize_group: groupVal,
        lottery_info_identifier: lottoName,
        lottery_method_identifier: playIdentifier,
        issue,
        buy_number: isPlaySimple
          ? simpleCompress(textArray, layout, isPlayCodeDouble)
          : Array.isArray(code[0]) ? code.join('|') : code.toString(),
        one_bet_amount: betAmount,
        bet_count,
        multiple,
        //1=1元, 2=1角, 3=1分, 4=1厘
        money_unit: unitIndex + 1,
        amount,
        bonus,
        playName: this.playInfo.name,
        lottoType
      }

      const order = this.order.concat(orderItem)

      if (add) {
        this.resetBallSet([])
        this.setOrder(order)
      } else {
        return order
      }
    },
    bet(oneKey) {
      const isOneKey = oneKey === true
      if (
        !this.isInvoking &&
        this.checkBal(
          this.$order.totalAmount + (isOneKey ? this.$$options.amount : 0)
        ) === true
      ) {
        const {
          ip,
          order,
          betCount,
          isPlaySimple,
          playText,
          playIdentifier
        } = this
        if (betCount === 0 && order.length === 0) {
          return this.checkOrder()
        }
        this.isInvoking = true
        let { textArray, code, layout } = this.$layout
        let t1 = performance.now()
        let allBets = Object.values(
          groupBy(
            isOneKey ? this.getOrder(false) : order,
            'lottery_info_identifier'
          )
        )
        let newData = []
        Promise.all(
          allBets.map(bets => {
            let t2 = performance.now()
            this.$styleLog(t2 - t1, 'large')
            return this.$axiosPlus(
              'user-bet-lottery/create',
              {
                ip,
                //oneKey params is MouseEvent
                bets
              },
              data => newData.push(data)
            )
          })
        ).then(() => {
          if (!newData.length) return
          this.$message({
            message: '投注成功！',
            type: 'success',
            duration: 1500
          })
          this.getBal()
          let tableData = this.$lottoOrder.tableData
          let length = tableData.length
          newData = flatten(newData)
          allBets = flatten(allBets)

          this.$lottoOrder.tableData = allBets
            .map(
              (
                {
                  playName,
                  issue,
                  amount,
                  lottery_info_identifier,
                  buy_number,
                },
                index
              ) => {
                if (newData[index]) {
                  const { ...props } = newData[index]
                  return {
                    ...props,
                    buy_number:isPlaySimple ? simpleUnCompress(buy_number,this.isPlayCodeDouble) : buy_number,
                    bonus: 0,
                    method:
                      this.listMap[lottery_info_identifier].name +
                      '-' +
                      playName,
                    issue,
                    amount:
                      isOneKey && index === allBets.length - 1
                        ? amount
                        : this.$order.amounts[index],
                    status: 1,
                    created_at: time(new Date()),
                    cancelable: true
                  }
                }
                return false
              }
            )
            .filter(_ => _)
            .concat(
              tableData.slice(
                0,
                length >= 10 ? length - allBets.length : length
              )
            )
          this.setOrder([])
          isPlaySimple && (playText[playIdentifier] = '')
          isOneKey && !isPlaySimple && this.resetBallSet([])
          this.isInvoking = false
        })
      }
    },
    getChase() {
      if (this.order.length === 0) {
        return this.$message({
          message: '请添加订单！',
          type: 'error',
          duration: 1500
        })
      }
      if (this.checkBal(sumBy(this.order, 'amount')) === true) {
        if (
          this.order.some(_ => _.lottery_info_identifier !== this.lottoName)
        ) {
          return this.$message({
            message: '只能对当前彩种追号！',
            type: 'error',
            duration: 1500
          })
        }
        if (this.view) {
          return (this.$refs.chase.visible = true)
        }
        this.view = 'Chase'
      }
    }
  },
  computed: {
    ...mapGetters({
      betCount: 'lotto/betCount',
      order: 'lotto/order'
    }),
    smallWays() {
      return this.playList[this.bigWayIndex]
        ? this.playList[this.bigWayIndex].small_ways
        : []
    },
    playInfo() {
      const [i, j] = this.playIndex
      return this.smallWays[i] ? this.smallWays[i].bets[j] : {}
    },
    betAmount() {
      return this.playInfo.bet_prize
    },
    playIdentifier() {
      return this.playInfo.identifier
    },
    isPlaySimple() {
      return this.playIdentifier.includes('ds')
    }
  },
  mounted() {
    //$options is an Instance Properties https://vuejs.org/v2/api/#vm-options
    this.$$options = this.$refs.options
    this.$report = this.$refs.report
    this.$lottoOrder = this.$report.$refs.lottoOrder
    this.$chaseOrder = this.$report.$refs.chaseOrder
    this.$layout = this.$refs.layout
  },
  destroyed() {
    this.resetBallSet([])
    this.setBetCount(0)
  }
}
</script>

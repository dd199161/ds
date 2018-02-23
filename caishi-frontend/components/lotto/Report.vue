<template>
  <div class="lottery-tabs">
    <div class="tab_left">
      <div class="tab_left-nav">
        <a v-for="(label,index) in ['我的投注','我的追号']" :key="label" @click="tabIndex = index" :class="{active:tabIndex === index}">
          {{label}}
        </a>
      </div>
      <div class="tab_left-but">
        <button>查看更多</button>
        <button>收&nbsp;合<i class="el-icon-caret-top"></i></button>
      </div>
    </div>
    <div class="tab_right">
      <div class="t_li YouXiJiLu" v-show="tabIndex === 0">
        <lotto-order :hideForm="true" ref="lottoOrder" />
      </div>
      <div class="t_li YouXiJiLu" v-show="tabIndex === 1">
        <lotto-order :hideForm="true" :isChase="true" ref="chaseOrder" />
      </div>
    </div>
  </div>
  <!-- <div class="lottery-tabs">
        <div class="tab_left">
            <a v-for="(label,index) in ['我的投注','我的追号']" :key="label" @click="tabIndex = index" :class="{active:tabIndex === index}">
              {{label}}
            </a>
        </div>
        <div class="tab_right">
            <div class="t_li YouXiJiLu" v-show="tabIndex === 0">
              <lotto-order :hideForm="true" ref="lottoOrder" />
            </div>
            <div class="t_li YouXiJiLu" v-show="tabIndex === 1">
              <lotto-order :hideForm="true" :isChase="true" ref="chaseOrder" />
            </div>
        </div>
    </div> -->
</template>

<script>
import LottoOrder from '~/components/admin/LottoOrder'
export default {
  name: 'report',
  data() {
    return {
      tabIndex: 0
    }
  },
  components: {
    LottoOrder
  }
}
</script>

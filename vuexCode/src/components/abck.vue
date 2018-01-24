<template>
  <div class="goods">
    <div class="menu-wrapper" v-el:menu-wrapper>
      <ul>
        <li v-for="item in goods" @click="selectMenu($index)" class="menu-item" :class="{'current':currentIndex === $index}">
          <span class="text">
            <span v-show="item.type > 0" class="icon"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <!--v-el:foo  为DOM元素注册一个索引，方便通过所属实例的$els访问这个元素 ， 这里不能使用驼峰命名 -->
    <div class="foods-wrapper" v-el:food-wrapper>
      <ul>
        <li class="foods-list food-list-hook" v-for="item in goods">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item" v-for="food in item.foods">
              <div class="icon">
                <img :src="food.icon" alt="" height=57 width=57>
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="new">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
 
<script>
import BScroll from 'better-scroll'

const ERR_OK = 0
export default {
  props: {
    seller: {
      type: Object,
    },
  },
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
    }
  },
  created() {
    this.$http.get('/api/goods').then(response => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.goods = response.data
        this.$nextTick(() => {
          this._initScroll()
          this._calculateHeight()
        })
        console.log(response.data)
      }
    })
  },
  computed: {
    currentIndex() {
      for (var i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
    },
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$els.menuWrapper, {})
      this.foodScroll = new BScroll(this.$els.foodWrapper, {
        probeType: 3,
      })
      this.foodScroll.on('scroll', pos => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight() {
      let foodList = this.$els.foodWrapper.getElementsByClassName(
        'food-list-hook'
      )
      let height = 0
      this.listHeight.push(height)
      for (var i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectMenu(index) {
      console.log(index)

      let foodList = this.$els.foodWrapper.getElementsByClassName(
        'food-list-hook'
      )
      let el = foodList[index]
      this.foodScroll.scrollToElement(el, 300)
    },
  },
}
</script>
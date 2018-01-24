<template>
  <div class="hello">
    <ul>
      <li v-for="(units,index) in unit">
        <div>{{units.units}}</div>
        <div>
          <span v-for="(cell,index) in cells" :class="cell.selected?'active':''" @click.self="choose($event,index,cell)" v-model="con">{{cell.num}}</span>
        </div>
        <div>
          <!-- <a href="javascript:;" v-for="(funs,index) in fun" @click="numClick(index)">{{funs}}</a> -->
          <a href="javascript:;" @click="allNo($event,index,true)">全</a>
          <a href="javascript:;" @click="maxMin($event,index,true)">大</a>
          <a href="javascript:;" @click="maxMin($event,index,false)">小</a>
          <a href="javascript:;" @click="oddEv($event,index,true)">奇</a>
          <a href="javascript:;" @click="oddEv($event,index,false)">偶</a>
          <a href="javascript:;" @click="allNo($event,index,false)">清</a>
        </div>
      </li>
    </ul>
    <div class="div">
      <p>{{con}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      selected: null,
      unit: [
        {units: '万'},
        {units: '千'},
        {units: '百'},
        {units: '十'},
        {units: '个'},
      ],
      cells: [
        {num: '0', selected: false},
        {num: '1', selected: false},
        {num: '2', selected: false},
        {num: '3', selected: false},
        {num: '4', selected: false},
        {num: '5', selected: false},
        {num: '6', selected: false},
        {num: '7', selected: false},
        {num: '8', selected: false},
        {num: '9', selected: false},
      ],
      fun: ['全', '大', '小', '奇', '偶', '清'],
      str: [],
      con: '',
    }
  },
  methods: {
    numClick(index) {
      this.nav = index
    },
    choose(event, index, cell) {
      this.cells[index].selected = !this.cells[index].selected
      this.con = event.target.innerHTML //获取当前点击的元素的内容
    },
    //全，清
    allNo(event, index, kk) {
      if (kk) {
        for (let i = 0; i < this.cells.length; i++) {
          for (let j = 0; j < this.cells.length; j++) {
            this.cells[j].selected = true
            this.str.push(this.cells[j].num)
          }
          this.con = this.str.join(',')
        }
        this.str = []
      } else {
        for (let i = 0; i < this.cells.length; i++) {
          for (let j = 0; j < this.cells.length; j++) {
            this.cells[j].selected = false
            this.str = []
          }
          this.con = this.str.join(',')
        }
      }
      // if (kk) {
      //   for (let i = 0; i < this.cells.length; i++) {
      //     this.cells[i].selected = true;
      //     this.str.push(this.cells[i].num);
      //   }
      //   this.con = this.str.join(",");
      //   this.str =[]
      // } else {
      //   for (let i = 0; i < this.cells.length; i++) {
      //     this.cells[i].selected = false;
      //     this.str=[];
      //   }
      // }
    },
    //大，小
    maxMin(event, index, kk) {
      if (kk) {
        for (let i = 0; i < this.cells.length; i++) {
          for (let j = 5; j < this.cells.length; j++) {
            this.cells[j].selected = true
            this.str.push(this.cells[j].num)
          }
          this.con = this.str.join(',')
          for (let j = 0; j < this.cells.length / 2; j++) {
            this.cells[j].selected = false
          }
        }
        this.str = []
      } else {
        for (let i = 0; i < this.cells.length; i++) {
          for (let j = 5; j < this.cells.length; j++) {
            this.cells[j].selected = false
          }
          this.con = this.str.join(',')
          for (let j = 0; j < this.cells.length / 2; j++) {
            this.cells[j].selected = true
            this.str.push(this.cells[j].num)
          }
        }
        this.str = []
      }
    },
    //奇，偶
    oddEv(event, index, kk) {
      if (kk) {
        for (let i = 0; i < this.cells.length; i++) {
          for (let j = 0; j < this.cells.length; j++) {
            if (j % 2 == 1) {
              this.cells[j].selected = true
              this.str.push(this.cells[j].num)
            } else {
              this.cells[j].selected = false
            }
          }
          this.con = this.str.join(',')
        }
        this.str = []
      } else {
        for (let i = 0; i < this.cells.length; i++) {
          for (let j = 0; j < this.cells.length; j++) {
            if (j % 2 == 0) {
              this.cells[j].selected = true
              this.str.push(this.cells[j].num)
            } else {
              this.cells[j].selected = false
            }
          }
          this.con = this.str.join(',')
        }
        this.str = []
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      & > :first-child {
        margin: 0px 10px;
      }
      div {
        display: flex;
        span {
          width: 36px;
          height: 36px;
          line-height: 36px;
          font-size: 20px;
          border-radius: 50%;
          color: #797979;
          margin: 4px;
          border: 1px solid #797979;
          cursor: pointer;
        }
        a {
          display: flex;
          text-decoration: none;
          color: #000;
          width: 26px;
          height: 26px;
          line-height: 26px;
          border: 1px solid #ddd;
          border-radius: 3px;
          margin-left: 6px;
          display: block;
        }
        & > a:hover {
          background: #009f86;
          color: #fff;
        }
        span.active {
          background: #009f86;
          color: #fff;
          border: 1px solid #009f86;
        }
      }
    }
  }
}
</style>

// import dateTables, { style, round3 ,paginationDef} from '~/util/mixins/data-tables'

import { round3 } from '~/plugins/filters'
import { plus, minus } from 'number-precision'

export const request = (context, props = {}) =>
  context.$axios.$post('proxy-manage/lottery-game-report', props)

export default {
  data() {
    return {
      dataKey: 'reportData',
      listKey: 'users',
      //patch util\mixins\data-tables.js:89,checkPageData
      serverData: true
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    getStatus(){
      //noop util\mixins\data-tables.js:126
    },
    fetch() {
      this.pageData[0] = this.reportData
    },
    format({
      self_return: point,
      bet_cancel: cancelAmount,
      event,
      trans_in: transfer,
      win,
      bet,
      ...props
    }) {
      const item = {
        point,
        cancelAmount,
        transfer,
        win,
        bet,
        event,
        // profit:plus(plus(minus(win,bet),point),event),
        profit: [minus(win, bet), point, event].reduce((a, b) => plus(a, b)),
        ...props
      }
      // Number.isNaN(+'asd')
      Object.keys(item).forEach(key => {
        const value = item[key]
        typeof value !== 'boolean' &&
          !Number.isNaN(+value) &&
          (item[key] = round3(value))
      })
      return item
    }
  }
}

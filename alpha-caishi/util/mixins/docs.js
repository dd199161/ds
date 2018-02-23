export default {
  scrollToTop: true,
  mounted(){
    [...this.$el.querySelectorAll('a')].forEach(_ =>  _.href && _.getAttribute('href').includes('http') && (_.target = '_blank'))
  }
}
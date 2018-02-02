<template>
<component :is="view" class="code-example"></component>
</template>

<style lang="scss">
.code-example{
  .hljs-comment{
    font-style: normal;
  }
}
</style>


<script>
import thirdPlatform from '~/docs/example/third-platform.md'
import { camelCase, kebabCase } from 'lodash'
import docs from '~/util/mixins/docs'
export default {
  asyncData({ route: { query } }) {
    return {
      view: camelCase(query.view)
    }
  },
  head() {
    return {
      title: `程序范例-${kebabCase(this.view).replace('-', ' ')}`
    }
  },
  mixins:[docs],
  components: {
    thirdPlatform
  }
}
</script>

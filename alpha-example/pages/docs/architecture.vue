<template>
<component :is="view"></component>
</template>

<script>
import httpClient from '~/docs/architecture/http_client.md'
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
      title: `框架详解-${kebabCase(this.view).replace('-', ' ')}`
    }
  },
  mixins:[docs],
  components: {
    httpClient
  }
}
</script>

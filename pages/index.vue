<template>
  <div>
    <v-btn to="/article/new">新規登録</v-btn>
    <ArticleList :articles="articles" />
    aaaaaaaaaaa
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import ArticleList from '~/components/ArticleList.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    ArticleList,
  },
  async asyncData({ $axios }: Context) {
    const { data: articles } = await $axios.get('/api/article')
    return { articles }
  },
})
</script>

<template>
  <div>
    <v-btn to="/article/new">新規登録</v-btn>
    <v-list>
      <v-list-item
        v-for="article in articles"
        :key="article.id"
        :to="`/article/${article.id}`"
      >
        <v-list-item-title>{{ article.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ article.content }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  name: 'IndexPage',
  async asyncData({ $axios }: Context) {
    const { data: articles } = await $axios.get('/api/article')
    return { articles }
  },
})
</script>

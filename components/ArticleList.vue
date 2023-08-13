<template>
  <div>
    <v-list v-if="hasArticle">
      <v-list-item v-for="article in articles" :key="article.id" :to="`/article/${article.id}`">
        <v-list-item-title>{{ article.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ article.content }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
    <p v-else>投稿がありません。</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    articles: {
      type: Array as PropType<any[]>, // TODO: 型定義修正
      required: true,
    },
  },
  computed: {
    hasArticle() {
      return Boolean(this.articles.length)
    },
  },
})
</script>

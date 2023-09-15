<template>
  <div>
    <v-btn to="/article/new">新規登録</v-btn>
    <ArticleList :articles="articles" />
  </div>
</template>

<script lang="ts">
import ArticleList from '~/components/ArticleList.vue'

export default {
  name: 'IndexPage',
  components: {
    ArticleList,
  },
  data() {
    return {
      articles: [],
    }
  },
  async created() {
    const { data: articles } = await this.$axios.get('/api/article')
    this.articles = articles
  },
}
</script>

<template>
  <div>
    <ArticleFrom :prop-title="title" :prop-content="content" action-text="更新" @click-action="registerArticle" />
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import { Article } from '~/bff/types'
import ArticleFrom from '~/components/ArticleForm.vue'

type RequestParams = {
  title: string
  content: string
}

export default Vue.extend({
  name: 'EditPage',
  components: {
    ArticleFrom,
  },
  async asyncData({ $axios, params }: Context) {
    const id = params.id
    const { data }: { data: Article } = await $axios.get(`/api/article/${id}`)
    return { data }
  },
  data() {
    return {
      title: '',
      content: '',
    }
  },
  computed: {
    articleId() {
      return this.$route.params.id
    },
  },
  created() {
    this.title = this.data.title
    this.content = this.data.content
  },
  methods: {
    requestParams(title: string, content: string): RequestParams {
      return {
        title,
        content,
      }
    },
    async registerArticle(title: string, content: string) {
      await this.$axios.patch(
        `/api/article/${this.articleId}`,
        this.requestParams(title, content)
      )
      this.$store.dispatch('alert/addAlertMessage', `記事を更新しました`)
      setTimeout(() => this.$store.dispatch('alert/removeAlertMessage'), 3000)
    },
  },
})
</script>

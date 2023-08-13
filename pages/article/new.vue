<template>
  <div>
    <ArticleFrom action-text="登録" @click-action="registerArticle" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleFrom from '~/components/ArticleForm.vue'

type RequestParams = {
  title: string
  content: string
}

export default Vue.extend({
  name: 'RegisterPage',
  components: {
    ArticleFrom,
  },
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    requestParams(title: string, content: string): RequestParams {
      return {
        title,
        content,
      }
    },
    async registerArticle(title: string, content: string) {
      await this.$axios.post('/api/article', this.requestParams(title, content))
      this.$store.dispatch('alert/addAlertMessage', `記事を登録しました`)
      setTimeout(() => this.$store.dispatch('alert/removeAlertMessage'), 3000)
      this.$router.push('/')
    },
  },
})
</script>

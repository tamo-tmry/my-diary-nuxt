<template>
  <div>
    <v-form>
      <v-text-field v-model="title" label="タイトル"></v-text-field>
      <v-text-field v-model="content" label="本文"></v-text-field>
      <v-btn @click="registerArticle">更新</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import { Article } from '~/bff/types'

type RequestParams = {
  title: string
  content: string
}

export default Vue.extend({
  name: 'EditPage',
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
    requestParams(): RequestParams {
      return {
        title: this.title,
        content: this.content,
      }
    },
    articleId() {
      return this.$route.params.id
    },
  },
  created() {
    this.title = this.data.title
    this.content = this.data.content
  },
  methods: {
    async registerArticle() {
      await this.$axios.patch(
        `/api/article/${this.articleId}`,
        this.requestParams
      )
      this.$store.dispatch('alert/addAlertMessage', `記事を更新しました`)
      setTimeout(() => this.$store.dispatch('alert/removeAlertMessage'), 3000)
    },
  },
})
</script>

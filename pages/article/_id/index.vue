<template>
  <div>
    <div>
      <v-btn :to="`/article/${data.id}/edit`">編集</v-btn>
      <v-btn @click="deleteArticle(data.id)">削除</v-btn>
    </div>
    <article>
      <h2>{{ data.title }}</h2>
      <p>{{ data.content }}</p>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { Article } from '~/bff/types/index'

export default Vue.extend({
  name: 'DetailPage',
  async asyncData({ $axios, params }: Context) {
    const id = params.id
    const { data }: { data: Article } = await $axios.get(`/api/article/${id}`)
    return { data }
  },
  methods: {
    async deleteArticle(id: string) {
      await this.$axios.delete(`/api/article/${id}`)
      this.$store.dispatch(
        'alert/addAlertMessage',
        `${this.data.title}を削除しました`
      )
      setTimeout(() => this.$store.dispatch('alert/removeAlertMessage'), 3000)
      this.$router.push('/')
    },
  },
})
</script>

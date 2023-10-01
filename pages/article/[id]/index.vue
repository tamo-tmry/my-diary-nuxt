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
import { Context } from '@nuxt/types'
// import { Article } from '~/bff/types/index'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'DetailPage',
  asyncData() {
    console.log('asyncData')
  },
  async created() {
    const route = useRoute()
    console.log('router: ', route.params._id)
    const { data, pending, error, refresh } = await useAsyncData('mountains', () => $fetch(`/api/article/${route.params.id}`))
  },
  
  // { $axios, params }: Context) {
  //   const id = params.id
  //   const { data }: { data: Article } = await $axios.get(`/api/article/${id}`)
  //   return { data }
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
}
</script>

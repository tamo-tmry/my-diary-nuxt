<template>
  <div>
    <v-form>
      <v-text-field v-model="title" label="タイトル"></v-text-field>
      <v-text-field v-model="content" label="本文"></v-text-field>
      <v-btn @click="registerArticle">登録</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type RequestParams = {
  title: string
  content: string
}

export default Vue.extend({
  name: 'RegisterPage',
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
  },
  methods: {
    async registerArticle() {
      await this.$axios.post('/api/article', this.requestParams)
      this.$store.dispatch('alert/addAlertMessage', `記事を登録しました`)
      setTimeout(() => this.$store.dispatch('alert/removeAlertMessage'), 3000)
      this.$router.push('/')
    },
  },
})
</script>

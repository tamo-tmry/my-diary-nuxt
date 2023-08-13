<template>
  <v-form>
    <v-text-field v-model="title" label="タイトル"></v-text-field>
    <v-text-field v-model="content" label="本文"></v-text-field>
    <v-btn @click="clickAction">{{ actionText }}</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    propTitle: {
      type: String,
      default: '',
    },
    propContent: {
      type: String,
      default: '',
    },
    actionText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      title: this.propTitle,
      content: this.propContent,
    }
  },
  methods: {
    clickAction() {
      this.$emit('click-action', { title: this.title, content: this.content })
    },
  },
})
</script>

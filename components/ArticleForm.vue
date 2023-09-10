<template>
  <v-form>
    <fieldset>
      <legend>投稿の設定</legend>
      <v-text-field v-model="title" label="タイトル"></v-text-field>
      <v-text-field v-model="content" label="本文"></v-text-field>
      <v-btn :disabled="!hasTitle" @click="clickAction">{{ actionText }}</v-btn>
    </fieldset>
  </v-form>
</template>

<script lang="ts">
export default {
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
  computed: {
    hasTitle(): boolean {
      return Boolean(this.title)
    },
  },
  methods: {
    clickAction() {
      this.$emit('click-action', { title: this.title, content: this.content })
    },
  },
}
</script>

<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />

      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <v-alert v-if="hasAlertMessage" type="success">{{
          alertMessage
        }}</v-alert>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-view-list',
          title: '記事一覧',
          to: '/',
        },
        {
          icon: 'mdi-note-plus',
          title: '記事作成',
          to: '/article/new',
        },
      ],
      title: 'my-diary',
    }
  },
  computed: {
    alertMessage() {
      return this.$store.getters['alert/alertMessage']
    },
    hasAlertMessage() {
      return Boolean(this.alertMessage)
    },
  },
}
</script>

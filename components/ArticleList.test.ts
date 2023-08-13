import { render, screen } from '@testing-library/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import ArticleList from './ArticleList.vue'

Vue.use(Vuetify)
Vue.use(VueRouter) // VueにVueRouterをインストールします

const router = new VueRouter() // 新しいRouterインスタンスを作成します

test('', () => {
  const vuetify = new Vuetify()

  render(ArticleList, {
    props: {
      articles: [
        {
          id: 'article-id-1',
          title: 'article-title-1',
          content: 'article-content-1',
        },
        {
          id: 'article-id-2',
          title: 'article-title-2',
          content: 'article-content-2',
        },
        {
          id: 'article-id-3',
          title: 'article-title-3',
          content: 'article-content-3',
        },
      ],
    },
    vuetify,
    routes: router,
  })
  expect(screen.getByText('article-title-1')).toBeInTheDocument()
})

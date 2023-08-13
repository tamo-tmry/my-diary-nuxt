import { render, screen } from '@testing-library/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import ArticleList from './ArticleList.vue'

Vue.use(Vuetify)
Vue.use(VueRouter) // VueにVueRouterをインストールします

const router = new VueRouter() // 新しいRouterインスタンスを作成します

test('一覧表示される', () => {
  const vuetify = new Vuetify()

  const articles = [
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
  ]

  render(ArticleList, {
    props: {
      articles,
    },
    vuetify,
    routes: router,
  })
  const list = screen.getByRole('list')
  expect(list).toBeInTheDocument()
})

test('articlesの数だけ一覧表示される', () => {
  const vuetify = new Vuetify()

  const articles = [
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
  ]

  render(ArticleList, {
    props: {
      articles,
    },
    vuetify,
    routes: router,
  })
  expect(screen.getAllByRole('listitem')).toHaveLength(articles.length)
})

test('投稿がない場合、「投稿がありません。」が表示される', () => {
  const vuetify = new Vuetify()

  render(ArticleList, {
    props: {
      articles: [],
    },
    vuetify,
    routes: router,
  })
  const list = screen.queryByRole('list')
  expect(list).not.toBeInTheDocument()
  expect(list).toBeNull()
  expect(screen.getByText('投稿がありません。')).toBeInTheDocument()
})

test('IDに基づいたリンクが表示される', () => {
  const vuetify = new Vuetify()

  const articles = [
    {
      id: 'article-id-1',
      title: 'article-title-1',
      content: 'article-content-1',
    },
  ]

  render(ArticleList, {
    props: {
      articles,
    },
    vuetify,
    routes: router,
  })
  expect(screen.getByRole('listitem')).toHaveAttribute(
    'href',
    '#/article/article-id-1'
  )
})

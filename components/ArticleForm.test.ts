import { fireEvent, render, screen } from '@testing-library/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import ArticleForm from './ArticleForm.vue'

Vue.use(Vuetify)

test('ボタンを押下するとイベントハンドラーが実行され、titleとcontentがemitされる', () => {
  const vuetify = new Vuetify()

  const renderArticleForm = render(ArticleForm, {
    props: {
      propTitle: 'test-title',
      propContent: 'test-content',
      actionText: '登録',
    },
    vuetify,
  })
  fireEvent.click(screen.getByText('登録'))
  expect(renderArticleForm.emitted()['click-action'][0][0]).toEqual({
    title: 'test-title',
    content: 'test-content',
  })
})

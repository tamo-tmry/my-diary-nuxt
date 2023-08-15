import { fireEvent, render, screen } from '@testing-library/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import userEvent from '@testing-library/user-event'
import ArticleForm from './ArticleForm.vue'

const user = userEvent.setup()

Vue.use(Vuetify)

type InputFormArg = {
  title?: string
  content?: string
}

const inputForm = async ({ title = '', content = '' }: InputFormArg) => {
  if (title)
    await user.type(screen.getByRole('textbox', { name: 'タイトル' }), title)
  if (content)
    await user.type(screen.getByRole('textbox', { name: '本文' }), content)
}

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

test('タイトル入力', async () => {
  const vuetify = new Vuetify()

  render(ArticleForm, {
    props: {
      actionText: '登録',
    },
    vuetify,
  })

  const value = 'タイトル'
  await inputForm({ title: value })

  expect(screen.getByDisplayValue(value)).toBeInTheDocument()
})

test('本文入力', async () => {
  const vuetify = new Vuetify()

  render(ArticleForm, {
    props: {
      actionText: '登録',
    },
    vuetify,
  })

  const value = '本文'
  await inputForm({ content: value })

  expect(screen.getByDisplayValue(value)).toBeInTheDocument()
})

test('登録ボタンが非活性', () => {
  const vuetify = new Vuetify()

  render(ArticleForm, {
    props: {
      actionText: '登録',
    },
    vuetify,
  })

  const button = screen.getByRole('button', { name: '登録' })
  expect(button).toBeDisabled()
})

test('タイトルを入力すると登録ボタンが活性化', async () => {
  const vuetify = new Vuetify()

  render(ArticleForm, {
    props: {
      actionText: '登録',
    },
    vuetify,
  })

  await inputForm({ title: 'タイトル' })

  const button = screen.getByRole('button', { name: '登録' })
  expect(button).toBeEnabled()
})

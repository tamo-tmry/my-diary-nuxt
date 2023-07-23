import { PatchArticleRequestParams } from '../../client/types'
import { ArticlePatchService } from './patch'

jest.mock('../../client/apiClient', () => {
  return {
    __esModule: true,
    default: {
      editArticle: jest.fn().mockResolvedValue({ id: 'articleTestId' }),
    },
  }
})

describe('記事更新のテスト', () => {
  it('ArticlePatchServiceが記事データを引数に取り、更新後の記事IDを返すこと', async () => {
    const article: PatchArticleRequestParams = {
      title: 'title',
      content: 'content',
    }
    const result = await ArticlePatchService('articleTestId', article)
    expect(result).toEqual({ id: 'articleTestId' })
  })
})

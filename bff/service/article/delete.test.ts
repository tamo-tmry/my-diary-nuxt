import ApiClient from '../../client/apiClient'
import { ArticleDeleteService } from './delete'

jest.mock('../../client/apiClient', () => {
  return {
    __esModule: true,
    default: {
      deleteArticle: jest.fn().mockResolvedValue(undefined),
    },
  }
})

describe('記事削除のテスト', () => {
  it('ArticleDeleteServiceが指定されたIDで記事削除APIを呼び出すこと', async () => {
    const id = 'article_testid'
    await ArticleDeleteService(id)
    expect(ApiClient.deleteArticle).toHaveBeenCalledWith(id)
  })
})

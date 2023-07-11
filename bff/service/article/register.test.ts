import { PostArticleRequestParams } from '../../client/types'
import { ArticleRegisterService } from './register'

jest.mock('../../client/apiClient', () => {
  return {
    __esModule: true,
    default: {
      createArticle: jest.fn().mockResolvedValue({ id: 'article_test_id' }),
    },
  }
})

describe('記事登録のテスト', () => {
  it('ArticleRegisterServiceが記事データを引数に取り、登録後の記事IDを返すこと', async () => {
    const article: PostArticleRequestParams = {
      title: 'title',
      content: 'content',
    }
    const result = await ArticleRegisterService(article)
    expect(result).toEqual('article_test_id')
  })
})

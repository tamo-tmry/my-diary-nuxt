import { fetchArticleService } from './detail'

jest.mock('../../client/apiClient', () => {
  return {
    __esModule: true,
    default: {
      fetchArticle: jest.fn().mockResolvedValue({
        id: 'article_test_id',
        createdAt: '2023-07-08T16:37:25.359Z',
        updatedAt: '2023-07-08T16:37:25.359Z',
        publishedAt: '2023-07-08T16:37:25.359Z',
        revisedAt: '2023-07-08T16:37:25.359Z',
        title: 'test2title',
        content: 'test2content',
      }),
    },
  }
})

describe('記事詳細のテスト', () => {
  it('fetchArticleServiceが記事IDを引数に取り、その記事の詳細情報を返すこと', async () => {
    const id = 'article_test_id'
    const result = await fetchArticleService(id)
    expect(result).toEqual({
      id: 'article_test_id',
      title: 'test2title',
      content: 'test2content',
    })
  })
})

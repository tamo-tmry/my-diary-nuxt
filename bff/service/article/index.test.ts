import { fetchArticlesService } from './index'

jest.mock('../../client/apiClient', () => {
  return {
    __esModule: true,
    default: {
      fetchArticles: jest.fn().mockResolvedValue({
        contents: [
          {
            id: 'article_test_id1',
            createdAt: '2023-07-08T16:37:25.359Z',
            updatedAt: '2023-07-08T16:37:25.359Z',
            publishedAt: '2023-07-08T16:37:25.359Z',
            revisedAt: '2023-07-08T16:37:25.359Z',
            title: 'test2title',
            content: 'test2content',
          },
          {
            id: 'article_test_id2',
            createdAt: '2023-07-08T16:37:24.390Z',
            updatedAt: '2023-07-08T16:37:24.390Z',
            publishedAt: '2023-07-08T16:37:24.390Z',
            revisedAt: '2023-07-08T16:37:24.390Z',
            title: 'test2title',
            content: 'test2content',
          },
          {
            id: 'article_test_id3',
            createdAt: '2023-07-08T14:06:00.605Z',
            updatedAt: '2023-07-08T14:06:00.605Z',
            publishedAt: '2023-07-08T14:06:00.605Z',
            revisedAt: '2023-07-08T14:06:00.605Z',
            title: 'テスト1タイトル',
            content: 'テスト1本文',
          },
        ],
        totalCount: 3,
        offset: 0,
        limit: 10,
      }),
    },
  }
})

describe('記事一覧のテスト', () => {
  it('fetchArticlesServiceが期待した形式で記事一覧を返すこと', async () => {
    const result = await fetchArticlesService()
    expect(result).toEqual([
      { id: 'article_test_id1', title: 'test2title', content: 'test2content' },
      { id: 'article_test_id2', title: 'test2title', content: 'test2content' },
      {
        id: 'article_test_id3',
        title: 'テスト1タイトル',
        content: 'テスト1本文',
      },
    ])
  })
})

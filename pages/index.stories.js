import ArticleListPage from './index.vue'

export default {
  title: 'ArticleListPage',
  component: ArticleListPage,
}

export const Default = {
  parameters: {
    msw: {
      handlers: [
        rest.get('/api/article', (_, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
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
            })
          )
        }),
      ],
    },
  },
}

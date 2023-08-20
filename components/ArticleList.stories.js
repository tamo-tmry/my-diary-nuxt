import ArticleList from './ArticleList.vue'
import { SPStory } from '~/test/util'

export default {
  title: 'ArticleList',
  component: ArticleList,
}

export const Default = {
  args: {
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
}

export const NoList = {
  args: {
    articles: [],
  },
}

export const DefaultBySP = {
  args: {
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
  parameters: {
    ...SPStory.parameters,
  },
}

export const NoListBySP = {
  args: {
    articles: [],
  },
  parameters: {
    ...SPStory.parameters,
  },
}

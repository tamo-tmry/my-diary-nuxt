import ApiClient from '../../client/apiClient'
import { FetchArticlesResponse } from '../../types'

export const fetchArticlesService =
  async (): Promise<FetchArticlesResponse> => {
    const { contents } = await ApiClient.fetchArticles()
    return contents.map((content) => {
      return {
        id: content.id,
        title: content.title,
        content: content.content,
      }
    })
  }

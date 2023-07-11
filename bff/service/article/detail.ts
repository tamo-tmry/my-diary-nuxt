import ApiClient from '../../client/apiClient'
import { FetchArticleResponse } from '../../types'

export const fetchArticleService = async (
  paramId: string
): Promise<FetchArticleResponse> => {
  const { id, title, content } = await ApiClient.fetchArticle(paramId)
  return {
    id,
    title,
    content,
  }
}

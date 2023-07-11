import { PostArticleRequestParams } from '../../client/types'
import ApiClient from '../../client/apiClient'

export const ArticleRegisterService = async (
  article: PostArticleRequestParams
): Promise<string> => {
  const { id } = await ApiClient.createArticle(article)
  return id
}

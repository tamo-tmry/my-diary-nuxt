import { PatchArticleRequestParams } from '../../client/types'
import ApiClient from '../../client/apiClient'

export const ArticlePatchService = async (
  paramId: string,
  article: PatchArticleRequestParams
) => {
  const { id } = await ApiClient.editArticle(paramId, article)
  return id
}

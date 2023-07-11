import ApiClient from '../../client/apiClient'

export const ArticleDeleteService = async (paramId: string): Promise<void> => {
  await ApiClient.deleteArticle(paramId)
}

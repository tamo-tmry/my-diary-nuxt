import axios, { AxiosInstance } from 'axios'
import {
  FetchArticleResponse,
  FetchArticlesResponse,
  PostArticleRequestParams,
  PostArticleResponse,
  PatchArticleRequestParams,
  PatchArticleResponse,
} from './types'

class ApiClient {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: process.env.API_BASE_URL,
      headers: {
        'X-MICROCMS-API-KEY': process.env.API_KEY,
      },
    })
  }

  async fetchArticles(): Promise<FetchArticlesResponse> {
    const { data } = await this.client.get('/article')
    return data
  }

  async fetchArticle(id: string): Promise<FetchArticleResponse> {
    const { data } = await this.client.get(`/article/${id}`)
    return data
  }

  async createArticle(
    article: PostArticleRequestParams
  ): Promise<PostArticleResponse> {
    const { data } = await this.client.post('/article', article)
    return data
  }

  async editArticle(
    id: string,
    article: PatchArticleRequestParams
  ): Promise<PatchArticleResponse> {
    const { data } = await this.client.patch(`/article/${id}`, article)
    return data
  }

  async deleteArticle(id: string): Promise<void> {
    await this.client.delete(`/article/${id}`)
  }
}

export default new ApiClient()

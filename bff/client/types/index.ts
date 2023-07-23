type Article = {
  content: string
  createdAt: string
  id: string
  publishedAt: string
  revisedAt: string
  title: string
  updatedAt: string
}

export type FetchArticlesResponse = {
  contents: Article[]
  limit: number
  offset: number
  totalCount: number
}

export type FetchArticleResponse = Article

export type PostArticleRequestParams = {
  title: string
  content: string
}

export type PostArticleResponse = {
  id: string
}

export type PatchArticleRequestParams = {
  title: string
  content: string
}

export type PatchArticleResponse = {
  id: string
}

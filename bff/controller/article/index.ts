import { Request, Response } from 'express'
import { fetchArticlesService } from '../../service/article'

export const ArticlesController = async (_req: Request, res: Response) => {
  try {
    const response = await fetchArticlesService()
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
}

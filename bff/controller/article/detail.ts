import { Request, Response } from 'express'
import { fetchArticleService } from '../../service/article/detail'

export const ArticleDetailController = async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const response = await fetchArticleService(id)
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
}

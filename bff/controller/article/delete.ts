import { Request, Response } from 'express'
import { ArticleDeleteService } from '../../service/article/delete'

export const ArticleDeleteController = async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    await ArticleDeleteService(id)
    res.status(204).end()
  } catch (err) {
    res.status(500).send(err)
  }
}

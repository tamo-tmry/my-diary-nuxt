import { Request, Response } from 'express'
import { ArticlePatchService } from '../../service/article/patch'

export const ArticlePatchController = async (req: Request, res: Response) => {
  const id = req.params.id
  const title = req.body.title
  const content = req.body.content
  try {
    const response = await ArticlePatchService(id, { title, content })
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
}

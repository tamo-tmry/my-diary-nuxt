import { Request, Response } from 'express'
import { ArticleRegisterService } from '../../service/article/register'

export const ArticleRegisterController = async (
  req: Request,
  res: Response
) => {
  const title = req.body.title
  const content = req.body.content
  try {
    const articleId = await ArticleRegisterService({
      title,
      content,
    })
    res.status(201).send(articleId)
  } catch (err) {
    res.status(500).send(err)
  }
}

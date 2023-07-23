import { Router } from 'express'
import { ArticlesController } from './article'
import { ArticleDetailController } from './article/detail'
import { ArticleDeleteController } from './article/delete'
import { ArticlePatchController } from './article/patch'
import { ArticleRegisterController } from './article/register'

const router = Router()

router.get('/article', ArticlesController)
router.get('/article/:id', ArticleDetailController)
router.post('/article', ArticleRegisterController)
router.patch('/article/:id', ArticlePatchController)
router.delete('/article/:id', ArticleDeleteController)

export default router

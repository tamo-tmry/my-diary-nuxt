import express, { json, urlencoded } from 'express'
import controller from './controller'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/api', controller)

export default fromNodeMiddleware(app)

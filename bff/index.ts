import express, { json } from 'express'
import controller from './controller'

const app = express()

app.use(json())
app.use(controller)

export default app

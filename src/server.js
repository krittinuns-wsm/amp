import dotenv from 'dotenv'
import express from 'express'
import Post from './pages/post'
import { ORIGINAL_SITE } from './configs/site'

dotenv.config()
const app = express()

app.set('view engine', 'pug')

app.get('/*/amp', async (req, res) => {
  try {
    const urlArray = req.path.split('/')
    const slug = urlArray[urlArray.length - 2]

    const data = await Post(slug)
    res.render('post', data)
  } catch (error) {
    res.redirect(ORIGINAL_SITE)
  }
})

// 404
app.use(function (req, res, next) {
  return res.status(404).send({ message: 'Route' + req.url + ' Not found.' })
})

// 500 - Any server error
app.use(function (err, req, res, next) {
  return res.status(500).send({ error: err })
})

app.listen(3000, () => console.log('listening on port 3000'))

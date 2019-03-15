import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express();

app.set('view engine', 'pug');

app.get('/*/amp', function (req, res) {
  const urlArray = req.path.split("/")
  const slug = urlArray[urlArray.length-2]

  const article = { 
    title: 'Hey', 
    message: slug
  }

  res.render('article', article)
})

app.listen(3000, () => console.log('listening on port 3000'));
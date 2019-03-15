import dotenv from 'dotenv'
import express from 'express'
import article from './pages/article'

dotenv.config()
const app = express();

app.set('view engine', 'pug');

app.get('/*/amp', function (req, res) {
  const urlArray = req.path.split("/")
  const slug = urlArray[urlArray.length-2]

  article(slug).then( item => {
    const body = { 
      title: 'Hey', 
      message: item.fields.title
    }
  
    res.render('article', body)
  })
})

app.listen(3000, () => console.log('listening on port 3000'));
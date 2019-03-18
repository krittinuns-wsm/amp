import dotenv from 'dotenv'
import express from 'express'
import articlePage from './pages/article'

dotenv.config()
const app = express();

app.set('view engine', 'pug');

app.get('/*/amp', async (req, res) => {
  try {
    const urlArray = req.path.split("/")
    const slug = urlArray[urlArray.length-2]

    const article = await articlePage(slug)

    const bodyHTML = {
      title: 'TopTest',
      message: article.fields.title
    }
    res.render('article', bodyHTML)
  } catch (error) {
    console.error(error)
  }  
})

app.listen(3000, () => console.log('listening on port 3000'));
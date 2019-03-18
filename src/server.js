import dotenv from 'dotenv'
import express from 'express'
import articlePage from './pages/article'
import _ from 'lodash'

dotenv.config()
const app = express();

app.set('view engine', 'pug');

app.get('/*/amp', async (req, res) => {
  try {
    const urlArray = req.path.split("/")
    const slug = urlArray[urlArray.length-2]

    const article = await articlePage(slug)

    if(!_.isEmpty(article)){
      const bodyHTML = {
        title: 'TopTest',
        message: article.fields.title
      }
      res.render('article', bodyHTML)
    }
    else {
      // no article for requesting slug
      return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
    }
    
  } catch (error) {
    console.error(error)
  }  
})

// 404
app.use(function(req, res, next) {
  return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});

// 500 - Any server error
app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});

app.listen(3000, () => console.log('listening on port 3000'));
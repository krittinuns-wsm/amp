import contentfulClient from '../utils/contentfulClient'
import _ from 'lodash'
import dateFormat from 'dateformat'
import showdown from 'showdown'
import { ORIGINAL_SITE } from '../configs/site'

const markDownConverter = new showdown.Converter()

async function getPost (slug) {
  try {
    const result = await contentfulClient.getEntries({
      content_type: 'post',
      select:
        'fields.title,fields.slug,fields.description,fields.image,fields.categories,fields.authors,fields.content,fields.publishDate',
      limit: 1,
      'fields.slug': slug
    })

    if (!_.isEmpty(result)) {
      // console.log(result.items[0].fields)
      const { title, description, image, authors, categories, publishDate, content } = result.items[0].fields

      const data = {
        title: title,
        description: description,
        image: image.fields.file.url,
        author: authors[0].fields.name,
        mainCategory: categories[0].fields.name,
        mainCategoryLink: `https://${ORIGINAL_SITE}/${categories[0].fields.slug}`,
        publishDate: dateFormat(new Date(publishDate), 'mmmm d, yyyy'),
        content: markDownConverter.makeHtml(content)
      }
      return data
    }

    return null
  } catch (error) {
    console.error(error)
  }
}

export default getPost

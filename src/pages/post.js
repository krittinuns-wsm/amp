import contentfulClient from '../utils/contentfulClient'

async function getPost (slug) {
  try {
    const result = await contentfulClient.getEntries({
      content_type: 'post',
      select:
        'fields.title,fields.slug,fields.description,fields.image,fields.categories,fields.authors,fields.content,fields.publishDate',
      limit: 1,
      'fields.slug': slug
    })

    return result.items[0].fields
  } catch (error) {
    console.error(error)
  }
}

export default getPost

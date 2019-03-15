import contentfulClient from '../utils/contentfulClient'

function getArticle() {
  ContentfulClient.getEntries({
    links_to_entry: contentful_id,
    content_type: 'post',
    select:
      'fields.title,fields.slug,fields.description,fields.image,fields.categories,fields.authors,fields.content,fields.publishDate',
    limit: 12,
    order: '-fields.publishDate',
    skip: currentEntries,
  })
    .then(response => {
      if (response.items) {
        const { fetchedPosts } = this.state
        fetchedPosts.push(response.items)
        this.setState({
          currentEntries: currentEntries + 12,
          fetchedPosts,
        })
      }
    })
    .catch(console.error)
}

export default getArticle

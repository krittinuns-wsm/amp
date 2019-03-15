import { createClient } from 'contentful'

export default createClient({
  space: process.env.CLIENT_CF_SPACE_ID,
  accessToken: process.env.CLIENT_CF_ACCESS_TOKEN,
  host: process.env.CLIENT_CF_HOST,
  environment: process.env.CLIENT_CF_ENV
})

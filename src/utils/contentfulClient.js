import { createClient } from 'contentful'

export default createClient({
  // space: process.env.CLIENT_CF_SPACE_ID,
  // accessToken: process.env.CLIENT_CF_ACCESS_TOKEN,
  // host: process.env.CLIENT_CF_HOST,
  // environment: process.env.CLIENT_CF_ENV
  space: '4c8omcpwbxse',
  accessToken: 'fa153aab90eccf3e3e1f1432685543c16a9b29825720ee0fb824d5cc34f09b59',
  host: 'cdn.contentful.com',
  environment: 'master'
})

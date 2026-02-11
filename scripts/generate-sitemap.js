import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'

const hostname = 'https://withoutatraceaesthetics.co.uk'

const routes = [
  '/',
  '/treatments',
  '/about',
]

const sitemap = new SitemapStream({ hostname })

routes.forEach(route => sitemap.write({ url: route }))

sitemap.end()

streamToPromise(sitemap).then(data => {
  createWriteStream('./public/sitemap.xml').write(data.toString())
})

import React from 'react'
import Helmet from 'react-helmet'
import { Location } from '@reach/router'

function SeoBase({
  siteUrl,
  description = '',
  author,
  lang = `en`,
  meta = [],
  title,
  titleTemplate = `%s`,
  path,
  socialThumbPath,
  location,
}) {
  if (!title) throw new Error('You must specify a title for the SEO component.')

  const { pathname } = location
  const metaPath = path || pathname
  const metaFullUrl = `${siteUrl}${metaPath}`.replace(/\/+$/, '')
  const socialThumbUrl = `${siteUrl}${socialThumbPath}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
        prefix: 'og: http://ogp.me/ns#',
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metaFullUrl,
        },
        {
          property: `og:image`,
          content: socialThumbUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: socialThumbUrl,
        },
      ].concat(meta)}
    >
      <link rel="preconnect" href="http://res.cloudinary.com"></link>
    </Helmet>
  )
}

const Seo = ({ ...props }) => (
  <Location>
    {({ location }) => <SeoBase location={location} {...props} />}
  </Location>
)

export default Seo

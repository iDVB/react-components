import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Hero } from '@klickmarketing/react-components'
import { graphql, useStaticQuery } from 'gatsby'

const HeroWithImageQuery = (props) => {
  const imageQuery = useStaticQuery(graphql`
    query {
      portrait: allFile(filter: { relativePath: { glob: "heros/*.*" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 640, maxHeight: 900, cropFocus: ATTENTION) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      landscape: allFile(filter: { relativePath: { glob: "heros/*.*" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 1680) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return <Hero imageQuery={imageQuery} {...props} />
}

export default HeroWithImageQuery

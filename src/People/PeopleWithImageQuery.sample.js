import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { People } from '@klickmarketing/react-components'
import { graphql, useStaticQuery } from 'gatsby'

function PeopleWithData(props) {
  const peopleImages = useStaticQuery(graphql`
    query {
      headshot: allFile(filter: { relativePath: { glob: "people/*.*" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 224, maxHeight: 224, cropFocus: NORTH) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
      portrait: allFile(filter: { relativePath: { glob: "people/*.*" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxHeight: 1024) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
      landscape: allFile(filter: { relativePath: { glob: "people/*.*" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 946, maxHeight: 946, cropFocus: NORTH) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)

  return <People peopleImages={peopleImages} {...props} />
}

export default PeopleWithData

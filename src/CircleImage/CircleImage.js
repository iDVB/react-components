import React from 'react'
import { Box } from '@material-ui/core'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const CircleImage = ({ sources, alt = '' }) => {
  return (
    <Box position="relative" pt="100%">
      <ImgContainer>
        <GatsbyImage image={sources} alt={alt} />
      </ImgContainer>
    </Box>
  )
}

const ImgContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export default CircleImage

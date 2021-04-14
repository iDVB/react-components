import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { reduceImages } from '../_common/utils'

const sizeLookup = {
  small: {
    xs: 200,
    md: 250,
    lg: 300,
  },
  medium: {
    xs: 300,
    md: 400,
    lg: 500,
  },
  large: {
    xs: 400,
    md: 500,
    lg: 600,
  },
}

const MAIN_NAV_OFFSET = {
  mobile: '56px',
  desktop: '74px',
}

const Hero = (props) => {
  const {
    imageQuery,
    imageFilename = 'image-filename',
    objectPosition = '50% 100%',
    heading = 'Put Heading Here',
    overlay,
    size = 'medium',
    minHeight,
    ...rest
  } = props

  const imagesLandscape = reduceImages(imageQuery.landscape.edges)
  const imgSources = imagesLandscape[imageFilename]

  const actualMinHeight = minHeight ?? sizeLookup[size]

  return (
    <div>
      {overlay && <Overlay />}
      <ImgHolder>
        <StyledImg
          image={imgSources}
          objectFit="cover"
          objectPosition={objectPosition}
          alt=""
        />
      </ImgHolder>
      <Container maxWidth="lg">
        <Box
          position="relative"
          zIndex="3"
          paddingTop={{
            xs: MAIN_NAV_OFFSET.mobile,
            md: MAIN_NAV_OFFSET.desktop,
          }}
          minHeight={actualMinHeight}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StyledHeading variant="h1">{heading}</StyledHeading>
        </Box>
      </Container>
    </div>
  )
}

const StyledHeading = styled.h1`
  position: relative;
  margin: 0;
  color: ${({ theme }) => theme.palette.text.primary};
  z-index: 2;
`

const ImgHolder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`

const Overlay = styled.div`
  top: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.palette.background.default};
  z-index: 3;
  opacity: 0.3;
`

const StyledImg = styled(GatsbyImage)`
  height: 100%;
`

export default Hero

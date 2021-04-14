import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'

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

  return (
    <div>
      {overlay && <Overlay />}
      <ImgHolder>
        <StyledImg />
      </ImgHolder>
      <Container maxWidth="lg">
        <Box
          position="relative"
          zIndex="3"
          minHeight={100}
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
  color: black;
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
  background: white;
  z-index: 3;
  opacity: 0.3;
`

const StyledImg = styled.div`
  height: 100%;
`

export default Hero

import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'

import Section from '../Section/Section'
import { Heading } from '../Typography/Typography'

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

  const actualMinHeight = minHeight ?? sizeLookup[size]

  return (
    <Section {...rest} pt={0} pb={0}>
      {overlay && <Overlay />}
      <ImgHolder />
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
    </Section>
  )
}

const StyledHeading = styled(Heading)`
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
  background: black;
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

export default Hero

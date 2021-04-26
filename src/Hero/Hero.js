import React from 'react'
import styled from 'styled-components'

const Hero = (props) => {
  const {
    heading = 'Put Heading Here',
  } = props

  return (
    <div>
      <ImgHolder>
        <StyledImg />
      </ImgHolder>
      <StyledHeading variant="h1">{heading}</StyledHeading>
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

const StyledImg = styled.div`
  height: 100%;
`

export default Hero

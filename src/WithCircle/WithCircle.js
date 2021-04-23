import React, { forwardRef } from 'react'
import { Box } from '@material-ui/core'
import { darken, lighten } from '@material-ui/core/styles/colorManipulator'
import styled, { keyframes } from 'styled-components'

import { match } from '../_contexts/Theme'
import FadeIn from '../FadeIn/FadeIn'

const WithCircle = forwardRef(
  ({ children, shouldLighten = true, shouldDarken = true }, ref) => {
    return (
      <Box ref={ref} position="relative">
        <FadeIn from="left">
          <Box position="relative" zIndex={2}>
            {children}
          </Box>
        </FadeIn>
        <FadeIn from="right">
          <Circle $shouldDarken={shouldDarken} $shouldLighten={shouldLighten} />
        </FadeIn>
      </Box>
    )
  }
)

const breathe = ({ theme, $shouldLighten, $shouldDarken }) => {
  const color = theme.palette.primary.main

  return keyframes`
  from {
    transform: translate(-50%, -50%) scale(1);
    background-color: ${$shouldDarken ? darken(color, 0.3) : color};
  }
  to {
    transform: translate(-50%, -50%) scale(1.1);
    background-color: ${$shouldLighten ? lighten(color, 0.3) : color};
  }
`
}

const Circle = styled.div`
  animation: ${(props) => breathe(props)} 2s alternate infinite ease-in-out;
  background: radial-gradient(
    circle,
    transparent,
    ${({ theme }) => theme.palette.primary.main}
  );

  height: 130px;
  width: 130px;
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  top: 20px;
  left: 100px;

  ${match.isSM} {
    height: 400px;
    width: 400px;
    top: 50%;
    left: 0;
  }
`

export default WithCircle

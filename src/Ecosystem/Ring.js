import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Ring = forwardRef(
  ({ color = `rgb(113, 103, 255, 20%)`, ...props }, ref) => {
    const { width = '300px' } = props

    return <StyledRing ref={ref} $width={width} $color={color} {...props} />
  }
)

const StyledRing = styled.div`
  --width: ${({ $width }) => $width};
  width: var(--width);
  height: var(--width);
  background: ${({ $color }) => `radial-gradient(
    circle,
    rgba(255, 255, 255, 0) 50%,
    ${$color} 100%
  )`};
  border: rgb(255 255 255 / 20%) 1px solid;
  border-radius: 100%;
`

Ring.defaultProps = {
  width: 300,
}

export default Ring

import React from 'react'
import { Box, fade } from '@material-ui/core'
import { get } from 'lodash'
import styled, { css } from 'styled-components'

function ShadowBox({
  children,
  top = true,
  bottom = true,
  shadowHeight = 60,
  shadowColorY = 'background.default',
  shadowColorTop,
  shadowColorBottom,
  ...rest
}) {
  return (
    <StyledBox
      $top={top}
      $bottom={bottom}
      $shadowHeightTop={shadowHeight}
      $shadowHeightBottom={shadowHeight}
      $shadowColorTop={shadowColorTop || shadowColorY}
      $shadowColorBottom={shadowColorBottom || shadowColorY}
      {...rest}
    >
      {children}
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  position: relative;

  ${({
    theme,
    $shadowColorTop,
    $shadowColorBottom,
    $bottom,
    $top,
    $shadowHeightTop,
    $shadowHeightBottom,
  }) => {
    return css`
      /* Top Shadow */
      :before {
        display: ${$top ? 'block' : 'none'};
        position: absolute;
        z-index: 2;
        content: '';
        top: 0;
        width: 100%;
        height: ${$shadowHeightTop}px;
        background-image: linear-gradient(
          ${get(theme.palette, $shadowColorTop)},
          ${fade(get(theme.palette, $shadowColorTop), 0)}
        );
      }

      /* Bottom Shadow */
      :after {
        display: ${$bottom ? 'block' : 'none'};
        position: absolute;
        z-index: 2;
        content: '';
        bottom: 0;
        width: 100%;
        height: ${$shadowHeightBottom}px;
        background-image: linear-gradient(
          ${fade(get(theme.palette, $shadowColorBottom), 0)},
          ${get(theme.palette, $shadowColorBottom)}
        );
      }
    `
  }}
`

export default ShadowBox

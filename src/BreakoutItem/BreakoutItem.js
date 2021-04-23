import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { match } from '../_contexts/Theme'

// The BreakoutItem is intended to be used inside the TwoColumnGrid, so you can have one of the items "break out" of the container. We often do this with the CircleImg to give a dramatic effect.
function BreakoutItem({
  children,
  alignFrom = 'left',
  sizeLg: _sizeLg = '100%',
}) {
  const { sizeMd, sizeLg, sizeXl } = getMediaSizes(_sizeLg)

  return (
    <Box
      position="relative"
      pt="100%"
      height={{ md: sizeMd, lg: sizeLg, xl: sizeXl }}
    >
      <BreakoutItemContainer
        $alignFrom={alignFrom}
        $sizeMd={sizeMd}
        $sizeLg={sizeLg}
        $sizeXl={sizeXl}
      >
        {children}
      </BreakoutItemContainer>
    </Box>
  )
}

BreakoutItem.propTypes = {
  // sizeLg : This is the height/width of the breakout container in pixels on large screens. It will calculate the sizes for isMD and isXL based on this. The default is simply '100%', which will not breakout at all.
  sizeLg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alignFrom: PropTypes.oneOf(['left', 'right']),
}

const BreakoutItemContainer = styled(Box)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;

  ${({ $alignFrom = 'left' }) => `${$alignFrom}: 0;`}

  ${match.isMD} {
    height: ${({ $sizeMd }) => $sizeMd};
    width: ${({ $sizeMd }) => $sizeMd};
  }

  ${match.isLG} {
    height: ${({ $sizeLg }) => $sizeLg};
    width: ${({ $sizeLg }) => $sizeLg};
  }

  ${match.isXL} {
    height: ${({ $sizeXl }) => $sizeXl};
    width: ${({ $sizeXl }) => $sizeXl};
  }
`

function getMediaSizes(_sizeLg) {
  const sizeMd = typeof _sizeLg === 'string' ? _sizeLg : `${_sizeLg * 0.7}px`

  const sizeLg = typeof _sizeLg === 'string' ? _sizeLg : `${_sizeLg * 1}px`

  const sizeXl = typeof _sizeLg === 'string' ? _sizeLg : `${_sizeLg * 1}px`

  return {
    sizeMd,
    sizeLg,
    sizeXl,
  }
}

export default BreakoutItem

import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

import FadeIn from '../FadeIn/FadeIn'

const defaultProps = {
  columnContents: ['COLUMN ONE CONTENT HERE', 'COLUMN TWO CONTENT HERE'],
  columnProps: [{}, {}],
  columnWidths: ['50%', '50%'],
  fade: [true, true],
  innerSpacing: { mobile: 4, breakingPoint: 12 },
}

const TwoColumnGrid = (props) => {
  const {
    direction = 'row',
    alignItems = 'center',
    breakingPoint = 'md',
    columnContents = defaultProps.columnContents,
    columnWidths = defaultProps.columnWidths,
    columnProps = defaultProps.columnProps,
    fade = defaultProps.fade,
    innerSpacing = defaultProps.innerSpacing,
    children,
    ...rest
  } = props

  const columnOneFadeDirection = direction === 'row-reverse' ? 'right' : 'left'
  const columnTwoFadeDirection = direction === 'row-reverse' ? 'left' : 'right'

  return (
    <Box
      display={{ [breakingPoint]: 'flex' }}
      alignItems={{ [breakingPoint]: alignItems }}
      flexDirection={{ [breakingPoint]: direction }}
      {...rest}
    >
      <FadeIn from={columnOneFadeDirection} enabled={fade[0]}>
        <Box
          paddingLeft={{
            [breakingPoint]:
              direction === 'row' ? 0 : innerSpacing.breakingPoint / 2,
          }}
          paddingRight={{
            [breakingPoint]:
              direction === 'row-reverse' ? 0 : innerSpacing.breakingPoint / 2,
          }}
          paddingBottom={{ xs: innerSpacing.mobile / 2, [breakingPoint]: 0 }}
          width={{ xs: '100%', [breakingPoint]: columnWidths[0] }}
          {...columnProps[0]}
        >
          {columnContents[0]}
        </Box>
      </FadeIn>
      <FadeIn from={columnTwoFadeDirection} enabled={fade[1]}>
        <Box
          paddingLeft={{
            [breakingPoint]:
              direction === 'row' ? innerSpacing.breakingPoint / 2 : 0,
          }}
          paddingRight={{
            [breakingPoint]:
              direction === 'row-reverse' ? innerSpacing.breakingPoint / 2 : 0,
          }}
          paddingTop={{ xs: innerSpacing.mobile / 2, [breakingPoint]: 0 }}
          width={{ xs: '100%', [breakingPoint]: columnWidths[1] }}
          {...columnProps[1]}
        >
          {columnContents[1]}
        </Box>
      </FadeIn>
    </Box>
  )
}

TwoColumnGrid.propTypes = {
  direction: PropTypes.oneOf(['row', 'row-reverse']),
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  columns: PropTypes.array,
  columnWidths: PropTypes.arrayOf(PropTypes.string),
  breakingPoint: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  innerSpacing: PropTypes.shape({
    mobile: PropTypes.number,
    breakingPoint: PropTypes.number,
  }),
  fade: PropTypes.arrayOf(PropTypes.bool),
}

export default TwoColumnGrid

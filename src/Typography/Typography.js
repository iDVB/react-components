import React, { forwardRef } from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { match } from '../_contexts/Theme'

const StyledTypography = styled(Typography)`
  &:last-child {
    margin-bottom: 0;
  }
`

// HEADING
export const Heading = styled(
  forwardRef((props, ref) => {
    const { font, variant, ...restProps } = props
    return (
      <StyledTypography
        ref={ref}
        color="textPrimary"
        variant={variant}
        component={variant}
        {...restProps}
      />
    )
  })
)`
  ${({ font, theme }) =>
    font &&
    `
font-family: ${theme.typography.font[font]};
font-weight: ${font === 'primary' ? 700 : 400};
`}
`
Heading.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
}

// PARAGRAPH
export const P = forwardRef(({ variant, ...props }, ref) => {
  const hasCustomVariant = !!customVariants[variant]
  const Component = hasCustomVariant ? customVariants[variant] : DefaultP
  return (
    <Component
      ref={ref}
      variant={hasCustomVariant ? undefined : variant}
      {...props}
    />
  )
})
const DefaultP = forwardRef((props, ref) => {
  const {
    variant = 'body1',
    color = 'textPrimary',
    paragraph = true,
    ...restProps
  } = props
  return (
    <StyledTypography
      ref={ref}
      paragraph={paragraph}
      variant={variant}
      color={color}
      {...restProps}
    />
  )
})
const Blurb1 = styled(DefaultP)`
  font-weight: 700;
  font-size: 1.5625rem;
  line-height: 1.235;

  ${match.isSM} {
    font-size: 1.8219rem;
  }

  ${match.isMD} {
    font-size: 2.0243rem;
  }
`
const Blurb2 = styled(DefaultP)`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.6;
`
const customVariants = {
  blurb1: Blurb1,
  blurb2: Blurb2,
}
P.propTypes = {
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'blurb1',
    'blurb2',
    'button',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2',
  ]),
}

export const UL = styled(({ color, ...props }) => {
  return <P component="ul" $color={color} {...props} />
})`
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;

  li:before {
    content: '•';
    color: ${({ theme, $color }) => $color || theme.palette.primary.main};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`

export const HR = styled.hr`
  padding: 0;
  border: 0;
  border-top: 1px solid #f2f2f2;
  background: none;
  margin: 0;
`

export const Decorator = styled.div.attrs(() => ({
  // Note: see a11y role details here https://www.w3.org/TR/wai-aria-1.1/#presentation
  role: 'none',
}))`
  ${({ $align = 'center', $size = 6, $width = '4vw', $minWidth = '50px' }) => {
    return css`
      display: inline-block;
      padding: 0;
      border: 0;
      border-top: ${$size}px solid
        ${({ theme }) => {
          return theme.palette.primary.main
        }};
      background: none;
      width: ${$width};
      min-width: ${$minWidth};
      margin-top: 30px;
      margin-bottom: 30px;
      margin-left: auto;
      margin-right: auto;

      ${$align === 'left' && `margin-left: 0;`}
      ${$align === 'right' && `margin-right: 0;`}
    `
  }}
`

export const NoWrap = styled.span`
  white-space: nowrap;
`

export const AvoidWrap = styled.span`
  display: inline-block;
`

export const Em = styled.em`
  color: ${({ theme }) => theme.palette.primary.main};
  font-style: inherit;
`

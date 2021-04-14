import React, { forwardRef } from 'react'
import MuiButton from '@material-ui/core/Button'
import styled from 'styled-components'

const Button = forwardRef(
  ({ variant = 'contained', color = 'primary', ...rest }, ref) => {
    const SizedButton = buttonSizes[rest.size] || buttonSizes['default']

    // TODO: this means we cannot override color for outlined buttons at the moment.
    const realColor = variant === 'outlined' ? 'inherit' : color

    return (
      <SizedButton
        ref={ref}
        disableElevation={true}
        variant={variant}
        color={realColor}
        {...rest}
      />
    )
  }
)

const StyledButton = styled(MuiButton)`
  color: ${({ theme, color }) => color || theme.palette.primary.main};

  &.MuiButton-outlined {
    color: ${({ theme, color }) => color || theme.palette.text.primary};
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  &.MuiButton-sizeLarge,
  &[class*='MuiButton-sizeLarge-'] {
    padding: 16px 30px;
  }
`

const XLargeButton = styled(
  forwardRef(({ size, ...rest }, ref) => (
    <StyledButton ref={ref} size="large" {...rest} />
  ))
)`
  &.MuiButton-sizeLarge,
  &[class*='MuiButton-sizeLarge-'] {
    padding: 35px 50px;
    white-space: nowrap;
  }
`

const XXLargeButton = styled(XLargeButton)`
  padding: 35px 95px;
  font-size: ${({ theme }) => theme.typography.pxToRem(22)};
`

const buttonSizes = {
  xlarge: XLargeButton,
  xxlarge: XXLargeButton,
  default: StyledButton,
}

export default Button

import React from 'react'
import { Box } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { style } from '@material-ui/system'
import styled from 'styled-components'

const marginBottom = style({
  prop: '$spacing',
  cssProperty: 'marginBottom',
  themeKey: 'spacing',
})

const Stack = ({ spacing = 'medium', ...rest }) => {
  const theme = useTheme()

  return (
    <StyledBox
      $spacing={theme.defaults.spacing[spacing] || spacing}
      {...rest}
    ></StyledBox>
  )
}

const StyledBox = styled(Box)`
  & > * {
    ${marginBottom}
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`

export default Stack

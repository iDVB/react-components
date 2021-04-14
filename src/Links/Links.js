import React, { forwardRef } from 'react'
import { Link as MUILink } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

export const InternalLink = forwardRef((props, ref) => (
  <GatsbyLink ref={ref} {...props} />
))

export const TextLink = forwardRef(
  ({ underline = 'always', ...props }, ref) => (
    <StyledMUILink ref={ref} underline={underline} {...props} />
  )
)

const StyledMUILink = styled(MUILink)`
  text-decoration-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.text.primary};
  &:hover {
    cursor: pointer;
    text-decoration-color: ${({ theme }) => theme.palette.primary.main};
  }
`

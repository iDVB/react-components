import React from 'react'
import { Box } from '@material-ui/core'
import styled from 'styled-components'

import { match } from '../_contexts/Theme'
import KlickLogo from '../KlickLogo/KlickLogo'
import { InternalLink } from '../Links/Links'
import { Heading } from '../Typography/Typography'

const Lockup = ({
  brandName,
  themeType,
  to,
  tagline = (
    <>
      <span>There's something</span> <span>different here.</span>
    </>
  ),
  label,
  onClick,
  ...rest
}) => {
  const logoTagline = [
    <Logo key="logo" brandName={brandName} themeType={themeType} />,
    <Divider key="divider" />,
    <Tagline key="tagline" component="span">
      {tagline}
    </Tagline>,
  ]

  return to ? (
    <StyledWrapper
      as={InternalLink}
      to={to}
      aria-label={label}
      onClick={onClick}
      children={logoTagline}
    />
  ) : (
    <StyledWrapper as={Box} children={logoTagline} />
  )
}

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;
`

const Logo = styled(KlickLogo)`
  width: 40px;
`

const Divider = styled.div`
  width: 1px;
  background: ${({ theme }) => theme.palette.text.primary};
  margin: 0 2.4rem;
  align-self: stretch;
`

const Tagline = styled(Heading)`
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.typography.font['secondary']};
  font-weight: 400;

  & > span {
    white-space: nowrap;
    ${match.isSM} {
      white-space: normal;
    }
  }

  ${match.isSM} {
    font-size: 1.2rem;
  }
`

export default Lockup

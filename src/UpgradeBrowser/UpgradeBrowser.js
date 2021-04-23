import React from 'react'
import { Box, Container } from '@material-ui/core'
import styled from 'styled-components'

import ThemeProvider from '../_contexts/Theme'
import KlickLogo from '../KlickLogo/KlickLogo'
import { ExternalLink, TextLink } from '../Links/Links'
import Section from '../Section/Section'
import { Heading, P } from '../Typography/Typography'

import chrome from './images/chrome-logo.svg'
import edge from './images/edge-logo.png'
import firefox from './images/firefox-logo.png'
import safari from './images/safari-logo.png'

// IMPORTANT: This contents of this dangerouslySetInnerHTML CANNOT contain and
// code requiring transpilation as it will be included pre-transpilation.
export const UpgradeBrowserScript = () => (
  <script
    id="upgrade-browser-script"
    dangerouslySetInnerHTML={{
      __html: `(${function () {
        const isIntersectionObserverSupported = function () {
          return (
            'IntersectionObserver' in window &&
            'IntersectionObserverEntry' in window &&
            'intersectionRatio' in window.IntersectionObserverEntry.prototype
          )
        }
        const targetURI = '/upgrade-browser'
        const isTargetPath = window.location.pathname.indexOf(targetURI) !== -1
        if (!isIntersectionObserverSupported() && !isTargetPath) {
          window.location.replace(targetURI)
        }
      }})()`,
    }}
  />
)

const browsers = [
  {
    link: 'https://www.google.com/chrome/',
    label: 'Chrome',
    logo: chrome,
  },
  {
    link: 'https://www.microsoft.com/en-us/edge',
    label: 'Edge',
    logo: edge,
  },

  {
    link: 'https://www.mozilla.org/en-US/firefox/new/',
    label: 'Firefox',
    logo: firefox,
  },
  {
    link: 'https://support.apple.com/downloads/safari',
    label: 'Safari',
    logo: safari,
  },
]

export const UpgradeBrowserPage = () => {
  return (
    <ThemeProvider themeType="onWhite">
      <Section
        name="Upgrade Browser"
        textAlign="center"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Container maxWidth="md">
          <StyledKlickLogo />
          <Heading variant="h3" component="h1">
            Your browser is not supported.
          </Heading>
          <P variant="blurb2">
            As a future forward company with strong digital roots, we pride
            ourselves on building experiences online that truly stand out. To
            ensure the best experience for our visitors, we have made the
            decision to no longer support legacy browsers.
          </P>
          <P variant="blurb2">
            We encourage you to enjoy this website to the fullest by updating
            your browser or downloading one of the following browsers:
          </P>
          <Box pt={2}>
            {browsers.map(({ link, logo, label }) => (
              <StyledLogo key={link}>
                <ExternalLink href={link}>
                  <img height="48" width="48" src={logo} alt={label} />
                </ExternalLink>
                <br />
                <P variant="body1">
                  <StyledLink href={link} component={ExternalLink}>
                    {label}
                  </StyledLink>
                </P>
              </StyledLogo>
            ))}
          </Box>
        </Container>
      </Section>
    </ThemeProvider>
  )
}

const StyledKlickLogo = styled(KlickLogo)`
  height: 130px;
  display: inline-block;
  margin: ${({ theme }) => `0 0 ${theme.spacing(3)}px 0`};
`

const StyledLogo = styled.div`
  display: inline-block;
  padding-right: 24px;

  &:last-child {
    padding-right: 0;
  }
`
const StyledLink = styled(TextLink)`
  color: ${({ theme }) => theme.palette.text.primary};
`

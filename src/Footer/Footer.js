import React, { forwardRef } from 'react'
import { Box, Container, fade, useTheme } from '@material-ui/core'
import styled from 'styled-components'

import { tracking } from '../_common/tracking'
import { useConsentContext } from '../_contexts/Consent'
import ThemeProvider, { match } from '../_contexts/Theme'
import Addresses from '../Addresses/Addresses'
import Copyright from '../Copyright/Copyright'
import { ExternalLink, InternalLink, TextLink } from '../Links/Links'
import Lockup from '../Lockup/Lockup'
import SocialButtons from '../SocialButtons/SocialButtons'
import { Heading } from '../Typography/Typography'

const trackFooterClick = ({ label }) => {
  tracking.track('Footer Item Clicked', {
    category: 'Page Interactions',
    action: 'Footer Click',
    label,
  })
}

const DEFAULT_FOOTER_ITEMS = [
  {
    label: 'Discover Klick',
    items: [
      { label: 'Klick Health', to: 'https://www.klick.com', kind: 'link' },
      {
        label: 'Klick Katalyst',
        to: 'https://katalyst.klick.com',
        kind: 'link',
      },
      {
        label: 'Klick Consulting',
        to: 'https://consulting.klick.com',
        kind: 'link',
      },
      {
        label: 'Klick Ideas Exchange',
        to: 'https://idx.klick.com',
        kind: 'link',
      },
      {
        label: 'Careers @ Klick',
        to: 'https://careers.klick.com',
        kind: 'link',
      },
    ],
  },
  {
    label: '',
    items: [
      {
        label: 'Contact Us',
        to: '/contact',
        component: InternalLink,
        kind: 'link',
      },
      {
        label: 'Newsletter',
        to: 'https://www.klick.com/klickwire',
        kind: 'link',
      },
      {
        label: 'Newsroom',
        to: 'https://www.klick.com/health/announcements',
        kind: 'link',
      },
      {
        label: 'Privacy Policy',
        to: 'https://www.klick.com/privacy',
        kind: 'link',
      },
      {
        label: 'Cookie Settings',
        onClick: 'showCookiesModal',
        kind: 'button',
        component: 'button',
      },
    ],
  },
]

const Footer = (props) => {
  const { itemsList = DEFAULT_FOOTER_ITEMS, divider = true } = props
  const theme = useTheme()
  return (
    <ThemeProvider themeType="onBlack">
      {divider && (
        <StyledContainer>
          <Box position="relative">
            <LineDivider />
          </Box>
        </StyledContainer>
      )}
      <StyledFooter component="footer">
        <Container>
          <Box
            display={{ xs: 'block', sm: 'flex' }}
            flexDirection="row"
            flexWrap="wrap"
            py={theme.defaults.spacing.medium}
          >
            <Box width="100%" pb={10}>
              <Lockup
                to="/"
                label="Homepage"
                onClick={() => {
                  trackFooterClick({
                    label: 'Logo',
                  })
                }}
              />
            </Box>
            <StyledAddresses />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <FooterItemsList items={itemsList} />
              <SocialButtons />
            </Box>
            <Box
              width="100%"
              mt={10}
              pt={2}
              borderTop={1}
              borderColor="text.primary"
            >
              <Copyright />
            </Box>
          </Box>
        </Container>
      </StyledFooter>
    </ThemeProvider>
  )
}

const FooterItemsList = ({ items, ...rest }) => {
  const { showCookiesModal } = useConsentContext()
  const onClickActionsMap = {
    showCookiesModal,
  }
  const subItems = (subItems, component, altColor) => {
    return (
      <ul>
        {subItems.map((item, index) => {
          const onClickFn =
            onClickActionsMap[item.onClick] || item.onClick || noop

          const handleClick = function () {
            onClickFn()
            trackFooterClick({ label: item.ariaLabel || item.label })
          }

          const linkLookup = {
            link: (
              <StyledLink
                underline="hover"
                component={component || item.component || ExternalLink}
                to={item.to}
                aria-label={item.ariaLabel || item.label}
                altColor={altColor}
                onClick={handleClick}
                children={item.label}
              />
            ),
            button: (
              <StyledLink
                underline="hover"
                aria-label={item.ariaLabel || item.label}
                component={component || item.component || ExternalLink}
                altColor={altColor}
                onClick={handleClick}
                variant="body1"
              >
                {item.label}
              </StyledLink>
            ),
            label: item.label,
          }
          return <li key={index}>{linkLookup[item.kind]}</li>
        })}
      </ul>
    )
  }

  return (
    <LinkGroupBox {...rest}>
      {items.map((item, index) => {
        const altColor = index > 0
        const label = item.label
        const headLink = item.to ? (
          <StyledLink
            to={item.to}
            underline="hover"
            component={item.component || ExternalLink}
            ariaLabel={item.ariaLabel || item.label}
            onClick={
              item.onClick ||
              function () {
                trackFooterClick({ label })
              }
            }
            children={label}
          />
        ) : (
          <Heading variant="h5" component="span">
            {label}
          </Heading>
        )
        return (
          <Box key={index}>
            {label && headLink}
            {subItems(item.items, item.component, altColor)}
          </Box>
        )
      })}
    </LinkGroupBox>
  )
}

const noop = function () {}

const LinkGroupBox = styled.div`
  margin-top: 5rem;
  ${match.isSM} {
    padding-left: 0.875rem;
    margin-top: 0;
  }

  & > div:last-child {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: ${({ theme }) => fade(theme.palette.text.primary, 0.3)} 1px
      solid;
  }
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;

    ${match.isSM} {
      column-count: 2;
    }
  }

  & ${Heading} {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

const StyledAddresses = styled(Addresses)`
  display: block;
  flex-grow: 1;
  line-height: 1.8rem;

  & address {
    font-style: normal;
  }
  & .extended-address {
    display: block;
    ${match.isMD} {
      display: inline;
    }
  }
  & br {
    display: none;
    ${match.isMD} {
      display: inline;
    }
  }
  & > li {
    display: block;
    margin-bottom: 2rem;

    ${match.isMD} {
      margin-bottom: 3.2rem;
    }

    &:last-child {
      margin: 0;
    }
  }
  & ${Heading} {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

const StyledFooter = styled(Box)`
  position: relative;
  z-index: 5;
  font-size: 1rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.default};
`
const StyledContainer = styled(Container)`
  position: relative;
`
const LineDivider = styled.div`
  width: 100%;
  border-bottom: 1px solid
    ${({ theme }) => fade(theme.palette.text.primary, 0.15)};
  position: absolute;
  top: -1px;
`

const WrappedLink = forwardRef(({ altColor, ...props }, ref) => (
  <TextLink ref={ref} {...props} />
))

const StyledLink = styled(WrappedLink)`
  color: ${({ theme, altColor }) =>
    altColor
      ? fade(theme.palette.text.primary, 0.5)
      : theme.palette.text.primary};
`

export default Footer

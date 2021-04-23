import React, { useRef, useState } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import {
  AppBar,
  Box,
  Container,
  Fade,
  fade,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import {
  Cancel as IconClose,
  MoreVert as IconMoreVert,
} from '@material-ui/icons'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import styled from 'styled-components'

import { tracking } from '../_common/tracking'
import ThemeProvider, { brandColors, match } from '../_contexts/Theme'
import { ExternalLink, InternalLink, TextLink } from '../Links/Links'
import { Heading, P } from '../Typography/Typography'

const track = ({ id, dcCode }) => {
  tracking.track('Top Nav Item Clicked', {
    category: 'Page Interactions',
    action: 'Top Nav Click',
    label: id,
    dcCode,
  })
}

const DEFAULT_TABS = [
  {
    label: 'Klick Health',
    shortLabel: 'Health',
    to: 'https://www.klick.com',
  },
  {
    label: 'Klick Consulting',
    shortLabel: 'Consulting',
    to: 'https://consulting.klick.com',
  },
]

const DEFAULT_LINKS = [
  {
    links: [
      {
        label: 'Klick Health',
        to: 'https://www.klick.com',
        brandColor: brandColors.klick,
      },
      {
        label: 'Klick Katalyst',
        to: 'https://katalyst.klick.com',
        brandColor: brandColors.katalyst,
      },
      {
        label: 'Klick Consulting',
        to: 'https://consulting.klick.com',
        brandColor: brandColors.consulting,
      },
      {
        label: 'Klick Applied Sciences',
        to: 'https://appliedsciences.klick.com',
        brandColor: brandColors.appliedsciences,
      },
      {
        label: 'Klick Ventures',
        to: 'https://ventures.klick.com',
        brandColor: brandColors.ventures,
      },
      { label: 'Klick Ideas Exchange', to: 'https://idx.klick.com' },
      {
        label: 'Sensei Labs',
        to: 'https://www.senseilabs.com',
        brandColor: brandColors.sensei,
      },
    ],
  },
  {
    links: [{ label: 'Careers @ Klick', to: 'https://careers.klick.com' }],
  },
]

const EyebrowBar = ({ tabs, links, selectedTabIndex }) => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const fatBarRef = useRef()

  useIsomorphicLayoutEffect(() => {
    if (!fatBarRef.current) return
    const fatBar = fatBarRef.current
    if (isOpen) {
      disableBodyScroll(fatBar)
    } else {
      enableBodyScroll(fatBar)
    }
  }, [isOpen])

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ThemeProvider themeType="onBlack">
      <StyledAppBar elevation={0} position="relative" color="transparent">
        <Box bgcolor="background.default" color="text.primary" zIndex={2}>
          <TabContainer>
            <StyledToolbar variant="dense" disableGutters={true}>
              <StyledTabs
                value={selectedTabIndex}
                component="nav"
                aria-label="Tab navigation between Klick Web Properties"
                variant={isMobile ? 'fullWidth' : 'standard'}
              >
                {tabs.map(
                  ({ shortLabel, label, dcCode, to, ...rest }, index) => (
                    <StyledTab
                      tabIndex={0}
                      key={index}
                      label={
                        <>
                          <MobileOnly>{shortLabel || label}</MobileOnly>
                          <DesktopOnly>{label}</DesktopOnly>
                        </>
                      }
                      to={index === selectedTabIndex ? '/' : to}
                      component={
                        index === selectedTabIndex ? InternalLink : ExternalLink
                      }
                      {...rest}
                      onClick={() => {
                        track({ id: label, dcCode: dcCode })
                      }}
                    />
                  )
                )}
                <CloseTab
                  tabIndex={0}
                  label={
                    !isOpen ? (
                      <>
                        <MobileOnly>
                          <IconMoreVert fontSize="small" />
                          Group
                        </MobileOnly>
                        <DesktopOnly>
                          <IconMoreVert fontSize="small" />
                          Klick Group
                        </DesktopOnly>
                      </>
                    ) : (
                      <IconClose fontSize="large" />
                    )
                  }
                  onClick={handleOpen}
                />
              </StyledTabs>
            </StyledToolbar>
          </TabContainer>
        </Box>
        <Fade in={isOpen}>
          <FatBar ref={fatBarRef}>
            <FatBarContent>
              <StyledContainer>
                <Box maxWidth="400px">
                  <StyledHeading component="div" variant="h4" font="primary">
                    Klick
                    <br /> Group
                  </StyledHeading>
                  <P paragraph={false}>
                    The Klick Group of companies is an ecosystem of brilliant
                    minds working to realize the full potential of their people
                    and clients since&nbsp;1997.
                  </P>
                </Box>
                <Divider />
                <LinkGroup links={DEFAULT_LINKS} />
              </StyledContainer>
            </FatBarContent>
            <FatBarOverlay onClick={handleOpen} />
          </FatBar>
        </Fade>
      </StyledAppBar>
    </ThemeProvider>
  )
}

const StyledAppBar = styled(AppBar)`
  z-index: 1200;
`
const TabContainer = styled(Container)`
  ${match.isXS} {
    padding: 0;
  }
`

const minHeight = '40px'
const StyledToolbar = styled(Toolbar)`
  min-height: ${minHeight};
  display: block;

  ${match.isSM} {
    display: flex;
    justify-content: flex-end;
  }
`

const StyledTabs = styled((props) => (
  <Tabs classes={{ indicator: 'MuiTabs-indicator' }} {...props} />
))`
  min-height: ${minHeight};
  & .MuiTabs-indicator {
    height: 5px;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`

const StyledTab = styled(Tab)`
  font-size: ${({ theme }) => theme.typography.pxToRem(12)};

  ${match.isXS} {
    flex: 1 1 0;
    max-width: none;
  }
`

const CloseTab = styled(StyledTab)`
  background: ${({ theme }) => theme.palette.grey[700]};

  ${match.isXS} {
    flex: 1 1 0;
    max-width: none;
  }

  & > span:first-child > span {
    padding-right: 8px;
  }

  & > span:first-child > span > svg {
    margin-right: 8px;
  }

  ${match.isSM} {
    min-width: 150px;
  }
`

const FatBar = styled.div`
  position: absolute;
  padding-top: 48px;
  top: 0;
  left: 0;
  width: 100%;

  &[style*='opacity: 0'] {
    //no pointer-events when faded out
    pointer-events: none;
  }
`

const FatBarContent = styled.div`
  background: ${({ theme }) => theme.palette.grey[900]};
  height: 100vh;
  overflow: auto;

  ${match.isSM} {
    height: auto;
  }
`

const FatBarOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  position: absolute;
  z-index: -1;
`

const StyledContainer = styled(Container)`
  padding-top: 1.8rem;
  padding-bottom: 1.8rem;

  ${match.isMD} {
    padding-top: 3.7rem;
    padding-bottom: 3.7rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`

const StyledHeading = styled(Heading)`
  margin-bottom: 1rem;
  & br {
    display: none;
  }

  ${match.isSM} {
    & br {
      display: inherit;
    }
  }
`

const Divider = styled.div`
  width: 100%;
  background: ${({ theme }) => fade(theme.palette.text.primary, 0.3)};
  margin: 1.5rem 0;
  height: 1px;

  ${match.isMD} {
    width: 1px;
    margin: 0 1.5rem;
    height: auto;
    align-self: stretch;
  }
`

const StyledLink = styled(TextLink)`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  padding: 0.4em 1em;
  margin-left: -1em;
  position: relative;
  z-index: 1;
  font-size: 1rem;
  transition: color 0.3s ease-out;
  ${({ $isAltSection }) => $isAltSection && `font-weight: 700;`}

  ${match.isSM} {
    white-space: nowrap;
    font-size: 1.3rem;
  }

  ${match.isMD} {
    margin-left: 0;
  }

  &:before {
    display: block;
    content: ' ';
    background: ${({ $brandColor }) => $brandColor || '#fff'};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-out;
  }

  &:hover,
  &:focus {
    color: ${({ $brandColor }) => (!$brandColor ? '#000' : 'inherit')};
  }

  &:hover:before,
  &:focus:before {
    transform: scaleX(0.99);
  }
`
const LinkGroup = ({ links, ...rest }) => {
  const subLinks = (subLinks, component, isAltSection) => (
    <ul>
      {subLinks.map((link, index) => (
        <li key={index}>
          {link.to ? (
            <StyledLink
              component={component || link.component || ExternalLink}
              to={link.to}
              aria-label={link.ariaLabel || link.label}
              $isAltSection={isAltSection}
              $brandColor={link.brandColor}
              onClick={
                link.onClick ||
                function () {
                  track({ label: link.ariaLabel || link.label })
                }
              }
              children={link.label}
            />
          ) : (
            link.label
          )}
        </li>
      ))}
    </ul>
  )

  return (
    <LinkGroupBox {...rest}>
      {links.map((link, index) => {
        const isAltSection = index > 0
        const label = link.label
        return (
          <Box key={index}>
            {label}
            {subLinks(link.links, link.component, isAltSection)}
          </Box>
        )
      })}
    </LinkGroupBox>
  )
}

const LinkGroupBox = styled.div`
  & > div:last-child {
    margin-top: 2rem;
  }
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    column-count: 2;
  }
`
const MobileOnly = styled.span`
  display: flex;
  ${match.isSM} {
    display: none;
  }
`

const DesktopOnly = styled.span`
  display: none;
  ${match.isSM} {
    display: flex;
  }
`

EyebrowBar.defaultProps = {
  tabs: DEFAULT_TABS,
  links: DEFAULT_LINKS,
  selectedTabIndex: false,
}

export default EyebrowBar

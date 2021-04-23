import React, { useEffect, useRef } from 'react'
import { AppBar, Box, Container, fade, Toolbar } from '@material-ui/core'
import { Location } from '@reach/router'
import styled from 'styled-components'

import { tracking } from '../_common/tracking'
import ThemeProvider, { match } from '../_contexts/Theme'
import useIntersect from '../_hooks/useIntersect'
import Button from '../Button/Button'
import HamburgerNav from '../HamburgerNav/HamburgerNav'
import KlickLogo from '../KlickLogo/KlickLogo'
import { InternalLink } from '../Links/Links'

const BaseMainNavBar = ({ defaultTheme, location, pathThemes, links }) => {
  const intersectionRef = useRef()
  const [setNode, entry] = useIntersect({
    rootMargin: '0px 0px 0px',
  })

  useEffect(() => {
    setNode(intersectionRef.current)
  }, [setNode])

  const isSticky =
    !!entry.boundingClientRect &&
    entry.boundingClientRect.top <= 0 &&
    !entry.isIntersecting

  const isSingleButton = links.length === 1
  const pathTheme = getPathTheme(location.pathname, pathThemes)
  const currentTheme = isSticky ? 'onBlack' : pathTheme.type || defaultTheme
  const initBgFade = pathTheme.initBgFade

  return (
    <ThemeProvider themeType={currentTheme}>
      <div ref={intersectionRef} />
      <StyledAppBar
        elevation={0}
        position="sticky"
        sticky={isSticky ? 1 : 0}
        component="nav"
        $isSticky={isSticky}
        $initBgFade={initBgFade}
      >
        <BaseMainNavBarContent
          isSingleButton={isSingleButton}
          location={location}
          links={links}
        />
      </StyledAppBar>
    </ThemeProvider>
  )
}

const MainNavBarButtons = ({ links, location, isSingleButton }) => {
  return (
    <>
      {links.map((link, index) => {
        const isButton = link.type === 'button'
        const isCurrentPage = getIsCurrentPage({ link, location })
        return (
          <StyledButton
            key={index}
            component={link.component || InternalLink}
            size="large"
            variant={isButton ? 'contained' : 'text'}
            color={isButton ? 'primary' : 'default'}
            to={link.to}
            disableElevation={isButton}
            $isCurrentPage={isCurrentPage}
            $isSingleButton={isSingleButton}
            onClick={() => {
              track({ id: link.label, dcCode: link.dcCode })
            }}
            {...link.props}
          >
            {link.label}
          </StyledButton>
        )
      })}
    </>
  )
}

const BaseMainNavBarContent = React.memo(
  ({ links, isSingleButton, location }) => {
    return (
      <Container>
        <Toolbar disableGutters={true}>
          <InternalLink
            to="/"
            aria-label="Homepage"
            onClick={() => {
              track({ id: 'Logo' })
            }}
          >
            <StyledKlickLogo orientation="landscape" />
          </InternalLink>
          <Box flexGrow={1} />
          <MainNavBarButtons
            isSingleButton={isSingleButton}
            links={links}
            location={location}
          />
          <StyledHamburgerNav links={links} $isSingleButton={isSingleButton} />
        </Toolbar>
      </Container>
    )
  }
)

const track = ({ id, dcCode }) => {
  tracking.track('Header Nav Item Clicked', {
    category: 'Page Interactions',
    action: 'Header Nav Click',
    label: id,
    dcCode,
  })
}

const normalPathname = (pathname) =>
  pathname === '/' ? pathname : pathname?.replace(/\/$/, '')

const getPathTheme = (pathname, pathThemes) => {
  const themeKey = Object.keys(pathThemes).find((key) => {
    const npath = normalPathname(pathname)
    return npath === key || (npath?.indexOf(key) === 0 && key !== '/')
  })
  return themeKey ? pathThemes[themeKey] : false
}

function getIsCurrentPage({ link, location }) {
  return link.to?.replace(/\//g, '') === location.pathname?.replace(/\//g, '')
}

const StyledAppBar = styled(AppBar)`
  background-color: ${({ $isSticky, $initBgFade, theme }) =>
    $isSticky
      ? '#000'
      : $initBgFade
      ? fade(theme.palette.background.default, $initBgFade)
      : 'transparent'};
  transition: background-color 0.5s ease-in;
  margin-bottom: -58px;
  position: relative; // IE11 fallback
  position: sticky;

  ${match.isSM} {
    margin-bottom: -64px;
  }
  ${match.isMD} {
    margin-bottom: -82px;
  }
`

const StyledButton = styled(Button)`
  display: ${({ $isSingleButton }) =>
    $isSingleButton ? 'inline-flex' : 'none'};
  margin: ${({ theme }) => `0 ${theme.spacing(3)}px 0 0`};

  ${({ theme, variant, $isCurrentPage }) =>
    $isCurrentPage &&
    variant === 'text' &&
    `border-bottom: 3px solid ${theme.palette.primary.main};`}

  &:last-of-type {
    margin: 0;
  }

  ${match.isMD} {
    display: inline-flex;
  }

  &.MuiButton-sizeLarge,
  &[class*='MuiButton-sizeLarge-'] {
    ${({ $isSingleButton }) => $isSingleButton && `padding: 16px 24px;`}
  }
`

const StyledHamburgerNav = styled(HamburgerNav)`
  display: ${({ $isSingleButton }) => ($isSingleButton ? 'none' : 'flex')};
  ${match.isMD} {
    display: none;
  }
`

const StyledKlickLogo = styled(KlickLogo)`
  height: 40px;
  ${match.isMD} {
    margin: ${({ theme }) => `${theme.spacing(1)}px 0`};
    height: 58px;
  }
`

const MainNavBar = ({ ...props }) => (
  <Location>
    {({ location }) => <BaseMainNavBar location={location} {...props} />}
  </Location>
)

MainNavBar.defaultProps = {
  pathThemes: [],
  defaultTheme: 'onWhite',
  links: [
    {
      label: 'Get in touch',
      to: '/contact',
      type: 'button',
    },
  ],
}

export default MainNavBar

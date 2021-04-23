import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  Container,
  IconButton,
  MenuList,
  Portal,
  Toolbar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { darken } from '@material-ui/core/styles/colorManipulator'
import { Close as CloseIcon, Menu as MenuIcon } from '@material-ui/icons'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import ThemeProvider from '../_contexts/Theme'
import Copyright from '../Copyright/Copyright'
import KlickLogo from '../KlickLogo/KlickLogo'
import { InternalLink } from '../Links/Links'
import MenuItemLink from '../MenuItemLink/MenuItemLink'
import SocialButtons from '../SocialButtons/SocialButtons'

const isBuilding = typeof document === `undefined`
const portal = !isBuilding && document.getElementById('gatsby-portal')
const el = !isBuilding && document.createElement('div')

const HamburgerNav = ({ links, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false)
  const classes = useStyles({ isOpen })
  const menuRef = useRef()

  useEffect(() => {
    portal && portal.appendChild(el)

    return () => {
      portal && portal.removeChild(el)
    }
  }, [])

  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return

    isOpen ? disableBodyScroll(menu) : enableBodyScroll(menu)
    return () => {
      enableBodyScroll(menu)
    }
  }, [isOpen])

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  const linkHTML = links.map(({ hash, label, to }, index) => (
    <MenuItemLink
      key={index}
      className={classes.menuListItem}
      to={to}
      onClick={toggleNav}
    >
      {label}
    </MenuItemLink>
  ))

  return (
    <div className={classes.root} {...rest}>
      <IconButton
        className={classes.hamburger}
        onClick={toggleNav}
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>
      {portal && (
        <Portal container={el}>
          {isOpen && (
            <ThemeProvider themeType="onPrimary">
              <Container className={classes.menu} ref={menuRef}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Toolbar disableGutters={true}>
                    <InternalLink to="/" aria-label="Homepage">
                      <KlickLogo
                        className={classes.logo}
                        orientation="landscape"
                      />
                    </InternalLink>
                    <div className={classes.grow} />
                    <IconButton
                      className={classes.hamburger}
                      onClick={toggleNav}
                      aria-label="Menu"
                    >
                      <CloseIcon />
                    </IconButton>
                  </Toolbar>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    flexGrow={1}
                    pt={3}
                    pb={15}
                  >
                    <MenuList>{linkHTML}</MenuList>
                    <Box>
                      <SocialButtons
                        className={classes.social}
                        color="secondary"
                        groupLabel={false}
                      />
                      <Copyright />
                    </Box>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          )}
        </Portal>
      )}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  hamburger: {
    zIndex: '1500',
    backgroundColor: ({ isOpen }) =>
      isOpen ? darken(theme.palette.primary.main, 0.2) : 'unset',
    '&:hover': {
      backgroundColor: ({ isOpen }) =>
        !isOpen
          ? theme.palette.primary.main
          : darken(theme.palette.primary.main, 0.5),
    },
  },
  menu: {
    position: 'fixed',
    zIndex: '1500',
    top: '0',
    left: '0',
    height: '100vh',
    overflowY: 'auto',
    display: ({ isOpen }) => (isOpen ? 'block' : 'none'),
    background: theme.palette.primary.main,
    transform: ({ isOpen }) =>
      isOpen ? 'translate(0, 0)' : 'translate(100%, 0)',
  },
  menuListItem: {
    fontSize: '1.6rem',
  },
  social: {
    marginBottom: `${theme.spacing(3)}px`,
  },
  logo: {
    height: '50px',
    [theme.breakpoints.up('md')]: {
      margin: `${theme.spacing(1)}px 0`,
      height: '58px',
    },
  },
}))

export default HamburgerNav

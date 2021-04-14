import React from 'react'
import ReactDOM from 'react-dom'
import { Box, FormControlLabel, Switch, withStyles, Button } from '@material-ui/core'
import styled from 'styled-components'

import Dialog from '../Dialog/Dialog'
import { Heading, P } from '../Typography/Typography'

const CookieBanner = () => {
  const [isMounted, setIsMounted] = React.useState()

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return ReactDOM.createPortal(
    <div>
      <Banner isClosed={false}>
        <BannerContainer>
          <BannerCopy variant="body2">
            We use cookies and other tracking technologies to assist with
            navigation, analyze your use of our services, and assist with our
            promotional and marketing efforts.{' '}
            <BannerTextButton>
              View cookie options
            </BannerTextButton>
          </BannerCopy>
          <BannerButton aria-label="Accept">
            Accept
          </BannerButton>
        </BannerContainer>
      </Banner>
      <CookieDialog />
    </div>,
    document.body
  )
}

function CookieDialog() {
  const [tempHasConsent, setTempHasConsent] = React.useState(true)

  function toggleTemporaryCookiesState() {
    setTempHasConsent((state) => !state)
  }

  return (
    <div>
      <Dialog
        open={false}
        disableBackdropClick
        dialogTitle={
          <Heading variant="h5" component="h2">
            Cookies at Klick.
          </Heading>
        }
        dialogContent={
          <>
            <P variant="blurb2">
              We use cookies and other tracking technologies to assist with
              navigation, analyze your use of our services, and assist with our
              promotional and marketing efforts.
            </P>
            <Box display="flex" alignItems="center">
              <FormControlLabel
                control={
                  <IOSStyleSwitch
                    checked={tempHasConsent}
                    name="consent-toggle"
                    inputProps={{ 'aria-label': 'consent checkbox' }}
                  />
                }
                label={
                  tempHasConsent ? 'Tracking Enabled' : 'Tracking Disabled'
                }
              />
            </Box>
          </>
        }
        dialogActions={
          <>
            <Button color="default">
              Cancel
            </Button>
            <Button color="primary">
              Save
            </Button>
          </>
        }
      />
    </div>
  )
}

const IOSStyleSwitch = withStyles((theme) => {
  const padding = 2
  const width = 48
  const height = 28
  const radius = height - padding * 2
  const xTransform = width - radius - padding * 2

  return {
    root: {
      width: width,
      height: height,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: padding,
      color: 'white',
      '&$checked': {
        color: 'white',
        transform: `translateX(${xTransform}px)`,
        '& + $track': {
          backgroundColor: theme.palette.primary.main,
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: theme.palette.primary.main,
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: radius,
      height: radius,
    },
    track: {
      borderRadius: height / 2,
      border: `2px solid ${theme.palette.grey[300]}`,
      backgroundColor: theme.palette.grey[300],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }
})(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  )
})

const Banner = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  color: #ffffff;
  background-color: #000000;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 12px;
  transition: all 0.3s;
  transform: ${({ isClosed }) =>
    isClosed ? 'translateY(500px)' : 'translateY(0)'};
  z-index: 9999;
`

const BannerContainer = styled.div`
  margin: 0;
  padding: 20px;

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  @media (min-width: 960px) {
    margin: 0 7.5%;
    padding: 20px 0;
  }
`

const BannerCopy = styled(P)`
  margin: 0 0 20px 0;
  padding: 0;

  @media (min-width: 600px) {
    flex: 1 1 auto;
    margin: 0 20px 0 0;
  }
`

const BannerTextButton = styled.button`
  color: #ffffff;
  background: none;
  border: none;
  text-decoration: underline;
`

// TODO: use Button from klick react-components package
const BannerButton = styled.button`
  margin: 0;
  padding: 20px 10px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  cursor: pointer;

  @media (min-width: 600px) {
    padding: 10px;
    flex: 0 0 100px;
  }
`

export default CookieBanner

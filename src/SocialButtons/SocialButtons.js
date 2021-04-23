import React from 'react'
import { IconButton } from '@material-ui/core'
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
} from '@material-ui/icons'
import styled from 'styled-components'

import { match } from '../_contexts/Theme'
import { ExternalLink } from '../Links/Links'

const DEFAULT_SOCIAL_BUTTONS = [
  {
    label: 'LinkedIn',
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/company/klick-health',
  },
  {
    label: 'Twitter',
    icon: TwitterIcon,
    href: 'https://twitter.com/klickhealth',
  },
  {
    label: 'Facebook',
    icon: FacebookIcon,
    href: 'https://www.facebook.com/KlickHealth',
  },
  {
    label: 'Instagram',
    icon: InstagramIcon,
    href: 'https://www.instagram.com/klick.health',
  },
  {
    label: 'YouTube',
    icon: YouTubeIcon,
    href: 'https://www.youtube.com/KlickHealth',
  },
]

const GROUP_LABEL = 'Follow us on'

const SocialButtons = ({
  buttons = DEFAULT_SOCIAL_BUTTONS,
  color = 'primary',
  groupLabel = GROUP_LABEL,
  ...rest
}) => {
  return (
    <StyledSocialButtons {...rest}>
      {groupLabel && <span>{groupLabel}</span>}
      {buttons.map(({ icon: Icon, href, label }, index) => (
        <IconButton
          key={index}
          component={ExternalLink}
          role="link"
          target="_blank"
          href={href}
          color={color}
          aria-label={`${groupLabel || GROUP_LABEL} ${label}`}
        >
          <Icon />
        </IconButton>
      ))}
    </StyledSocialButtons>
  )
}

const StyledSocialButtons = styled.div`
  display: inline-block;
  position: relative;
  white-space: nowrap;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > span {
    display: block;
    position: relative;
    width: 100%;
    left: 0.875rem;
    font-weight: 700;
  }

  & svg {
    font-size: 2.0875rem;
  }

  ${match.isSM} {
    display: block;
    margin-top: 0;
    right: -0.875rem;
    top: 0.675rem;

    & > span {
      display: inline;
      width: auto;
      left: auto;
    }

    & > a {
      margin-left: 1rem;

      & svg {
        font-size: inherit;
      }
    }
  }
`

export default SocialButtons

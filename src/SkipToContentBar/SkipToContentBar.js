import React from 'react'
import styled from 'styled-components'

import { ExternalLink } from '../Links/Links'

const SkipToContentBar = (props) => (
  <StyledSkipToContentBar {...props}>
    <li>
      <ExternalLink to="#main-content">Skip To Content</ExternalLink>
    </li>
  </StyledSkipToContentBar>
)

const StyledSkipToContentBar = styled.ul`
  background: #319795;
  color: #fff;
  font-weight: 700;
  left: 50%;
  top: 0;
  padding: 4px;
  position: absolute;
  z-index: 2000;
  list-style: none;
  margin: 0;
  padding: 10px;
  transform: translate(-50%, -100%);

  &:focus-within {
    transform: translate(-50%, 0%);
  }
}
`

export default SkipToContentBar

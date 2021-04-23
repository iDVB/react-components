import React from 'react'
import styled from 'styled-components'

import { Heading } from '../Typography/Typography'

const Addresses = ({ variant = 'h5', component = 'span', ...rest }) => (
  <StyledAddresses {...rest}>
    <li>
      <Heading variant={variant} component={component}>
        Toronto
      </Heading>
      <address className="vcard">
        <span className="adr">
          <span className="street-address">175 Bloor Street East</span>{' '}
          <span className="extended-address">Suite 300, North Tower</span>
          <br />
          <span className="locality">Toronto</span>,&nbsp;
          <abbr className="region">ON</abbr>
          &nbsp;&nbsp;
          <span className="postal-code">M4W 3R8</span>
        </span>
      </address>
    </li>
    <li>
      <Heading variant={variant} component={component}>
        New York
      </Heading>
      <address className="vcard">
        <span className="adr">
          <span className="street-address">21 Penn Plaza</span>,&nbsp;
          <span className="extended-address">368 9th Avenue, 5th Floor</span>
          <br />
          <span className="locality">New York</span>,&nbsp;
          <abbr className="region">NY</abbr>
          &nbsp;&nbsp;
          <span className="postal-code">10001</span>
        </span>
      </address>
    </li>
    <li>
      <Heading variant={variant} component={component}>
        Philadelphia
      </Heading>
      <address className="vcard">
        <span className="adr">
          <span className="street-address">1100 Ludlow Street</span>,&nbsp;
          <span className="extended-address">7th Floor</span>
          <br />
          <span className="locality">Philadelphia</span>,&nbsp;
          <abbr className="region">PA</abbr>
          &nbsp;&nbsp;
          <span className="postal-code">19107</span>
        </span>
      </address>
    </li>
  </StyledAddresses>
)

const StyledAddresses = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: left;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.text.primary};
`

export default Addresses

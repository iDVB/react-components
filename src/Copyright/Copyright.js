import React from 'react'

import { P } from '../Typography/Typography'

const Copyright = (props) => {
  const currentYear = new Date().getFullYear()
  return (
    <P variant="body2" {...props}>
      © {currentYear} All rights reserved. Klick&nbsp;Health<sup>®</sup> is a
      trademark of Klick Inc.
    </P>
  )
}

export default Copyright

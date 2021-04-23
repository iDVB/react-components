import React from 'react'
import { MenuItem } from '@material-ui/core'

import { InternalLink } from '../Links/Links'

const MenuItemLink = (props) => {
  return (
    <li>
      <MenuItem button component={InternalLink} {...props} />
    </li>
  )
}

export default MenuItemLink

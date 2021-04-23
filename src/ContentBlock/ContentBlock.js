import React from 'react'
import Box from '@material-ui/core/Box'

import { Decorator, Heading } from '../Typography/Typography.js'

const ContentBlock = ({ heading, decorator, subheading, content, ...rest }) => (
  <Box {...rest}>
    {heading && <Heading variant="h2">{heading}</Heading>}
    {decorator && <Decorator />}
    {subheading && (
      <Heading variant="h4" component="p">
        {subheading}
      </Heading>
    )}
    {content}
  </Box>
)

export default ContentBlock

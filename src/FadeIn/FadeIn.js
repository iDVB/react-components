import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { useEnhancedContext } from '../_contexts/Enhanced'
import useScrollAnimation from '../_hooks/useScrollAnimation'

const FadeIn = ({
  children,
  from,
  distance = 30,
  start,
  end,
  enabled = true,
}) => {
  const child = React.Children.only(children)
  const ref = useRef()
  const { enhanced } = useEnhancedContext()

  const directions = {
    top: { y: -distance, opacity: 0 },
    left: { x: -distance, opacity: 0 },
    bottom: { y: distance, opacity: 0 },
    right: { x: distance, opacity: 0 },
  }

  useScrollAnimation({
    ref: child.ref || ref,
    from: typeof from === 'string' ? directions[from] : from,
    start,
    end,
    enabled: enhanced && enabled,
  })

  return child.ref ? child : React.cloneElement(child, { ref })
}

FadeIn.propTypes = {
  from: PropTypes.oneOfType([
    PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    PropTypes.object,
  ]).isRequired,
  distance: PropTypes.number,
  duration: PropTypes.number,
}

export default React.memo(FadeIn)

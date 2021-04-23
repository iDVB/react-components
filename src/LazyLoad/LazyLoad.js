import React from 'react'
import { useInView } from 'react-intersection-observer'

const LazyLoad = ({
  children,
  rootMargin = '500px 0px',
  threshold = 0,
  triggerOnce = true,
  ...rest
}) => {
  const [inViewRef, isInViewLoad] = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  })

  return (
    <div ref={inViewRef} {...rest}>
      {isInViewLoad && children}
    </div>
  )
}

export default LazyLoad

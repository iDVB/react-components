import React from 'react'
import { useInView } from 'react-intersection-observer'

const InView = ({ rootMargin = '500px 0px', threshold = 0, ...rest }) => {
  const [inViewRef, isInView] = useInView({
    threshold,
    rootMargin,
  })

  return (
    <InViewContext.Provider value={{ isInView: isInView }}>
      <div ref={inViewRef} {...rest} />
    </InViewContext.Provider>
  )
}

const InViewContext = React.createContext()

const useInViewContext = () => {
  const context = React.useContext(InViewContext)
  if (context === undefined) {
    throw new Error('useInViewContext must be used within InViewProvider')
  }
  return context
}

export { InView, useInViewContext, InViewContext }

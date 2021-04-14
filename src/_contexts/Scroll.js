import React, { useCallback, useState } from 'react'

const ScrollStateContext = React.createContext()
const ScrollDispatchContext = React.createContext()

const ScrollProvider = ({ children }) => {
  const [scrollEnabled, setScrollState] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  const setScrollEnabled = useCallback(
    (scrollState) => {
      setScrollState(scrollState)
      const newScrollPosition = scrollState
        ? enableScroll(scrollPosition)
        : disableScroll()
      setScrollPosition(newScrollPosition)
    },
    [scrollPosition]
  )
  return (
    <ScrollStateContext.Provider value={scrollEnabled}>
      <ScrollDispatchContext.Provider value={setScrollEnabled}>
        {children}
      </ScrollDispatchContext.Provider>
    </ScrollStateContext.Provider>
  )
}

const useScrollStateContext = () => {
  const context = React.useContext(ScrollStateContext)
  if (context === undefined) {
    throw new Error(
      'useScrollStateContext must be used within a ScrollProvider'
    )
  }
  return context
}

const useScrollDispatchContext = () => {
  const context = React.useContext(ScrollDispatchContext)
  if (context === undefined) {
    throw new Error(
      'ScrollDispatchContext must be used within a ScrollProvider'
    )
  }
  return context
}

const disableScroll = () => {
  const scrollPosition = window.pageYOffset
  document.querySelector('html').setAttribute('style', 'overflow: hidden;') // Prevents scroll bouncing
  document.body.setAttribute(
    'style',
    `
      position: fixed;
      width: 100%;
      top: -${scrollPosition}px;
    `
  )
  return scrollPosition
}

const enableScroll = (scrollPosition) => {
  document.querySelector('html').removeAttribute('style')
  document.body.removeAttribute('style')
  window.scrollTo(0, scrollPosition)
  return scrollPosition
}

export { ScrollProvider, useScrollStateContext, useScrollDispatchContext }

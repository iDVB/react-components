import React, { useCallback, useEffect, useState } from 'react'

import { isBrowser } from '../_common/utils'

export const Breakpoint = ({ children, query }) => <>{children}</>
Breakpoint.displayName = 'Breakpoint'

export const Default = ({ children }) => <>{children}</>
Default.displayName = 'Default'

/**
 * A helper for conditionally rendering children based 
 * on media queries using a mobile first approach. 
 * 
 * How does it work?
 * - Like a switch will only match(render) one condition at a time
 * - Order matters, order <Breakpoints> like you would in CSS for mobile first
 * - <Default> will be used if no other <Breakpoint>'s match.
 * 
 * Usage:
    <MobileFirstSwitch>
      <Default>
        <h1>MOBILE Breakpoint</h1>
      </Default>
      <Breakpoint query={match.isMD}>
        <h1>MEDIUM Breakpoint</h1>
      </Breakpoint>
      <Breakpoint query={match.isLG}>
        <h1>LARGE Breakpoint</h1>
      </Breakpoint>
    </MobileFirstSwitch>
 */
const MobileFirstSwitch = ({ children }) => {
  let defaultBreakpoint = null
  let matchedBreakpoint = null
  const [resizeCount, setResizeCount] = useState(0)
  const onMediaQueryChange = useCallback(
    () => setResizeCount(resizeCount + 1),
    [resizeCount]
  )

  useEffect(() => {
    const items = React.Children.toArray(children)
    const mediaQueryLists = items
      .map((item) => {
        return typeof item.props.query === 'string'
          ? window.matchMedia(item.props.query)
          : null
      })
      .filter((item) => item !== null)

    mediaQueryLists.forEach((queryList) =>
      // queryList.addEventListener('change', onMediaQueryChange)
      // For safari iOS compatibility you must use addListener / removeListener
      queryList.addListener(onMediaQueryChange)
    )

    return () => {
      mediaQueryLists.forEach((queryList) =>
        // queryList.removeEventListener('change', onMediaQueryChange)
        // For safari iOS compatibility you must use addListener / removeListener
        queryList.removeListener(onMediaQueryChange)
      )
    }
  }, [children, onMediaQueryChange])

  React.Children.forEach(children, (child) => {
    const isValidChild = child !== null && child.type && child.type.displayName
    const isDefaultBreakpoint =
      isValidChild && child.type.displayName === 'Default'
    const hasValidQuery = isValidChild && typeof child.props.query === 'string'
    const childContent = isValidChild && child.props.children

    if (isDefaultBreakpoint) {
      defaultBreakpoint = childContent
    }

    if (!isDefaultBreakpoint && hasValidQuery && isBrowser) {
      const { matches } = window.matchMedia(child.props.query)
      matchedBreakpoint = matches === true ? childContent : matchedBreakpoint
    }
  })

  return matchedBreakpoint !== null ? matchedBreakpoint : defaultBreakpoint
}

export default MobileFirstSwitch

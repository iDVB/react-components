import React from 'react'

const ScrollToTop = ({
  offset = 0,
  placement = 0,
  behavior = 'smooth',
  ...props
}) => {
  const ref = React.useRef()
  let scrollElementRef = null
  const children = React.Children.map(props.children, (element, i) => {
    if (i === 0) {
      scrollElementRef = element.ref || ref
      return element.ref ? element : React.cloneElement(element, { ref })
    } else return element
  })

  React.useEffect(() => {
    const docTop = document.documentElement.scrollTop
    const scrollElTop = scrollElementRef.current.getBoundingClientRect().top
    const windowHeight = window.innerHeight
    const offsetTotal = windowHeight * placement + offset
    const top = docTop + scrollElTop - offsetTotal
    window.scrollTo({
      behavior,
      top,
    })
  }, [offset, placement, behavior, scrollElementRef])

  return children
}

export default ScrollToTop

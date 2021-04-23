import React, { forwardRef, useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { Box } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { tracking } from '../_common/tracking'

gsap.registerPlugin(ScrollTrigger)

const Section = forwardRef(
  (
    {
      component = 'section',
      position = 'relative',
      scrollToOffset = '-74px',
      children,
      name,
      dcCode,
      zIndex = 20,
      ...restProps
    },
    passedDownRef
  ) => {
    const theme = useTheme()
    const _sectionRef = useRef()
    const sectionRef = passedDownRef || _sectionRef

    useIsomorphicLayoutEffect(() => {
      if (name) {
        const scrollTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top center+=1px',
          end: 'top center',
          once: true,
          onEnter: () => {
            tracking.track('Section scrolled', {
              category: 'Window Events',
              action: 'Scroll Section',
              label: name,
              dcCode,
            })
          },
        })
        return () => {
          scrollTrigger && scrollTrigger.kill()
        }
      }
    }, [dcCode, name, sectionRef])

    return (
      <Box
        pt={theme.defaults.spacing.medium}
        pb={theme.defaults.spacing.medium}
        component={component}
        ref={sectionRef}
        bgcolor="background.default"
        {...restProps}
      >
        <Box height="100%" position={position} zIndex={zIndex}>
          {children}
        </Box>
      </Box>
    )
  }
)

export default Section

import { useIsomorphicLayoutEffect } from 'react-use'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useInstance from './useInstance'

gsap.registerPlugin(ScrollTrigger)

const useParallax = ({ triggerRef, refs = [], depths = [] }) => {
  const timeline = useInstance(() =>
    gsap.timeline({
      paused: true,
    })
  )

  useIsomorphicLayoutEffect(() => {
    if (!triggerRef.current) return

    ScrollTrigger.create({
      trigger: triggerRef.current,
      scrub: true,
      start: 'top bottom',
      end: 'bottom top',
      animation: timeline,
    })

    refs.forEach((ref, index) => {
      const depth = depths[index]

      timeline.fromTo(
        ref.current,
        {
          y: depth,
        },
        { y: -depth, ease: 'none' },
        0
      )
    })
  }, [triggerRef, refs, timeline, depths])

  return timeline
}

export default useParallax

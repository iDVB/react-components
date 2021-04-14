import { useIsomorphicLayoutEffect } from 'react-use'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useInstance from './useInstance'

gsap.registerPlugin(ScrollTrigger)

const useScrollAnimation = ({
  ref,
  from,
  start = 'top 95%',
  end = 'top 60%',
  enabled = true,
}) => {
  const timeline = useInstance(() =>
    gsap.timeline({
      paused: true,
    })
  )

  useIsomorphicLayoutEffect(() => {
    if (!enabled) return
    const element = ref.current
    setupAnimation({ timeline, element, from, start, end })
    return () => {
      removeAnimation({ timeline, element })
    }
  }, [from, ref, timeline, start, end, enabled])

  return timeline
}

const setupAnimation = ({ timeline, element, from, start, end }) => {
  timeline.from(element, {
    ...from,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub: true,
    },
  })
}

const removeAnimation = ({ timeline, element }) => {
  timeline.clear()
  gsap.set(element, {
    clearProps: 'all',
  })
}

export default useScrollAnimation

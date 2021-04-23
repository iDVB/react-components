import React from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { gsap } from 'gsap'
import { ExpoScaleEase } from 'gsap/EasePack'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'

import { match } from '../_contexts/Theme'
import useInstance from '../_hooks/useInstance'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ExpoScaleEase)

const ContentReveal = (props) => {
  const { background, reveal } = props

  const stickyContainerRef = React.useRef()
  const revealMaskRef = React.useRef()
  const revealMaskInnerRef = React.useRef()
  const revealRef = React.useRef()
  const timeline = useInstance(() => gsap.timeline())

  useIsomorphicLayoutEffect(() => {
    const animationRefs = {
      revealMaskRef,
      revealMaskInnerRef,
      revealRef,
      timeline,
    }
    buildAnimation(animationRefs)

    ScrollTrigger.create({
      trigger: stickyContainerRef.current,
      scrub: true,
      start: 'top top',
      end: 'bottom bottom',
      animation: timeline,
      ease: 'none',
    })
  }, [timeline])

  return (
    <StickyContainer ref={stickyContainerRef}>
      <StickyItem>
        <ContentContainer>{background}</ContentContainer>
        <RevealContainer>
          <RevealMask ref={revealMaskRef}>
            <RevealMaskInner ref={revealMaskInnerRef}>
              <Reveal ref={revealRef}>{reveal}</Reveal>
            </RevealMaskInner>
          </RevealMask>
        </RevealContainer>
      </StickyItem>
    </StickyContainer>
  )
}

const buildAnimation = ({
  revealMaskRef,
  revealMaskInnerRef,
  revealRef,
  timeline,
}) => {
  const progress = timeline.progress()

  timeline.pause(0).clear()
  gsap.set([revealMaskRef.current, revealRef.current], {
    clearProps: 'all',
  })

  const scaleFactor = 0.001

  timeline.fromTo(
    revealMaskRef.current,
    {
      scale: scaleFactor,
    },
    {
      duration: 3,
      scale: 1,
      ease: ExpoScaleEase.config(scaleFactor, 1, 'power2.inOut'),
    },
    0
  )

  timeline.fromTo(
    revealMaskInnerRef.current,
    { scale: 1 / scaleFactor },
    {
      duration: 3,
      scale: 1,
      ease: ExpoScaleEase.config(1 / scaleFactor, 1, 'power2.inOut'),
    },
    0
  )

  timeline.progress(progress)
}

const StickyContainer = styled.div`
  position: relative;
  height: 250vh;
`

const StickyItem = styled.div`
  position: sticky;
  width: 100%;
  height: 100vh;
  top: 0;
`

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 1;
`

const RevealContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 2;
`

const RevealMask = styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-50%, -50%);

  @media ${match.isPortrait} {
    width: 260vh;
    height: 260vh;
  }
  @media ${match.isLandscape} {
    width: 260vw;
    height: 260vw;
  }
`

const RevealMaskInner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Reveal = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -100%);
  transform-origin: bottom right;
`
export default ContentReveal

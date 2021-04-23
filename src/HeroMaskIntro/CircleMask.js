import React, { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'
import { ExpoScaleEase } from 'gsap/EasePack'
import { throttle } from 'lodash'
import styled, { css, keyframes } from 'styled-components'

import { calcPageFillRadius } from '../_common/utils'
import { brandColors } from '../_contexts/Theme'
import useInstance from '../_hooks/useInstance'

gsap.registerPlugin(ExpoScaleEase)

const IntroMask = (props) => {
  const {
    background,
    dot,
    skipIntro,
    mainIntroTimeline,
    mainScrollTimeline,
    isGradientOverlayEnabled,
  } = props
  const maskConfig = useRef({
    x: 0,
    y: 0,
    radius: 0,
    scale: 1,
  })
  const circleMaskRef = useRef()
  const colorOverlayRef = useRef()
  const introTimeline = useInstance(() => gsap.timeline())
  const scrollTimeline = useInstance(() => gsap.timeline())

  useIsomorphicLayoutEffect(() => {
    if (skipIntro) return
    buildIntroAnimations({
      introTimeline,
      circleMaskRef,
      maskConfig,
      dot,
    })
    mainIntroTimeline.add(introTimeline, 0)

    return () => {
      introTimeline.clear()
      mainIntroTimeline.remove(introTimeline)
    }
  }, [dot, introTimeline, mainIntroTimeline, skipIntro])

  useIsomorphicLayoutEffect(() => {
    if (!skipIntro) return
    buildScrollAnimations({
      scrollTimeline,
      circleMaskRef,
      maskConfig,
      colorOverlayRef,
      dot,
    })
    mainScrollTimeline.add(scrollTimeline, 0)

    return () => {
      scrollTimeline.clear()
      mainScrollTimeline.remove(scrollTimeline)
    }
  }, [dot, mainScrollTimeline, scrollTimeline, skipIntro])

  React.useEffect(() => {
    const handleResize = throttle(() => {
      const animationRefs = {
        introTimeline,
        scrollTimeline,
        circleMaskRef,
        maskConfig,
        colorOverlayRef,
        dot,
      }
      !skipIntro
        ? buildIntroAnimations(animationRefs)
        : buildScrollAnimations(animationRefs)
    }, 50)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dot, introTimeline, scrollTimeline, skipIntro])

  return (
    <CircleMask ref={circleMaskRef}>
      <ColorOverlay
        $isGradientOverlayEnabled={isGradientOverlayEnabled}
        ref={colorOverlayRef}
      />
      <BackgroundContent>{background}</BackgroundContent>
    </CircleMask>
  )
}

const buildIntroAnimations = (animationRefs) => {
  const { introTimeline, circleMaskRef, dot, maskConfig } = animationRefs

  const introTimelineProgress = introTimeline.progress()
  introTimeline.pause(0).clear()

  maskConfig.current = generateMaskConfig({
    circleMaskRef,
    dot,
  })

  const { introRadius, targetX, targetY } = getAnimationTargets({
    circleMaskRef,
  })

  const { x, y, radius } = maskConfig.current

  introTimeline.fromTo(
    circleMaskRef.current,
    {
      clipPath: `circle(1px at ${x}px ${y}px)`,
    },
    {
      duration: 0.3,
      clipPath: `circle(${radius}px at ${x}px ${y}px)`,
      ease: 'back.out',
      immediateRender: false,
      delay: 0.5,
    },
    0
  )

  introTimeline.fromTo(
    circleMaskRef.current,
    {
      clipPath: `circle(${radius}px at ${x}px ${y}px)`,
    },
    {
      duration: 0.7,
      clipPath: `circle(${introRadius}px at ${targetX}px ${targetY}px)`,
      immediateRender: false,
      ease: ExpoScaleEase.config(1, introRadius, 'expo.out'),
    },
    1.5
  )

  introTimeline.progress(introTimelineProgress)
  introTimeline.resume()
}

const buildScrollAnimations = (animationRefs) => {
  const {
    scrollTimeline,
    circleMaskRef,
    colorOverlayRef,
    maskConfig,
    dot,
  } = animationRefs

  const scrollTimelineProgress = scrollTimeline.progress()
  scrollTimeline.pause(0).clear()

  maskConfig.current = generateMaskConfig({
    circleMaskRef,
    dot,
  })

  const { introRadius, finalRadius, targetX, targetY } = getAnimationTargets({
    circleMaskRef,
  })

  scrollTimeline.fromTo(
    circleMaskRef.current,
    {
      clipPath: `circle(${introRadius}px at ${targetX}px ${targetY}px)`,
    },
    {
      duration: 10,
      clipPath: `circle(${finalRadius}px at ${targetX}px ${targetY}px)`,
      ease: ExpoScaleEase.config(introRadius, finalRadius),
    },
    0
  )

  scrollTimeline.to(
    colorOverlayRef.current,
    {
      duration: 8,
      opacity: 0,
    },
    2
  )

  scrollTimeline.progress(scrollTimelineProgress)
  scrollTimeline.resume()
}

const getAnimationTargets = ({ circleMaskRef }) => {
  const { width, height } = circleMaskRef.current.getBoundingClientRect()
  const introRadius = Math.min(height * 0.7, width * 0.7) / 2
  const targetX = width * 0.5
  const targetY = height * 0.5
  const finalRadius = calcPageFillRadius(targetX, targetY, width, height)

  return { introRadius, targetX, targetY, finalRadius }
}

const generateMaskConfig = ({ dot, circleMaskRef }) => {
  const dotData = dot.current.getBoundingClientRect()
  const containerData = circleMaskRef.current.getBoundingClientRect()
  const radius = dotData.width * 0.5
  const dotX = dotData.x + dotData.width / 2
  const dotY = dotData.y + dotData.height / 2 - containerData.y

  const maskConfig = {
    x: dotX,
    y: dotY,
    radius: radius,
    scale: 0,
  }

  return maskConfig
}

const CircleMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 2;
  clip-path: circle(0px at 150% 150%);
  pointer-events: none;
`

const BackgroundContent = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  pointer-events: all;
`

const gradientMovementKeyFrames = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const gradientStyles = css`
  transition: all 1s;
  background: radial-gradient(
    circle,
    ${brandColors.klick},
    ${brandColors.consulting},
    ${brandColors.klick},
    ${brandColors.appliedsciences},
    ${brandColors.klick}
  );
  background-size: 1000% 1000%;
  animation: ${gradientMovementKeyFrames} 20s ease infinite;
`

const ColorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  opacity: 1;
  z-index: 3;
  pointer-events: none;

  ${({ $isGradientOverlayEnabled }) =>
    $isGradientOverlayEnabled ? gradientStyles : null}
`

export default IntroMask

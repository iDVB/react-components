import React, { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { gsap } from 'gsap'
import { ExpoScaleEase } from 'gsap/EasePack'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'

import { useEnhancedContext } from '../_contexts/Enhanced'
import { useIntroContext } from '../_contexts/Intro'
import { match } from '../_contexts/Theme'
import useInstance from '../_hooks/useInstance'
import KlickLogo from '../KlickLogo/KlickLogo'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'
import Section from '../Section/Section'
import { Heading } from '../Typography/Typography'

import CircleMask from './CircleMask'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ExpoScaleEase)
gsap.registerPlugin(ScrollToPlugin)

const eyeBrowBarHeight = 48
const HeroMaskIntro = ({
  initialBackground,
  background,
  headline,
  onIntroComplete,
  skipAutoScroll = false,
  isGradientOverlayEnabled = false,
  top = `${eyeBrowBarHeight}px`,
  height = `calc(100vh - ${eyeBrowBarHeight}px)`,
  enhancedOverride,
  ...restProps
}) => {
  const { enhanced: enhancedContext } = useEnhancedContext()
  const enhanced = enhancedOverride ?? enhancedContext
  const { skipIntro, setSkipIntro } = useIntroContext()

  const mainTimeline = useInstance(() => gsap.timeline({ paused: true }))
  const introTimeline = useInstance(() => gsap.timeline())
  const logoTimeline = useInstance(() => gsap.timeline())
  const scrollTimeline = useInstance(() => gsap.timeline())

  const stickyContainerRef = useRef()
  const svg = useRef()
  const letterK1 = useRef()
  const letterL = useRef()
  const letterI = useRef()
  const letterC = useRef()
  const letterK2 = useRef()
  const dot = useRef()
  const subHead = useRef()
  const headlineRef = useRef()
  const scrollIndicatorRef = useRef()
  const sectionRef = useRef()

  useIsomorphicLayoutEffect(() => {
    // SETUP LOGO INTRO ANIMATION
    if (skipIntro || !enhanced) return
    if (window.scrollY > 0) {
      setSkipIntro(true)
      return
    }
    let scrollTimeout
    let handleScroll
    let handleClick
    let hasClicked = false

    const animationRefs = {
      mainTimeline,
      introTimeline,
      scrollTimeline,
      logoTimeline,
      svg,
      letterK1,
      letterL,
      letterI,
      letterC,
      letterK2,
      dot,
      subHead,
      headlineRef,
      scrollIndicatorRef,
    }
    mainTimeline.add(introTimeline, 0)
    mainTimeline.add(logoTimeline, 0)
    buildLogoAnimation(animationRefs)

    const currentRef = sectionRef.current

    disableBodyScroll(currentRef)

    mainTimeline.play()

    handleClick = () => {
      hasClicked = true
      window.removeEventListener('click', handleClick)
    }
    window.addEventListener('click', handleClick)

    logoTimeline.eventCallback('onComplete', () => {
      scrollTimeout = setTimeout(() => {
        if (window.scrollY === 0 && !hasClicked && !skipAutoScroll) {
          const percentage = 0.65
          const totalHeight = stickyContainerRef.current.offsetHeight
          const scrollTarget = totalHeight * percentage
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: scrollTarget },
          })
        }
        onIntroComplete && onIntroComplete()
        setSkipIntro(true)
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('click', handleClick)
      }, 1000)
      enableBodyScroll(currentRef)
    })
    return () => {
      enableBodyScroll(currentRef)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('click', handleClick)
      scrollTimeout && clearTimeout(scrollTimeout)
      removeLogoAnimation(animationRefs)
    }
  }, [
    enhanced,
    introTimeline,
    logoTimeline,
    mainTimeline,
    scrollTimeline,
    onIntroComplete,
    setSkipIntro,
    skipIntro,
    skipAutoScroll,
  ])

  useIsomorphicLayoutEffect(() => {
    // SET UP SCROLLABLE PORTION OF INTRO
    if (enhanced && skipIntro) {
      scrollTimeline.fromTo(
        [headlineRef.current, scrollIndicatorRef.current],
        { autoAlpha: 1 },
        { duration: 2, autoAlpha: 0 },
        0
      )
      const scrollTrigger = ScrollTrigger.create({
        trigger: stickyContainerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        animation: scrollTimeline,
        scrub: true,
      })

      return () => {
        scrollTrigger && scrollTrigger.kill()
      }
    }
  }, [enhanced, skipIntro, scrollTimeline])

  return (
    <Section ref={sectionRef} {...restProps} pt={0} pb={0}>
      <StickyContainer enhanced={enhanced} ref={stickyContainerRef}>
        <StickyElement top={top} heroHeight={height}>
          {!!initialBackground && initialBackground}
          <HeroContent>
            <Headline
              variant="h1"
              ref={headlineRef}
              $skipIntro={skipIntro || !enhanced}
            >
              {headline}
            </Headline>
            <LogoContainer ref={svg}>
              <LogoSVG
                shapeK1Ref={letterK1}
                shapeLRef={letterL}
                shapeIRef={letterI}
                shapeCRef={letterC}
                shapeK2Ref={letterK2}
                shapeDotRef={dot}
                shapeSubRef={subHead}
              />
            </LogoContainer>
            {enhanced ? (
              <CircleMask
                background={background}
                dot={dot}
                skipIntro={skipIntro}
                mainIntroTimeline={introTimeline}
                isGradientOverlayEnabled={isGradientOverlayEnabled}
                mainScrollTimeline={scrollTimeline}
              />
            ) : (
              <BrandDot />
            )}
            <ScrollIndicatorContainer ref={scrollIndicatorRef}>
              <ScrollIndicator />
            </ScrollIndicatorContainer>
          </HeroContent>
          {!enhanced && <BackgroundContent>{background}</BackgroundContent>}
        </StickyElement>
      </StickyContainer>
    </Section>
  )
}

const buildLogoAnimation = (animationRefs) => {
  const {
    logoTimeline,
    svg,
    letterK1,
    letterL,
    letterI,
    letterC,
    letterK2,
    dot,
    subHead,
    headlineRef,
    scrollIndicatorRef,
  } = animationRefs
  gsap.set(dot.current, { opacity: 0 })
  gsap.set(svg.current, { opacity: 1 })
  logoTimeline.fromTo(
    [
      letterK1.current,
      letterL.current,
      letterI.current,
      letterC.current,
      letterK2.current,
    ],
    { opacity: 0 },
    {
      duration: 0.5,
      opacity: 1,
      ease: 'expo.inOut',
    },
    0
  )

  logoTimeline.from(
    letterK1.current,
    {
      duration: 0.5,
      y: -200,
    },
    0
  )

  logoTimeline.from(
    letterL.current,
    {
      duration: 0.5,
      x: 50,
      y: -150,
    },
    0
  )

  logoTimeline.from(
    letterI.current,
    {
      duration: 0.5,
      y: -100,
    },
    0
  )

  logoTimeline.from(
    letterC.current,
    {
      duration: 0.5,
      rotation: 270,
      transformOrigin: '100% 0%',
    },
    0
  )

  logoTimeline.from(
    letterK2.current,
    {
      duration: 0.5,
      y: 200,
    },
    0
  )

  logoTimeline.fromTo(
    subHead.current,
    { opacity: 0 },
    {
      duration: 1,
      opacity: 1,
      ease: 'expo.inOut',
    },
    0.3
  )

  const dotData = dot.current.getBoundingClientRect()
  const targetRadius = (window.innerHeight * 0.75) / 2
  const targetScale = targetRadius / (dotData.width / 2)
  logoTimeline.to(
    svg.current,
    {
      duration: 0.7,
      scale: targetScale,
      transformOrigin: '80% 50%',
      autoAlpha: 0,
      ease: ExpoScaleEase.config(1, targetScale, 'expo'),
    },
    1.5
  )

  const titleLines = headlineRef.current.getElementsByTagName('span')
  logoTimeline.fromTo(
    titleLines,
    {
      opacity: 0,
    },
    {
      duration: 0.5,
      stagger: 0.05,
      opacity: 1,
    },
    1.8
  )

  logoTimeline.from(
    titleLines,
    {
      duration: 0.5,
      stagger: 0.1,
      y: '100%',
      rotationX: -80,
      ease: 'power2',
    },
    1.8
  )
  logoTimeline.fromTo(
    scrollIndicatorRef.current,
    { opacity: 0 },
    { duration: 0.5, opacity: 1 },
    1.8
  )
}

const removeLogoAnimation = (animationRefs) => {
  const {
    mainTimeline,
    introTimeline,
    logoTimeline,
    svg,
    letterK1,
    letterL,
    letterI,
    letterC,
    letterK2,
    dot,
    subHead,
    headlineRef,
    scrollIndicatorRef,
  } = animationRefs
  logoTimeline.clear()
  mainTimeline.remove(introTimeline)
  mainTimeline.remove(logoTimeline)
  logoTimeline.clear()
  introTimeline.clear()
  mainTimeline.clear()

  const titleLines = headlineRef.current.getElementsByTagName('span')
  gsap.set(
    [
      svg.current,
      letterK1.current,
      letterL.current,
      letterI.current,
      letterC.current,
      letterK2.current,
      dot.current,
      subHead.current,
      headlineRef.current,
      scrollIndicatorRef.current,
      titleLines,
    ],
    { clearProps: 'all' }
  )
}

const stickyLength = '2000px'
const stickyLengthSm = '4000px'

const StickyContainer = styled.div`
  width: 100%;
  height: ${stickyLength};
  ${(props) =>
    !props.enhanced &&
    `
      height: auto;

      ${StickyElement} {
        position: relative;
        height: auto;
        top: 0;
      }

      ${HeroContent} {
        position: relative;
        height: 100vh;
      }

      ${BackgroundContent} {
        height: 100vh;
        position: static;
      }
    `};

  ${match.isSM} {
    height: ${({ enhanced }) => (enhanced ? stickyLengthSm : 'auto')};
  }
`

const ScrollIndicatorContainer = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 90px;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0;

  ${match.isMD} {
    bottom: 50px;
  }
`

const BrandDot = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media ${match.isLandscape} {
    height: 75vh;
    width: 75vh;
  }

  @media ${match.isPortrait} {
    height: 75vw;
    width: 75vw;
  }
`

const StickyElement = styled.div`
  width: 100%;
  height: ${({ heroHeight }) => heroHeight};
  position: sticky;
  overflow: hidden;
  top: ${({ top }) => top};
`

const HeroContent = styled.div``
const BackgroundContent = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
`

const Headline = styled(Heading)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
  perspective: 600;
  margin: 0;

  > span {
    transform-origin: center top;
    display: block;
    opacity: ${({ $skipIntro }) => ($skipIntro ? 1 : 0)};
  }
`

const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  z-index: 3;
  max-width: 100px;
  pointer-events: none;
  opacity: 0;

  ${match.isSM} {
    max-width: 150px;
  }

  ${match.isMD} {
    max-width: 250px;
  }

  @media (orientation: landscape) {
    height: 50vh;
    width: auto;
  }
  @media (orientation: portrait) {
    width: 50vw;
  }
`

const LogoSVG = styled(KlickLogo)`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  transform: scale(1);
`
export default HeroMaskIntro

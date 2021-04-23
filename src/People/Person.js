import React, { forwardRef, useRef, useState } from 'react'
import { Portal } from 'react-portal'
import { useIsomorphicLayoutEffect } from 'react-use'
import { Container } from '@material-ui/core'
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'
import { GatsbyImage } from 'gatsby-plugin-image'
import { gsap } from 'gsap'
import { ExpoScaleEase } from 'gsap/EasePack'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled, { css } from 'styled-components'

import { tracking } from '../_common/tracking'
import { calcPageFillRadius } from '../_common/utils'
import ThemeProvider, { match } from '../_contexts/Theme'
import useInstance from '../_hooks/useInstance'
import { AvoidWrap, Heading, NoWrap, P } from '../Typography/Typography'

const portraitMedia = `${match.getQuery('isPortrait')} and ${match.getQuery(
  'isSM'
)}`

gsap.registerPlugin(ExpoScaleEase)

const Person = forwardRef((props, personRef) => {
  const {
    firstName,
    lastName,
    title,
    bio,
    designation,
    dcCode,
    id,
    headshot,
    portrait,
    landscape,
    imageType,
  } = props
  const [isOpen, setIsOpen] = useState()
  const imageContainerRef = useRef()
  const closeBtnRef = useRef()
  const bioContentRef = useRef()
  const bioNameRef = useRef()
  const bioTitleRef = useRef()
  const bioCopyRef = useRef()
  const headshotRef = useRef()
  const headshotContainerRef = useRef()
  const circleCloneRef = useRef()
  const personContentRef = useRef()

  const timeline = useInstance(() =>
    gsap.timeline({
      paused: true,
      onStart: function () {
        tracking.track('Bio Viewed', {
          category: 'Page Interactions',
          action: 'Bio View',
          label: `${firstName} ${lastName}`,
          dcCode,
        })
      },
      onComplete: function () {
        ScrollTrigger.getAll().forEach((scrollTrigger) => {
          scrollTrigger.disable()
        })
        disableBodyScroll(personContentRef.current)
      },
      onReverseComplete: function () {
        this.pause(0).clear()
        setIsOpen(false)
      },
    })
  )

  const sources = [
    landscape,
    {
      ...portrait,
      media: portraitMedia,
    },
  ]

  const handleClick = () => {
    if (isOpen) {
      enableBodyScroll(personContentRef.current)
      ScrollTrigger.getAll().forEach((scrollTrigger) => {
        scrollTrigger.enable()
      })
      timeline.reverse()
    } else {
      setIsOpen(true)
    }
  }

  useIsomorphicLayoutEffect(() => {
    if (isOpen) {
      animate({
        headshotRef,
        headshotContainerRef,
        circleCloneRef,
        imageContainerRef,
        bioContentRef,
        bioNameRef,
        bioTitleRef,
        bioCopyRef,
        closeBtnRef,
        timeline,
      })

      return () => {
        clearAllBodyScrollLocks()
      }
    }
  }, [
    isOpen,
    headshotRef,
    headshotContainerRef,
    circleCloneRef,
    imageContainerRef,
    bioContentRef,
    bioNameRef,
    bioTitleRef,
    bioCopyRef,
    closeBtnRef,
    timeline,
  ])

  return (
    <div ref={personRef} id={id}>
      <HeadshotContainer
        imageType={imageType}
        ref={headshotContainerRef}
        onClick={() => {
          handleClick()
        }}
      >
        <div ref={headshotRef}>
          <Headshot
            imageType={imageType}
            image={headshot}
            alt={
              designation
                ? `${firstName} ${lastName}, ${designation}, ${title}`
                : `${firstName} ${lastName}, ${title}`
            }
          />
        </div>
      </HeadshotContainer>
      {isOpen && (
        <Portal>
          <ThemeProvider themeType="onPrimary">
            <PortalContainer>
              <CircleClone ref={circleCloneRef} />
              <PersonContentContainer>
                <HeaderGutter>
                  <CloseBtn onClick={handleClick} ref={closeBtnRef}>
                    Close
                  </CloseBtn>
                </HeaderGutter>
                <PersonContent ref={personContentRef} imageType={imageType}>
                  <StyledGutter $imageType={imageType}>
                    <ImageContainer
                      imageType={imageType}
                      ref={imageContainerRef}
                    >
                      <img
                        className="landscape"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        alt=""
                      />
                      <img
                        className="portrait"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAQAAAAEnG+bAAAAD0lEQVR42mNkQAGMQ4ELAAVGAA1+PhR8AAAAAElFTkSuQmCC"
                        alt=""
                      />
                      <div>
                        <ExpandedHeadShot
                          image={sources}
                          fadeIn={false}
                          imageType={imageType}
                          alt={
                            designation
                              ? `${firstName} ${lastName}, ${designation}, ${title}`
                              : `${firstName} ${lastName}, ${title}`
                          }
                        />
                      </div>
                    </ImageContainer>
                    <BioContent ref={bioContentRef}>
                      <BioContentInner imageType={imageType}>
                        <div ref={bioNameRef}>
                          <Name variant="h2">
                            {firstName}{' '}
                            <AvoidWrap>
                              {lastName}
                              {designation && (
                                <>
                                  , <NoWrap>{designation}</NoWrap>
                                </>
                              )}
                            </AvoidWrap>
                          </Name>
                        </div>
                        <JobTitle paragraph={false} ref={bioTitleRef}>
                          {title}
                        </JobTitle>
                        <BioCopy ref={bioCopyRef}>{bio}</BioCopy>
                      </BioContentInner>
                    </BioContent>
                  </StyledGutter>
                </PersonContent>
              </PersonContentContainer>
            </PortalContainer>
          </ThemeProvider>
        </Portal>
      )}
    </div>
  )
})

const animate = ({
  headshotRef,
  headshotContainerRef,
  circleCloneRef,
  imageContainerRef,
  bioContentRef,
  bioNameRef,
  bioTitleRef,
  bioCopyRef,
  closeBtnRef,
  timeline,
}) => {
  const targetRect = headshotRef.current.getBoundingClientRect()
  const winWidth = window.innerWidth
  const winHeight = window.innerHeight

  const { x, y, width, height } = targetRect

  const diameter =
    calcPageFillRadius(x + width * 0.5, y + height * 0.5, winWidth, winHeight) *
    2
  const scale = diameter / Math.min(height, width)

  timeline
    .set(circleCloneRef.current, {
      opacity: 0,
    })
    .to(headshotRef.current, {
      duration: 0.3,
      opacity: 0,
    })
    .set(circleCloneRef.current, {
      opacity: 1,
    })
    .fromTo(
      circleCloneRef.current,
      {
        x,
        y,
        width,
        height,
      },
      {
        scale,
        duration: 0.3,
        ease: ExpoScaleEase.config(1, scale),
      }
    )
    .fromTo(
      imageContainerRef.current,
      {
        x: '-70%',
        opacity: 0,
      },
      {
        duration: 0.4,
        x: '-50%',
        opacity: 1,
      },
      0.8
    )
    .from(
      [bioNameRef.current, bioTitleRef.current, bioCopyRef.current],
      {
        duration: 0.4,
        stagger: 0.15,
        opacity: 0,
        x: '+=50px',
        ease: 'power2',
      },
      0.8
    )
    .from(
      closeBtnRef.current,
      {
        opacity: 0,
        y: '-=50px',
        duration: 0.4,
        ease: 'power2',
      },
      0.8
    )
    .play()
}

const PortalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
`

const CircleClone = styled.div`
  position: absolute;
  opacity: 0;
  background: ${({ theme }) => `${theme.palette.background.default}`};
  border-radius: 100%;
`

const BioCopy = styled.div`
  padding: 0 0 100px 0;

  ${match.isSM} {
    padding: 0 0 100px 0;
  }

  ${match.isMD} {
    padding: 0 0 100px 0;
  }

  ${match.isLG} {
    padding: 0 6vw 100px 0;
  }
`

const CloseBtn = styled.button`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.secondary.main};
  position: relative;
  color: transparent;
  position: absolute;
  top: 15px;
  right: 15px;
  border: 0;
  z-index: 3;

  ${match.isSM} {
    top: 42px;
    right: 42px;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    width: 20px;
    height: 2px;
    background: ${({ theme }) => theme.palette.primary.main};
  }
  &:before {
    transform: translate(-52%, 6px) rotate(-45deg);
  }
  &:after {
    transform: translate(-52%, 6px) rotate(45deg);
  }
`

const HeadshotContainer = styled.button`
  position: relative;
  background: ${({ theme, imageType }) =>
    imageType === 'full' ? theme.palette.primary.main : 'none'};
  border-radius: 50%;
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  transform: translate(0, 0);
  font-size: 0;
  cursor: pointer;
`

const PersonContentContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
`

const personContentStylesRound = css`
  ${match.isMD} {
    margin-top: 13vh;
  }
`

const personContentStylesFull = css`
  ${match.isSM} {
    height: auto;
    padding-top: 0;
    overflow: hidden;
  }
`

const PersonContent = styled.div`
  height: 100%;
  padding-top: 60px;
  overflow-y: auto;
  overflow-x: hidden;

  ${({ imageType }) => {
    switch (imageType) {
      case 'round': {
        return personContentStylesRound
      }
      case 'full':
      default: {
        return personContentStylesFull
      }
    }
  }}
`

const BioContent = styled.div`
  ${match.isSM} {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    z-index: 2;
  }
`

const bioContentInnerRound = css`
  margin-top: 25px;
  ${match.isMD} {
    margin-top: 0;
    padding-left: 50%;
  }
`

const bioContentInnerFull = css`
  margin-top: 25px;
  ${match.isSM} {
    margin-top: 0;
    padding: 13vh 8% 0 50%;
  }
  ${match.isMD} {
    padding-left: 50%;
  }

  ${match.isLG} {
    padding-left: 50%;
  }
`

const BioContentInner = styled.div`
  ${({ imageType }) => {
    switch (imageType) {
      case 'round': {
        return bioContentInnerRound
      }
      case 'full':
      default: {
        return bioContentInnerFull
      }
    }
  }}
`

const imageContainerStylesFull = css`
  background: ${({ theme }) => `${theme.palette.primary.main}`};

  @media ${portraitMedia} {
    & > img {
      display: block;
      height: 100%;

      &.landscape {
        display: none;
      }
    }
  }

  ${match.isSM} {
    position: absolute;
    left: 26%;
    bottom: 0;
    border-radius: 0%;
    background: none;
    width: auto;
    height: 95vh;
    z-index: 1;
    pointer-events: none;

    & > img {
      display: block;
      height: 100%;

      &.portait {
        display: none;
      }
    }

    & > div {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const imageContainerStylesRound = css`
  & > img {
    &.landscape {
      display: none;
    }

    &.portrait {
      display: none;
    }
  }

  ${match.isMD} {
    position: absolute;
    width: 350px;
    height: 350px;

    left: 26%;
    top: 0;
    pointer-events: none;
    z-index: 1;
  }

  ${match.isLG} {
    width: 550px;
    height: 550px;
  }
`

const ImageContainer = styled.div`
  text-align: center;
  position: relative;
  margin-top: 60px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0;
  left: 50%;

  ${({ imageType }) => {
    switch (imageType) {
      case 'round': {
        return imageContainerStylesRound
      }
      case 'full':
      default: {
        return imageContainerStylesFull
      }
    }
  }}
`

const headShotStylesFull = css`
  bottom: -6px;
  height: 95%;

  ${match.isSM} {
    bottom: 0;
    height: 100%;
    left: auto;
    right: 50%;
    transform: ${(props) =>
      props.override ? `translate(${props.override}, 0)` : `translate(37%, 0)`};

    border-radius: 0;
  }

  @media ${portraitMedia} {
    transform: translate(44%, 0);
  }

  ${match.isMD} {
    height: 100%;
    transform: ${(props) =>
      props.override ? `translate(${props.override}, 0)` : `translate(49%, 0)`};
  }
`

const ExpandedHeadShot = styled(GatsbyImage)`
  border-radius: 100%;
  overflow: hidden;

  ${({ imageType }) => {
    switch (imageType) {
      case 'round': {
        return ``
      }
      case 'full':
      default: {
        return headShotStylesFull
      }
    }
  }}
`

const HeaderGutter = styled(Container)`
  position: relative;
  z-index: 3;
`

const StyledGutter = styled(Container)`
  ${({ $imageType }) => $imageType === 'full' && `height: 100vh`};
  position: relative;
  z-index: 2;

  ${match.isSM} {
    max-width: none;
  }
`

const Name = styled(Heading)`
  margin: 0;
`

const JobTitle = styled(P)`
  position: relative;
  padding-bottom: 1.5em;
  margin-bottom: 1.5em;

  &:after {
    content: ' ';
    border-bottom: 1px black solid;
    width: 70px;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

const Headshot = styled(GatsbyImage)`
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  left: 50%;
  max-height: ${({ imageType }) => (imageType === 'full' ? `95%` : `100%`)};
  transform: ${({ imageType }) =>
    imageType === 'full' ? `translate(-50%, 7%)` : `translate(-50%, 0)`};
`

export default Person

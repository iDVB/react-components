// www.independent-software.com/deconstructing-css-3-making-of-css3-solar-system-animation-3d-transformations.html

import React from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { useMediaQuery, useTheme } from '@material-ui/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'

import { match } from '../_contexts/Theme'
import useInstance from '../_hooks/useInstance'
import KlickLogo from '../KlickLogo/KlickLogo'

import Planet from './Planet'
import Ring from './Ring'

gsap.registerPlugin(ScrollTrigger)

const anglePlayhead = { playhead: 0 }

const gsapDefaults = { duration: 1, ease: 'none' }

const Ecosystem = ({ planets }) => {
  const stickyContainerRef = React.useRef()
  const galaxyRef = React.useRef()
  const planetsAngleTimeline = useInstance(() =>
    gsap.timeline({
      paused: true,
      defaults: gsapDefaults,
    })
  )
  const planetsWTimelines = useInstance(() => {
    return planets.map((planet) => ({
      ...planet,
      position: 0,
      labelRef: React.createRef(),
      contentRef: React.createRef(),
      angleTimeline: planetsAngleTimeline,
      orbitTimeline: gsap.timeline({
        paused: true,
        defaults: gsapDefaults,
      }),
    }))
  })
  const megaTimeline = useInstance(() =>
    gsap.timeline({
      defaults: gsapDefaults,
    })
  )
  const trailingPlanetLabels = React.useMemo(() => {
    return planets
      .filter((item) => !!item.trailingPlanetLabel)
      .map((item) => item.trailingPlanetLabel)
  }, [planets])

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  let planetJSX = []
  let planetContentJSX = []
  planetsWTimelines.forEach((props, index) => {
    planetJSX.push(
      <Planet
        key={index}
        isMobile={isMobile}
        hasTrailingPlanet={!!props.trailingPlanetLabel}
        {...props}
      />
    )
    planetContentJSX.push(
      <PlanetContent
        ref={props.contentRef}
        variant="blurb1"
        key={index}
        $color={props.color}
      >
        {props.content}
      </PlanetContent>
    )
  })

  useIsomorphicLayoutEffect(() => {
    const galaxy = galaxyRef.current
    const stickyContainer = stickyContainerRef.current

    // ZOOM
    megaTimeline.to({}, { duration: 2 }).add('zoom')
    planetsWTimelines.forEach((planet) => {
      megaTimeline
        .to(planet.labelRef.current, { opacity: 0, duration: 0.2 }, 'zoom')
        .fromTo(
          planet,
          { position: planet.startPosition },
          { position: 0.75 },
          'zoom+=0.8'
        )
    })
    megaTimeline
      .to(
        galaxy,
        {
          x: '-27%',
          y: -100,
          z: 250,
          rotationX: isMobile ? 45 : 65,
          duration: 3,
          ease: 'power2.inOut',
        },
        'zoom'
      )
      .to(
        anglePlayhead,
        { playhead: 0.5, duration: 3, ease: 'power2.inOut' },
        'zoom'
      )

    // ORBIT
    megaTimeline.add('orbit')
    planetsWTimelines.forEach((planet, index) => {
      if (trailingPlanetLabels.includes(planet.label)) return

      const content = planet.contentRef.current
      const hasTrailingPlanet = !!planet.trailingPlanetLabel

      // this makes the position "wrap" between 0 and 1, so when it reaches 1.25, it will actually set to 0.25
      const wrapPositionBetweenRange = gsap.utils.wrap(0, 1)

      const trailingPlanet = planetsWTimelines.find(
        (p) => p.label === planet.trailingPlanetLabel
      )

      const currentPlanets = [planet, trailingPlanet].filter(Boolean)

      const currentPlanetLabels = [
        planet.labelRef.current,
        trailingPlanet?.labelRef?.current,
      ]

      megaTimeline
        .set(currentPlanetLabels, { clearProps: 'fontSize,lineHeight,x,y' })
        .set(
          currentPlanetLabels,
          getPlanetLabelSettings({ isMobile, hasTrailingPlanet })
        )
        .to(
          currentPlanets,
          {
            position: hasTrailingPlanet ? gsap.utils.wrap([1.27, 1.23]) : 1.25,
            ease: 'power1.out',
            stagger: 0.05,
            duration: 2,
            modifiers: {
              position: (pos) => wrapPositionBetweenRange(pos),
            },
          },
          index === 0 ? 'orbit' : '-=0.8'
        )
        .to(currentPlanetLabels, { opacity: 1 }, '>-1')
        .to(content, { opacity: 1, visibility: 'visible' }, '>')
        .to(currentPlanets, { position: 0.75, ease: 'power1.in' }, '>2')
        .to(currentPlanetLabels, { opacity: 0, duration: 0.5 }, '>-1.5')
        .set(
          currentPlanetLabels,
          getPlanetLabelSettings({ isMobile, hasTrailingPlanet })
        )
        .set(currentPlanetLabels, { clearProps: 'fontSize,lineHeight,x,y' })
        .to(
          content,
          { opacity: 0, visibility: 'hidden', duration: 0.5 },
          '>-1.5'
        )
    })

    // ZOOM OUT
    megaTimeline.add('zoomOut')
    planetsWTimelines
      .slice()
      .reverse()
      .forEach((planet, index) => {
        if (planet.startPosition > 0.5) {
          megaTimeline.to(
            planet,
            { position: planet.startPosition },
            `zoomOut+=${index * 0.5}`
          )
        } else {
          megaTimeline
            .to(planet, { position: 1 }, `zoomOut+=${index * 0.5}`)
            .fromTo(
              planet,
              { position: 0 },
              { position: planet.startPosition, ease: 'power1.out' },
              '>'
            )
        }
        megaTimeline.to(
          planet.labelRef.current,
          { opacity: 1, duration: 0.2 },
          '>-0.2'
        )
      })
    megaTimeline
      .to(
        galaxy,
        {
          x: '0%',
          y: 0,
          z: 0,
          rotationX: 0,
          duration: 3,
          ease: 'power2.inOut',
        },
        'zoomOut+=1.2'
      )
      .to(
        anglePlayhead,
        { playhead: 1, duration: 3, ease: 'power2.inOut' },
        'zoomOut+=1.2'
      )
      .to({}, { duration: 2 })

    const scrollTrigger = ScrollTrigger.create({
      trigger: stickyContainer,
      scrub: true,
      start: 'top top',
      end: 'bottom bottom',
      animation: megaTimeline,
      onUpdate: function () {
        planetsAngleTimeline.progress(anglePlayhead.playhead || 0)

        planetsWTimelines.forEach((planet) => {
          planet.orbitTimeline.progress(planet.position || planet.startPosition)
        })
      },
    })

    return () => {
      planetsAngleTimeline.clear()
      megaTimeline.remove(planetsAngleTimeline)

      planetsWTimelines.forEach((planet) => {
        planet.orbitTimeline.clear()
      })
      megaTimeline.clear()
      scrollTrigger.kill()
    }
  }, [
    megaTimeline,
    planetsAngleTimeline,
    planetsWTimelines,
    isMobile,
    trailingPlanetLabels,
  ])

  return (
    <StickyContainer ref={stickyContainerRef}>
      <StyledConstellation>
        <Universe>
          <Galaxy ref={galaxyRef}>
            <SolarSystem>
              <Ring width="100%" />
              <Ring width="78%" />
              <Ring width="55%" color="rgb(0 0 0 / 100%)" />
              <StyledLogo brandName="group" />
              {planetJSX}
            </SolarSystem>
          </Galaxy>
          {planetContentJSX}
        </Universe>
      </StyledConstellation>
    </StickyContainer>
  )
}

function getPlanetLabelSettings({ isMobile, hasTrailingPlanet }) {
  const lookup = {
    withTrailingPlanet: {
      mobile: {
        fontSize: '4vw',
        x: gsap.utils.wrap(['-120%', undefined]),
        y: gsap.utils.wrap(['45%', undefined]),
      },
      desktop: {
        fontSize: gsap.utils.wrap(['2vw', '3vw']),
        x: gsap.utils.wrap(['30%', undefined]),
        y: gsap.utils.wrap(['45%', undefined]),
      },
    },
    withoutTrailingPlanet: {
      mobile: {
        fontSize: '4vw',
      },
      desktop: {
        fontSize: '4vw',
      },
    },
  }

  const planetKey = hasTrailingPlanet
    ? 'withTrailingPlanet'
    : 'withoutTrailingPlanet'
  const mobileKey = isMobile ? 'mobile' : 'desktop'

  return lookup[planetKey][mobileKey]
}

const PlanetContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  width: 90%;
  text-align: left;
  transform: translate(-50%, 10%);
  opacity: 0;
  visibility: hidden;

  & > p {
    ${match.isLG} {
      max-width: 100%;
      width: 600px;
      transform: translateX(50%);
    }
  }

  & > ul {
    column-count: 2;
    padding-left: 6%;
    font-size: 1rem;
  }
  & > ul > li {
    padding-left: 1em;
    margin-bottom: 0.7em;
  }
  & > ul > li:before {
    color: ${({ $color }) => $color};
  }

  ${match.isSM} {
    top: 60%;

    & > ul {
      padding-left: 10%;
      font-size: 1.5625rem;
    }
  }
`

const Systems = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center 40%;
  background-repeat: no-repeat;
  background-size: cover;
`

const StickyContainer = styled.div`
  position: relative;
  height: 1000vh;
`

const StyledConstellation = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  background-position: center 40%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`

const Universe = styled(Systems)`
  perspective: 1000px;
`

const Galaxy = styled(Systems)`
  transform-style: preserve-3d;
`

const SolarSystem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 90vw;
  height: 90vw;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${match.isSM} {
    width: 54vw;
    height: 54vw;
  }
`

const StyledLogo = styled(KlickLogo)`
  position: absolute;
  width: 15%;
`

export default Ecosystem

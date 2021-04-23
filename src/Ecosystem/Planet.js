import React from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import styled, { css } from 'styled-components'

import { match } from '../_contexts/Theme'
import { P } from '../Typography/Typography'

const Planet = ({
  orbitTimeline,
  angleTimeline,
  labelRef,
  startPosition,
  color,
  size,
  label,
  isMobile,
  hasTrailingPlanet,
}) => {
  const pointRef = React.useRef()
  const planetRef = React.useRef()
  const solarPathRef = React.useRef()

  useIsomorphicLayoutEffect(() => {
    const point = pointRef.current
    const planet = planetRef.current
    const solarPath = solarPathRef.current
    const label = labelRef.current

    angleTimeline
      .to(point, { rotateX: isMobile ? -45 : -65, duration: 0.5 }, 0)
      .to(point, { rotateX: 0, duration: 0.5 }, 0.5)

    orbitTimeline
      .add('rotate')
      .set(point, { rotateY: 0, rotateZ: 360 }, 'rotate')
      .fromTo(
        planet,
        {
          backgroundPositionX: '50%',
        },
        {
          duration: 0.25,
          backgroundPositionX: '58%',
        },
        'rotate'
      )
      .fromTo(
        planet,
        {
          backgroundPositionX: '58%',
        },
        {
          duration: 0.25,
          backgroundPositionX: '72%',
        }
      )
      .call(() => {
        if (orbitTimeline.progress() > 0.5) {
          return label.classList.add('onleft')
        }
        return label.classList.remove('onleft')
      })
      .fromTo(
        planet,
        {
          backgroundPositionX: '28%',
        },
        {
          duration: 0.25,
          backgroundPositionX: '42%',
        }
      )
      .fromTo(
        planet,
        {
          backgroundPositionX: '42%',
        },
        {
          duration: 0.25,
          backgroundPositionX: '50%',
        }
      )
      .fromTo(solarPath, { rotateZ: 0 }, { rotateZ: 360 }, 'rotate')
      .to(point, { rotateY: 0, rotateZ: 0 }, 'rotate')

    orbitTimeline.progress(startPosition)
  }, [angleTimeline, orbitTimeline, startPosition, size, labelRef, isMobile])

  return (
    <SolarPath ref={solarPathRef}>
      <Point ref={pointRef}>
        <PlanetOrb ref={planetRef} $color={color} $size={size} />
        <Label
          ref={labelRef}
          $size={size}
          variant="blurb2"
          component="h3"
          $hasTrailingPlanet={hasTrailingPlanet}
        >
          {label}
        </Label>
      </Point>
    </SolarPath>
  )
}

const SolarPath = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`

const PlanetOrb = styled.div`
  position: absolute;
  ${({ $size }) => {
    const sxSize = $size * 2
    return css`
      width: ${sxSize}vw;
      height: ${sxSize}vw;
      margin-top: -${sxSize / 2}vw;
      margin-left: -${sxSize / 2}vw;
    `
  }}
  top: 0;
  border-radius: 50%;
  transform-style: preserve-3d;
  background: ${({ $color }) => $color};
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.7) 30%
  );
  background-position-y: 50%;
  background-size: 1000%;
  background-repeat: no-repeat;

  ${match.isSM} {
    ${({ $size }) => css`
      width: ${$size}vw;
      height: ${$size}vw;
      margin-top: -${$size / 2}vw;
      margin-left: -${$size / 2}vw;
    `}
  }
`

const Point = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  left: 50%;
  top: -1px;
  border: solid 3px red;
`

const Label = styled(P)`
  position: absolute;
  top: 50%;
  left: 0;
  text-align: left;
  font-size: 5vw;
  line-height: 0.9em;
  text-shadow: 0.1em 0.1em 0.2em #00000052;
  ${({ $hasTrailingPlanet }) => {
    return (
      $hasTrailingPlanet &&
      css`
        margin-top: 20px;
        margin-left: 20px;
      `
    )
  }}

  ${({ $size }) => css`
    transform: translate(-100%, -50%) translateX(-${$size / 2 + 2}vw);
    text-align: right;
    &.onleft {
      text-align: left;
      transform: translate(${$size / 2 + 2}vw, -50%);
    }

    ${match.isSM} {
      font-size: 2vw;
      text-align: left;
      transform-origin: left;
      transform: translate(${$size / 2 + 2}vw, -50%);

      &.selected {
        font-size: 4vw;
      }

      &.onleft {
        transform: translate(-100%, -50%) translateX(-${$size / 2 + 2}vw);
      }
    }
  `}
`

export default Planet

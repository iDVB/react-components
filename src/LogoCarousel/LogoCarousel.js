import React from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { gsap } from 'gsap'
import { ExpoScaleEase } from 'gsap/EasePack'
import styled from 'styled-components'

import { match } from '../_contexts/Theme'
import useInstance from '../_hooks/useInstance'

gsap.registerPlugin(ExpoScaleEase)

const LogoCarousel = ({ children, columnNum = 6 }) => {
  const columns = chunkToColumns(children, columnNum)

  let columnRefs = useInstance(() => new Array(columnNum))
  const columnJSX = columns.map((column, i) => {
    if (!columnRefs[i]) columnRefs[i] = []
    const logos = [...column, column[0]].map((logo, ii) => {
      const ref = React.createRef()
      columnRefs[i][ii] = ref
      return (
        <LogoWrapper key={ii} ref={ref}>
          {logo}
        </LogoWrapper>
      )
    })
    return <Column key={i}>{logos}</Column>
  })

  useIsomorphicLayoutEffect(() => {
    const timelines = []
    columnRefs.forEach((column) => {
      const timeline = gsap.timeline({ paused: true, repeat: -1 })
      const logos = column.map((logo) => logo.current)
      logos.forEach((logo, i) => {
        if (i) {
          timeline.fromTo(
            logo,
            {
              opacity: 0,
              rotationX: -80,
              yPercent: 50,
            },
            {
              duration: 0.5,
              opacity: 1,
              rotationX: 0,
              yPercent: 0,
              ease: 'power2',
            },
            i === 0 ? 0 : '<'
          )
          timeline.addPause()
        }
        if (i !== logos.length - 1) {
          timeline.to(
            logos,
            {
              duration: 0.5,
              opacity: 0,
              rotationX: 80,
              yPercent: -50,
              ease: 'power2',
            },
            '+=1'
          )
        }
      })
      timelines.push(timeline)
    })

    let interval = setInterval(() => {
      const randomTlIndex = randomIntFromInterval(0, timelines.length - 1)
      timelines[randomTlIndex].play()
    }, 3000)

    return () => {
      timelines.forEach((timeline) => {
        timeline.clear()
      })
      clearInterval(interval)
    }
  }, [columnRefs])

  return <LogoCarouselContainer>{columnJSX}</LogoCarouselContainer>
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const chunkToColumns = (array, size = 1) => {
  if (size !== 1) size = Math.ceil(parseInt(size, 10))
  const length = array == null ? 0 : array.length
  if (!length) return []

  let result = Array(size)
  let i = 0
  array.forEach((item) => {
    if (!result[i]) result[i] = []
    result[i].push(item)
    i = i === size - 1 ? 0 : i + 1
  })
  return result
}

const LogoCarouselContainer = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const LogoWrapper = styled.div`
  position: relative;
  width: 100%;

  & > * {
    width: 100%;
  }

  &:not(:first-child) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Column = styled.li`
  position: relative;
  width: 50%;

  ${match.isSM} {
    width: 25%;
  }

  ${match.isMD} {
    width: 16.6666%;
  }
`

export default LogoCarousel

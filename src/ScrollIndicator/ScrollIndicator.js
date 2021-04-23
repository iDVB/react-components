import React from 'react'
import styled, { keyframes } from 'styled-components'

const ScrollIndicator = () => (
  <Container>
    <Content></Content>
  </Container>
)

const dot = keyframes`
0% {
  transform: scale(.75);
  opacity: 0;
}
25% {
  transform: scale(1);
  opacity: 1;
}
100% {
  transform: scale(.75);
  opacity: 0;
}
`

const arrow = keyframes`
0% {
  transform: scale(.75) rotate(45deg);
  opacity: 0;
}
25% {
  transform: scale(1) rotate(45deg);
  opacity: 1;
}
100% {
  transform: scale(.75) rotate(45deg);
  opacity: 0;
}
`

const Container = styled.div`
  width: 12px;
  position: relative;
  opacity: 1;
  &::before,
  &::after {
    content: '';
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  &::before {
    width: 12px;
    height: 12px;
    border-radius: 10px;
    border: 1px solid #000000;
    animation: ${dot} 1.5s infinite ease-in-out;
  }
  &::after {
    width: 7px;
    height: 7px;
    border-right: 1px solid #000000;
    border-bottom: 1px solid #000000;
    transform: rotate(45deg);
    animation: ${arrow} 1.5s infinite ease-in-out;
    animation-delay: 0.75s;
    opacity: 1;
  }
`

const Content = styled.div`
  display: block;
  &::before,
  &::after {
    content: '';
    display: block;
    margin: 5px auto;
    border-radius: 10px;
    border: 1px solid #000000;
    animation: ${dot} 1.5s infinite ease-in-out;
  }
  &::before {
    width: 8px;
    height: 8px;
    animation-delay: 0.25s;
  }
  &::after {
    width: 6px;
    height: 6px;
    animation-delay: 0.5s;
  }
`

export default ScrollIndicator
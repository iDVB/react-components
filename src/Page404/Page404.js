import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import ThemeProvider, { match } from '../_contexts/Theme'
import Section from '../Section/Section'
import { Heading, P } from '../Typography/Typography'

const Page404 = () => (
  <ThemeProvider themeType="onWhite">
    <ErrorContainer>
      <ErrorContent>
        <StyledHeading variant="h1">
          4<span>0</span>4
        </StyledHeading>
        <Circle />
        <Copy variant="blurb1">
          There’s nothing different here. <br />
          Get back to something <Link to="/">different</Link>.
        </Copy>
      </ErrorContent>
    </ErrorContainer>
  </ThemeProvider>
)

const ErrorContainer = styled(Section)`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`

const ErrorContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 80%;
  text-align: center;

  a {
    color: ${(props) => props.theme.palette.primary.main};
    text-decoration: underline;
  }
`

const StyledHeading = styled(Heading)`
  margin: 0 0 50px 0;
  position: relative;
  z-index: 2;
  padding: 0;
  font-size: 38vw;

  ${match.isSM} {
    font-size: 18vw;
  }

  ${match.isXL} {
    font-size: 18vw;
  }

  > span {
    visibility: hidden;
  }
`

const Copy = styled(P)`
  margin: 0;
  padding: 0;

  ${match.isSM} {
    br {
      display: none;
    }
  }
`

const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  display: block;
  margin: 0 10px;
  padding: 0;
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.primary.main};

  ${match.isSM} {
    margin: 0 20px;
    width: 20vw;
    height: 20vw;
    max-width: 288px;
    max-height: 288px;
  }
`

export default Page404

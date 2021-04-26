import React from 'react'
import styled from 'styled-components'

const CookieBanner = () => {
  return (
    <div>
      <Banner>
        <BannerContainer>
          <BannerCopy variant="body2">
            We use cookies and other tracking technologies to assist with
            navigation, analyze your use of our services, and assist with our
            promotional and marketing efforts.{' '}
            <BannerTextButton>
              View cookie options
            </BannerTextButton>
          </BannerCopy>
          <BannerButton aria-label="Accept">
            Accept
          </BannerButton>
        </BannerContainer>
      </Banner>
    </div>
  )
}

const Banner = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  color: #ffffff;
  background-color: #000000;
  font-size: 12px;
  transition: all 0.3s;
  transform: translateY(0);
  z-index: 9999;
`

const BannerContainer = styled.div`
  margin: 0;
  padding: 20px;

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  @media (min-width: 960px) {
    margin: 0 7.5%;
    padding: 20px 0;
  }
`

const BannerCopy = styled.p`
  margin: 0 0 20px 0;
  padding: 0;

  @media (min-width: 600px) {
    flex: 1 1 auto;
    margin: 0 20px 0 0;
  }
`

const BannerTextButton = styled.button`
  color: #ffffff;
  background: none;
  border: none;
  text-decoration: underline;
`

// TODO: use Button from klick react-components package
const BannerButton = styled.button`
  margin: 0;
  padding: 20px 10px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  cursor: pointer;

  @media (min-width: 600px) {
    padding: 10px;
    flex: 0 0 100px;
  }
`

export default CookieBanner

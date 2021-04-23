import React, { forwardRef, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { tracking } from '../_common/tracking'
import { match } from '../_contexts/Theme'
import MobileFirstVideo from '../MobileFirstVideo/MobileFirstVideo'

const HeroVideo = forwardRef((props, ref) => {
  const {
    loopedId,
    videoId,
    overlay,
    overlayColor,
    playBtnRef,
    trackingLabel = 'unlabeled',
    poster,
    quality,
    portraitEnabled,
    dcCodePlay,
    dcCodeComplete,
    trackTextId,
    dcCodePercent,
    playPercentThreshold = 50,
    ...restProps
  } = props
  const playPercent = useRef(0)
  const trackedPercent = useRef(null)

  const playButtonLabelEl = useRef()
  const videoShortRef = useRef()
  const videoRef = useRef()
  const [hasPlayed, setHasPlayed] = useState(false)
  const [hasEnded, setHasEnded] = useState(false)

  useEffect(() => {
    const videoEl = videoRef.current

    const trackPercent = () => {
      if (
        trackedPercent.current !== playPercent.current &&
        playPercent.current !== 0
      ) {
        trackedPercent.current = playPercent.current
        tracking.track('Video Percent Played', {
          category: 'Video Interactions',
          action: 'Played Percent',
          label: trackingLabel,
          value: playPercent.current,
          ...(playPercent.current >= playPercentThreshold && {
            dcCode: dcCodePercent,
          }),
        })
        playPercent.current = 0
        trackedPercent.current = null
      }
    }

    const handleVideoUpdate = (e) => {
      const { currentTime, duration } = e.target
      const currentPercent = millisecsToPercent(duration, currentTime)
      if (currentPercent > playPercent.current) {
        playPercent.current = currentPercent
      }
    }

    const handleVideoEnd = () => {
      if (!hasEnded) {
        tracking.track('Video Completed', {
          category: 'Video Interactions',
          action: 'Video Ended',
          label: trackingLabel,
          dcCode: dcCodeComplete,
        })

        setHasEnded(true)
      }

      videoShortRef.current.play()
      const isFullscreen = isFullScreen()
      if (isFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
        if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        }
        if (document.mozExitFullscreen) {
          document.mozExitFullscreen()
        }
        if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      }
    }

    const handleWindowUnload = (e) => {
      trackPercent()
    }

    const handleFullScreenChange = () => {
      const isFullscreen = isFullScreen()
      if (!isFullscreen) {
        trackPercent()
        videoRef.current.currentTime = 0
        videoRef.current.pause(true)
        videoShortRef.current.play(true)
      }
    }

    if (videoEl) {
      ;['', 'webkit', 'moz', 'ms'].forEach((prefix) =>
        document.addEventListener(
          prefix + 'fullscreenchange',
          handleFullScreenChange
        )
      )
      videoEl.addEventListener('webkitendfullscreen', handleFullScreenChange)
      videoEl.addEventListener('timeupdate', handleVideoUpdate)
      videoEl.addEventListener('ended', handleVideoEnd)
      window.addEventListener('beforeunload', handleWindowUnload)
    }

    const resetVideo = () => {
      if (videoEl) {
        ;['', 'webkit', 'moz', 'ms'].forEach((prefix) =>
          document.removeEventListener(
            prefix + 'fullscreenchange',
            handleFullScreenChange
          )
        )
        videoEl.removeEventListener(
          'webkitendfullscreen',
          handleFullScreenChange
        )
        videoEl.removeEventListener('timeupdate', handleVideoUpdate)
        videoEl.removeEventListener('ended', handleVideoEnd)
        window.removeEventListener('beforeunload', handleWindowUnload)
      }
    }

    return () => {
      resetVideo()
    }
  }, [
    hasEnded,
    trackingLabel,
    dcCodeComplete,
    playPercentThreshold,
    dcCodePercent,
  ])

  const isFullScreen = () => {
    return (
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement
    )
  }

  const handlePlayClick = () => {
    videoShortRef.current.pause()
    const videoEl = videoRef.current
    requestFullScreen(videoEl)
    videoEl.play()

    if (!hasPlayed) {
      tracking.track('Video Started', {
        category: 'Video Interactions',
        action: 'Video Play',
        label: trackingLabel,
        dcCode: dcCodePlay,
      })

      setHasPlayed(true)
    }
  }

  const requestFullScreen = (videoEl) => {
    if (videoEl.requestFullscreen) {
      videoEl.requestFullscreen()
      return
    }

    if (videoEl.webkitSupportsFullscreen) {
      videoEl.webkitEnterFullScreen()
      return
    }

    if (videoEl.mozRequestFullScreen) {
      videoEl.mozRequestFullScreen()
      return
    }

    if (videoEl.msRequestFullScreen) {
      videoEl.msRequestFullScreen()
      return
    }
  }

  return (
    <VideoContainer ref={ref} {...restProps}>
      <VideoContainerInner>
        <LoopedVideo
          ref={videoShortRef}
          publicId={loopedId}
          isFullViewport={true}
          portraitEnabled={portraitEnabled}
          autoPlay
          muted
          loop
          playsInline
          poster={poster && poster}
          quality={quality}
        />

        {videoId && (
          <FullVideo
            ref={videoRef}
            publicId={videoId}
            preload="none"
            portraitEnabled={portraitEnabled}
            controlsList="nodownload"
            disablePictureInPicture
            quality={quality}
            controls={true}
            trackTextId={trackTextId}
          />
        )}

        {overlay && <Overlay $color={overlayColor} />}

        {videoId && (
          <PlayButton onClick={handlePlayClick} ref={playBtnRef}>
            <span ref={playButtonLabelEl}>Play</span>
          </PlayButton>
        )}
      </VideoContainerInner>
    </VideoContainer>
  )
})

HeroVideo.propTypes = {
  loopedId: PropTypes.string.isRequired,
  trackingLabel: PropTypes.string,
  videoId: PropTypes.string,
}

const VideoContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
`

const VideoContainerInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 100%;
  height: 100%;
  background-color: #000000;
  font-size: 0;
`

const LoopedVideo = styled(MobileFirstVideo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  z-index: 2;

  @media ${match.isPortrait} {
    width: 100%;
  }
`

const FullVideo = styled(MobileFirstVideo)`
  z-index: 1;
  position: relative;
  min-width: 100%;
  min-height: 100%;
`
const Overlay = styled.div`
  top: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${({ theme, $color }) => $color || theme.palette.primary.main};
  z-index: 2;

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    opacity: 0.7;
    background: ${({ theme }) => theme.palette.primary.main};
    mix-blend-mode: normal;
  }
`

const PlayButton = styled.button`
  border: none;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  background: none;
  position: absolute;
  border-radius: 50%;
  z-index: 3;
  margin: 0;
  padding: 0;
  width: 200px;
  height: 200px;
  cursor: pointer;
  color: #ffffff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:hover,
  &:focus {
    span {
      background: ${({ theme }) => theme.palette.primary.main};
    }
  }

  span {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background 0.3s ease-out;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
  }
`

const millisecsToPercent = (duration, time) =>
  Math.floor((time / duration) * 100)

export default HeroVideo

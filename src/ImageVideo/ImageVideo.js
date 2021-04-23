import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { tracking } from '../_common/tracking'
import MobileFirstVideo from '../MobileFirstVideo/MobileFirstVideo'

const ImageVideo = forwardRef(
  (
    {
      videoId,
      playBtnRef,
      trackingLabel = 'unlabeled',
      poster,
      quality,
      dcCodePlay,
      dcCodeComplete,
      image,
      ...props
    },
    ref
  ) => {
    const playPercent = useRef(0)
    const trackedPercent = useRef(null)

    const playButtonLabelEl = useRef()
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
    }, [hasEnded, trackingLabel, dcCodeComplete])

    const isFullScreen = () => {
      return (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement
      )
    }

    const handlePlayClick = () => {
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
      <VideoContainer ref={ref} {...props}>
        <DisplayContainer>
          <PlayButton onClick={handlePlayClick} ref={playBtnRef}>
            <span ref={playButtonLabelEl}>Play</span>
          </PlayButton>
          <ImageContainer>
            <ImageContainerInner>{image}</ImageContainerInner>
          </ImageContainer>
        </DisplayContainer>
        <PlayerContainer>
          <MobileFirstVideo
            ref={videoRef}
            publicId={videoId}
            preload="none"
            controlsList="nodownload"
            disablePictureInPicture
            quality={quality}
          />
        </PlayerContainer>
      </VideoContainer>
    )
  }
)

ImageVideo.propTypes = {
  trackingLabel: PropTypes.string,
  videoId: PropTypes.string.isRequired,
}

const VideoContainer = styled(Box)`
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
`

const DisplayContainer = styled.div`
  position: relative;
  z-index: 2;
`

const PlayerContainer = styled.div`
  z-index: 1;
  position: absolute;
  height: 1px;
  width: 1px;
  top: 50%;
  left: 50%;
  overflow: hidden;
`

const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  /* Note: Safari does not respect scale(1.05), so took the recoomendation to use scale3d https://stackoverflow.com/questions/27825098/image-shifting-jumping-after-css-transition-effect-with-scale-transform-in-firef */
  transform: scale3d(1, 1, 1);
`

const ImageContainerInner = styled.div`
  transition: transform 0.3s ease-out;
  /* Note: Safari does not respect scale(1.05), so took the recoomendation to use scale3d https://stackoverflow.com/questions/27825098/image-shifting-jumping-after-css-transition-effect-with-scale-transform-in-firef */
  transform: scale3d(1, 1, 1);
`

const PlayButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  border-radius: 50%;
  z-index: 2;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: #ffffff;

  &:hover,
  &:focus {
    span {
      background: ${({ theme }) => theme.palette.primary.main};
    }
    & + ${ImageContainer} ${ImageContainerInner} {
      /* Note: Safari does not respect scale(1.05), so took the recoomendation to use scale3d https://stackoverflow.com/questions/27825098/image-shifting-jumping-after-css-transition-effect-with-scale-transform-in-firef */
      transform: scale3d(1.05, 1.05, 1);
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

export default ImageVideo

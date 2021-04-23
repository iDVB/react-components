import { objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { tracking } from '../_common/tracking.js';
import { match } from '../_contexts/Theme.js';
import MobileFirstVideo from '../MobileFirstVideo/MobileFirstVideo.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var HeroVideo = /*#__PURE__*/forwardRef(function (props, ref) {
  var loopedId = props.loopedId,
      videoId = props.videoId,
      overlay = props.overlay,
      overlayColor = props.overlayColor,
      playBtnRef = props.playBtnRef,
      _props$trackingLabel = props.trackingLabel,
      trackingLabel = _props$trackingLabel === void 0 ? 'unlabeled' : _props$trackingLabel,
      poster = props.poster,
      quality = props.quality,
      portraitEnabled = props.portraitEnabled,
      dcCodePlay = props.dcCodePlay,
      dcCodeComplete = props.dcCodeComplete,
      trackTextId = props.trackTextId,
      dcCodePercent = props.dcCodePercent,
      _props$playPercentThr = props.playPercentThreshold,
      playPercentThreshold = _props$playPercentThr === void 0 ? 50 : _props$playPercentThr,
      restProps = _objectWithoutProperties(props, ["loopedId", "videoId", "overlay", "overlayColor", "playBtnRef", "trackingLabel", "poster", "quality", "portraitEnabled", "dcCodePlay", "dcCodeComplete", "trackTextId", "dcCodePercent", "playPercentThreshold"]);

  var playPercent = useRef(0);
  var trackedPercent = useRef(null);
  var playButtonLabelEl = useRef();
  var videoShortRef = useRef();
  var videoRef = useRef();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasPlayed = _useState2[0],
      setHasPlayed = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasEnded = _useState4[0],
      setHasEnded = _useState4[1];

  useEffect(function () {
    var videoEl = videoRef.current;

    var trackPercent = function trackPercent() {
      if (trackedPercent.current !== playPercent.current && playPercent.current !== 0) {
        trackedPercent.current = playPercent.current;
        tracking.track('Video Percent Played', _objectSpread2({
          category: 'Video Interactions',
          action: 'Played Percent',
          label: trackingLabel,
          value: playPercent.current
        }, playPercent.current >= playPercentThreshold && {
          dcCode: dcCodePercent
        }));
        playPercent.current = 0;
        trackedPercent.current = null;
      }
    };

    var handleVideoUpdate = function handleVideoUpdate(e) {
      var _e$target = e.target,
          currentTime = _e$target.currentTime,
          duration = _e$target.duration;
      var currentPercent = millisecsToPercent(duration, currentTime);

      if (currentPercent > playPercent.current) {
        playPercent.current = currentPercent;
      }
    };

    var handleVideoEnd = function handleVideoEnd() {
      if (!hasEnded) {
        tracking.track('Video Completed', {
          category: 'Video Interactions',
          action: 'Video Ended',
          label: trackingLabel,
          dcCode: dcCodeComplete
        });
        setHasEnded(true);
      }

      videoShortRef.current.play();
      var isFullscreen = isFullScreen();

      if (isFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }

        if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }

        if (document.mozExitFullscreen) {
          document.mozExitFullscreen();
        }

        if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    };

    var handleWindowUnload = function handleWindowUnload(e) {
      trackPercent();
    };

    var handleFullScreenChange = function handleFullScreenChange() {
      var isFullscreen = isFullScreen();

      if (!isFullscreen) {
        trackPercent();
        videoRef.current.currentTime = 0;
        videoRef.current.pause(true);
        videoShortRef.current.play(true);
      }
    };

    if (videoEl) {
      ['', 'webkit', 'moz', 'ms'].forEach(function (prefix) {
        return document.addEventListener(prefix + 'fullscreenchange', handleFullScreenChange);
      });
      videoEl.addEventListener('webkitendfullscreen', handleFullScreenChange);
      videoEl.addEventListener('timeupdate', handleVideoUpdate);
      videoEl.addEventListener('ended', handleVideoEnd);
      window.addEventListener('beforeunload', handleWindowUnload);
    }

    var resetVideo = function resetVideo() {
      if (videoEl) {
        ['', 'webkit', 'moz', 'ms'].forEach(function (prefix) {
          return document.removeEventListener(prefix + 'fullscreenchange', handleFullScreenChange);
        });
        videoEl.removeEventListener('webkitendfullscreen', handleFullScreenChange);
        videoEl.removeEventListener('timeupdate', handleVideoUpdate);
        videoEl.removeEventListener('ended', handleVideoEnd);
        window.removeEventListener('beforeunload', handleWindowUnload);
      }
    };

    return function () {
      resetVideo();
    };
  }, [hasEnded, trackingLabel, dcCodeComplete, playPercentThreshold, dcCodePercent]);

  var isFullScreen = function isFullScreen() {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
  };

  var handlePlayClick = function handlePlayClick() {
    videoShortRef.current.pause();
    var videoEl = videoRef.current;
    requestFullScreen(videoEl);
    videoEl.play();

    if (!hasPlayed) {
      tracking.track('Video Started', {
        category: 'Video Interactions',
        action: 'Video Play',
        label: trackingLabel,
        dcCode: dcCodePlay
      });
      setHasPlayed(true);
    }
  };

  var requestFullScreen = function requestFullScreen(videoEl) {
    if (videoEl.requestFullscreen) {
      videoEl.requestFullscreen();
      return;
    }

    if (videoEl.webkitSupportsFullscreen) {
      videoEl.webkitEnterFullScreen();
      return;
    }

    if (videoEl.mozRequestFullScreen) {
      videoEl.mozRequestFullScreen();
      return;
    }

    if (videoEl.msRequestFullScreen) {
      videoEl.msRequestFullScreen();
      return;
    }
  };

  return /*#__PURE__*/React.createElement(VideoContainer, _extends({
    ref: ref
  }, restProps), /*#__PURE__*/React.createElement(VideoContainerInner, null, /*#__PURE__*/React.createElement(LoopedVideo, {
    ref: videoShortRef,
    publicId: loopedId,
    isFullViewport: true,
    portraitEnabled: portraitEnabled,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    poster: poster && poster,
    quality: quality
  }), videoId && /*#__PURE__*/React.createElement(FullVideo, {
    ref: videoRef,
    publicId: videoId,
    preload: "none",
    portraitEnabled: portraitEnabled,
    controlsList: "nodownload",
    disablePictureInPicture: true,
    quality: quality,
    controls: true,
    trackTextId: trackTextId
  }), overlay && /*#__PURE__*/React.createElement(Overlay, {
    $color: overlayColor
  }), videoId && /*#__PURE__*/React.createElement(PlayButton, {
    onClick: handlePlayClick,
    ref: playBtnRef
  }, /*#__PURE__*/React.createElement("span", {
    ref: playButtonLabelEl
  }, "Play"))));
});
HeroVideo.propTypes = {
  loopedId: PropTypes.string.isRequired,
  trackingLabel: PropTypes.string,
  videoId: PropTypes.string
};
var VideoContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  width: 100%;\n"])));
var VideoContainerInner = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1);\n  width: 100%;\n  height: 100%;\n  background-color: #000000;\n  font-size: 0;\n"])));
var LoopedVideo = styled(MobileFirstVideo)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 100%;\n  min-height: 100%;\n  z-index: 2;\n\n  @media ", " {\n    width: 100%;\n  }\n"])), match.isPortrait);
var FullVideo = styled(MobileFirstVideo)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  z-index: 1;\n  position: relative;\n  min-width: 100%;\n  min-height: 100%;\n"])));
var Overlay = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  top: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: ", ";\n  z-index: 2;\n\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    opacity: 0.7;\n    background: ", ";\n    mix-blend-mode: normal;\n  }\n"])), function (_ref) {
  var theme = _ref.theme,
      $color = _ref.$color;
  return $color || theme.palette.primary.main;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.primary.main;
});
var PlayButton = styled.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border: none;\n  font-family: ", ";\n  background: none;\n  position: absolute;\n  border-radius: 50%;\n  z-index: 3;\n  margin: 0;\n  padding: 0;\n  width: 200px;\n  height: 200px;\n  cursor: pointer;\n  color: #ffffff;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  &:hover,\n  &:focus {\n    span {\n      background: ", ";\n    }\n  }\n\n  span {\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    margin: 0;\n    padding: 0;\n    width: 80px;\n    height: 80px;\n    line-height: 80px;\n    text-align: center;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: background 0.3s ease-out;\n    color: #ffffff;\n    font-size: 16px;\n    cursor: pointer;\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.fontFamily;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.main;
});

var millisecsToPercent = function millisecsToPercent(duration, time) {
  return Math.floor(time / duration * 100);
};

export default HeroVideo;
//# sourceMappingURL=HeroVideo.js.map

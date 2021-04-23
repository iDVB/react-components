import { objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef, useRef, useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { tracking } from '../_common/tracking.js';
import MobileFirstVideo from '../MobileFirstVideo/MobileFirstVideo.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var ImageVideo = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var videoId = _ref.videoId,
      playBtnRef = _ref.playBtnRef,
      _ref$trackingLabel = _ref.trackingLabel,
      trackingLabel = _ref$trackingLabel === void 0 ? 'unlabeled' : _ref$trackingLabel;
      _ref.poster;
      var quality = _ref.quality,
      dcCodePlay = _ref.dcCodePlay,
      dcCodeComplete = _ref.dcCodeComplete,
      image = _ref.image,
      props = _objectWithoutProperties(_ref, ["videoId", "playBtnRef", "trackingLabel", "poster", "quality", "dcCodePlay", "dcCodeComplete", "image"]);

  var playPercent = useRef(0);
  var trackedPercent = useRef(null);
  var playButtonLabelEl = useRef();
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
        tracking.track('Video Percent Played', {
          category: 'Video Interactions',
          action: 'Played Percent',
          label: trackingLabel,
          value: playPercent.current
        });
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
  }, [hasEnded, trackingLabel, dcCodeComplete]);

  var isFullScreen = function isFullScreen() {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
  };

  var handlePlayClick = function handlePlayClick() {
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
  }, props), /*#__PURE__*/React.createElement(DisplayContainer, null, /*#__PURE__*/React.createElement(PlayButton, {
    onClick: handlePlayClick,
    ref: playBtnRef
  }, /*#__PURE__*/React.createElement("span", {
    ref: playButtonLabelEl
  }, "Play")), /*#__PURE__*/React.createElement(ImageContainer, null, /*#__PURE__*/React.createElement(ImageContainerInner, null, image))), /*#__PURE__*/React.createElement(PlayerContainer, null, /*#__PURE__*/React.createElement(MobileFirstVideo, {
    ref: videoRef,
    publicId: videoId,
    preload: "none",
    controlsList: "nodownload",
    disablePictureInPicture: true,
    quality: quality
  })));
});
ImageVideo.propTypes = {
  trackingLabel: PropTypes.string,
  videoId: PropTypes.string.isRequired
};
var VideoContainer = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  width: 100%;\n"])));
var DisplayContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 2;\n"])));
var PlayerContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  z-index: 1;\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  top: 50%;\n  left: 50%;\n  overflow: hidden;\n"])));
var ImageContainer = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  overflow: hidden;\n  /* Note: Safari does not respect scale(1.05), so took the recoomendation to use scale3d https://stackoverflow.com/questions/27825098/image-shifting-jumping-after-css-transition-effect-with-scale-transform-in-firef */\n  transform: scale3d(1, 1, 1);\n"])));
var ImageContainerInner = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  transition: transform 0.3s ease-out;\n  /* Note: Safari does not respect scale(1.05), so took the recoomendation to use scale3d https://stackoverflow.com/questions/27825098/image-shifting-jumping-after-css-transition-effect-with-scale-transform-in-firef */\n  transform: scale3d(1, 1, 1);\n"])));
var PlayButton = styled.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border: none;\n  background: none;\n  position: absolute;\n  border-radius: 50%;\n  z-index: 2;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  color: #ffffff;\n\n  &:hover,\n  &:focus {\n    span {\n      background: ", ";\n    }\n    & + ", " ", " {\n      /* Note: Safari does not respect scale(1.05), so took the recoomendation to use scale3d https://stackoverflow.com/questions/27825098/image-shifting-jumping-after-css-transition-effect-with-scale-transform-in-firef */\n      transform: scale3d(1.05, 1.05, 1);\n    }\n  }\n\n  span {\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    margin: 0;\n    padding: 0;\n    width: 80px;\n    height: 80px;\n    line-height: 80px;\n    text-align: center;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: background 0.3s ease-out;\n    color: #ffffff;\n    font-size: 16px;\n    cursor: pointer;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.primary.main;
}, ImageContainer, ImageContainerInner);

var millisecsToPercent = function millisecsToPercent(duration, time) {
  return Math.floor(time / duration * 100);
};

export default ImageVideo;
//# sourceMappingURL=ImageVideo.js.map

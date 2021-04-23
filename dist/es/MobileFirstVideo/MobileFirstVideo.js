import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { match } from '../_contexts/Theme.js';
import MobileFirstSwitch, { Default, Breakpoint } from '../MobileFirstSwitch/MobileFirstSwitch.js';

var MobileFirstVideo = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$isFullViewport = props.isFullViewport,
      isFullViewport = _props$isFullViewport === void 0 ? false : _props$isFullViewport,
      _props$quality = props.quality,
      quality = _props$quality === void 0 ? 80 : _props$quality,
      publicId = props.publicId,
      _props$portraitEnable = props.portraitEnabled,
      portraitEnabled = _props$portraitEnable === void 0 ? true : _props$portraitEnable,
      trackTextId = props.trackTextId,
      controls = props.controls,
      rest = _objectWithoutProperties(props, ["isFullViewport", "quality", "publicId", "portraitEnabled", "trackTextId", "controls"]);

  var isPortrait = useMediaQuery(match.isPortrait);
  var trackElement = trackTextId ? /*#__PURE__*/React.createElement("track", {
    "default": true,
    src: "https://res.cloudinary.com/klick/raw/upload/".concat(trackTextId, ".vtt")
  }) : null;
  var videoProps = {
    ref: ref,
    crossOrigin: 'anonymous',
    tabIndex: controls ? '-1' : null
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, isFullViewport && isPortrait && portraitEnabled ? /*#__PURE__*/React.createElement(MobileFirstSwitch, null, /*#__PURE__*/React.createElement(Default, null, /*#__PURE__*/React.createElement("video", _extends({}, videoProps, rest, {
    key: isFullViewport ? 1 : null
  }), trackElement, /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_fill,f_mp4,h_1624,q_".concat(quality, ",vc_h265,w_750/v1/").concat(publicId, ".mp4"),
    type: "video/mp4; codecs=hvc1"
  }), /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_fill,f_webm,h_1624,q_".concat(quality, ",vc_vp9,w_750/v1/").concat(publicId, ".webm"),
    type: "video/webm; codecs=vp9"
  }), /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_fill,f_mp4,h_1624,q_".concat(quality, ",vc_auto,w_750/v1/").concat(publicId, ".mp4"),
    type: "video/mp4"
  }))), /*#__PURE__*/React.createElement(Breakpoint, {
    query: match.isSM
  }, /*#__PURE__*/React.createElement("video", _extends({}, videoProps, rest, {
    key: isFullViewport ? 2 : null
  }), trackElement, /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_fill,f_mp4,h_2048,q_".concat(quality, ",vc_h265,w_1536/v1/").concat(publicId, ".mp4"),
    type: "video/mp4; codecs=hvc1"
  }), /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_fill,f_webm,h_2048,q_".concat(quality, ",vc_vp9,w_1536/v1/").concat(publicId, ".webm"),
    type: "video/webm; codecs=vp9"
  }), /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_fill,f_mp4,h_2048,q_".concat(quality, ",vc_auto,w_1536/v1/").concat(publicId, ".mp4"),
    type: "video/mp4"
  })))) : /*#__PURE__*/React.createElement(MobileFirstSwitch, null, /*#__PURE__*/React.createElement(Default, null, /*#__PURE__*/React.createElement("video", _extends({}, videoProps, rest, {
    key: isFullViewport ? 3 : null
  }), trackElement, /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_".concat(quality, ",vc_h265,w_992/").concat(publicId, ".mp4"),
    type: "video/mp4; codecs=hvc1"
  }), /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_scale,f_webm,q_".concat(quality, ",vc_vp9,w_992/").concat(publicId, ".webm"),
    type: "video/webm; codecs=vp9"
  }), /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_".concat(quality, ",vc_auto,w_992/").concat(publicId, ".mp4"),
    type: "video/mp4"
  }))), /*#__PURE__*/React.createElement(Breakpoint, {
    query: match.isMD
  }, /*#__PURE__*/React.createElement("video", _extends({}, videoProps, rest, {
    key: isFullViewport ? 4 : null
  }), trackElement, /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_".concat(quality, ",vc_h265,w_1200/").concat(publicId, ".mp4"),
    type: "video/mp4; codecs=hvc1"
  }), /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_scale,f_webm,q_".concat(quality, ",vc_vp9,w_1200/").concat(publicId, ".webm"),
    type: "video/webm; codecs=vp9"
  }), /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_".concat(quality, ",vc_auto,w_1200/").concat(publicId, ".mp4"),
    type: "video/mp4"
  }))), /*#__PURE__*/React.createElement(Breakpoint, {
    query: match.isLG
  }, /*#__PURE__*/React.createElement("video", _extends({}, videoProps, rest, {
    key: isFullViewport ? 5 : null
  }), trackElement, /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_".concat(quality, ",vc_h265,w_1600/").concat(publicId, ".mp4"),
    type: "video/mp4; codecs=hvc1"
  }), /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_scale,f_webm,q_".concat(quality, ",vc_vp9,w_1600/").concat(publicId, ".webm"),
    type: "video/webm; codecs=vp9"
  }), /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_".concat(quality, ",vc_auto,w_1600/").concat(publicId, ".mp4"),
    type: "video/mp4"
  }))), /*#__PURE__*/React.createElement(Breakpoint, {
    query: match.isXL
  }, /*#__PURE__*/React.createElement("video", _extends({}, videoProps, rest, {
    key: isFullViewport ? 6 : null
  }), trackElement, /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_".concat(quality, ",vc_h265,w_1920/").concat(publicId, ".mp4"),
    type: "video/mp4; codecs=hvc1"
  }), /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_scale,f_webm,q_".concat(quality, ",vc_vp9,w_1920/").concat(publicId, ".webm"),
    type: "video/webm; codecs=vp9"
  }), /*#__PURE__*/React.createElement("source", {
    src: "https://res.cloudinary.com/klick/video/upload/c_scale,f_mp4,q_".concat(quality, ",vc_auto,w_1920/").concat(publicId, ".mp4"),
    type: "video/mp4"
  })))));
});

export default MobileFirstVideo;
//# sourceMappingURL=MobileFirstVideo.js.map

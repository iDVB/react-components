import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef } from 'react';
import { Box } from '@material-ui/core';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';
import styled, { keyframes } from 'styled-components';
import { match } from '../_contexts/Theme.js';
import FadeIn from '../FadeIn/FadeIn.js';

var _templateObject, _templateObject2;
var WithCircle = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _ref$shouldLighten = _ref.shouldLighten,
      shouldLighten = _ref$shouldLighten === void 0 ? true : _ref$shouldLighten,
      _ref$shouldDarken = _ref.shouldDarken,
      shouldDarken = _ref$shouldDarken === void 0 ? true : _ref$shouldDarken;
  return /*#__PURE__*/React.createElement(Box, {
    ref: ref,
    position: "relative"
  }, /*#__PURE__*/React.createElement(FadeIn, {
    from: "left"
  }, /*#__PURE__*/React.createElement(Box, {
    position: "relative",
    zIndex: 2
  }, children)), /*#__PURE__*/React.createElement(FadeIn, {
    from: "right"
  }, /*#__PURE__*/React.createElement(Circle, {
    $shouldDarken: shouldDarken,
    $shouldLighten: shouldLighten
  })));
});

var breathe = function breathe(_ref2) {
  var theme = _ref2.theme,
      $shouldLighten = _ref2.$shouldLighten,
      $shouldDarken = _ref2.$shouldDarken;
  var color = theme.palette.primary.main;
  return keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    transform: translate(-50%, -50%) scale(1);\n    background-color: ", ";\n  }\n  to {\n    transform: translate(-50%, -50%) scale(1.1);\n    background-color: ", ";\n  }\n"])), $shouldDarken ? darken(color, 0.3) : color, $shouldLighten ? lighten(color, 0.3) : color);
};

var Circle = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  animation: ", " 2s alternate infinite ease-in-out;\n  background: radial-gradient(\n    circle,\n    transparent,\n    ", "\n  );\n\n  height: 130px;\n  width: 130px;\n  position: absolute;\n  border-radius: 50%;\n  z-index: 1;\n  top: 20px;\n  left: 100px;\n\n  ", " {\n    height: 400px;\n    width: 400px;\n    top: 50%;\n    left: 0;\n  }\n"])), function (props) {
  return breathe(props);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
}, match.isSM);

export default WithCircle;
//# sourceMappingURL=WithCircle.js.map

import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { match } from '../_contexts/Theme.js';

var _templateObject;

function BreakoutItem(_ref) {
  var children = _ref.children,
      _ref$alignFrom = _ref.alignFrom,
      alignFrom = _ref$alignFrom === void 0 ? 'left' : _ref$alignFrom,
      _ref$sizeLg = _ref.sizeLg,
      _sizeLg = _ref$sizeLg === void 0 ? '100%' : _ref$sizeLg;

  var _getMediaSizes = getMediaSizes(_sizeLg),
      sizeMd = _getMediaSizes.sizeMd,
      sizeLg = _getMediaSizes.sizeLg,
      sizeXl = _getMediaSizes.sizeXl;

  return /*#__PURE__*/React.createElement(Box, {
    position: "relative",
    pt: "100%",
    height: {
      md: sizeMd,
      lg: sizeLg,
      xl: sizeXl
    }
  }, /*#__PURE__*/React.createElement(BreakoutItemContainer, {
    $alignFrom: alignFrom,
    $sizeMd: sizeMd,
    $sizeLg: sizeLg,
    $sizeXl: sizeXl
  }, children));
}

BreakoutItem.propTypes = {
  // sizeLg : This is the height/width of the breakout container in pixels on large screens. It will calculate the sizes for isMD and isXL based on this. The default is simply '100%', which will not breakout at all.
  sizeLg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alignFrom: PropTypes.oneOf(['left', 'right'])
};
var BreakoutItemContainer = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n\n  ", "\n\n  ", " {\n    height: ", ";\n    width: ", ";\n  }\n\n  ", " {\n    height: ", ";\n    width: ", ";\n  }\n\n  ", " {\n    height: ", ";\n    width: ", ";\n  }\n"])), function (_ref2) {
  var _ref2$$alignFrom = _ref2.$alignFrom,
      $alignFrom = _ref2$$alignFrom === void 0 ? 'left' : _ref2$$alignFrom;
  return "".concat($alignFrom, ": 0;");
}, match.isMD, function (_ref3) {
  var $sizeMd = _ref3.$sizeMd;
  return $sizeMd;
}, function (_ref4) {
  var $sizeMd = _ref4.$sizeMd;
  return $sizeMd;
}, match.isLG, function (_ref5) {
  var $sizeLg = _ref5.$sizeLg;
  return $sizeLg;
}, function (_ref6) {
  var $sizeLg = _ref6.$sizeLg;
  return $sizeLg;
}, match.isXL, function (_ref7) {
  var $sizeXl = _ref7.$sizeXl;
  return $sizeXl;
}, function (_ref8) {
  var $sizeXl = _ref8.$sizeXl;
  return $sizeXl;
});

function getMediaSizes(_sizeLg) {
  var sizeMd = typeof _sizeLg === 'string' ? _sizeLg : "".concat(_sizeLg * 0.7, "px");
  var sizeLg = typeof _sizeLg === 'string' ? _sizeLg : "".concat(_sizeLg * 1, "px");
  var sizeXl = typeof _sizeLg === 'string' ? _sizeLg : "".concat(_sizeLg * 1, "px");
  return {
    sizeMd: sizeMd,
    sizeLg: sizeLg,
    sizeXl: sizeXl
  };
}

export default BreakoutItem;
//# sourceMappingURL=BreakoutItem.js.map

import { objectWithoutProperties as _objectWithoutProperties, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { Box, fade } from '@material-ui/core';
import { get } from 'lodash';
import styled, { css } from 'styled-components';

var _templateObject, _templateObject2;

function ShadowBox(_ref) {
  var children = _ref.children,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? true : _ref$top,
      _ref$bottom = _ref.bottom,
      bottom = _ref$bottom === void 0 ? true : _ref$bottom,
      _ref$shadowHeight = _ref.shadowHeight,
      shadowHeight = _ref$shadowHeight === void 0 ? 60 : _ref$shadowHeight,
      _ref$shadowColorY = _ref.shadowColorY,
      shadowColorY = _ref$shadowColorY === void 0 ? 'background.default' : _ref$shadowColorY,
      shadowColorTop = _ref.shadowColorTop,
      shadowColorBottom = _ref.shadowColorBottom,
      rest = _objectWithoutProperties(_ref, ["children", "top", "bottom", "shadowHeight", "shadowColorY", "shadowColorTop", "shadowColorBottom"]);

  return /*#__PURE__*/React.createElement(StyledBox, _extends({
    $top: top,
    $bottom: bottom,
    $shadowHeightTop: shadowHeight,
    $shadowHeightBottom: shadowHeight,
    $shadowColorTop: shadowColorTop || shadowColorY,
    $shadowColorBottom: shadowColorBottom || shadowColorY
  }, rest), children);
}

var StyledBox = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme,
      $shadowColorTop = _ref2.$shadowColorTop,
      $shadowColorBottom = _ref2.$shadowColorBottom,
      $bottom = _ref2.$bottom,
      $top = _ref2.$top,
      $shadowHeightTop = _ref2.$shadowHeightTop,
      $shadowHeightBottom = _ref2.$shadowHeightBottom;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      /* Top Shadow */\n      :before {\n        display: ", ";\n        position: absolute;\n        z-index: 2;\n        content: '';\n        top: 0;\n        width: 100%;\n        height: ", "px;\n        background-image: linear-gradient(\n          ", ",\n          ", "\n        );\n      }\n\n      /* Bottom Shadow */\n      :after {\n        display: ", ";\n        position: absolute;\n        z-index: 2;\n        content: '';\n        bottom: 0;\n        width: 100%;\n        height: ", "px;\n        background-image: linear-gradient(\n          ", ",\n          ", "\n        );\n      }\n    "])), $top ? 'block' : 'none', $shadowHeightTop, get(theme.palette, $shadowColorTop), fade(get(theme.palette, $shadowColorTop), 0), $bottom ? 'block' : 'none', $shadowHeightBottom, fade(get(theme.palette, $shadowColorBottom), 0), get(theme.palette, $shadowColorBottom));
});

export default ShadowBox;
//# sourceMappingURL=ShadowBox.js.map

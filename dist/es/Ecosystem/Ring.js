import { taggedTemplateLiteral as _taggedTemplateLiteral, objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

var _templateObject;
var Ring = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "rgb(113, 103, 255, 20%)" : _ref$color,
      props = _objectWithoutProperties(_ref, ["color"]);

  var _props$width = props.width,
      width = _props$width === void 0 ? '300px' : _props$width;
  return /*#__PURE__*/React.createElement(StyledRing, _extends({
    ref: ref,
    $width: width,
    $color: color
  }, props));
});
var StyledRing = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  --width: ", ";\n  width: var(--width);\n  height: var(--width);\n  background: ", ";\n  border: rgb(255 255 255 / 20%) 1px solid;\n  border-radius: 100%;\n"])), function (_ref2) {
  var $width = _ref2.$width;
  return $width;
}, function (_ref3) {
  var $color = _ref3.$color;
  return "radial-gradient(\n    circle,\n    rgba(255, 255, 255, 0) 50%,\n    ".concat($color, " 100%\n  )");
});
Ring.defaultProps = {
  width: 300
};

export default Ring;
//# sourceMappingURL=Ring.js.map

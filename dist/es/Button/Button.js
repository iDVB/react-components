import { objectWithoutProperties as _objectWithoutProperties, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef } from 'react';
import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

var _templateObject, _templateObject2, _templateObject3;
var Button = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'contained' : _ref$variant,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      rest = _objectWithoutProperties(_ref, ["variant", "color"]);

  var SizedButton = buttonSizes[rest.size] || buttonSizes['default']; // TODO: this means we cannot override color for outlined buttons at the moment.

  var realColor = variant === 'outlined' ? 'inherit' : color;
  return /*#__PURE__*/React.createElement(SizedButton, _extends({
    ref: ref,
    disableElevation: true,
    variant: variant,
    color: realColor
  }, rest));
});
var StyledButton = styled(MuiButton)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &.MuiButton-outlined {\n    color: ", ";\n    border-color: ", ";\n  }\n\n  &.MuiButton-sizeLarge,\n  &[class*='MuiButton-sizeLarge-'] {\n    padding: 16px 30px;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return color || theme.palette.primary.main;
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return color || theme.palette.text.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.main;
});
var XLargeButton = styled( /*#__PURE__*/forwardRef(function (_ref5, ref) {
  _ref5.size;
      var rest = _objectWithoutProperties(_ref5, ["size"]);

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    ref: ref,
    size: "large"
  }, rest));
}))(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  &.MuiButton-sizeLarge,\n  &[class*='MuiButton-sizeLarge-'] {\n    padding: 35px 50px;\n    white-space: nowrap;\n  }\n"])));
var XXLargeButton = styled(XLargeButton)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 35px 95px;\n  font-size: ", ";\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.pxToRem(22);
});
var buttonSizes = {
  xlarge: XLargeButton,
  xxlarge: XXLargeButton,
  "default": StyledButton
};

export default Button;
//# sourceMappingURL=Button.js.map

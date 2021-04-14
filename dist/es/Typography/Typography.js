import { taggedTemplateLiteral as _taggedTemplateLiteral, objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
var StyledTypography = styled(Typography)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))); // HEADING

var Heading = styled( /*#__PURE__*/forwardRef(function (props, ref) {
  props.font;
      var variant = props.variant,
      restProps = _objectWithoutProperties(props, ["font", "variant"]);

  return /*#__PURE__*/React.createElement(StyledTypography, _extends({
    ref: ref,
    color: "textPrimary",
    variant: variant,
    component: variant
  }, restProps));
}))(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var font = _ref.font,
      theme = _ref.theme;
  return font && "\nfont-family: ".concat(theme.typography.font[font], ";\nfont-weight: ").concat(font === 'primary' ? 700 : 400, ";\n");
});
Heading.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired
}; // PARAGRAPH

var P = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var variant = _ref2.variant,
      props = _objectWithoutProperties(_ref2, ["variant"]);

  var hasCustomVariant = !!customVariants[variant];
  var Component = hasCustomVariant ? customVariants[variant] : DefaultP;
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref,
    variant: hasCustomVariant ? undefined : variant
  }, props));
});
var DefaultP = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'body1' : _props$variant,
      _props$color = props.color,
      color = _props$color === void 0 ? 'textPrimary' : _props$color,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? true : _props$paragraph,
      restProps = _objectWithoutProperties(props, ["variant", "color", "paragraph"]);

  return /*#__PURE__*/React.createElement(StyledTypography, _extends({
    ref: ref,
    paragraph: paragraph,
    variant: variant,
    color: color
  }, restProps));
});
var Blurb1 = styled(DefaultP)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-size: 1.5625rem;\n  line-height: 1.235;\n\n  @media (min-width: 600px) {\n    font-size: 1.8219rem;\n  }\n\n  @media (min-width: 960px) {\n    font-size: 2.0243rem;\n  }\n"])));
var Blurb2 = styled(DefaultP)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.6;\n"])));
var customVariants = {
  blurb1: Blurb1,
  blurb2: Blurb2
};
P.propTypes = {
  variant: PropTypes.oneOf(['body1', 'body2', 'blurb1', 'blurb2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2'])
};
var UL = styled(function (_ref3) {
  var color = _ref3.color,
      props = _objectWithoutProperties(_ref3, ["color"]);

  return /*#__PURE__*/React.createElement(P, _extends({
    component: "ul",
    $color: color
  }, props));
})(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  li:before {\n    content: '\u2022';\n    color: ", ";\n    font-weight: bold;\n    display: inline-block;\n    width: 1em;\n    margin-left: -1em;\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme,
      $color = _ref4.$color;
  return $color || theme.palette.primary.main;
});
var HR = styled.hr(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 0;\n  border: 0;\n  border-top: 1px solid #f2f2f2;\n  background: none;\n  margin: 0;\n"])));
var Decorator = styled.div.attrs(function () {
  return {
    // Note: see a11y role details here https://www.w3.org/TR/wai-aria-1.1/#presentation
    role: 'none'
  };
})(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref5) {
  var _ref5$$align = _ref5.$align,
      $align = _ref5$$align === void 0 ? 'center' : _ref5$$align,
      _ref5$$size = _ref5.$size,
      $size = _ref5$$size === void 0 ? 6 : _ref5$$size,
      _ref5$$width = _ref5.$width,
      $width = _ref5$$width === void 0 ? '4vw' : _ref5$$width,
      _ref5$$minWidth = _ref5.$minWidth,
      $minWidth = _ref5$$minWidth === void 0 ? '50px' : _ref5$$minWidth;
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      display: inline-block;\n      padding: 0;\n      border: 0;\n      border-top: ", "px solid\n        ", ";\n      background: none;\n      width: ", ";\n      min-width: ", ";\n      margin-top: 30px;\n      margin-bottom: 30px;\n      margin-left: auto;\n      margin-right: auto;\n\n      ", "\n      ", "\n    "])), $size, function (_ref6) {
    var theme = _ref6.theme;
    return theme.palette.primary.main;
  }, $width, $minWidth, $align === 'left' && "margin-left: 0;", $align === 'right' && "margin-right: 0;");
});
var NoWrap = styled.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n"])));
var AvoidWrap = styled.span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: inline-block;\n"])));
var Em = styled.em(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-style: inherit;\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.primary.main;
});

export { AvoidWrap, Decorator, Em, HR, Heading, NoWrap, P, UL };
//# sourceMappingURL=Typography.js.map

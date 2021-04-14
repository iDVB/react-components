import { extends as _extends, objectWithoutProperties as _objectWithoutProperties, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef } from 'react';
import { Link as Link$1 } from '@material-ui/core';
import { Link } from 'gatsby';
import { g as gatsbyPluginGoogleGtag } from '../node_modules/gatsby-plugin-google-gtag/index.js';
import styled from 'styled-components';

var _templateObject;
var InternalLink = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Link, _extends({
    ref: ref
  }, props));
});
var ExternalLink = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var to = _ref.to,
      props = _objectWithoutProperties(_ref, ["to"]);

  return /*#__PURE__*/React.createElement(gatsbyPluginGoogleGtag.OutboundLink, _extends({
    ref: ref,
    href: to,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props));
});
var TextLink = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var _ref2$underline = _ref2.underline,
      underline = _ref2$underline === void 0 ? 'always' : _ref2$underline,
      props = _objectWithoutProperties(_ref2, ["underline"]);

  return /*#__PURE__*/React.createElement(StyledMUILink, _extends({
    ref: ref,
    underline: underline
  }, props));
});
var StyledMUILink = styled(Link$1)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  text-decoration-color: ", ";\n  color: ", ";\n  &:hover {\n    cursor: pointer;\n    text-decoration-color: ", ";\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.text.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.primary.main;
});

export { ExternalLink, InternalLink, TextLink };
//# sourceMappingURL=Links.js.map

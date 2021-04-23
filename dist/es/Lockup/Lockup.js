import { taggedTemplateLiteral as _taggedTemplateLiteral, objectWithoutProperties as _objectWithoutProperties } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { match } from '../_contexts/Theme.js';
import KlickLogo from '../KlickLogo/KlickLogo.js';
import { InternalLink } from '../Links/Links.js';
import { Heading } from '../Typography/Typography.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var Lockup = function Lockup(_ref) {
  var brandName = _ref.brandName,
      themeType = _ref.themeType,
      to = _ref.to,
      _ref$tagline = _ref.tagline,
      tagline = _ref$tagline === void 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "There's something"), " ", /*#__PURE__*/React.createElement("span", null, "different here.")) : _ref$tagline,
      label = _ref.label,
      onClick = _ref.onClick;
      _objectWithoutProperties(_ref, ["brandName", "themeType", "to", "tagline", "label", "onClick"]);

  var logoTagline = [/*#__PURE__*/React.createElement(Logo, {
    key: "logo",
    brandName: brandName,
    themeType: themeType
  }), /*#__PURE__*/React.createElement(Divider, {
    key: "divider"
  }), /*#__PURE__*/React.createElement(Tagline, {
    key: "tagline",
    component: "span"
  }, tagline)];
  return to ? /*#__PURE__*/React.createElement(StyledWrapper, {
    as: InternalLink,
    to: to,
    "aria-label": label,
    onClick: onClick,
    children: logoTagline
  }) : /*#__PURE__*/React.createElement(StyledWrapper, {
    as: Box,
    children: logoTagline
  });
};

var StyledWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  color: ", ";\n  text-decoration: none;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.primary;
});
var Logo = styled(KlickLogo)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 40px;\n"])));
var Divider = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 1px;\n  background: ", ";\n  margin: 0 2.4rem;\n  align-self: stretch;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.text.primary;
});
var Tagline = styled(Heading)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  padding: 0;\n  font-size: 1rem;\n  font-family: ", ";\n  font-weight: 400;\n\n  & > span {\n    white-space: nowrap;\n    ", " {\n      white-space: normal;\n    }\n  }\n\n  ", " {\n    font-size: 1.2rem;\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.font['secondary'];
}, match.isSM, match.isSM);

export default Lockup;
//# sourceMappingURL=Lockup.js.map

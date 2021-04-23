import { taggedTemplateLiteral as _taggedTemplateLiteral, objectWithoutProperties as _objectWithoutProperties } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Typography/Typography.js';

var _templateObject;

var Addresses = function Addresses(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'h5' : _ref$variant,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'span' : _ref$component,
      rest = _objectWithoutProperties(_ref, ["variant", "component"]);

  return /*#__PURE__*/React.createElement(StyledAddresses, rest, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Heading, {
    variant: variant,
    component: component
  }, "Toronto"), /*#__PURE__*/React.createElement("address", {
    className: "vcard"
  }, /*#__PURE__*/React.createElement("span", {
    className: "adr"
  }, /*#__PURE__*/React.createElement("span", {
    className: "street-address"
  }, "175 Bloor Street East"), ' ', /*#__PURE__*/React.createElement("span", {
    className: "extended-address"
  }, "Suite 300, North Tower"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "locality"
  }, "Toronto"), ",\xA0", /*#__PURE__*/React.createElement("abbr", {
    className: "region"
  }, "ON"), "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    className: "postal-code"
  }, "M4W 3R8")))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Heading, {
    variant: variant,
    component: component
  }, "New York"), /*#__PURE__*/React.createElement("address", {
    className: "vcard"
  }, /*#__PURE__*/React.createElement("span", {
    className: "adr"
  }, /*#__PURE__*/React.createElement("span", {
    className: "street-address"
  }, "21 Penn Plaza"), ",\xA0", /*#__PURE__*/React.createElement("span", {
    className: "extended-address"
  }, "368 9th Avenue, 5th Floor"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "locality"
  }, "New York"), ",\xA0", /*#__PURE__*/React.createElement("abbr", {
    className: "region"
  }, "NY"), "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    className: "postal-code"
  }, "10001")))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Heading, {
    variant: variant,
    component: component
  }, "Philadelphia"), /*#__PURE__*/React.createElement("address", {
    className: "vcard"
  }, /*#__PURE__*/React.createElement("span", {
    className: "adr"
  }, /*#__PURE__*/React.createElement("span", {
    className: "street-address"
  }, "1100 Ludlow Street"), ",\xA0", /*#__PURE__*/React.createElement("span", {
    className: "extended-address"
  }, "7th Floor"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "locality"
  }, "Philadelphia"), ",\xA0", /*#__PURE__*/React.createElement("abbr", {
    className: "region"
  }, "PA"), "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    className: "postal-code"
  }, "19107")))));
};

var StyledAddresses = styled.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  text-align: left;\n  justify-content: space-between;\n  color: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.primary;
});

export default Addresses;
//# sourceMappingURL=Addresses.js.map

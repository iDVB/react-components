import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import styled from 'styled-components';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var CookieBanner = function CookieBanner() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Banner, null, /*#__PURE__*/React.createElement(BannerContainer, null, /*#__PURE__*/React.createElement(BannerCopy, {
    variant: "body2"
  }, "We use cookies and other tracking technologies to assist with navigation, analyze your use of our services, and assist with our promotional and marketing efforts.", ' ', /*#__PURE__*/React.createElement(BannerTextButton, null, "View cookie options")), /*#__PURE__*/React.createElement(BannerButton, {
    "aria-label": "Accept"
  }, "Accept"))));
};

var Banner = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  color: #ffffff;\n  background-color: #000000;\n  font-size: 12px;\n  transition: all 0.3s;\n  transform: translateY(0);\n  z-index: 9999;\n"])));
var BannerContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 20px;\n\n  @media (min-width: 600px) {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n  }\n\n  @media (min-width: 960px) {\n    margin: 0 7.5%;\n    padding: 20px 0;\n  }\n"])));
var BannerCopy = styled.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0 0 20px 0;\n  padding: 0;\n\n  @media (min-width: 600px) {\n    flex: 1 1 auto;\n    margin: 0 20px 0 0;\n  }\n"])));
var BannerTextButton = styled.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #ffffff;\n  background: none;\n  border: none;\n  text-decoration: underline;\n"])));
var BannerButton = styled.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 20px 10px;\n  font-weight: bold;\n  text-align: center;\n  width: 100%;\n  color: #000000;\n  background-color: #ffffff;\n  border: 1px solid #ffffff;\n  cursor: pointer;\n\n  @media (min-width: 600px) {\n    padding: 10px;\n    flex: 0 0 100px;\n  }\n"])));

export default CookieBanner;
//# sourceMappingURL=CookieBanner.js.map

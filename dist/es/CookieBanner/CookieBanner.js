import { slicedToArray as _slicedToArray, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ThemeProvider, { match } from '../_contexts/Theme.js';
import { P } from '../Typography/Typography.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var CookieBanner = function CookieBanner() {
  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isMounted = _React$useState2[0],
      setIsMounted = _React$useState2[1];

  React.useEffect(function () {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(ThemeProvider, {
    themeType: "onBlack"
  }, /*#__PURE__*/React.createElement(Banner, {
    isClosed: false
  }, /*#__PURE__*/React.createElement(BannerContainer, null, /*#__PURE__*/React.createElement(BannerCopy, {
    variant: "body2"
  }, "We use cookies and other tracking technologies to assist with navigation, analyze your use of our services, and assist with our promotional and marketing efforts.", ' ', /*#__PURE__*/React.createElement(BannerTextButton, null, "View cookie options")), /*#__PURE__*/React.createElement(BannerButton, {
    "aria-label": "Accept"
  }, "Accept")))), document.body);
};

var Banner = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  color: #ffffff;\n  background-color: #000000;\n  font-family: ", ";\n  font-size: 12px;\n  transition: all 0.3s;\n  transform: ", ";\n  z-index: 9999;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.typography.fontFamily;
}, function (_ref2) {
  var isClosed = _ref2.isClosed;
  return isClosed ? 'translateY(500px)' : 'translateY(0)';
});
var BannerContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 20px;\n\n  ", " {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n  }\n\n  ", " {\n    margin: 0 7.5%;\n    padding: 20px 0;\n  }\n"])), match.isSM, match.isMD);
var BannerCopy = styled(P)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0 0 20px 0;\n  padding: 0;\n\n  ", " {\n    flex: 1 1 auto;\n    margin: 0 20px 0 0;\n  }\n"])), match.isSM);
var BannerTextButton = styled.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #ffffff;\n  background: none;\n  border: none;\n  text-decoration: underline;\n"]))); // TODO: use Button from klick react-components package

var BannerButton = styled.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 20px 10px;\n  font-weight: bold;\n  text-align: center;\n  width: 100%;\n  color: #000000;\n  background-color: #ffffff;\n  border: 1px solid #ffffff;\n  cursor: pointer;\n\n  ", " {\n    padding: 10px;\n    flex: 0 0 100px;\n  }\n"])), match.isSM);

export default CookieBanner;
//# sourceMappingURL=CookieBanner.js.map

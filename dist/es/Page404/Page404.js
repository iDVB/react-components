import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ThemeProvider, { match } from '../_contexts/Theme.js';
import Section from '../Section/Section.js';
import { Heading, P } from '../Typography/Typography.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var Page404 = function Page404() {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    themeType: "onWhite"
  }, /*#__PURE__*/React.createElement(ErrorContainer, null, /*#__PURE__*/React.createElement(ErrorContent, null, /*#__PURE__*/React.createElement(StyledHeading, {
    variant: "h1"
  }, "4", /*#__PURE__*/React.createElement("span", null, "0"), "4"), /*#__PURE__*/React.createElement(Circle, null), /*#__PURE__*/React.createElement(Copy, {
    variant: "blurb1"
  }, "There\u2019s nothing different here. ", /*#__PURE__*/React.createElement("br", null), "Get back to something ", /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "different"), "."))));
};

var ErrorContainer = styled(Section)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n"])));
var ErrorContent = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0;\n  padding: 0;\n  width: 80%;\n  text-align: center;\n\n  a {\n    color: ", ";\n    text-decoration: underline;\n  }\n"])), function (props) {
  return props.theme.palette.primary.main;
});
var StyledHeading = styled(Heading)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0 0 50px 0;\n  position: relative;\n  z-index: 2;\n  padding: 0;\n  font-size: 38vw;\n\n  ", " {\n    font-size: 18vw;\n  }\n\n  ", " {\n    font-size: 18vw;\n  }\n\n  > span {\n    visibility: hidden;\n  }\n"])), match.isSM, match.isXL);
var Copy = styled(P)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n\n  ", " {\n    br {\n      display: none;\n    }\n  }\n"])), match.isSM);
var Circle = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  display: block;\n  margin: 0 10px;\n  padding: 0;\n  width: 40vw;\n  height: 40vw;\n  border-radius: 50%;\n  background-color: ", ";\n\n  ", " {\n    margin: 0 20px;\n    width: 20vw;\n    height: 20vw;\n    max-width: 288px;\n    max-height: 288px;\n  }\n"])), function (props) {
  return props.theme.palette.primary.main;
}, match.isSM);

export default Page404;
//# sourceMappingURL=Page404.js.map

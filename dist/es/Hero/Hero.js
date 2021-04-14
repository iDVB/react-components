import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var Hero = function Hero(props) {
  var _props$heading = props.heading,
      heading = _props$heading === void 0 ? 'Put Heading Here' : _props$heading;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overlay, null), /*#__PURE__*/React.createElement(ImgHolder, null, /*#__PURE__*/React.createElement(StyledImg, null)), /*#__PURE__*/React.createElement(Container, {
    maxWidth: "lg"
  }, /*#__PURE__*/React.createElement(Box, {
    position: "relative",
    zIndex: "3",
    minHeight: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(StyledHeading, {
    variant: "h1"
  }, heading))));
};

var StyledHeading = styled.h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 0;\n  color: black;\n  z-index: 2;\n"])));
var ImgHolder = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n"])));
var Overlay = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background: white;\n  z-index: 3;\n  opacity: 0.3;\n"])));
var StyledImg = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 100%;\n"])));

export default Hero;
//# sourceMappingURL=Hero.js.map

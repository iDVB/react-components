import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import styled from 'styled-components';

var _templateObject, _templateObject2, _templateObject3;

var Hero = function Hero(props) {
  var _props$heading = props.heading,
      heading = _props$heading === void 0 ? 'Put Heading Here' : _props$heading;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImgHolder, null, /*#__PURE__*/React.createElement(StyledImg, null)), /*#__PURE__*/React.createElement(StyledHeading, {
    variant: "h1"
  }, heading));
};

var StyledHeading = styled.h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 0;\n  color: black;\n  z-index: 2;\n"])));
var ImgHolder = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n"])));
var StyledImg = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 100%;\n"])));

export default Hero;
//# sourceMappingURL=Hero.js.map

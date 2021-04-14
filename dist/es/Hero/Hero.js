import { objectWithoutProperties as _objectWithoutProperties, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { reduceImages } from '../_common/utils.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var sizeLookup = {
  small: {
    xs: 200,
    md: 250,
    lg: 300
  },
  medium: {
    xs: 300,
    md: 400,
    lg: 500
  },
  large: {
    xs: 400,
    md: 500,
    lg: 600
  }
};
var MAIN_NAV_OFFSET = {
  mobile: '56px',
  desktop: '74px'
};

var Hero = function Hero(props) {
  var imageQuery = props.imageQuery,
      _props$imageFilename = props.imageFilename,
      imageFilename = _props$imageFilename === void 0 ? 'image-filename' : _props$imageFilename,
      _props$objectPosition = props.objectPosition,
      objectPosition = _props$objectPosition === void 0 ? '50% 100%' : _props$objectPosition,
      _props$heading = props.heading,
      heading = _props$heading === void 0 ? 'Put Heading Here' : _props$heading,
      overlay = props.overlay,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      minHeight = props.minHeight;
      _objectWithoutProperties(props, ["imageQuery", "imageFilename", "objectPosition", "heading", "overlay", "size", "minHeight"]);

  var imagesLandscape = reduceImages(imageQuery.landscape.edges);
  var imgSources = imagesLandscape[imageFilename];
  var actualMinHeight = minHeight !== null && minHeight !== void 0 ? minHeight : sizeLookup[size];
  return /*#__PURE__*/React.createElement("div", null, overlay && /*#__PURE__*/React.createElement(Overlay, null), /*#__PURE__*/React.createElement(ImgHolder, null, /*#__PURE__*/React.createElement(StyledImg, {
    image: imgSources,
    objectFit: "cover",
    objectPosition: objectPosition,
    alt: ""
  })), /*#__PURE__*/React.createElement(Container, {
    maxWidth: "lg"
  }, /*#__PURE__*/React.createElement(Box, {
    position: "relative",
    zIndex: "3",
    paddingTop: {
      xs: MAIN_NAV_OFFSET.mobile,
      md: MAIN_NAV_OFFSET.desktop
    },
    minHeight: actualMinHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(StyledHeading, {
    variant: "h1"
  }, heading))));
};

var StyledHeading = styled.h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 0;\n  color: ", ";\n  z-index: 2;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.text.primary;
});
var ImgHolder = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n"])));
var Overlay = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  top: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: ", ";\n  z-index: 3;\n  opacity: 0.3;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.background["default"];
});
var StyledImg = styled(GatsbyImage)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 100%;\n"])));

export default Hero;
//# sourceMappingURL=Hero.js.map

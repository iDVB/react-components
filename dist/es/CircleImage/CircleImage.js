import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { Box } from '@material-ui/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

var _templateObject;

var CircleImage = function CircleImage(_ref) {
  var sources = _ref.sources,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? '' : _ref$alt;
  return /*#__PURE__*/React.createElement(Box, {
    position: "relative",
    pt: "100%"
  }, /*#__PURE__*/React.createElement(ImgContainer, null, /*#__PURE__*/React.createElement(GatsbyImage, {
    image: sources,
    alt: alt
  })));
};

var ImgContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n"])));

export default CircleImage;
//# sourceMappingURL=CircleImage.js.map

import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import styled, { keyframes } from 'styled-components';

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var ScrollIndicator = function ScrollIndicator() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Content, null));
};

var dot = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n0% {\n  transform: scale(.75);\n  opacity: 0;\n}\n25% {\n  transform: scale(1);\n  opacity: 1;\n}\n100% {\n  transform: scale(.75);\n  opacity: 0;\n}\n"])));
var arrow = keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n0% {\n  transform: scale(.75) rotate(45deg);\n  opacity: 0;\n}\n25% {\n  transform: scale(1) rotate(45deg);\n  opacity: 1;\n}\n100% {\n  transform: scale(.75) rotate(45deg);\n  opacity: 0;\n}\n"])));
var Container = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 12px;\n  position: relative;\n  opacity: 1;\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  &::before {\n    width: 12px;\n    height: 12px;\n    border-radius: 10px;\n    border: 1px solid #000000;\n    animation: ", " 1.5s infinite ease-in-out;\n  }\n  &::after {\n    width: 7px;\n    height: 7px;\n    border-right: 1px solid #000000;\n    border-bottom: 1px solid #000000;\n    transform: rotate(45deg);\n    animation: ", " 1.5s infinite ease-in-out;\n    animation-delay: 0.75s;\n    opacity: 1;\n  }\n"])), dot, arrow);
var Content = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: block;\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    margin: 5px auto;\n    border-radius: 10px;\n    border: 1px solid #000000;\n    animation: ", " 1.5s infinite ease-in-out;\n  }\n  &::before {\n    width: 8px;\n    height: 8px;\n    animation-delay: 0.25s;\n  }\n  &::after {\n    width: 6px;\n    height: 6px;\n    animation-delay: 0.5s;\n  }\n"])), dot);

export default ScrollIndicator;
//# sourceMappingURL=ScrollIndicator.js.map

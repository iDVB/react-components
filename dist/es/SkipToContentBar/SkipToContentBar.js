import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../Links/Links.js';

var _templateObject;

var SkipToContentBar = function SkipToContentBar(props) {
  return /*#__PURE__*/React.createElement(StyledSkipToContentBar, props, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ExternalLink, {
    to: "#main-content"
  }, "Skip To Content")));
};

var StyledSkipToContentBar = styled.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #319795;\n  color: #fff;\n  font-weight: 700;\n  left: 50%;\n  top: 0;\n  padding: 4px;\n  position: absolute;\n  z-index: 2000;\n  list-style: none;\n  margin: 0;\n  padding: 10px;\n  transform: translate(-50%, -100%);\n\n  &:focus-within {\n    transform: translate(-50%, 0%);\n  }\n}\n"])));

export default SkipToContentBar;
//# sourceMappingURL=SkipToContentBar.js.map

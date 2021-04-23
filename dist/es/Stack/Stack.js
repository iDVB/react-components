import { objectWithoutProperties as _objectWithoutProperties, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { style } from '@material-ui/system';
import styled from 'styled-components';

var _templateObject;
var marginBottom = style({
  prop: '$spacing',
  cssProperty: 'marginBottom',
  themeKey: 'spacing'
});

var Stack = function Stack(_ref) {
  var _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 'medium' : _ref$spacing,
      rest = _objectWithoutProperties(_ref, ["spacing"]);

  var theme = useTheme();
  return /*#__PURE__*/React.createElement(StyledBox, _extends({
    $spacing: theme.defaults.spacing[spacing] || spacing
  }, rest));
};

var StyledBox = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  & > * {\n    ", "\n  }\n  & > *:last-child {\n    margin-bottom: 0;\n  }\n"])), marginBottom);

export default Stack;
//# sourceMappingURL=Stack.js.map

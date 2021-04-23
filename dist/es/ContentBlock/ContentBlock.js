import { objectWithoutProperties as _objectWithoutProperties } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import Box from '@material-ui/core/Box';
import { Heading, Decorator } from '../Typography/Typography.js';

var ContentBlock = function ContentBlock(_ref) {
  var heading = _ref.heading,
      decorator = _ref.decorator,
      subheading = _ref.subheading,
      content = _ref.content,
      rest = _objectWithoutProperties(_ref, ["heading", "decorator", "subheading", "content"]);

  return /*#__PURE__*/React.createElement(Box, rest, heading && /*#__PURE__*/React.createElement(Heading, {
    variant: "h2"
  }, heading), decorator && /*#__PURE__*/React.createElement(Decorator, null), subheading && /*#__PURE__*/React.createElement(Heading, {
    variant: "h4",
    component: "p"
  }, subheading), content);
};

export default ContentBlock;
//# sourceMappingURL=ContentBlock.js.map

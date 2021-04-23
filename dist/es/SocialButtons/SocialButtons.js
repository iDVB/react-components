import { objectWithoutProperties as _objectWithoutProperties, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { IconButton } from '@material-ui/core';
import { LinkedIn, Twitter, Facebook, Instagram, YouTube } from '@material-ui/icons';
import styled from 'styled-components';
import { match } from '../_contexts/Theme.js';
import { ExternalLink } from '../Links/Links.js';

var _templateObject;
var DEFAULT_SOCIAL_BUTTONS = [{
  label: 'LinkedIn',
  icon: LinkedIn,
  href: 'https://www.linkedin.com/company/klick-health'
}, {
  label: 'Twitter',
  icon: Twitter,
  href: 'https://twitter.com/klickhealth'
}, {
  label: 'Facebook',
  icon: Facebook,
  href: 'https://www.facebook.com/KlickHealth'
}, {
  label: 'Instagram',
  icon: Instagram,
  href: 'https://www.instagram.com/klick.health'
}, {
  label: 'YouTube',
  icon: YouTube,
  href: 'https://www.youtube.com/KlickHealth'
}];
var GROUP_LABEL = 'Follow us on';

var SocialButtons = function SocialButtons(_ref) {
  var _ref$buttons = _ref.buttons,
      buttons = _ref$buttons === void 0 ? DEFAULT_SOCIAL_BUTTONS : _ref$buttons,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      _ref$groupLabel = _ref.groupLabel,
      groupLabel = _ref$groupLabel === void 0 ? GROUP_LABEL : _ref$groupLabel,
      rest = _objectWithoutProperties(_ref, ["buttons", "color", "groupLabel"]);

  return /*#__PURE__*/React.createElement(StyledSocialButtons, rest, groupLabel && /*#__PURE__*/React.createElement("span", null, groupLabel), buttons.map(function (_ref2, index) {
    var Icon = _ref2.icon,
        href = _ref2.href,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(IconButton, {
      key: index,
      component: ExternalLink,
      role: "link",
      target: "_blank",
      href: href,
      color: color,
      "aria-label": "".concat(groupLabel || GROUP_LABEL, " ").concat(label)
    }, /*#__PURE__*/React.createElement(Icon, null));
  }));
};

var StyledSocialButtons = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  white-space: nowrap;\n  margin-top: 5rem;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  & > span {\n    display: block;\n    position: relative;\n    width: 100%;\n    left: 0.875rem;\n    font-weight: 700;\n  }\n\n  & svg {\n    font-size: 2.0875rem;\n  }\n\n  ", " {\n    display: block;\n    margin-top: 0;\n    right: -0.875rem;\n    top: 0.675rem;\n\n    & > span {\n      display: inline;\n      width: auto;\n      left: auto;\n    }\n\n    & > a {\n      margin-left: 1rem;\n\n      & svg {\n        font-size: inherit;\n      }\n    }\n  }\n"])), match.isSM);

export default SocialButtons;
//# sourceMappingURL=SocialButtons.js.map

import { objectWithoutProperties as _objectWithoutProperties, taggedTemplateLiteral as _taggedTemplateLiteral, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef } from 'react';
import { useTheme, Box, Container, fade } from '@material-ui/core';
import styled from 'styled-components';
import { tracking } from '../_common/tracking.js';
import { useConsentContext } from '../_contexts/Consent.js';
import ThemeProvider, { match } from '../_contexts/Theme.js';
import Addresses from '../Addresses/Addresses.js';
import Copyright from '../Copyright/Copyright.js';
import { ExternalLink, TextLink, InternalLink } from '../Links/Links.js';
import Lockup from '../Lockup/Lockup.js';
import SocialButtons from '../SocialButtons/SocialButtons.js';
import { Heading } from '../Typography/Typography.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

var trackFooterClick = function trackFooterClick(_ref) {
  var label = _ref.label;
  tracking.track('Footer Item Clicked', {
    category: 'Page Interactions',
    action: 'Footer Click',
    label: label
  });
};

var DEFAULT_FOOTER_ITEMS = [{
  label: 'Discover Klick',
  items: [{
    label: 'Klick Health',
    to: 'https://www.klick.com',
    kind: 'link'
  }, {
    label: 'Klick Katalyst',
    to: 'https://katalyst.klick.com',
    kind: 'link'
  }, {
    label: 'Klick Consulting',
    to: 'https://consulting.klick.com',
    kind: 'link'
  }, {
    label: 'Klick Ideas Exchange',
    to: 'https://idx.klick.com',
    kind: 'link'
  }, {
    label: 'Careers @ Klick',
    to: 'https://careers.klick.com',
    kind: 'link'
  }]
}, {
  label: '',
  items: [{
    label: 'Contact Us',
    to: '/contact',
    component: InternalLink,
    kind: 'link'
  }, {
    label: 'Newsletter',
    to: 'https://www.klick.com/klickwire',
    kind: 'link'
  }, {
    label: 'Newsroom',
    to: 'https://www.klick.com/health/announcements',
    kind: 'link'
  }, {
    label: 'Privacy Policy',
    to: 'https://www.klick.com/privacy',
    kind: 'link'
  }, {
    label: 'Cookie Settings',
    onClick: 'showCookiesModal',
    kind: 'button',
    component: 'button'
  }]
}];

var Footer = function Footer(props) {
  var _props$itemsList = props.itemsList,
      itemsList = _props$itemsList === void 0 ? DEFAULT_FOOTER_ITEMS : _props$itemsList,
      _props$divider = props.divider,
      divider = _props$divider === void 0 ? true : _props$divider;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    themeType: "onBlack"
  }, divider && /*#__PURE__*/React.createElement(StyledContainer, null, /*#__PURE__*/React.createElement(Box, {
    position: "relative"
  }, /*#__PURE__*/React.createElement(LineDivider, null))), /*#__PURE__*/React.createElement(StyledFooter, {
    component: "footer"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Box, {
    display: {
      xs: 'block',
      sm: 'flex'
    },
    flexDirection: "row",
    flexWrap: "wrap",
    py: theme.defaults.spacing.medium
  }, /*#__PURE__*/React.createElement(Box, {
    width: "100%",
    pb: 10
  }, /*#__PURE__*/React.createElement(Lockup, {
    to: "/",
    label: "Homepage",
    onClick: function onClick() {
      trackFooterClick({
        label: 'Logo'
      });
    }
  })), /*#__PURE__*/React.createElement(StyledAddresses, null), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, /*#__PURE__*/React.createElement(FooterItemsList, {
    items: itemsList
  }), /*#__PURE__*/React.createElement(SocialButtons, null)), /*#__PURE__*/React.createElement(Box, {
    width: "100%",
    mt: 10,
    pt: 2,
    borderTop: 1,
    borderColor: "text.primary"
  }, /*#__PURE__*/React.createElement(Copyright, null))))));
};

var FooterItemsList = function FooterItemsList(_ref2) {
  var items = _ref2.items,
      rest = _objectWithoutProperties(_ref2, ["items"]);

  var _useConsentContext = useConsentContext(),
      showCookiesModal = _useConsentContext.showCookiesModal;

  var onClickActionsMap = {
    showCookiesModal: showCookiesModal
  };

  var subItems = function subItems(_subItems, component, altColor) {
    return /*#__PURE__*/React.createElement("ul", null, _subItems.map(function (item, index) {
      var onClickFn = onClickActionsMap[item.onClick] || item.onClick || noop;

      var handleClick = function handleClick() {
        onClickFn();
        trackFooterClick({
          label: item.ariaLabel || item.label
        });
      };

      var linkLookup = {
        link: /*#__PURE__*/React.createElement(StyledLink, {
          underline: "hover",
          component: component || item.component || ExternalLink,
          to: item.to,
          "aria-label": item.ariaLabel || item.label,
          altColor: altColor,
          onClick: handleClick,
          children: item.label
        }),
        button: /*#__PURE__*/React.createElement(StyledLink, {
          underline: "hover",
          "aria-label": item.ariaLabel || item.label,
          component: component || item.component || ExternalLink,
          altColor: altColor,
          onClick: handleClick,
          variant: "body1"
        }, item.label),
        label: item.label
      };
      return /*#__PURE__*/React.createElement("li", {
        key: index
      }, linkLookup[item.kind]);
    }));
  };

  return /*#__PURE__*/React.createElement(LinkGroupBox, rest, items.map(function (item, index) {
    var altColor = index > 0;
    var label = item.label;
    var headLink = item.to ? /*#__PURE__*/React.createElement(StyledLink, {
      to: item.to,
      underline: "hover",
      component: item.component || ExternalLink,
      ariaLabel: item.ariaLabel || item.label,
      onClick: item.onClick || function () {
        trackFooterClick({
          label: label
        });
      },
      children: label
    }) : /*#__PURE__*/React.createElement(Heading, {
      variant: "h5",
      component: "span"
    }, label);
    return /*#__PURE__*/React.createElement(Box, {
      key: index
    }, label && headLink, subItems(item.items, item.component, altColor));
  }));
};

var noop = function noop() {};

var LinkGroupBox = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 5rem;\n  ", " {\n    padding-left: 0.875rem;\n    margin-top: 0;\n  }\n\n  & > div:last-child {\n    margin-top: 2rem;\n    padding-top: 2rem;\n    border-top: ", " 1px\n      solid;\n  }\n  & ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n\n    ", " {\n      column-count: 2;\n    }\n  }\n\n  & ", " {\n    color: ", ";\n  }\n"])), match.isSM, function (_ref3) {
  var theme = _ref3.theme;
  return fade(theme.palette.text.primary, 0.3);
}, match.isSM, Heading, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.main;
});
var StyledAddresses = styled(Addresses)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  flex-grow: 1;\n  line-height: 1.8rem;\n\n  & address {\n    font-style: normal;\n  }\n  & .extended-address {\n    display: block;\n    ", " {\n      display: inline;\n    }\n  }\n  & br {\n    display: none;\n    ", " {\n      display: inline;\n    }\n  }\n  & > li {\n    display: block;\n    margin-bottom: 2rem;\n\n    ", " {\n      margin-bottom: 3.2rem;\n    }\n\n    &:last-child {\n      margin: 0;\n    }\n  }\n  & ", " {\n    color: ", ";\n  }\n"])), match.isMD, match.isMD, match.isMD, Heading, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.primary.main;
});
var StyledFooter = styled(Box)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 5;\n  font-size: 1rem;\n  line-height: 2rem;\n  color: ", ";\n  background-color: ", ";\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.text.primary;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.background["default"];
});
var StyledContainer = styled(Container)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var LineDivider = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  border-bottom: 1px solid\n    ", ";\n  position: absolute;\n  top: -1px;\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return fade(theme.palette.text.primary, 0.15);
});
var WrappedLink = /*#__PURE__*/forwardRef(function (_ref9, ref) {
  _ref9.altColor;
      var props = _objectWithoutProperties(_ref9, ["altColor"]);

  return /*#__PURE__*/React.createElement(TextLink, _extends({
    ref: ref
  }, props));
});
var StyledLink = styled(WrappedLink)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref10) {
  var theme = _ref10.theme,
      altColor = _ref10.altColor;
  return altColor ? fade(theme.palette.text.primary, 0.5) : theme.palette.text.primary;
});

export default Footer;
//# sourceMappingURL=Footer.js.map

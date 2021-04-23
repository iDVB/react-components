import { slicedToArray as _slicedToArray, objectWithoutProperties as _objectWithoutProperties, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState, useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { useMediaQuery, Box, Fade, AppBar, Container, Toolbar, Tabs, Tab, fade } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { MoreVert, Cancel } from '@material-ui/icons';
import { disableBodyScroll, enableBodyScroll } from '../node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js';
import styled from 'styled-components';
import { tracking } from '../_common/tracking.js';
import ThemeProvider, { match, brandColors } from '../_contexts/Theme.js';
import { InternalLink, ExternalLink, TextLink } from '../Links/Links.js';
import { P, Heading } from '../Typography/Typography.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

var track = function track(_ref) {
  var id = _ref.id,
      dcCode = _ref.dcCode;
  tracking.track('Top Nav Item Clicked', {
    category: 'Page Interactions',
    action: 'Top Nav Click',
    label: id,
    dcCode: dcCode
  });
};

var DEFAULT_TABS = [{
  label: 'Klick Health',
  shortLabel: 'Health',
  to: 'https://www.klick.com'
}, {
  label: 'Klick Consulting',
  shortLabel: 'Consulting',
  to: 'https://consulting.klick.com'
}];
var DEFAULT_LINKS = [{
  links: [{
    label: 'Klick Health',
    to: 'https://www.klick.com',
    brandColor: brandColors.klick
  }, {
    label: 'Klick Katalyst',
    to: 'https://katalyst.klick.com',
    brandColor: brandColors.katalyst
  }, {
    label: 'Klick Consulting',
    to: 'https://consulting.klick.com',
    brandColor: brandColors.consulting
  }, {
    label: 'Klick Applied Sciences',
    to: 'https://appliedsciences.klick.com',
    brandColor: brandColors.appliedsciences
  }, {
    label: 'Klick Ventures',
    to: 'https://ventures.klick.com',
    brandColor: brandColors.ventures
  }, {
    label: 'Klick Ideas Exchange',
    to: 'https://idx.klick.com'
  }, {
    label: 'Sensei Labs',
    to: 'https://www.senseilabs.com',
    brandColor: brandColors.sensei
  }]
}, {
  links: [{
    label: 'Careers @ Klick',
    to: 'https://careers.klick.com'
  }]
}];

var EyebrowBar = function EyebrowBar(_ref2) {
  var tabs = _ref2.tabs;
      _ref2.links;
      var selectedTabIndex = _ref2.selectedTabIndex;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  var fatBarRef = useRef();
  useIsomorphicLayoutEffect(function () {
    if (!fatBarRef.current) return;
    var fatBar = fatBarRef.current;

    if (isOpen) {
      disableBodyScroll(fatBar);
    } else {
      enableBodyScroll(fatBar);
    }
  }, [isOpen]);

  var handleOpen = function handleOpen() {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/React.createElement(ThemeProvider, {
    themeType: "onBlack"
  }, /*#__PURE__*/React.createElement(StyledAppBar, {
    elevation: 0,
    position: "relative",
    color: "transparent"
  }, /*#__PURE__*/React.createElement(Box, {
    bgcolor: "background.default",
    color: "text.primary",
    zIndex: 2
  }, /*#__PURE__*/React.createElement(TabContainer, null, /*#__PURE__*/React.createElement(StyledToolbar, {
    variant: "dense",
    disableGutters: true
  }, /*#__PURE__*/React.createElement(StyledTabs, {
    value: selectedTabIndex,
    component: "nav",
    "aria-label": "Tab navigation between Klick Web Properties",
    variant: isMobile ? 'fullWidth' : 'standard'
  }, tabs.map(function (_ref3, index) {
    var shortLabel = _ref3.shortLabel,
        label = _ref3.label,
        dcCode = _ref3.dcCode,
        to = _ref3.to,
        rest = _objectWithoutProperties(_ref3, ["shortLabel", "label", "dcCode", "to"]);

    return /*#__PURE__*/React.createElement(StyledTab, _extends({
      tabIndex: 0,
      key: index,
      label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MobileOnly, null, shortLabel || label), /*#__PURE__*/React.createElement(DesktopOnly, null, label)),
      to: index === selectedTabIndex ? '/' : to,
      component: index === selectedTabIndex ? InternalLink : ExternalLink
    }, rest, {
      onClick: function onClick() {
        track({
          id: label,
          dcCode: dcCode
        });
      }
    }));
  }), /*#__PURE__*/React.createElement(CloseTab, {
    tabIndex: 0,
    label: !isOpen ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MobileOnly, null, /*#__PURE__*/React.createElement(MoreVert, {
      fontSize: "small"
    }), "Group"), /*#__PURE__*/React.createElement(DesktopOnly, null, /*#__PURE__*/React.createElement(MoreVert, {
      fontSize: "small"
    }), "Klick Group")) : /*#__PURE__*/React.createElement(Cancel, {
      fontSize: "large"
    }),
    onClick: handleOpen
  }))))), /*#__PURE__*/React.createElement(Fade, {
    "in": isOpen
  }, /*#__PURE__*/React.createElement(FatBar, {
    ref: fatBarRef
  }, /*#__PURE__*/React.createElement(FatBarContent, null, /*#__PURE__*/React.createElement(StyledContainer, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "400px"
  }, /*#__PURE__*/React.createElement(StyledHeading, {
    component: "div",
    variant: "h4",
    font: "primary"
  }, "Klick", /*#__PURE__*/React.createElement("br", null), " Group"), /*#__PURE__*/React.createElement(P, {
    paragraph: false
  }, "The Klick Group of companies is an ecosystem of brilliant minds working to realize the full potential of their people and clients since\xA01997.")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(LinkGroup, {
    links: DEFAULT_LINKS
  }))), /*#__PURE__*/React.createElement(FatBarOverlay, {
    onClick: handleOpen
  })))));
};

var StyledAppBar = styled(AppBar)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  z-index: 1200;\n"])));
var TabContainer = styled(Container)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", " {\n    padding: 0;\n  }\n"])), match.isXS);
var minHeight = '40px';
var StyledToolbar = styled(Toolbar)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  min-height: ", ";\n  display: block;\n\n  ", " {\n    display: flex;\n    justify-content: flex-end;\n  }\n"])), minHeight, match.isSM);
var StyledTabs = styled(function (props) {
  return /*#__PURE__*/React.createElement(Tabs, _extends({
    classes: {
      indicator: 'MuiTabs-indicator'
    }
  }, props));
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  min-height: ", ";\n  & .MuiTabs-indicator {\n    height: 5px;\n    background-color: ", ";\n  }\n"])), minHeight, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.main;
});
var StyledTab = styled(Tab)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: ", ";\n\n  ", " {\n    flex: 1 1 0;\n    max-width: none;\n  }\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.pxToRem(12);
}, match.isXS);
var CloseTab = styled(StyledTab)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background: ", ";\n\n  ", " {\n    flex: 1 1 0;\n    max-width: none;\n  }\n\n  & > span:first-child > span {\n    padding-right: 8px;\n  }\n\n  & > span:first-child > span > svg {\n    margin-right: 8px;\n  }\n\n  ", " {\n    min-width: 150px;\n  }\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.grey[700];
}, match.isXS, match.isSM);
var FatBar = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  padding-top: 48px;\n  top: 0;\n  left: 0;\n  width: 100%;\n\n  &[style*='opacity: 0'] {\n    //no pointer-events when faded out\n    pointer-events: none;\n  }\n"])));
var FatBarContent = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background: ", ";\n  height: 100vh;\n  overflow: auto;\n\n  ", " {\n    height: auto;\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.grey[900];
}, match.isSM);
var FatBarOverlay = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  position: absolute;\n  z-index: -1;\n"])));
var StyledContainer = styled(Container)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  padding-top: 1.8rem;\n  padding-bottom: 1.8rem;\n\n  ", " {\n    padding-top: 3.7rem;\n    padding-bottom: 3.7rem;\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"])), match.isMD);
var StyledHeading = styled(Heading)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin-bottom: 1rem;\n  & br {\n    display: none;\n  }\n\n  ", " {\n    & br {\n      display: inherit;\n    }\n  }\n"])), match.isSM);
var Divider = styled.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  background: ", ";\n  margin: 1.5rem 0;\n  height: 1px;\n\n  ", " {\n    width: 1px;\n    margin: 0 1.5rem;\n    height: auto;\n    align-self: stretch;\n  }\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return fade(theme.palette.text.primary, 0.3);
}, match.isMD);
var StyledLink = styled(TextLink)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  color: #fff;\n  text-decoration: none;\n  display: inline-block;\n  padding: 0.4em 1em;\n  margin-left: -1em;\n  position: relative;\n  z-index: 1;\n  font-size: 1rem;\n  transition: color 0.3s ease-out;\n  ", "\n\n  ", " {\n    white-space: nowrap;\n    font-size: 1.3rem;\n  }\n\n  ", " {\n    margin-left: 0;\n  }\n\n  &:before {\n    display: block;\n    content: ' ';\n    background: ", ";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    transform: scaleX(0);\n    transform-origin: left;\n    transition: transform 0.3s ease-out;\n  }\n\n  &:hover,\n  &:focus {\n    color: ", ";\n  }\n\n  &:hover:before,\n  &:focus:before {\n    transform: scaleX(0.99);\n  }\n"])), function (_ref9) {
  var $isAltSection = _ref9.$isAltSection;
  return $isAltSection && "font-weight: 700;";
}, match.isSM, match.isMD, function (_ref10) {
  var $brandColor = _ref10.$brandColor;
  return $brandColor || '#fff';
}, function (_ref11) {
  var $brandColor = _ref11.$brandColor;
  return !$brandColor ? '#000' : 'inherit';
});

var LinkGroup = function LinkGroup(_ref12) {
  var links = _ref12.links,
      rest = _objectWithoutProperties(_ref12, ["links"]);

  var subLinks = function subLinks(_subLinks, component, isAltSection) {
    return /*#__PURE__*/React.createElement("ul", null, _subLinks.map(function (link, index) {
      return /*#__PURE__*/React.createElement("li", {
        key: index
      }, link.to ? /*#__PURE__*/React.createElement(StyledLink, {
        component: component || link.component || ExternalLink,
        to: link.to,
        "aria-label": link.ariaLabel || link.label,
        $isAltSection: isAltSection,
        $brandColor: link.brandColor,
        onClick: link.onClick || function () {
          track({
            label: link.ariaLabel || link.label
          });
        },
        children: link.label
      }) : link.label);
    }));
  };

  return /*#__PURE__*/React.createElement(LinkGroupBox, rest, links.map(function (link, index) {
    var isAltSection = index > 0;
    var label = link.label;
    return /*#__PURE__*/React.createElement(Box, {
      key: index
    }, label, subLinks(link.links, link.component, isAltSection));
  }));
};

var LinkGroupBox = styled.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  & > div:last-child {\n    margin-top: 2rem;\n  }\n  & ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    column-count: 2;\n  }\n"])));
var MobileOnly = styled.span(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  ", " {\n    display: none;\n  }\n"])), match.isSM);
var DesktopOnly = styled.span(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: none;\n  ", " {\n    display: flex;\n  }\n"])), match.isSM);
EyebrowBar.defaultProps = {
  tabs: DEFAULT_TABS,
  links: DEFAULT_LINKS,
  selectedTabIndex: false
};

export default EyebrowBar;
//# sourceMappingURL=EyebrowBar.js.map

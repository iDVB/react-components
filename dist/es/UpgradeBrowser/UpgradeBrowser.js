import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { Container, Box } from '@material-ui/core';
import styled from 'styled-components';
import ThemeProvider from '../_contexts/Theme.js';
import KlickLogo from '../KlickLogo/KlickLogo.js';
import { ExternalLink, TextLink } from '../Links/Links.js';
import Section from '../Section/Section.js';
import { Heading, P } from '../Typography/Typography.js';
import chrome from './images/chrome-logo.svg.js';
import edge from './images/edge-logo.png.js';
import firefox from './images/firefox-logo.png.js';
import safari from './images/safari-logo.png.js';

var _templateObject, _templateObject2, _templateObject3;
// code requiring transpilation as it will be included pre-transpilation.

var UpgradeBrowserScript = function UpgradeBrowserScript() {
  return /*#__PURE__*/React.createElement("script", {
    id: "upgrade-browser-script",
    dangerouslySetInnerHTML: {
      __html: "(".concat(function () {
        var isIntersectionObserverSupported = function isIntersectionObserverSupported() {
          return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype;
        };

        var targetURI = '/upgrade-browser';
        var isTargetPath = window.location.pathname.indexOf(targetURI) !== -1;

        if (!isIntersectionObserverSupported() && !isTargetPath) {
          window.location.replace(targetURI);
        }
      }, ")()")
    }
  });
};
var browsers = [{
  link: 'https://www.google.com/chrome/',
  label: 'Chrome',
  logo: chrome
}, {
  link: 'https://www.microsoft.com/en-us/edge',
  label: 'Edge',
  logo: edge
}, {
  link: 'https://www.mozilla.org/en-US/firefox/new/',
  label: 'Firefox',
  logo: firefox
}, {
  link: 'https://support.apple.com/downloads/safari',
  label: 'Safari',
  logo: safari
}];
var UpgradeBrowserPage = function UpgradeBrowserPage() {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    themeType: "onWhite"
  }, /*#__PURE__*/React.createElement(Section, {
    name: "Upgrade Browser",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }, /*#__PURE__*/React.createElement(Container, {
    maxWidth: "md"
  }, /*#__PURE__*/React.createElement(StyledKlickLogo, null), /*#__PURE__*/React.createElement(Heading, {
    variant: "h3",
    component: "h1"
  }, "Your browser is not supported."), /*#__PURE__*/React.createElement(P, {
    variant: "blurb2"
  }, "As a future forward company with strong digital roots, we pride ourselves on building experiences online that truly stand out. To ensure the best experience for our visitors, we have made the decision to no longer support legacy browsers."), /*#__PURE__*/React.createElement(P, {
    variant: "blurb2"
  }, "We encourage you to enjoy this website to the fullest by updating your browser or downloading one of the following browsers:"), /*#__PURE__*/React.createElement(Box, {
    pt: 2
  }, browsers.map(function (_ref) {
    var link = _ref.link,
        logo = _ref.logo,
        label = _ref.label;
    return /*#__PURE__*/React.createElement(StyledLogo, {
      key: link
    }, /*#__PURE__*/React.createElement(ExternalLink, {
      href: link
    }, /*#__PURE__*/React.createElement("img", {
      height: "48",
      width: "48",
      src: logo,
      alt: label
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(P, {
      variant: "body1"
    }, /*#__PURE__*/React.createElement(StyledLink, {
      href: link,
      component: ExternalLink
    }, label)));
  })))));
};
var StyledKlickLogo = styled(KlickLogo)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 130px;\n  display: inline-block;\n  margin: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return "0 0 ".concat(theme.spacing(3), "px 0");
});
var StyledLogo = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding-right: 24px;\n\n  &:last-child {\n    padding-right: 0;\n  }\n"])));
var StyledLink = styled(TextLink)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.text.primary;
});

export { UpgradeBrowserPage, UpgradeBrowserScript };
//# sourceMappingURL=UpgradeBrowser.js.map

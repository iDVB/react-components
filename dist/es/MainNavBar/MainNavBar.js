import { taggedTemplateLiteral as _taggedTemplateLiteral, extends as _extends, slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { useRef, useEffect } from 'react';
import { AppBar, fade, Container, Toolbar, Box } from '@material-ui/core';
import { Location } from '@reach/router';
import styled from 'styled-components';
import { tracking } from '../_common/tracking.js';
import ThemeProvider, { match } from '../_contexts/Theme.js';
import useIntersect from '../_hooks/useIntersect.js';
import Button from '../Button/Button.js';
import HamburgerNav from '../HamburgerNav/HamburgerNav.js';
import KlickLogo from '../KlickLogo/KlickLogo.js';
import { InternalLink } from '../Links/Links.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var BaseMainNavBar = function BaseMainNavBar(_ref) {
  var defaultTheme = _ref.defaultTheme,
      location = _ref.location,
      pathThemes = _ref.pathThemes,
      links = _ref.links;
  var intersectionRef = useRef();

  var _useIntersect = useIntersect({
    rootMargin: '0px 0px 0px'
  }),
      _useIntersect2 = _slicedToArray(_useIntersect, 2),
      setNode = _useIntersect2[0],
      entry = _useIntersect2[1];

  useEffect(function () {
    setNode(intersectionRef.current);
  }, [setNode]);
  var isSticky = !!entry.boundingClientRect && entry.boundingClientRect.top <= 0 && !entry.isIntersecting;
  var isSingleButton = links.length === 1;
  var pathTheme = getPathTheme(location.pathname, pathThemes);
  var currentTheme = isSticky ? 'onBlack' : pathTheme.type || defaultTheme;
  var initBgFade = pathTheme.initBgFade;
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    themeType: currentTheme
  }, /*#__PURE__*/React.createElement("div", {
    ref: intersectionRef
  }), /*#__PURE__*/React.createElement(StyledAppBar, {
    elevation: 0,
    position: "sticky",
    sticky: isSticky ? 1 : 0,
    component: "nav",
    $isSticky: isSticky,
    $initBgFade: initBgFade
  }, /*#__PURE__*/React.createElement(BaseMainNavBarContent, {
    isSingleButton: isSingleButton,
    location: location,
    links: links
  })));
};

var MainNavBarButtons = function MainNavBarButtons(_ref2) {
  var links = _ref2.links,
      location = _ref2.location,
      isSingleButton = _ref2.isSingleButton;
  return /*#__PURE__*/React.createElement(React.Fragment, null, links.map(function (link, index) {
    var isButton = link.type === 'button';
    var isCurrentPage = getIsCurrentPage({
      link: link,
      location: location
    });
    return /*#__PURE__*/React.createElement(StyledButton, _extends({
      key: index,
      component: link.component || InternalLink,
      size: "large",
      variant: isButton ? 'contained' : 'text',
      color: isButton ? 'primary' : 'default',
      to: link.to,
      disableElevation: isButton,
      $isCurrentPage: isCurrentPage,
      $isSingleButton: isSingleButton,
      onClick: function onClick() {
        track({
          id: link.label,
          dcCode: link.dcCode
        });
      }
    }, link.props), link.label);
  }));
};

var BaseMainNavBarContent = /*#__PURE__*/React.memo(function (_ref3) {
  var links = _ref3.links,
      isSingleButton = _ref3.isSingleButton,
      location = _ref3.location;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Toolbar, {
    disableGutters: true
  }, /*#__PURE__*/React.createElement(InternalLink, {
    to: "/",
    "aria-label": "Homepage",
    onClick: function onClick() {
      track({
        id: 'Logo'
      });
    }
  }, /*#__PURE__*/React.createElement(StyledKlickLogo, {
    orientation: "landscape"
  })), /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1
  }), /*#__PURE__*/React.createElement(MainNavBarButtons, {
    isSingleButton: isSingleButton,
    links: links,
    location: location
  }), /*#__PURE__*/React.createElement(StyledHamburgerNav, {
    links: links,
    $isSingleButton: isSingleButton
  })));
});

var track = function track(_ref4) {
  var id = _ref4.id,
      dcCode = _ref4.dcCode;
  tracking.track('Header Nav Item Clicked', {
    category: 'Page Interactions',
    action: 'Header Nav Click',
    label: id,
    dcCode: dcCode
  });
};

var normalPathname = function normalPathname(pathname) {
  return pathname === '/' ? pathname : pathname === null || pathname === void 0 ? void 0 : pathname.replace(/\/$/, '');
};

var getPathTheme = function getPathTheme(pathname, pathThemes) {
  var themeKey = Object.keys(pathThemes).find(function (key) {
    var npath = normalPathname(pathname);
    return npath === key || (npath === null || npath === void 0 ? void 0 : npath.indexOf(key)) === 0 && key !== '/';
  });
  return themeKey ? pathThemes[themeKey] : false;
};

function getIsCurrentPage(_ref5) {
  var _link$to, _location$pathname;

  var link = _ref5.link,
      location = _ref5.location;
  return ((_link$to = link.to) === null || _link$to === void 0 ? void 0 : _link$to.replace(/\//g, '')) === ((_location$pathname = location.pathname) === null || _location$pathname === void 0 ? void 0 : _location$pathname.replace(/\//g, ''));
}

var StyledAppBar = styled(AppBar)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  transition: background-color 0.5s ease-in;\n  margin-bottom: -58px;\n  position: relative; // IE11 fallback\n  position: sticky;\n\n  ", " {\n    margin-bottom: -64px;\n  }\n  ", " {\n    margin-bottom: -82px;\n  }\n"])), function (_ref6) {
  var $isSticky = _ref6.$isSticky,
      $initBgFade = _ref6.$initBgFade,
      theme = _ref6.theme;
  return $isSticky ? '#000' : $initBgFade ? fade(theme.palette.background["default"], $initBgFade) : 'transparent';
}, match.isSM, match.isMD);
var StyledButton = styled(Button)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: ", ";\n  margin: ", ";\n\n  ", "\n\n  &:last-of-type {\n    margin: 0;\n  }\n\n  ", " {\n    display: inline-flex;\n  }\n\n  &.MuiButton-sizeLarge,\n  &[class*='MuiButton-sizeLarge-'] {\n    ", "\n  }\n"])), function (_ref7) {
  var $isSingleButton = _ref7.$isSingleButton;
  return $isSingleButton ? 'inline-flex' : 'none';
}, function (_ref8) {
  var theme = _ref8.theme;
  return "0 ".concat(theme.spacing(3), "px 0 0");
}, function (_ref9) {
  var theme = _ref9.theme,
      variant = _ref9.variant,
      $isCurrentPage = _ref9.$isCurrentPage;
  return $isCurrentPage && variant === 'text' && "border-bottom: 3px solid ".concat(theme.palette.primary.main, ";");
}, match.isMD, function (_ref10) {
  var $isSingleButton = _ref10.$isSingleButton;
  return $isSingleButton && "padding: 16px 24px;";
});
var StyledHamburgerNav = styled(HamburgerNav)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: ", ";\n  ", " {\n    display: none;\n  }\n"])), function (_ref11) {
  var $isSingleButton = _ref11.$isSingleButton;
  return $isSingleButton ? 'none' : 'flex';
}, match.isMD);
var StyledKlickLogo = styled(KlickLogo)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 40px;\n  ", " {\n    margin: ", ";\n    height: 58px;\n  }\n"])), match.isMD, function (_ref12) {
  var theme = _ref12.theme;
  return "".concat(theme.spacing(1), "px 0");
});

var MainNavBar = function MainNavBar(_ref13) {
  var props = _extends({}, _ref13);

  return /*#__PURE__*/React.createElement(Location, null, function (_ref14) {
    var location = _ref14.location;
    return /*#__PURE__*/React.createElement(BaseMainNavBar, _extends({
      location: location
    }, props));
  });
};

MainNavBar.defaultProps = {
  pathThemes: [],
  defaultTheme: 'onWhite',
  links: [{
    label: 'Get in touch',
    to: '/contact',
    type: 'button'
  }]
};

export default MainNavBar;
//# sourceMappingURL=MainNavBar.js.map

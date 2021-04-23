import { defineProperty as _defineProperty, objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState, useRef, useEffect } from 'react';
import { IconButton, Portal, Container, Box, Toolbar, MenuList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { Menu, Close } from '@material-ui/icons';
import { disableBodyScroll, enableBodyScroll } from '../node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js';
import ThemeProvider from '../_contexts/Theme.js';
import Copyright from '../Copyright/Copyright.js';
import KlickLogo from '../KlickLogo/KlickLogo.js';
import { InternalLink } from '../Links/Links.js';
import MenuItemLink from '../MenuItemLink/MenuItemLink.js';
import SocialButtons from '../SocialButtons/SocialButtons.js';

var isBuilding = typeof document === "undefined";
var portal = !isBuilding && document.getElementById('gatsby-portal');
var el = !isBuilding && document.createElement('div');

var HamburgerNav = function HamburgerNav(_ref) {
  var links = _ref.links,
      rest = _objectWithoutProperties(_ref, ["links"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var classes = useStyles({
    isOpen: isOpen
  });
  var menuRef = useRef();
  useEffect(function () {
    portal && portal.appendChild(el);
    return function () {
      portal && portal.removeChild(el);
    };
  }, []);
  useEffect(function () {
    var menu = menuRef.current;
    if (!menu) return;
    isOpen ? disableBodyScroll(menu) : enableBodyScroll(menu);
    return function () {
      enableBodyScroll(menu);
    };
  }, [isOpen]);

  var toggleNav = function toggleNav() {
    setIsOpen(!isOpen);
  };

  var linkHTML = links.map(function (_ref2, index) {
    _ref2.hash;
        var label = _ref2.label,
        to = _ref2.to;
    return /*#__PURE__*/React.createElement(MenuItemLink, {
      key: index,
      className: classes.menuListItem,
      to: to,
      onClick: toggleNav
    }, label);
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes.root
  }, rest), /*#__PURE__*/React.createElement(IconButton, {
    className: classes.hamburger,
    onClick: toggleNav,
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement(Menu, null)), portal && /*#__PURE__*/React.createElement(Portal, {
    container: el
  }, isOpen && /*#__PURE__*/React.createElement(ThemeProvider, {
    themeType: "onPrimary"
  }, /*#__PURE__*/React.createElement(Container, {
    className: classes.menu,
    ref: menuRef
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
  }, /*#__PURE__*/React.createElement(Toolbar, {
    disableGutters: true
  }, /*#__PURE__*/React.createElement(InternalLink, {
    to: "/",
    "aria-label": "Homepage"
  }, /*#__PURE__*/React.createElement(KlickLogo, {
    className: classes.logo,
    orientation: "landscape"
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.grow
  }), /*#__PURE__*/React.createElement(IconButton, {
    className: classes.hamburger,
    onClick: toggleNav,
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement(Close, null))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
    pt: 3,
    pb: 15
  }, /*#__PURE__*/React.createElement(MenuList, null, linkHTML), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(SocialButtons, {
    className: classes.social,
    color: "secondary",
    groupLabel: false
  }), /*#__PURE__*/React.createElement(Copyright, null))))))));
};

var useStyles = makeStyles(function (theme) {
  return {
    grow: {
      flexGrow: 1
    },
    hamburger: {
      zIndex: '1500',
      backgroundColor: function backgroundColor(_ref3) {
        var isOpen = _ref3.isOpen;
        return isOpen ? darken(theme.palette.primary.main, 0.2) : 'unset';
      },
      '&:hover': {
        backgroundColor: function backgroundColor(_ref4) {
          var isOpen = _ref4.isOpen;
          return !isOpen ? theme.palette.primary.main : darken(theme.palette.primary.main, 0.5);
        }
      }
    },
    menu: {
      position: 'fixed',
      zIndex: '1500',
      top: '0',
      left: '0',
      height: '100vh',
      overflowY: 'auto',
      display: function display(_ref5) {
        var isOpen = _ref5.isOpen;
        return isOpen ? 'block' : 'none';
      },
      background: theme.palette.primary.main,
      transform: function transform(_ref6) {
        var isOpen = _ref6.isOpen;
        return isOpen ? 'translate(0, 0)' : 'translate(100%, 0)';
      }
    },
    menuListItem: {
      fontSize: '1.6rem'
    },
    social: {
      marginBottom: "".concat(theme.spacing(3), "px")
    },
    logo: _defineProperty({
      height: '50px'
    }, theme.breakpoints.up('md'), {
      margin: "".concat(theme.spacing(1), "px 0"),
      height: '58px'
    })
  };
});

export default HamburgerNav;
//# sourceMappingURL=HamburgerNav.js.map

import { slicedToArray as _slicedToArray, objectWithoutProperties as _objectWithoutProperties, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Box, FormControlLabel, Button, withStyles, Switch } from '@material-ui/core';
import styled from 'styled-components';
import ResponsiveDialog from '../Dialog/Dialog.js';
import { Heading, P } from '../Typography/Typography.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var CookieBanner = function CookieBanner() {
  // const [isMounted, setIsMounted] = React.useState()
  // React.useEffect(() => {
  //   setIsMounted(true)
  // }, [])
  // if (!isMounted) return null
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Banner, {
    isClosed: false
  }, /*#__PURE__*/React.createElement(BannerContainer, null, /*#__PURE__*/React.createElement(BannerCopy, {
    variant: "body2"
  }, "We use cookies and other tracking technologies to assist with navigation, analyze your use of our services, and assist with our promotional and marketing efforts.", ' ', /*#__PURE__*/React.createElement(BannerTextButton, null, "View cookie options")), /*#__PURE__*/React.createElement(BannerButton, {
    "aria-label": "Accept"
  }, "Accept"))), /*#__PURE__*/React.createElement(CookieDialog, null)), document.body);
};

function CookieDialog() {
  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      tempHasConsent = _React$useState2[0];
      _React$useState2[1];

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ResponsiveDialog, {
    open: false,
    disableBackdropClick: true,
    dialogTitle: /*#__PURE__*/React.createElement(Heading, {
      variant: "h5",
      component: "h2"
    }, "Cookies at Klick."),
    dialogContent: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(P, {
      variant: "blurb2"
    }, "We use cookies and other tracking technologies to assist with navigation, analyze your use of our services, and assist with our promotional and marketing efforts."), /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(FormControlLabel, {
      control: /*#__PURE__*/React.createElement(IOSStyleSwitch, {
        checked: tempHasConsent,
        name: "consent-toggle",
        inputProps: {
          'aria-label': 'consent checkbox'
        }
      }),
      label: tempHasConsent ? 'Tracking Enabled' : 'Tracking Disabled'
    }))),
    dialogActions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      color: "default"
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      color: "primary"
    }, "Save"))
  }));
}

var IOSStyleSwitch = withStyles(function (theme) {
  var padding = 2;
  var width = 48;
  var height = 28;
  var radius = height - padding * 2;
  var xTransform = width - radius - padding * 2;
  return {
    root: {
      width: width,
      height: height,
      padding: 0,
      margin: theme.spacing(1)
    },
    switchBase: {
      padding: padding,
      color: 'white',
      '&$checked': {
        color: 'white',
        transform: "translateX(".concat(xTransform, "px)"),
        '& + $track': {
          backgroundColor: theme.palette.primary.main,
          opacity: 1,
          border: 'none'
        }
      },
      '&$focusVisible $thumb': {
        color: theme.palette.primary.main,
        border: '6px solid #fff'
      }
    },
    thumb: {
      width: radius,
      height: radius
    },
    track: {
      borderRadius: height / 2,
      border: "2px solid ".concat(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border'])
    },
    checked: {},
    focusVisible: {}
  };
})(function (_ref) {
  var classes = _ref.classes,
      props = _objectWithoutProperties(_ref, ["classes"]);

  return /*#__PURE__*/React.createElement(Switch, _extends({
    focusVisibleClassName: classes.focusVisible,
    disableRipple: true,
    classes: {
      root: classes.root,
      switchBase: classes.switchBase,
      thumb: classes.thumb,
      track: classes.track,
      checked: classes.checked
    }
  }, props));
});
var Banner = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  color: #ffffff;\n  background-color: #000000;\n  font-family: ", ";\n  font-size: 12px;\n  transition: all 0.3s;\n  transform: ", ";\n  z-index: 9999;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.fontFamily;
}, function (_ref3) {
  var isClosed = _ref3.isClosed;
  return isClosed ? 'translateY(500px)' : 'translateY(0)';
});
var BannerContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 20px;\n\n  @media (min-width: 600px) {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n  }\n\n  @media (min-width: 960px) {\n    margin: 0 7.5%;\n    padding: 20px 0;\n  }\n"])));
var BannerCopy = styled(P)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0 0 20px 0;\n  padding: 0;\n\n  @media (min-width: 600px) {\n    flex: 1 1 auto;\n    margin: 0 20px 0 0;\n  }\n"])));
var BannerTextButton = styled.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #ffffff;\n  background: none;\n  border: none;\n  text-decoration: underline;\n"]))); // TODO: use Button from klick react-components package

var BannerButton = styled.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 20px 10px;\n  font-weight: bold;\n  text-align: center;\n  width: 100%;\n  color: #000000;\n  background-color: #ffffff;\n  border: 1px solid #ffffff;\n  cursor: pointer;\n\n  @media (min-width: 600px) {\n    padding: 10px;\n    flex: 0 0 100px;\n  }\n"])));

export default CookieBanner;
//# sourceMappingURL=CookieBanner.js.map

import { slicedToArray as _slicedToArray, asyncToGenerator as _asyncToGenerator, objectWithoutProperties as _objectWithoutProperties, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Box, FormControlLabel, withStyles, Switch } from '@material-ui/core';
import styled from 'styled-components';
import { useConsentContext } from '../_contexts/Consent.js';
import ThemeProvider, { match } from '../_contexts/Theme.js';
import Button from '../Button/Button.js';
import ResponsiveDialog from '../Dialog/Dialog.js';
import { Heading, P } from '../Typography/Typography.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var CookieBanner = function CookieBanner() {
  var _useConsentContext = useConsentContext(),
      acceptCookies = _useConsentContext.acceptCookies,
      isPristine = _useConsentContext.isPristine,
      isCookieBannerVisible = _useConsentContext.isCookieBannerVisible,
      showCookiesBanner = _useConsentContext.showCookiesBanner,
      showCookiesModal = _useConsentContext.showCookiesModal,
      closeCookiesBanner = _useConsentContext.closeCookiesBanner;

  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isMounted = _React$useState2[0],
      setIsMounted = _React$useState2[1];

  React.useEffect(function () {
    setIsMounted(true);
  }, []);
  React.useEffect(function () {
    if (isPristine) showCookiesBanner();
  }, [isPristine, showCookiesBanner]);

  function accept() {
    acceptCookies();
    closeCookiesBanner();
  }

  if (!isMounted) return null;
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(ThemeProvider, {
    themeType: "onBlack"
  }, /*#__PURE__*/React.createElement(Banner, {
    isClosed: !isCookieBannerVisible
  }, /*#__PURE__*/React.createElement(BannerContainer, null, /*#__PURE__*/React.createElement(BannerCopy, {
    variant: "body2"
  }, "We use cookies and other tracking technologies to assist with navigation, analyze your use of our services, and assist with our promotional and marketing efforts.", ' ', /*#__PURE__*/React.createElement(BannerTextButton, {
    onClick: showCookiesModal
  }, "View cookie options")), /*#__PURE__*/React.createElement(BannerButton, {
    "aria-label": "Accept",
    onClick: accept
  }, "Accept"))), /*#__PURE__*/React.createElement(CookieDialog, null)), document.body);
};

function CookieDialog() {
  var _useConsentContext2 = useConsentContext(),
      hasConsent = _useConsentContext2.hasConsent,
      acceptCookies = _useConsentContext2.acceptCookies,
      rejectCookies = _useConsentContext2.rejectCookies,
      isCookieModalVisible = _useConsentContext2.isCookieModalVisible,
      closeCookiesModal = _useConsentContext2.closeCookiesModal,
      closeCookiesBanner = _useConsentContext2.closeCookiesBanner;

  var _React$useState3 = React.useState(hasConsent),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      tempHasConsent = _React$useState4[0],
      setTempHasConsent = _React$useState4[1];

  var cancelAndClose = React.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setTempHasConsent(hasConsent);

            if (!(hasConsent !== tempHasConsent)) {
              _context.next = 4;
              break;
            }

            _context.next = 4;
            return sleep(350);

          case 4:
            closeCookiesModal();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [hasConsent, tempHasConsent, setTempHasConsent, closeCookiesModal]);

  function toggleTemporaryCookiesState() {
    setTempHasConsent(function (state) {
      return !state;
    });
  }

  var saveSettings = function saveSettings() {
    tempHasConsent ? acceptCookies() : rejectCookies();
    closeCookiesBanner();
  };

  return /*#__PURE__*/React.createElement(ThemeProvider, {
    themeType: "onBlack"
  }, /*#__PURE__*/React.createElement(ResponsiveDialog, {
    open: isCookieModalVisible,
    disableBackdropClick: true,
    onClose: cancelAndClose,
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
        onChange: toggleTemporaryCookiesState,
        name: "consent-toggle",
        inputProps: {
          'aria-label': 'consent checkbox'
        }
      }),
      label: tempHasConsent ? 'Tracking Enabled' : 'Tracking Disabled'
    }))),
    dialogActions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: cancelAndClose,
      color: "default"
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: saveSettings,
      color: "primary"
    }, "Save"))
  }));
}

function sleep(_x) {
  return _sleep.apply(this, arguments);
}

function _sleep() {
  _sleep = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ms) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _sleep.apply(this, arguments);
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
})(function (_ref2) {
  var classes = _ref2.classes,
      props = _objectWithoutProperties(_ref2, ["classes"]);

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
var Banner = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  color: #ffffff;\n  background-color: #000000;\n  font-family: ", ";\n  font-size: 12px;\n  transition: all 0.3s;\n  transform: ", ";\n  z-index: 9999;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.fontFamily;
}, function (_ref4) {
  var isClosed = _ref4.isClosed;
  return isClosed ? 'translateY(500px)' : 'translateY(0)';
});
var BannerContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 20px;\n\n  ", " {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n  }\n\n  ", " {\n    margin: 0 7.5%;\n    padding: 20px 0;\n  }\n"])), match.isSM, match.isMD);
var BannerCopy = styled(P)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0 0 20px 0;\n  padding: 0;\n\n  ", " {\n    flex: 1 1 auto;\n    margin: 0 20px 0 0;\n  }\n"])), match.isSM);
var BannerTextButton = styled.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #ffffff;\n  background: none;\n  border: none;\n  text-decoration: underline;\n"]))); // TODO: use Button from klick react-components package

var BannerButton = styled.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 20px 10px;\n  font-weight: bold;\n  text-align: center;\n  width: 100%;\n  color: #000000;\n  background-color: #ffffff;\n  border: 1px solid #ffffff;\n  cursor: pointer;\n\n  ", " {\n    padding: 10px;\n    flex: 0 0 100px;\n  }\n"])), match.isSM);

export default CookieBanner;
//# sourceMappingURL=CookieBanner.js.map

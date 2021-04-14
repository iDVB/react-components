import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { tracking } from '../_common/tracking.js';

var ConsentContext = /*#__PURE__*/React.createContext();
var STATES = {
  banner: 'banner',
  modal: 'modal',
  hidden: 'hidden'
};

function _useConsent() {
  var _React$useState = React.useState(STATES.hidden),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      cookiesUIState = _React$useState2[0],
      setCookiesUIState = _React$useState2[1];

  var consentValue = tracking.getConsentValue();
  var isPristine = !consentValue;
  var hasConsent = tracking.getHasConsent();
  var isCookieBannerVisible = cookiesUIState === STATES.banner;
  var isCookieModalVisible = cookiesUIState === STATES.modal;
  var isCookieSettingsHidden = cookiesUIState === STATES.hidden;

  function acceptCookies() {
    tracking.optIn();
    tracking.track('Cookies Accepted', {
      category: 'Page Interactions',
      action: 'Privacy Opt In',
      label: 'Cookie Banner',
      value: tracking.getConsentValue()
    });
  }

  function rejectCookies() {
    tracking.optOut();
  }

  var showCookiesModal = React.useCallback(function () {
    setCookiesUIState(STATES.modal);
  }, []);
  var closeCookiesModal = React.useCallback(function () {
    var nextState = isPristine ? STATES.banner : STATES.hidden;
    setCookiesUIState(nextState);
  }, [isPristine]);
  var showCookiesBanner = React.useCallback(function () {
    setCookiesUIState(STATES.banner);
  }, []);
  var closeCookiesBanner = React.useCallback(function () {
    setCookiesUIState(STATES.hidden);
  }, []);
  var toggleCookies = hasConsent ? rejectCookies : acceptCookies;
  return {
    hasConsent: hasConsent,
    isPristine: isPristine,
    isCookieBannerVisible: isCookieBannerVisible,
    isCookieModalVisible: isCookieModalVisible,
    isCookieSettingsHidden: isCookieSettingsHidden,
    acceptCookies: acceptCookies,
    rejectCookies: rejectCookies,
    toggleCookies: toggleCookies,
    showCookiesModal: showCookiesModal,
    closeCookiesModal: closeCookiesModal,
    showCookiesBanner: showCookiesBanner,
    closeCookiesBanner: closeCookiesBanner
  };
}

var ConsentProvider = function ConsentProvider(_ref) {
  var children = _ref.children;

  var consent = _useConsent();

  return /*#__PURE__*/React.createElement(ConsentContext.Provider, {
    value: consent
  }, children);
};

var useConsentContext = function useConsentContext() {
  var context = React.useContext(ConsentContext);

  if (context === undefined) {
    throw new Error('useConsentContext must be used within a ConsentProvider');
  }

  return context;
};

export { ConsentProvider, useConsentContext };
//# sourceMappingURL=Consent.js.map

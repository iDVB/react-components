import { toConsumableArray as _toConsumableArray, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { deleteAllCookies } from './cookieUtils.js';
import { storageItemExists, getStorageItem, setStorageItem } from './storageUtils.js';

var TRACKING_CONSENT_STORAGE_NAME = 'kh_tracking';
var TRACKING_CONSENT_VALUES = {
  accept: 'accept',
  reject: 'reject'
};
var GATSBY_GOOGLE_ANALYTICS_ID = process.env.GATSBY_GOOGLE_ANALYTICS_ID;
var disableStr = "ga-disable-".concat(GATSBY_GOOGLE_ANALYTICS_ID);
process.env.NODE_ENV === 'development'; // user is opting out, setting cookie on document, window and alerting success

var gaOptOut = function gaOptOut() {
  document.cookie = "".concat(disableStr, "=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/");
  window[disableStr] = true;
};

var gaOptIn = function gaOptIn() {
  document.cookie = "".concat(disableStr, "= ; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/");
  window[disableStr] = null;
}; // NOTE: getHasConsent() - We need to keep this one for use outside of react's render cycle.


var getHasConsent = function getHasConsent() {
  return !storageItemExists(TRACKING_CONSENT_STORAGE_NAME) || getStorageItem(TRACKING_CONSENT_STORAGE_NAME) === 'accept';
};

function getCanTrack() {
  return typeof window !== 'undefined' && getHasConsent();
}
/**
 * @deprecated use tracking.track() instead
 */


var trackEvent = function trackEvent(payload) {
  if (typeof window === 'undefined' || !getHasConsent() || !window.gtag) return;
  if (payload.action || payload.label || payload.category) trackGAEvent(payload);
  if (payload.dcCode) trackDCEvent(payload.dcCode);
};

var trackGAEvent = function trackGAEvent(payload) {
  window.gtag('event', payload.action, _objectSpread2({
    send_to: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
    event_category: payload.category,
    event_label: payload.label
  }, payload.value && {
    value: payload.value
  }));
};

var trackDCEvent = function trackDCEvent(dcCode) {
  window.gtag('event', 'conversion', {
    allow_custom_scripts: true,
    send_to: "".concat(process.env.GATSBY_GOOGLE_DOUBLECLICK_ID, "/").concat(dcCode),
    session_id: getStorageItem('session_id')
  });
};

function noop() {}

function getIsNewSyntax(args) {
  return typeof args[0] === 'string';
}
/**
 * @deprecated use trackingSegment instead
 */


var trackingGA = {
  // page() is a noop because this is actually handled by the gatsby-google-gtag-plugin
  page: noop,
  // identify() is a noop because gtag does not have this functionality
  identify: noop,
  track: function track() {
    if (!getCanTrack()) return;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var transformedArgs = getIsNewSyntax(args) ? [args[1]] : args;
    trackEvent.apply(void 0, _toConsumableArray(transformedArgs));
  },
  getHasConsent: getHasConsent,
  getConsentValue: function getConsentValue() {
    return getStorageItem(TRACKING_CONSENT_STORAGE_NAME);
  },
  optIn: function optIn() {
    setStorageItem(TRACKING_CONSENT_STORAGE_NAME, TRACKING_CONSENT_VALUES.accept);
    gaOptIn();
  },
  optOut: function optOut() {
    setStorageItem(TRACKING_CONSENT_STORAGE_NAME, TRACKING_CONSENT_VALUES.reject);
    gaOptOut();
    deleteAllCookies();
  }
};
var tracking = trackingGA;

export { tracking };
//# sourceMappingURL=tracking.js.map

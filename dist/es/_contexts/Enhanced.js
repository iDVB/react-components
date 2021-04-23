import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

var EnhancedContext = /*#__PURE__*/React.createContext();
var STORAGE_KEY = 'isEnhanced';

var EnhancedProvider = function EnhancedProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      enhanced = _useState2[0],
      setEnhanced = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasInitialized = _useState4[0],
      setHasInitialized = _useState4[1];

  var toggleEnhanced = function toggleEnhanced(value) {
    typeof value === 'boolean' && setEnhanced(value);
  };

  var value = {
    enhanced: enhanced,
    toggleEnhanced: toggleEnhanced
  };
  var prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  useEffect(function () {
    if (hasInitialized && enhanced !== null) {
      window.localStorage.setItem(STORAGE_KEY, enhanced);
    }
  }, [enhanced, hasInitialized]);
  useEffect(function () {
    var storage = window.localStorage.getItem(STORAGE_KEY);
    var storageValue = storage !== null ? storage === 'true' : true;
    var initialValue = !prefersReducedMotion ? storageValue : null;
    setEnhanced(initialValue);
    setHasInitialized(true);
  }, [enhanced, prefersReducedMotion]);
  return /*#__PURE__*/React.createElement(EnhancedContext.Provider, {
    value: value
  }, children);
};

var useEnhancedContext = function useEnhancedContext() {
  var context = React.useContext(EnhancedContext);

  if (context === undefined) {
    throw new Error('useEnhancedContext must be used within a EnhancedProvider');
  }

  return context;
};

export { EnhancedProvider, useEnhancedContext };
//# sourceMappingURL=Enhanced.js.map

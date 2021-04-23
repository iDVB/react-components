import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState, useCallback } from 'react';

var ScrollStateContext = /*#__PURE__*/React.createContext();
var ScrollDispatchContext = /*#__PURE__*/React.createContext();

var ScrollProvider = function ScrollProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      scrollEnabled = _useState2[0],
      setScrollState = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      scrollPosition = _useState4[0],
      setScrollPosition = _useState4[1];

  var setScrollEnabled = useCallback(function (scrollState) {
    setScrollState(scrollState);
    var newScrollPosition = scrollState ? enableScroll(scrollPosition) : disableScroll();
    setScrollPosition(newScrollPosition);
  }, [scrollPosition]);
  return /*#__PURE__*/React.createElement(ScrollStateContext.Provider, {
    value: scrollEnabled
  }, /*#__PURE__*/React.createElement(ScrollDispatchContext.Provider, {
    value: setScrollEnabled
  }, children));
};

var useScrollStateContext = function useScrollStateContext() {
  var context = React.useContext(ScrollStateContext);

  if (context === undefined) {
    throw new Error('useScrollStateContext must be used within a ScrollProvider');
  }

  return context;
};

var useScrollDispatchContext = function useScrollDispatchContext() {
  var context = React.useContext(ScrollDispatchContext);

  if (context === undefined) {
    throw new Error('ScrollDispatchContext must be used within a ScrollProvider');
  }

  return context;
};

var disableScroll = function disableScroll() {
  var scrollPosition = window.pageYOffset;
  document.querySelector('html').setAttribute('style', 'overflow: hidden;'); // Prevents scroll bouncing

  document.body.setAttribute('style', "\n      position: fixed;\n      width: 100%;\n      top: -".concat(scrollPosition, "px;\n    "));
  return scrollPosition;
};

var enableScroll = function enableScroll(scrollPosition) {
  document.querySelector('html').removeAttribute('style');
  document.body.removeAttribute('style');
  window.scrollTo(0, scrollPosition);
  return scrollPosition;
};

export { ScrollProvider, useScrollDispatchContext, useScrollStateContext };
//# sourceMappingURL=Scroll.js.map

import { objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { useInView } from 'react-intersection-observer';

var InView = function InView(_ref) {
  var _ref$rootMargin = _ref.rootMargin,
      rootMargin = _ref$rootMargin === void 0 ? '500px 0px' : _ref$rootMargin,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold,
      rest = _objectWithoutProperties(_ref, ["rootMargin", "threshold"]);

  var _useInView = useInView({
    threshold: threshold,
    rootMargin: rootMargin
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      inViewRef = _useInView2[0],
      isInView = _useInView2[1];

  return /*#__PURE__*/React.createElement(InViewContext.Provider, {
    value: {
      isInView: isInView
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: inViewRef
  }, rest)));
};

var InViewContext = /*#__PURE__*/React.createContext();

var useInViewContext = function useInViewContext() {
  var context = React.useContext(InViewContext);

  if (context === undefined) {
    throw new Error('useInViewContext must be used within InViewProvider');
  }

  return context;
};

export { InView, InViewContext, useInViewContext };
//# sourceMappingURL=InView.js.map

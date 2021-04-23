import { objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { useInView } from 'react-intersection-observer';

var LazyLoad = function LazyLoad(_ref) {
  var children = _ref.children,
      _ref$rootMargin = _ref.rootMargin,
      rootMargin = _ref$rootMargin === void 0 ? '500px 0px' : _ref$rootMargin,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold,
      _ref$triggerOnce = _ref.triggerOnce,
      triggerOnce = _ref$triggerOnce === void 0 ? true : _ref$triggerOnce,
      rest = _objectWithoutProperties(_ref, ["children", "rootMargin", "threshold", "triggerOnce"]);

  var _useInView = useInView({
    threshold: threshold,
    rootMargin: rootMargin,
    triggerOnce: triggerOnce
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      inViewRef = _useInView2[0],
      isInViewLoad = _useInView2[1];

  return /*#__PURE__*/React.createElement("div", _extends({
    ref: inViewRef
  }, rest), isInViewLoad && children);
};

export default LazyLoad;
//# sourceMappingURL=LazyLoad.js.map

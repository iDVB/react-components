import { objectWithoutProperties as _objectWithoutProperties } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var ScrollToTop = function ScrollToTop(_ref) {
  var _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0 : _ref$offset,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 0 : _ref$placement,
      _ref$behavior = _ref.behavior,
      behavior = _ref$behavior === void 0 ? 'smooth' : _ref$behavior,
      props = _objectWithoutProperties(_ref, ["offset", "placement", "behavior"]);

  var ref = React.useRef();
  var scrollElementRef = null;
  var children = React.Children.map(props.children, function (element, i) {
    if (i === 0) {
      scrollElementRef = element.ref || ref;
      return element.ref ? element : /*#__PURE__*/React.cloneElement(element, {
        ref: ref
      });
    } else return element;
  });
  React.useEffect(function () {
    var docTop = document.documentElement.scrollTop;
    var scrollElTop = scrollElementRef.current.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    var offsetTotal = windowHeight * placement + offset;
    var top = docTop + scrollElTop - offsetTotal;
    window.scrollTo({
      behavior: behavior,
      top: top
    });
  }, [offset, placement, behavior, scrollElementRef]);
  return children;
};

export default ScrollToTop;
//# sourceMappingURL=ScrollTo.js.map

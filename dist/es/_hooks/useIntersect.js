import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import { useState, useRef, useEffect } from 'react';
import { isIntersectionObserverSupported } from '../_common/utils.js';

var useIntersect = function useIntersect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$root = _ref.root,
      root = _ref$root === void 0 ? null : _ref$root,
      rootMargin = _ref.rootMargin,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      entry = _useState2[0],
      setEntry = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      node = _useState4[0],
      setNode = _useState4[1];

  var observer = useRef(null);
  useEffect(function () {
    if (!isIntersectionObserverSupported()) {
      return;
    }

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new window.IntersectionObserver(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
          entry = _ref3[0];

      return setEntry(entry);
    }, {
      root: root,
      rootMargin: rootMargin,
      threshold: threshold
    });
    var currentObserver = observer.current;

    if (node) {
      currentObserver.observe(node);
    }

    return function () {
      return currentObserver.disconnect();
    };
  }, [node, root, rootMargin, threshold]);
  return [setNode, entry];
};

export default useIntersect;
//# sourceMappingURL=useIntersect.js.map

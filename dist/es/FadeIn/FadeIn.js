import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useEnhancedContext } from '../_contexts/Enhanced.js';
import useScrollAnimation from '../_hooks/useScrollAnimation.js';

var FadeIn = function FadeIn(_ref) {
  var children = _ref.children,
      from = _ref.from,
      _ref$distance = _ref.distance,
      distance = _ref$distance === void 0 ? 30 : _ref$distance,
      start = _ref.start,
      end = _ref.end,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled;
  var child = React.Children.only(children);
  var ref = useRef();

  var _useEnhancedContext = useEnhancedContext(),
      enhanced = _useEnhancedContext.enhanced;

  var directions = {
    top: {
      y: -distance,
      opacity: 0
    },
    left: {
      x: -distance,
      opacity: 0
    },
    bottom: {
      y: distance,
      opacity: 0
    },
    right: {
      x: distance,
      opacity: 0
    }
  };
  useScrollAnimation({
    ref: child.ref || ref,
    from: typeof from === 'string' ? directions[from] : from,
    start: start,
    end: end,
    enabled: enhanced && enabled
  });
  return child.ref ? child : /*#__PURE__*/React.cloneElement(child, {
    ref: ref
  });
};

FadeIn.propTypes = {
  from: PropTypes.oneOfType([PropTypes.oneOf(['top', 'left', 'bottom', 'right']), PropTypes.object]).isRequired,
  distance: PropTypes.number,
  duration: PropTypes.number
};
var FadeIn$1 = /*#__PURE__*/React.memo(FadeIn);

export default FadeIn$1;
//# sourceMappingURL=FadeIn.js.map

import { objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { useIsomorphicLayoutEffect } from 'react-use';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useInstance from './useInstance.js';

gsap.registerPlugin(ScrollTrigger);

var useScrollAnimation = function useScrollAnimation(_ref) {
  var ref = _ref.ref,
      from = _ref.from,
      _ref$start = _ref.start,
      start = _ref$start === void 0 ? 'top 95%' : _ref$start,
      _ref$end = _ref.end,
      end = _ref$end === void 0 ? 'top 60%' : _ref$end,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled;
  var timeline = useInstance(function () {
    return gsap.timeline({
      paused: true
    });
  });
  useIsomorphicLayoutEffect(function () {
    if (!enabled) return;
    var element = ref.current;
    setupAnimation({
      timeline: timeline,
      element: element,
      from: from,
      start: start,
      end: end
    });
    return function () {
      removeAnimation({
        timeline: timeline,
        element: element
      });
    };
  }, [from, ref, timeline, start, end, enabled]);
  return timeline;
};

var setupAnimation = function setupAnimation(_ref2) {
  var timeline = _ref2.timeline,
      element = _ref2.element,
      from = _ref2.from,
      start = _ref2.start,
      end = _ref2.end;
  timeline.from(element, _objectSpread2(_objectSpread2({}, from), {}, {
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: element,
      start: start,
      end: end,
      scrub: true
    }
  }));
};

var removeAnimation = function removeAnimation(_ref3) {
  var timeline = _ref3.timeline,
      element = _ref3.element;
  timeline.clear();
  gsap.set(element, {
    clearProps: 'all'
  });
};

export default useScrollAnimation;
//# sourceMappingURL=useScrollAnimation.js.map

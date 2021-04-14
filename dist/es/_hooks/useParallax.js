import { useIsomorphicLayoutEffect } from 'react-use';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useInstance from './useInstance.js';

gsap.registerPlugin(ScrollTrigger);

var useParallax = function useParallax(_ref) {
  var triggerRef = _ref.triggerRef,
      _ref$refs = _ref.refs,
      refs = _ref$refs === void 0 ? [] : _ref$refs,
      _ref$depths = _ref.depths,
      depths = _ref$depths === void 0 ? [] : _ref$depths;
  var timeline = useInstance(function () {
    return gsap.timeline({
      paused: true
    });
  });
  useIsomorphicLayoutEffect(function () {
    if (!triggerRef.current) return;
    ScrollTrigger.create({
      trigger: triggerRef.current,
      scrub: true,
      start: 'top bottom',
      end: 'bottom top',
      animation: timeline
    });
    refs.forEach(function (ref, index) {
      var depth = depths[index];
      timeline.fromTo(ref.current, {
        y: depth
      }, {
        y: -depth,
        ease: 'none'
      }, 0);
    });
  }, [triggerRef, refs, timeline, depths]);
  return timeline;
};

export default useParallax;
//# sourceMappingURL=useParallax.js.map

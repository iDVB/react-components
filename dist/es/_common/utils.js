import 'gatsby-plugin-image';

var isIntersectionObserverSupported = function isIntersectionObserverSupported() {
  return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype;
};

export { isIntersectionObserverSupported };
//# sourceMappingURL=utils.js.map

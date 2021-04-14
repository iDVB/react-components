import { objectSpread2 as _objectSpread2, defineProperty as _defineProperty } from '../_virtual/_rollupPluginBabelHelpers.js';
import { getImage } from 'gatsby-plugin-image';

var isBrowser = typeof window !== 'undefined';
var capitalize = function capitalize(word) {
  return typeof word === 'string' ? word.charAt(0).toUpperCase() + word.slice(1) : word;
};
var getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var getDataFromJsonQuery = function getDataFromJsonQuery(data, rootNodeName) {
  try {
    return data[rootNodeName].edges.map(function (item) {
      return item.node;
    });
  } catch (err) {
    console.log("Error parsing JSON data for ".concat(rootNodeName), err);
    return [];
  }
};
var isIntersectionObserverSupported = function isIntersectionObserverSupported() {
  return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype;
};
var calcPageFillRadius = function calcPageFillRadius(x, y, windowWidth, windowHeight) {
  var l = Math.max(x - 0, windowWidth - x);
  var h = Math.max(y - 0, windowHeight - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
};
var getDevicePixelRatio = function getDevicePixelRatio() {
  var maxDpr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2.0;
  return isBrowser ? Math.min(Math.max(Math.round(window.devicePixelRatio), 1), maxDpr).toFixed(1) : '1.0';
};
var reduceImages = function reduceImages(edges) {
  return edges.reduce(function (acc, cur) {
    return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, cur.node.name, getImage(cur.node)));
  }, {});
};
var groupBy = function groupBy(data, type) {
  return data.reduce(function (acc, cur) {
    cur[type].forEach(function (t) {
      if (!acc[t]) acc[t] = [];
      acc[t].push(cur);
    });
    return acc;
  }, {});
};

export { calcPageFillRadius, capitalize, getDataFromJsonQuery, getDevicePixelRatio, getRandomInt, groupBy, isBrowser, isIntersectionObserverSupported, reduceImages };
//# sourceMappingURL=utils.js.map

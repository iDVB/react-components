import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState, useCallback, useEffect } from 'react';
import { isBrowser } from '../_common/utils.js';

var Breakpoint = function Breakpoint(_ref) {
  var children = _ref.children;
      _ref.query;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};
Breakpoint.displayName = 'Breakpoint';
var Default = function Default(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};
Default.displayName = 'Default';
/**
 * A helper for conditionally rendering children based 
 * on media queries using a mobile first approach. 
 * 
 * How does it work?
 * - Like a switch will only match(render) one condition at a time
 * - Order matters, order <Breakpoints> like you would in CSS for mobile first
 * - <Default> will be used if no other <Breakpoint>'s match.
 * 
 * Usage:
    <MobileFirstSwitch>
      <Default>
        <h1>MOBILE Breakpoint</h1>
      </Default>
      <Breakpoint query={match.isMD}>
        <h1>MEDIUM Breakpoint</h1>
      </Breakpoint>
      <Breakpoint query={match.isLG}>
        <h1>LARGE Breakpoint</h1>
      </Breakpoint>
    </MobileFirstSwitch>
 */

var MobileFirstSwitch = function MobileFirstSwitch(_ref3) {
  var children = _ref3.children;
  var defaultBreakpoint = null;
  var matchedBreakpoint = null;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      resizeCount = _useState2[0],
      setResizeCount = _useState2[1];

  var onMediaQueryChange = useCallback(function () {
    return setResizeCount(resizeCount + 1);
  }, [resizeCount]);
  useEffect(function () {
    var items = React.Children.toArray(children);
    var mediaQueryLists = items.map(function (item) {
      return typeof item.props.query === 'string' ? window.matchMedia(item.props.query) : null;
    }).filter(function (item) {
      return item !== null;
    });
    mediaQueryLists.forEach(function (queryList) {
      return (// queryList.addEventListener('change', onMediaQueryChange)
        // For safari iOS compatibility you must use addListener / removeListener
        queryList.addListener(onMediaQueryChange)
      );
    });
    return function () {
      mediaQueryLists.forEach(function (queryList) {
        return (// queryList.removeEventListener('change', onMediaQueryChange)
          // For safari iOS compatibility you must use addListener / removeListener
          queryList.removeListener(onMediaQueryChange)
        );
      });
    };
  }, [children, onMediaQueryChange]);
  React.Children.forEach(children, function (child) {
    var isValidChild = child !== null && child.type && child.type.displayName;
    var isDefaultBreakpoint = isValidChild && child.type.displayName === 'Default';
    var hasValidQuery = isValidChild && typeof child.props.query === 'string';
    var childContent = isValidChild && child.props.children;

    if (isDefaultBreakpoint) {
      defaultBreakpoint = childContent;
    }

    if (!isDefaultBreakpoint && hasValidQuery && isBrowser) {
      var _window$matchMedia = window.matchMedia(child.props.query),
          matches = _window$matchMedia.matches;

      matchedBreakpoint = matches === true ? childContent : matchedBreakpoint;
    }
  });
  return matchedBreakpoint !== null ? matchedBreakpoint : defaultBreakpoint;
};

export default MobileFirstSwitch;
export { Breakpoint, Default };
//# sourceMappingURL=MobileFirstSwitch.js.map

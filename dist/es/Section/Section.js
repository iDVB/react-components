import { objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef, useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { tracking } from '../_common/tracking.js';

gsap.registerPlugin(ScrollTrigger);
var Section = /*#__PURE__*/forwardRef(function (_ref, passedDownRef) {
  var _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'section' : _ref$component,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'relative' : _ref$position;
      _ref.scrollToOffset;
      var children = _ref.children,
      name = _ref.name,
      dcCode = _ref.dcCode,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? 20 : _ref$zIndex,
      restProps = _objectWithoutProperties(_ref, ["component", "position", "scrollToOffset", "children", "name", "dcCode", "zIndex"]);

  var theme = useTheme();

  var _sectionRef = useRef();

  var sectionRef = passedDownRef || _sectionRef;
  useIsomorphicLayoutEffect(function () {
    if (name) {
      var scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center+=1px',
        end: 'top center',
        once: true,
        onEnter: function onEnter() {
          tracking.track('Section scrolled', {
            category: 'Window Events',
            action: 'Scroll Section',
            label: name,
            dcCode: dcCode
          });
        }
      });
      return function () {
        scrollTrigger && scrollTrigger.kill();
      };
    }
  }, [dcCode, name, sectionRef]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    pt: theme.defaults.spacing.medium,
    pb: theme.defaults.spacing.medium,
    component: component,
    ref: sectionRef,
    bgcolor: "background.default"
  }, restProps), /*#__PURE__*/React.createElement(Box, {
    height: "100%",
    position: position,
    zIndex: zIndex
  }, children));
});

export default Section;
//# sourceMappingURL=Section.js.map

import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import gsap from 'gsap';
import { ExpoScaleEase } from 'gsap/EasePack';
import { throttle } from 'lodash';
import styled, { keyframes, css } from 'styled-components';
import { calcPageFillRadius } from '../_common/utils.js';
import { brandColors } from '../_contexts/Theme.js';
import useInstance from '../_hooks/useInstance.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
gsap.registerPlugin(ExpoScaleEase);

var IntroMask = function IntroMask(props) {
  var background = props.background,
      dot = props.dot,
      skipIntro = props.skipIntro,
      mainIntroTimeline = props.mainIntroTimeline,
      mainScrollTimeline = props.mainScrollTimeline,
      isGradientOverlayEnabled = props.isGradientOverlayEnabled;
  var maskConfig = useRef({
    x: 0,
    y: 0,
    radius: 0,
    scale: 1
  });
  var circleMaskRef = useRef();
  var colorOverlayRef = useRef();
  var introTimeline = useInstance(function () {
    return gsap.timeline();
  });
  var scrollTimeline = useInstance(function () {
    return gsap.timeline();
  });
  useIsomorphicLayoutEffect(function () {
    if (skipIntro) return;
    buildIntroAnimations({
      introTimeline: introTimeline,
      circleMaskRef: circleMaskRef,
      maskConfig: maskConfig,
      dot: dot
    });
    mainIntroTimeline.add(introTimeline, 0);
    return function () {
      introTimeline.clear();
      mainIntroTimeline.remove(introTimeline);
    };
  }, [dot, introTimeline, mainIntroTimeline, skipIntro]);
  useIsomorphicLayoutEffect(function () {
    if (!skipIntro) return;
    buildScrollAnimations({
      scrollTimeline: scrollTimeline,
      circleMaskRef: circleMaskRef,
      maskConfig: maskConfig,
      colorOverlayRef: colorOverlayRef,
      dot: dot
    });
    mainScrollTimeline.add(scrollTimeline, 0);
    return function () {
      scrollTimeline.clear();
      mainScrollTimeline.remove(scrollTimeline);
    };
  }, [dot, mainScrollTimeline, scrollTimeline, skipIntro]);
  React.useEffect(function () {
    var handleResize = throttle(function () {
      var animationRefs = {
        introTimeline: introTimeline,
        scrollTimeline: scrollTimeline,
        circleMaskRef: circleMaskRef,
        maskConfig: maskConfig,
        colorOverlayRef: colorOverlayRef,
        dot: dot
      };
      !skipIntro ? buildIntroAnimations(animationRefs) : buildScrollAnimations(animationRefs);
    }, 50);
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, [dot, introTimeline, scrollTimeline, skipIntro]);
  return /*#__PURE__*/React.createElement(CircleMask, {
    ref: circleMaskRef
  }, /*#__PURE__*/React.createElement(ColorOverlay, {
    $isGradientOverlayEnabled: isGradientOverlayEnabled,
    ref: colorOverlayRef
  }), /*#__PURE__*/React.createElement(BackgroundContent, null, background));
};

var buildIntroAnimations = function buildIntroAnimations(animationRefs) {
  var introTimeline = animationRefs.introTimeline,
      circleMaskRef = animationRefs.circleMaskRef,
      dot = animationRefs.dot,
      maskConfig = animationRefs.maskConfig;
  var introTimelineProgress = introTimeline.progress();
  introTimeline.pause(0).clear();
  maskConfig.current = generateMaskConfig({
    circleMaskRef: circleMaskRef,
    dot: dot
  });

  var _getAnimationTargets = getAnimationTargets({
    circleMaskRef: circleMaskRef
  }),
      introRadius = _getAnimationTargets.introRadius,
      targetX = _getAnimationTargets.targetX,
      targetY = _getAnimationTargets.targetY;

  var _maskConfig$current = maskConfig.current,
      x = _maskConfig$current.x,
      y = _maskConfig$current.y,
      radius = _maskConfig$current.radius;
  introTimeline.fromTo(circleMaskRef.current, {
    clipPath: "circle(1px at ".concat(x, "px ").concat(y, "px)")
  }, {
    duration: 0.3,
    clipPath: "circle(".concat(radius, "px at ").concat(x, "px ").concat(y, "px)"),
    ease: 'back.out',
    immediateRender: false,
    delay: 0.5
  }, 0);
  introTimeline.fromTo(circleMaskRef.current, {
    clipPath: "circle(".concat(radius, "px at ").concat(x, "px ").concat(y, "px)")
  }, {
    duration: 0.7,
    clipPath: "circle(".concat(introRadius, "px at ").concat(targetX, "px ").concat(targetY, "px)"),
    immediateRender: false,
    ease: ExpoScaleEase.config(1, introRadius, 'expo.out')
  }, 1.5);
  introTimeline.progress(introTimelineProgress);
  introTimeline.resume();
};

var buildScrollAnimations = function buildScrollAnimations(animationRefs) {
  var scrollTimeline = animationRefs.scrollTimeline,
      circleMaskRef = animationRefs.circleMaskRef,
      colorOverlayRef = animationRefs.colorOverlayRef,
      maskConfig = animationRefs.maskConfig,
      dot = animationRefs.dot;
  var scrollTimelineProgress = scrollTimeline.progress();
  scrollTimeline.pause(0).clear();
  maskConfig.current = generateMaskConfig({
    circleMaskRef: circleMaskRef,
    dot: dot
  });

  var _getAnimationTargets2 = getAnimationTargets({
    circleMaskRef: circleMaskRef
  }),
      introRadius = _getAnimationTargets2.introRadius,
      finalRadius = _getAnimationTargets2.finalRadius,
      targetX = _getAnimationTargets2.targetX,
      targetY = _getAnimationTargets2.targetY;

  scrollTimeline.fromTo(circleMaskRef.current, {
    clipPath: "circle(".concat(introRadius, "px at ").concat(targetX, "px ").concat(targetY, "px)")
  }, {
    duration: 10,
    clipPath: "circle(".concat(finalRadius, "px at ").concat(targetX, "px ").concat(targetY, "px)"),
    ease: ExpoScaleEase.config(introRadius, finalRadius)
  }, 0);
  scrollTimeline.to(colorOverlayRef.current, {
    duration: 8,
    opacity: 0
  }, 2);
  scrollTimeline.progress(scrollTimelineProgress);
  scrollTimeline.resume();
};

var getAnimationTargets = function getAnimationTargets(_ref) {
  var circleMaskRef = _ref.circleMaskRef;

  var _circleMaskRef$curren = circleMaskRef.current.getBoundingClientRect(),
      width = _circleMaskRef$curren.width,
      height = _circleMaskRef$curren.height;

  var introRadius = Math.min(height * 0.7, width * 0.7) / 2;
  var targetX = width * 0.5;
  var targetY = height * 0.5;
  var finalRadius = calcPageFillRadius(targetX, targetY, width, height);
  return {
    introRadius: introRadius,
    targetX: targetX,
    targetY: targetY,
    finalRadius: finalRadius
  };
};

var generateMaskConfig = function generateMaskConfig(_ref2) {
  var dot = _ref2.dot,
      circleMaskRef = _ref2.circleMaskRef;
  var dotData = dot.current.getBoundingClientRect();
  var containerData = circleMaskRef.current.getBoundingClientRect();
  var radius = dotData.width * 0.5;
  var dotX = dotData.x + dotData.width / 2;
  var dotY = dotData.y + dotData.height / 2 - containerData.y;
  var maskConfig = {
    x: dotX,
    y: dotY,
    radius: radius,
    scale: 0
  };
  return maskConfig;
};

var CircleMask = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n  z-index: 2;\n  clip-path: circle(0px at 150% 150%);\n  pointer-events: none;\n"])));
var BackgroundContent = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  pointer-events: all;\n"])));
var gradientMovementKeyFrames = keyframes(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"])));
var gradientStyles = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  transition: all 1s;\n  background: radial-gradient(\n    circle,\n    ", ",\n    ", ",\n    ", ",\n    ", ",\n    ", "\n  );\n  background-size: 1000% 1000%;\n  animation: ", " 20s ease infinite;\n"])), brandColors.klick, brandColors.consulting, brandColors.klick, brandColors.appliedsciences, brandColors.klick, gradientMovementKeyFrames);
var ColorOverlay = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  opacity: 1;\n  z-index: 3;\n  pointer-events: none;\n\n  ", "\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
}, function (_ref4) {
  var $isGradientOverlayEnabled = _ref4.$isGradientOverlayEnabled;
  return $isGradientOverlayEnabled ? gradientStyles : null;
});

export default IntroMask;
//# sourceMappingURL=CircleMask.js.map

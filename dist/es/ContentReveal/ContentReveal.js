import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { gsap } from 'gsap';
import { ExpoScaleEase } from 'gsap/EasePack';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { match } from '../_contexts/Theme.js';
import useInstance from '../_hooks/useInstance.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ExpoScaleEase);

var ContentReveal = function ContentReveal(props) {
  var background = props.background,
      reveal = props.reveal;
  var stickyContainerRef = React.useRef();
  var revealMaskRef = React.useRef();
  var revealMaskInnerRef = React.useRef();
  var revealRef = React.useRef();
  var timeline = useInstance(function () {
    return gsap.timeline();
  });
  useIsomorphicLayoutEffect(function () {
    var animationRefs = {
      revealMaskRef: revealMaskRef,
      revealMaskInnerRef: revealMaskInnerRef,
      revealRef: revealRef,
      timeline: timeline
    };
    buildAnimation(animationRefs);
    ScrollTrigger.create({
      trigger: stickyContainerRef.current,
      scrub: true,
      start: 'top top',
      end: 'bottom bottom',
      animation: timeline,
      ease: 'none'
    });
  }, [timeline]);
  return /*#__PURE__*/React.createElement(StickyContainer, {
    ref: stickyContainerRef
  }, /*#__PURE__*/React.createElement(StickyItem, null, /*#__PURE__*/React.createElement(ContentContainer, null, background), /*#__PURE__*/React.createElement(RevealContainer, null, /*#__PURE__*/React.createElement(RevealMask, {
    ref: revealMaskRef
  }, /*#__PURE__*/React.createElement(RevealMaskInner, {
    ref: revealMaskInnerRef
  }, /*#__PURE__*/React.createElement(Reveal, {
    ref: revealRef
  }, reveal))))));
};

var buildAnimation = function buildAnimation(_ref) {
  var revealMaskRef = _ref.revealMaskRef,
      revealMaskInnerRef = _ref.revealMaskInnerRef,
      revealRef = _ref.revealRef,
      timeline = _ref.timeline;
  var progress = timeline.progress();
  timeline.pause(0).clear();
  gsap.set([revealMaskRef.current, revealRef.current], {
    clearProps: 'all'
  });
  var scaleFactor = 0.001;
  timeline.fromTo(revealMaskRef.current, {
    scale: scaleFactor
  }, {
    duration: 3,
    scale: 1,
    ease: ExpoScaleEase.config(scaleFactor, 1, 'power2.inOut')
  }, 0);
  timeline.fromTo(revealMaskInnerRef.current, {
    scale: 1 / scaleFactor
  }, {
    duration: 3,
    scale: 1,
    ease: ExpoScaleEase.config(1 / scaleFactor, 1, 'power2.inOut')
  }, 0);
  timeline.progress(progress);
};

var StickyContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  height: 250vh;\n"])));
var StickyItem = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: sticky;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n"])));
var ContentContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  z-index: 1;\n"])));
var RevealContainer = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  z-index: 2;\n"])));
var RevealMask = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  overflow: hidden;\n  position: absolute;\n  top: 100%;\n  left: 100%;\n  transform: translate(-50%, -50%);\n\n  @media ", " {\n    width: 260vh;\n    height: 260vh;\n  }\n  @media ", " {\n    width: 260vw;\n    height: 260vw;\n  }\n"])), match.isPortrait, match.isLandscape);
var RevealMaskInner = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));
var Reveal = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-100%, -100%);\n  transform-origin: bottom right;\n"])));

export default ContentReveal;
//# sourceMappingURL=ContentReveal.js.map

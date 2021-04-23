import { objectWithoutProperties as _objectWithoutProperties, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { disableBodyScroll, enableBodyScroll } from '../node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js';
import { gsap } from 'gsap';
import { ExpoScaleEase } from 'gsap/EasePack';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { useEnhancedContext } from '../_contexts/Enhanced.js';
import { useIntroContext } from '../_contexts/Intro.js';
import { match } from '../_contexts/Theme.js';
import useInstance from '../_hooks/useInstance.js';
import KlickLogo from '../KlickLogo/KlickLogo.js';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator.js';
import Section from '../Section/Section.js';
import { Heading } from '../Typography/Typography.js';
import IntroMask from './CircleMask.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ExpoScaleEase);
gsap.registerPlugin(ScrollToPlugin);
var eyeBrowBarHeight = 48;

var HeroMaskIntro = function HeroMaskIntro(_ref) {
  var initialBackground = _ref.initialBackground,
      background = _ref.background,
      headline = _ref.headline,
      onIntroComplete = _ref.onIntroComplete,
      _ref$skipAutoScroll = _ref.skipAutoScroll,
      skipAutoScroll = _ref$skipAutoScroll === void 0 ? false : _ref$skipAutoScroll,
      _ref$isGradientOverla = _ref.isGradientOverlayEnabled,
      isGradientOverlayEnabled = _ref$isGradientOverla === void 0 ? false : _ref$isGradientOverla,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? "".concat(eyeBrowBarHeight, "px") : _ref$top,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "calc(100vh - ".concat(eyeBrowBarHeight, "px)") : _ref$height,
      enhancedOverride = _ref.enhancedOverride,
      restProps = _objectWithoutProperties(_ref, ["initialBackground", "background", "headline", "onIntroComplete", "skipAutoScroll", "isGradientOverlayEnabled", "top", "height", "enhancedOverride"]);

  var _useEnhancedContext = useEnhancedContext(),
      enhancedContext = _useEnhancedContext.enhanced;

  var enhanced = enhancedOverride !== null && enhancedOverride !== void 0 ? enhancedOverride : enhancedContext;

  var _useIntroContext = useIntroContext(),
      skipIntro = _useIntroContext.skipIntro,
      setSkipIntro = _useIntroContext.setSkipIntro;

  var mainTimeline = useInstance(function () {
    return gsap.timeline({
      paused: true
    });
  });
  var introTimeline = useInstance(function () {
    return gsap.timeline();
  });
  var logoTimeline = useInstance(function () {
    return gsap.timeline();
  });
  var scrollTimeline = useInstance(function () {
    return gsap.timeline();
  });
  var stickyContainerRef = useRef();
  var svg = useRef();
  var letterK1 = useRef();
  var letterL = useRef();
  var letterI = useRef();
  var letterC = useRef();
  var letterK2 = useRef();
  var dot = useRef();
  var subHead = useRef();
  var headlineRef = useRef();
  var scrollIndicatorRef = useRef();
  var sectionRef = useRef();
  useIsomorphicLayoutEffect(function () {
    // SETUP LOGO INTRO ANIMATION
    if (skipIntro || !enhanced) return;

    if (window.scrollY > 0) {
      setSkipIntro(true);
      return;
    }

    var scrollTimeout;
    var handleScroll;

    var _handleClick;

    var hasClicked = false;
    var animationRefs = {
      mainTimeline: mainTimeline,
      introTimeline: introTimeline,
      scrollTimeline: scrollTimeline,
      logoTimeline: logoTimeline,
      svg: svg,
      letterK1: letterK1,
      letterL: letterL,
      letterI: letterI,
      letterC: letterC,
      letterK2: letterK2,
      dot: dot,
      subHead: subHead,
      headlineRef: headlineRef,
      scrollIndicatorRef: scrollIndicatorRef
    };
    mainTimeline.add(introTimeline, 0);
    mainTimeline.add(logoTimeline, 0);
    buildLogoAnimation(animationRefs);
    var currentRef = sectionRef.current;
    disableBodyScroll(currentRef);
    mainTimeline.play();

    _handleClick = function handleClick() {
      hasClicked = true;
      window.removeEventListener('click', _handleClick);
    };

    window.addEventListener('click', _handleClick);
    logoTimeline.eventCallback('onComplete', function () {
      scrollTimeout = setTimeout(function () {
        if (window.scrollY === 0 && !hasClicked && !skipAutoScroll) {
          var percentage = 0.65;
          var totalHeight = stickyContainerRef.current.offsetHeight;
          var scrollTarget = totalHeight * percentage;
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: scrollTarget
            }
          });
        }

        onIntroComplete && onIntroComplete();
        setSkipIntro(true);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('click', _handleClick);
      }, 1000);
      enableBodyScroll(currentRef);
    });
    return function () {
      enableBodyScroll(currentRef);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', _handleClick);
      scrollTimeout && clearTimeout(scrollTimeout);
      removeLogoAnimation(animationRefs);
    };
  }, [enhanced, introTimeline, logoTimeline, mainTimeline, scrollTimeline, onIntroComplete, setSkipIntro, skipIntro, skipAutoScroll]);
  useIsomorphicLayoutEffect(function () {
    // SET UP SCROLLABLE PORTION OF INTRO
    if (enhanced && skipIntro) {
      scrollTimeline.fromTo([headlineRef.current, scrollIndicatorRef.current], {
        autoAlpha: 1
      }, {
        duration: 2,
        autoAlpha: 0
      }, 0);
      var scrollTrigger = ScrollTrigger.create({
        trigger: stickyContainerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        animation: scrollTimeline,
        scrub: true
      });
      return function () {
        scrollTrigger && scrollTrigger.kill();
      };
    }
  }, [enhanced, skipIntro, scrollTimeline]);
  return /*#__PURE__*/React.createElement(Section, _extends({
    ref: sectionRef
  }, restProps, {
    pt: 0,
    pb: 0
  }), /*#__PURE__*/React.createElement(StickyContainer, {
    enhanced: enhanced,
    ref: stickyContainerRef
  }, /*#__PURE__*/React.createElement(StickyElement, {
    top: top,
    heroHeight: height
  }, !!initialBackground && initialBackground, /*#__PURE__*/React.createElement(HeroContent, null, /*#__PURE__*/React.createElement(Headline, {
    variant: "h1",
    ref: headlineRef,
    $skipIntro: skipIntro || !enhanced
  }, headline), /*#__PURE__*/React.createElement(LogoContainer, {
    ref: svg
  }, /*#__PURE__*/React.createElement(LogoSVG, {
    shapeK1Ref: letterK1,
    shapeLRef: letterL,
    shapeIRef: letterI,
    shapeCRef: letterC,
    shapeK2Ref: letterK2,
    shapeDotRef: dot,
    shapeSubRef: subHead
  })), enhanced ? /*#__PURE__*/React.createElement(IntroMask, {
    background: background,
    dot: dot,
    skipIntro: skipIntro,
    mainIntroTimeline: introTimeline,
    isGradientOverlayEnabled: isGradientOverlayEnabled,
    mainScrollTimeline: scrollTimeline
  }) : /*#__PURE__*/React.createElement(BrandDot, null), /*#__PURE__*/React.createElement(ScrollIndicatorContainer, {
    ref: scrollIndicatorRef
  }, /*#__PURE__*/React.createElement(ScrollIndicator, null))), !enhanced && /*#__PURE__*/React.createElement(BackgroundContent, null, background))));
};

var buildLogoAnimation = function buildLogoAnimation(animationRefs) {
  var logoTimeline = animationRefs.logoTimeline,
      svg = animationRefs.svg,
      letterK1 = animationRefs.letterK1,
      letterL = animationRefs.letterL,
      letterI = animationRefs.letterI,
      letterC = animationRefs.letterC,
      letterK2 = animationRefs.letterK2,
      dot = animationRefs.dot,
      subHead = animationRefs.subHead,
      headlineRef = animationRefs.headlineRef,
      scrollIndicatorRef = animationRefs.scrollIndicatorRef;
  gsap.set(dot.current, {
    opacity: 0
  });
  gsap.set(svg.current, {
    opacity: 1
  });
  logoTimeline.fromTo([letterK1.current, letterL.current, letterI.current, letterC.current, letterK2.current], {
    opacity: 0
  }, {
    duration: 0.5,
    opacity: 1,
    ease: 'expo.inOut'
  }, 0);
  logoTimeline.from(letterK1.current, {
    duration: 0.5,
    y: -200
  }, 0);
  logoTimeline.from(letterL.current, {
    duration: 0.5,
    x: 50,
    y: -150
  }, 0);
  logoTimeline.from(letterI.current, {
    duration: 0.5,
    y: -100
  }, 0);
  logoTimeline.from(letterC.current, {
    duration: 0.5,
    rotation: 270,
    transformOrigin: '100% 0%'
  }, 0);
  logoTimeline.from(letterK2.current, {
    duration: 0.5,
    y: 200
  }, 0);
  logoTimeline.fromTo(subHead.current, {
    opacity: 0
  }, {
    duration: 1,
    opacity: 1,
    ease: 'expo.inOut'
  }, 0.3);
  var dotData = dot.current.getBoundingClientRect();
  var targetRadius = window.innerHeight * 0.75 / 2;
  var targetScale = targetRadius / (dotData.width / 2);
  logoTimeline.to(svg.current, {
    duration: 0.7,
    scale: targetScale,
    transformOrigin: '80% 50%',
    autoAlpha: 0,
    ease: ExpoScaleEase.config(1, targetScale, 'expo')
  }, 1.5);
  var titleLines = headlineRef.current.getElementsByTagName('span');
  logoTimeline.fromTo(titleLines, {
    opacity: 0
  }, {
    duration: 0.5,
    stagger: 0.05,
    opacity: 1
  }, 1.8);
  logoTimeline.from(titleLines, {
    duration: 0.5,
    stagger: 0.1,
    y: '100%',
    rotationX: -80,
    ease: 'power2'
  }, 1.8);
  logoTimeline.fromTo(scrollIndicatorRef.current, {
    opacity: 0
  }, {
    duration: 0.5,
    opacity: 1
  }, 1.8);
};

var removeLogoAnimation = function removeLogoAnimation(animationRefs) {
  var mainTimeline = animationRefs.mainTimeline,
      introTimeline = animationRefs.introTimeline,
      logoTimeline = animationRefs.logoTimeline,
      svg = animationRefs.svg,
      letterK1 = animationRefs.letterK1,
      letterL = animationRefs.letterL,
      letterI = animationRefs.letterI,
      letterC = animationRefs.letterC,
      letterK2 = animationRefs.letterK2,
      dot = animationRefs.dot,
      subHead = animationRefs.subHead,
      headlineRef = animationRefs.headlineRef,
      scrollIndicatorRef = animationRefs.scrollIndicatorRef;
  logoTimeline.clear();
  mainTimeline.remove(introTimeline);
  mainTimeline.remove(logoTimeline);
  logoTimeline.clear();
  introTimeline.clear();
  mainTimeline.clear();
  var titleLines = headlineRef.current.getElementsByTagName('span');
  gsap.set([svg.current, letterK1.current, letterL.current, letterI.current, letterC.current, letterK2.current, dot.current, subHead.current, headlineRef.current, scrollIndicatorRef.current, titleLines], {
    clearProps: 'all'
  });
};

var stickyLength = '2000px';
var stickyLengthSm = '4000px';
var StickyContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  ", ";\n\n  ", " {\n    height: ", ";\n  }\n"])), stickyLength, function (props) {
  return !props.enhanced && "\n      height: auto;\n\n      ".concat(StickyElement, " {\n        position: relative;\n        height: auto;\n        top: 0;\n      }\n\n      ").concat(HeroContent, " {\n        position: relative;\n        height: 100vh;\n      }\n\n      ").concat(BackgroundContent, " {\n        height: 100vh;\n        position: static;\n      }\n    ");
}, match.isSM, function (_ref2) {
  var enhanced = _ref2.enhanced;
  return enhanced ? stickyLengthSm : 'auto';
});
var ScrollIndicatorContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 3;\n  bottom: 90px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  opacity: 0;\n\n  ", " {\n    bottom: 50px;\n  }\n"])), match.isMD);
var BrandDot = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  background: ", ";\n  border-radius: 50%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  @media ", " {\n    height: 75vh;\n    width: 75vh;\n  }\n\n  @media ", " {\n    height: 75vw;\n    width: 75vw;\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
}, match.isLandscape, match.isPortrait);
var StickyElement = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  position: sticky;\n  overflow: hidden;\n  top: ", ";\n"])), function (_ref4) {
  var heroHeight = _ref4.heroHeight;
  return heroHeight;
}, function (_ref5) {
  var top = _ref5.top;
  return top;
});
var HeroContent = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])));
var BackgroundContent = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  width: 100%;\n"])));
var Headline = styled(Heading)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  z-index: 3;\n  text-align: center;\n  perspective: 600;\n  margin: 0;\n\n  > span {\n    transform-origin: center top;\n    display: block;\n    opacity: ", ";\n  }\n"])), function (_ref6) {
  var $skipIntro = _ref6.$skipIntro;
  return $skipIntro ? 1 : 0;
});
var LogoContainer = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0;\n  padding: 0;\n  z-index: 3;\n  max-width: 100px;\n  pointer-events: none;\n  opacity: 0;\n\n  ", " {\n    max-width: 150px;\n  }\n\n  ", " {\n    max-width: 250px;\n  }\n\n  @media (orientation: landscape) {\n    height: 50vh;\n    width: auto;\n  }\n  @media (orientation: portrait) {\n    width: 50vw;\n  }\n"])), match.isSM, match.isMD);
var LogoSVG = styled(KlickLogo)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(1);\n"])));

export default HeroMaskIntro;
//# sourceMappingURL=HeroMaskIntro.js.map

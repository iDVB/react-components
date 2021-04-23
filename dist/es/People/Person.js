import { taggedTemplateLiteral as _taggedTemplateLiteral, slicedToArray as _slicedToArray, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef, useState, useRef } from 'react';
import { Portal } from 'react-portal';
import { useIsomorphicLayoutEffect } from 'react-use';
import { Container } from '@material-ui/core';
import { disableBodyScroll, clearAllBodyScrollLocks, enableBodyScroll } from '../node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js';
import { GatsbyImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import { ExpoScaleEase } from 'gsap/EasePack';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled, { css } from 'styled-components';
import { tracking } from '../_common/tracking.js';
import { calcPageFillRadius } from '../_common/utils.js';
import ThemeProvider, { match } from '../_contexts/Theme.js';
import useInstance from '../_hooks/useInstance.js';
import { Heading, P, AvoidWrap, NoWrap } from '../Typography/Typography.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
var portraitMedia = "".concat(match.getQuery('isPortrait'), " and ").concat(match.getQuery('isSM'));
gsap.registerPlugin(ExpoScaleEase);
var Person = /*#__PURE__*/forwardRef(function (props, personRef) {
  var firstName = props.firstName,
      lastName = props.lastName,
      title = props.title,
      bio = props.bio,
      designation = props.designation,
      dcCode = props.dcCode,
      id = props.id,
      headshot = props.headshot,
      portrait = props.portrait,
      landscape = props.landscape,
      imageType = props.imageType;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var imageContainerRef = useRef();
  var closeBtnRef = useRef();
  var bioContentRef = useRef();
  var bioNameRef = useRef();
  var bioTitleRef = useRef();
  var bioCopyRef = useRef();
  var headshotRef = useRef();
  var headshotContainerRef = useRef();
  var circleCloneRef = useRef();
  var personContentRef = useRef();
  var timeline = useInstance(function () {
    return gsap.timeline({
      paused: true,
      onStart: function onStart() {
        tracking.track('Bio Viewed', {
          category: 'Page Interactions',
          action: 'Bio View',
          label: "".concat(firstName, " ").concat(lastName),
          dcCode: dcCode
        });
      },
      onComplete: function onComplete() {
        ScrollTrigger.getAll().forEach(function (scrollTrigger) {
          scrollTrigger.disable();
        });
        disableBodyScroll(personContentRef.current);
      },
      onReverseComplete: function onReverseComplete() {
        this.pause(0).clear();
        setIsOpen(false);
      }
    });
  });
  var sources = [landscape, _objectSpread2(_objectSpread2({}, portrait), {}, {
    media: portraitMedia
  })];

  var handleClick = function handleClick() {
    if (isOpen) {
      enableBodyScroll(personContentRef.current);
      ScrollTrigger.getAll().forEach(function (scrollTrigger) {
        scrollTrigger.enable();
      });
      timeline.reverse();
    } else {
      setIsOpen(true);
    }
  };

  useIsomorphicLayoutEffect(function () {
    if (isOpen) {
      animate({
        headshotRef: headshotRef,
        headshotContainerRef: headshotContainerRef,
        circleCloneRef: circleCloneRef,
        imageContainerRef: imageContainerRef,
        bioContentRef: bioContentRef,
        bioNameRef: bioNameRef,
        bioTitleRef: bioTitleRef,
        bioCopyRef: bioCopyRef,
        closeBtnRef: closeBtnRef,
        timeline: timeline
      });
      return function () {
        clearAllBodyScrollLocks();
      };
    }
  }, [isOpen, headshotRef, headshotContainerRef, circleCloneRef, imageContainerRef, bioContentRef, bioNameRef, bioTitleRef, bioCopyRef, closeBtnRef, timeline]);
  return /*#__PURE__*/React.createElement("div", {
    ref: personRef,
    id: id
  }, /*#__PURE__*/React.createElement(HeadshotContainer, {
    imageType: imageType,
    ref: headshotContainerRef,
    onClick: function onClick() {
      handleClick();
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: headshotRef
  }, /*#__PURE__*/React.createElement(Headshot, {
    imageType: imageType,
    image: headshot,
    alt: designation ? "".concat(firstName, " ").concat(lastName, ", ").concat(designation, ", ").concat(title) : "".concat(firstName, " ").concat(lastName, ", ").concat(title)
  }))), isOpen && /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(ThemeProvider, {
    themeType: "onPrimary"
  }, /*#__PURE__*/React.createElement(PortalContainer, null, /*#__PURE__*/React.createElement(CircleClone, {
    ref: circleCloneRef
  }), /*#__PURE__*/React.createElement(PersonContentContainer, null, /*#__PURE__*/React.createElement(HeaderGutter, null, /*#__PURE__*/React.createElement(CloseBtn, {
    onClick: handleClick,
    ref: closeBtnRef
  }, "Close")), /*#__PURE__*/React.createElement(PersonContent, {
    ref: personContentRef,
    imageType: imageType
  }, /*#__PURE__*/React.createElement(StyledGutter, {
    $imageType: imageType
  }, /*#__PURE__*/React.createElement(ImageContainer, {
    imageType: imageType,
    ref: imageContainerRef
  }, /*#__PURE__*/React.createElement("img", {
    className: "landscape",
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "portrait",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAQAAAAEnG+bAAAAD0lEQVR42mNkQAGMQ4ELAAVGAA1+PhR8AAAAAElFTkSuQmCC",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ExpandedHeadShot, {
    image: sources,
    fadeIn: false,
    imageType: imageType,
    alt: designation ? "".concat(firstName, " ").concat(lastName, ", ").concat(designation, ", ").concat(title) : "".concat(firstName, " ").concat(lastName, ", ").concat(title)
  }))), /*#__PURE__*/React.createElement(BioContent, {
    ref: bioContentRef
  }, /*#__PURE__*/React.createElement(BioContentInner, {
    imageType: imageType
  }, /*#__PURE__*/React.createElement("div", {
    ref: bioNameRef
  }, /*#__PURE__*/React.createElement(Name, {
    variant: "h2"
  }, firstName, ' ', /*#__PURE__*/React.createElement(AvoidWrap, null, lastName, designation && /*#__PURE__*/React.createElement(React.Fragment, null, ", ", /*#__PURE__*/React.createElement(NoWrap, null, designation))))), /*#__PURE__*/React.createElement(JobTitle, {
    paragraph: false,
    ref: bioTitleRef
  }, title), /*#__PURE__*/React.createElement(BioCopy, {
    ref: bioCopyRef
  }, bio))))))))));
});

var animate = function animate(_ref) {
  var headshotRef = _ref.headshotRef;
      _ref.headshotContainerRef;
      var circleCloneRef = _ref.circleCloneRef,
      imageContainerRef = _ref.imageContainerRef;
      _ref.bioContentRef;
      var bioNameRef = _ref.bioNameRef,
      bioTitleRef = _ref.bioTitleRef,
      bioCopyRef = _ref.bioCopyRef,
      closeBtnRef = _ref.closeBtnRef,
      timeline = _ref.timeline;
  var targetRect = headshotRef.current.getBoundingClientRect();
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  var x = targetRect.x,
      y = targetRect.y,
      width = targetRect.width,
      height = targetRect.height;
  var diameter = calcPageFillRadius(x + width * 0.5, y + height * 0.5, winWidth, winHeight) * 2;
  var scale = diameter / Math.min(height, width);
  timeline.set(circleCloneRef.current, {
    opacity: 0
  }).to(headshotRef.current, {
    duration: 0.3,
    opacity: 0
  }).set(circleCloneRef.current, {
    opacity: 1
  }).fromTo(circleCloneRef.current, {
    x: x,
    y: y,
    width: width,
    height: height
  }, {
    scale: scale,
    duration: 0.3,
    ease: ExpoScaleEase.config(1, scale)
  }).fromTo(imageContainerRef.current, {
    x: '-70%',
    opacity: 0
  }, {
    duration: 0.4,
    x: '-50%',
    opacity: 1
  }, 0.8).from([bioNameRef.current, bioTitleRef.current, bioCopyRef.current], {
    duration: 0.4,
    stagger: 0.15,
    opacity: 0,
    x: '+=50px',
    ease: 'power2'
  }, 0.8).from(closeBtnRef.current, {
    opacity: 0,
    y: '-=50px',
    duration: 0.4,
    ease: 'power2'
  }, 0.8).play();
};

var PortalContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2000;\n"])));
var CircleClone = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  opacity: 0;\n  background: ", ";\n  border-radius: 100%;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return "".concat(theme.palette.background["default"]);
});
var BioCopy = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 0 0 100px 0;\n\n  ", " {\n    padding: 0 0 100px 0;\n  }\n\n  ", " {\n    padding: 0 0 100px 0;\n  }\n\n  ", " {\n    padding: 0 6vw 100px 0;\n  }\n"])), match.isSM, match.isMD, match.isLG);
var CloseBtn = styled.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 55px;\n  width: 55px;\n  border-radius: 50%;\n  background: ", ";\n  position: relative;\n  color: transparent;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  border: 0;\n  z-index: 3;\n\n  ", " {\n    top: 42px;\n    right: 42px;\n  }\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    left: 50%;\n    width: 20px;\n    height: 2px;\n    background: ", ";\n  }\n  &:before {\n    transform: translate(-52%, 6px) rotate(-45deg);\n  }\n  &:after {\n    transform: translate(-52%, 6px) rotate(45deg);\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.secondary.main;
}, match.isSM, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.main;
});
var HeadshotContainer = styled.button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  background: ", ";\n  border-radius: 50%;\n  border: none;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  overflow: hidden;\n  transform: translate(0, 0);\n  font-size: 0;\n  cursor: pointer;\n"])), function (_ref5) {
  var theme = _ref5.theme,
      imageType = _ref5.imageType;
  return imageType === 'full' ? theme.palette.primary.main : 'none';
});
var PersonContentContainer = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  overflow: hidden;\n"])));
var personContentStylesRound = css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", " {\n    margin-top: 13vh;\n  }\n"])), match.isMD);
var personContentStylesFull = css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", " {\n    height: auto;\n    padding-top: 0;\n    overflow: hidden;\n  }\n"])), match.isSM);
var PersonContent = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  height: 100%;\n  padding-top: 60px;\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  ", "\n"])), function (_ref6) {
  var imageType = _ref6.imageType;

  switch (imageType) {
    case 'round':
      {
        return personContentStylesRound;
      }

    case 'full':
    default:
      {
        return personContentStylesFull;
      }
  }
});
var BioContent = styled.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  ", " {\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n    position: relative;\n    z-index: 2;\n  }\n"])), match.isSM);
var bioContentInnerRound = css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  ", " {\n    margin-top: 0;\n    padding-left: 50%;\n  }\n"])), match.isMD);
var bioContentInnerFull = css(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  ", " {\n    margin-top: 0;\n    padding: 13vh 8% 0 50%;\n  }\n  ", " {\n    padding-left: 50%;\n  }\n\n  ", " {\n    padding-left: 50%;\n  }\n"])), match.isSM, match.isMD, match.isLG);
var BioContentInner = styled.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref7) {
  var imageType = _ref7.imageType;

  switch (imageType) {
    case 'round':
      {
        return bioContentInnerRound;
      }

    case 'full':
    default:
      {
        return bioContentInnerFull;
      }
  }
});
var imageContainerStylesFull = css(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  background: ", ";\n\n  @media ", " {\n    & > img {\n      display: block;\n      height: 100%;\n\n      &.landscape {\n        display: none;\n      }\n    }\n  }\n\n  ", " {\n    position: absolute;\n    left: 26%;\n    bottom: 0;\n    border-radius: 0%;\n    background: none;\n    width: auto;\n    height: 95vh;\n    z-index: 1;\n    pointer-events: none;\n\n    & > img {\n      display: block;\n      height: 100%;\n\n      &.portait {\n        display: none;\n      }\n    }\n\n    & > div {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n  }\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return "".concat(theme.palette.primary.main);
}, portraitMedia, match.isSM);
var imageContainerStylesRound = css(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  & > img {\n    &.landscape {\n      display: none;\n    }\n\n    &.portrait {\n      display: none;\n    }\n  }\n\n  ", " {\n    position: absolute;\n    width: 350px;\n    height: 350px;\n\n    left: 26%;\n    top: 0;\n    pointer-events: none;\n    z-index: 1;\n  }\n\n  ", " {\n    width: 550px;\n    height: 550px;\n  }\n"])), match.isMD, match.isLG);
var ImageContainer = styled.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  text-align: center;\n  position: relative;\n  margin-top: 60px;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0;\n  left: 50%;\n\n  ", "\n"])), function (_ref9) {
  var imageType = _ref9.imageType;

  switch (imageType) {
    case 'round':
      {
        return imageContainerStylesRound;
      }

    case 'full':
    default:
      {
        return imageContainerStylesFull;
      }
  }
});
var headShotStylesFull = css(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  bottom: -6px;\n  height: 95%;\n\n  ", " {\n    bottom: 0;\n    height: 100%;\n    left: auto;\n    right: 50%;\n    transform: ", ";\n\n    border-radius: 0;\n  }\n\n  @media ", " {\n    transform: translate(44%, 0);\n  }\n\n  ", " {\n    height: 100%;\n    transform: ", ";\n  }\n"])), match.isSM, function (props) {
  return props.override ? "translate(".concat(props.override, ", 0)") : "translate(37%, 0)";
}, portraitMedia, match.isMD, function (props) {
  return props.override ? "translate(".concat(props.override, ", 0)") : "translate(49%, 0)";
});
var ExpandedHeadShot = styled(GatsbyImage)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  border-radius: 100%;\n  overflow: hidden;\n\n  ", "\n"])), function (_ref10) {
  var imageType = _ref10.imageType;

  switch (imageType) {
    case 'round':
      {
        return "";
      }

    case 'full':
    default:
      {
        return headShotStylesFull;
      }
  }
});
var HeaderGutter = styled(Container)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 3;\n"])));
var StyledGutter = styled(Container)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  ", ";\n  position: relative;\n  z-index: 2;\n\n  ", " {\n    max-width: none;\n  }\n"])), function (_ref11) {
  var $imageType = _ref11.$imageType;
  return $imageType === 'full' && "height: 100vh";
}, match.isSM);
var Name = styled(Heading)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin: 0;\n"])));
var JobTitle = styled(P)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  position: relative;\n  padding-bottom: 1.5em;\n  margin-bottom: 1.5em;\n\n  &:after {\n    content: ' ';\n    border-bottom: 1px black solid;\n    width: 70px;\n    height: 3px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n  }\n"])));
var Headshot = styled(GatsbyImage)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  width: auto;\n  height: auto;\n  position: absolute;\n  bottom: 0;\n  border-radius: 50%;\n  left: 50%;\n  max-height: ", ";\n  transform: ", ";\n"])), function (_ref12) {
  var imageType = _ref12.imageType;
  return imageType === 'full' ? "95%" : "100%";
}, function (_ref13) {
  var imageType = _ref13.imageType;
  return imageType === 'full' ? "translate(-50%, 7%)" : "translate(-50%, 0)";
});

export default Person;
//# sourceMappingURL=Person.js.map

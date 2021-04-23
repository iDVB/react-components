import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import styled, { css } from 'styled-components';
import { match } from '../_contexts/Theme.js';
import { P } from '../Typography/Typography.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

var Planet = function Planet(_ref) {
  var orbitTimeline = _ref.orbitTimeline,
      angleTimeline = _ref.angleTimeline,
      labelRef = _ref.labelRef,
      startPosition = _ref.startPosition,
      color = _ref.color,
      size = _ref.size,
      label = _ref.label,
      isMobile = _ref.isMobile,
      hasTrailingPlanet = _ref.hasTrailingPlanet;
  var pointRef = React.useRef();
  var planetRef = React.useRef();
  var solarPathRef = React.useRef();
  useIsomorphicLayoutEffect(function () {
    var point = pointRef.current;
    var planet = planetRef.current;
    var solarPath = solarPathRef.current;
    var label = labelRef.current;
    angleTimeline.to(point, {
      rotateX: isMobile ? -45 : -65,
      duration: 0.5
    }, 0).to(point, {
      rotateX: 0,
      duration: 0.5
    }, 0.5);
    orbitTimeline.add('rotate').set(point, {
      rotateY: 0,
      rotateZ: 360
    }, 'rotate').fromTo(planet, {
      backgroundPositionX: '50%'
    }, {
      duration: 0.25,
      backgroundPositionX: '58%'
    }, 'rotate').fromTo(planet, {
      backgroundPositionX: '58%'
    }, {
      duration: 0.25,
      backgroundPositionX: '72%'
    }).call(function () {
      if (orbitTimeline.progress() > 0.5) {
        return label.classList.add('onleft');
      }

      return label.classList.remove('onleft');
    }).fromTo(planet, {
      backgroundPositionX: '28%'
    }, {
      duration: 0.25,
      backgroundPositionX: '42%'
    }).fromTo(planet, {
      backgroundPositionX: '42%'
    }, {
      duration: 0.25,
      backgroundPositionX: '50%'
    }).fromTo(solarPath, {
      rotateZ: 0
    }, {
      rotateZ: 360
    }, 'rotate').to(point, {
      rotateY: 0,
      rotateZ: 0
    }, 'rotate');
    orbitTimeline.progress(startPosition);
  }, [angleTimeline, orbitTimeline, startPosition, size, labelRef, isMobile]);
  return /*#__PURE__*/React.createElement(SolarPath, {
    ref: solarPathRef
  }, /*#__PURE__*/React.createElement(Point, {
    ref: pointRef
  }, /*#__PURE__*/React.createElement(PlanetOrb, {
    ref: planetRef,
    $color: color,
    $size: size
  }), /*#__PURE__*/React.createElement(Label, {
    ref: labelRef,
    $size: size,
    variant: "blurb2",
    component: "h3",
    $hasTrailingPlanet: hasTrailingPlanet
  }, label)));
};

var SolarPath = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n"])));
var PlanetOrb = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  ", "\n  top: 0;\n  border-radius: 50%;\n  transform-style: preserve-3d;\n  background: ", ";\n  background-image: radial-gradient(\n    circle,\n    rgba(0, 0, 0, 0) 10%,\n    rgba(0, 0, 0, 0.7) 30%\n  );\n  background-position-y: 50%;\n  background-size: 1000%;\n  background-repeat: no-repeat;\n\n  ", " {\n    ", "\n  }\n"])), function (_ref2) {
  var $size = _ref2.$size;
  var sxSize = $size * 2;
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      width: ", "vw;\n      height: ", "vw;\n      margin-top: -", "vw;\n      margin-left: -", "vw;\n    "])), sxSize, sxSize, sxSize / 2, sxSize / 2);
}, function (_ref3) {
  var $color = _ref3.$color;
  return $color;
}, match.isSM, function (_ref4) {
  var $size = _ref4.$size;
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      width: ", "vw;\n      height: ", "vw;\n      margin-top: -", "vw;\n      margin-left: -", "vw;\n    "])), $size, $size, $size / 2, $size / 2);
});
var Point = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  transform-style: preserve-3d;\n  left: 50%;\n  top: -1px;\n  border: solid 3px red;\n"])));
var Label = styled(P)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  text-align: left;\n  font-size: 5vw;\n  line-height: 0.9em;\n  text-shadow: 0.1em 0.1em 0.2em #00000052;\n  ", "\n\n  ", "\n"])), function (_ref5) {
  var $hasTrailingPlanet = _ref5.$hasTrailingPlanet;
  return $hasTrailingPlanet && css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-top: 20px;\n        margin-left: 20px;\n      "])));
}, function (_ref6) {
  var $size = _ref6.$size;
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    transform: translate(-100%, -50%) translateX(-", "vw);\n    text-align: right;\n    &.onleft {\n      text-align: left;\n      transform: translate(", "vw, -50%);\n    }\n\n    ", " {\n      font-size: 2vw;\n      text-align: left;\n      transform-origin: left;\n      transform: translate(", "vw, -50%);\n\n      &.selected {\n        font-size: 4vw;\n      }\n\n      &.onleft {\n        transform: translate(-100%, -50%) translateX(-", "vw);\n      }\n    }\n  "])), $size / 2 + 2, $size / 2 + 2, match.isSM, $size / 2 + 2, $size / 2 + 2);
});

export default Planet;
//# sourceMappingURL=Planet.js.map

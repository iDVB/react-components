import { toConsumableArray as _toConsumableArray, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { gsap } from 'gsap';
import { ExpoScaleEase } from 'gsap/EasePack';
import styled from 'styled-components';
import { match } from '../_contexts/Theme.js';
import useInstance from '../_hooks/useInstance.js';

var _templateObject, _templateObject2, _templateObject3;
gsap.registerPlugin(ExpoScaleEase);

var LogoCarousel = function LogoCarousel(_ref) {
  var children = _ref.children,
      _ref$columnNum = _ref.columnNum,
      columnNum = _ref$columnNum === void 0 ? 6 : _ref$columnNum;
  var columns = chunkToColumns(children, columnNum);
  var columnRefs = useInstance(function () {
    return new Array(columnNum);
  });
  var columnJSX = columns.map(function (column, i) {
    if (!columnRefs[i]) columnRefs[i] = [];
    var logos = [].concat(_toConsumableArray(column), [column[0]]).map(function (logo, ii) {
      var ref = /*#__PURE__*/React.createRef();
      columnRefs[i][ii] = ref;
      return /*#__PURE__*/React.createElement(LogoWrapper, {
        key: ii,
        ref: ref
      }, logo);
    });
    return /*#__PURE__*/React.createElement(Column, {
      key: i
    }, logos);
  });
  useIsomorphicLayoutEffect(function () {
    var timelines = [];
    columnRefs.forEach(function (column) {
      var timeline = gsap.timeline({
        paused: true,
        repeat: -1
      });
      var logos = column.map(function (logo) {
        return logo.current;
      });
      logos.forEach(function (logo, i) {
        if (i) {
          timeline.fromTo(logo, {
            opacity: 0,
            rotationX: -80,
            yPercent: 50
          }, {
            duration: 0.5,
            opacity: 1,
            rotationX: 0,
            yPercent: 0,
            ease: 'power2'
          }, i === 0 ? 0 : '<');
          timeline.addPause();
        }

        if (i !== logos.length - 1) {
          timeline.to(logos, {
            duration: 0.5,
            opacity: 0,
            rotationX: 80,
            yPercent: -50,
            ease: 'power2'
          }, '+=1');
        }
      });
      timelines.push(timeline);
    });
    var interval = setInterval(function () {
      var randomTlIndex = randomIntFromInterval(0, timelines.length - 1);
      timelines[randomTlIndex].play();
    }, 3000);
    return function () {
      timelines.forEach(function (timeline) {
        timeline.clear();
      });
      clearInterval(interval);
    };
  }, [columnRefs]);
  return /*#__PURE__*/React.createElement(LogoCarouselContainer, null, columnJSX);
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var chunkToColumns = function chunkToColumns(array) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (size !== 1) size = Math.ceil(parseInt(size, 10));
  var length = array == null ? 0 : array.length;
  if (!length) return [];
  var result = Array(size);
  var i = 0;
  array.forEach(function (item) {
    if (!result[i]) result[i] = [];
    result[i].push(item);
    i = i === size - 1 ? 0 : i + 1;
  });
  return result;
};

var LogoCarouselContainer = styled.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"])));
var LogoWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n\n  & > * {\n    width: 100%;\n  }\n\n  &:not(:first-child) {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"])));
var Column = styled.li(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 50%;\n\n  ", " {\n    width: 25%;\n  }\n\n  ", " {\n    width: 16.6666%;\n  }\n"])), match.isSM, match.isMD);

export default LogoCarousel;
//# sourceMappingURL=LogoCarousel.js.map

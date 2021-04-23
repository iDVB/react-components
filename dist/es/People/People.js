import { extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import styled, { css } from 'styled-components';
import { reduceImages } from '../_common/utils.js';
import { match } from '../_contexts/Theme.js';
import { P, AvoidWrap, Decorator } from '../Typography/Typography.js';
import Person from './Person.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

var People = function People(_ref) {
  var peopleData = _ref.peopleData,
      peopleImages = _ref.peopleImages,
      _ref$imageType = _ref.imageType,
      imageType = _ref$imageType === void 0 ? 'full' : _ref$imageType,
      _ref$shouldShowNamesI = _ref.shouldShowNamesInListView,
      shouldShowNamesInListView = _ref$shouldShowNamesI === void 0 ? false : _ref$shouldShowNamesI,
      dotRefs = _ref.dotRefs;
  var headshots = reduceImages(peopleImages.headshot.edges);
  var portraits = reduceImages(peopleImages.portrait.edges);
  var landscapes = reduceImages(peopleImages.landscape.edges);
  var PeopleHtml = peopleData.map(function (data, index) {
    return /*#__PURE__*/React.createElement(PeopleListItem, {
      key: "".concat(data.publicId, "-").concat(index),
      shouldShowNamesInListView: shouldShowNamesInListView,
      count: peopleData.length
    }, /*#__PURE__*/React.createElement(Person, _extends({}, data, {
      imageType: imageType,
      headshot: headshots[data.publicId],
      portrait: portraits[data.publicId],
      landscape: landscapes[data.publicId],
      id: "peopleCircle-".concat(index + 1),
      ref: dotRefs.current[index]
    })), shouldShowNamesInListView && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NameAndTitle, null, /*#__PURE__*/React.createElement(P, {
      variant: "body2"
    }, /*#__PURE__*/React.createElement("strong", null, data.firstName, " ", data.lastName), data.designation && /*#__PURE__*/React.createElement(React.Fragment, null, ",\xA0", /*#__PURE__*/React.createElement(AvoidWrap, null, data.designation))), /*#__PURE__*/React.createElement(P, {
      variant: "body2"
    }, data.title)), /*#__PURE__*/React.createElement(StyledDecorator, null)));
  });
  return /*#__PURE__*/React.createElement(PeopleList, {
    id: "peopleList"
  }, PeopleHtml);
};

var PeopleList = styled.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  align-items: flex-start;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n"])));
var StyledDecorator = styled(Decorator)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  opacity: 0.5;\n  width: 100%;\n  margin-top: 35px;\n  margin-bottom: 30px;\n  ", " {\n    margin-bottom: 80px;\n  }\n"])), match.isSM);
var PeopleListItem = styled.li(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0;\n  display: block;\n\n  ", " {\n    flex: 0 0 50%;\n    padding: 8px;\n\n    &:nth-child(-n + 2) {\n      padding-top: 0;\n    }\n\n    &:nth-child(even) {\n      padding-right: 0;\n    }\n\n    &:nth-child(odd) {\n      padding-left: 0;\n    }\n  }\n\n  ", " {\n    ", "\n  }\n\n  ", " {\n    ", "\n  }\n"])), match.isXS, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.only('sm');
}, function (_ref3) {
  var count = _ref3.count;
  var primaryRowCount = 4;
  var secondaryRowCount = 3;
  var mod = count % (primaryRowCount + secondaryRowCount); // 4 / 3 stagger

  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        flex: 0 0 23.5%;\n        margin: 0 1%;\n\n        &:nth-child(7n - 3) {\n          margin-right: 0;\n        }\n\n        &:nth-child(7n - 6) {\n          margin-left: 0;\n        }\n\n        &:nth-child(7n) {\n          margin-right: 12.75%;\n        }\n\n        &:nth-child(7n - 2) {\n          margin-left: 12.75%;\n        }\n        ", "\n        ", "\n        ", "\n        ", "\n      "])), mod === 1 && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          &:nth-child(", ") {\n            margin-right: 25.5%;\n          }\n          &:nth-child(", ") {\n            margin-left: 12.75%;\n            margin-right: 1%;\n          }\n          &:nth-child(", ") {\n            margin: 0 1%;\n          }\n          &:nth-child(", ") {\n            margin-right: 12.75%;\n            margin-left: 1%;\n          }\n          &:nth-child(", ") {\n            margin: 0 1% 0 0;\n          }\n          &:nth-child(", ") {\n            margin: 0 1%;\n          }\n        "])), count - 5, count - 4, count - 3, count - 2, count - 1, count), mod === 3 && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          &:nth-child(", ") {\n            margin-right: 25.5%;\n          }\n        "])), count), mod === 5 && css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          &:nth-child(", ") {\n            margin-right: 25.5%;\n          }\n          &:nth-child(", ") {\n            margin-left: 0;\n            margin-right: 1%;\n          }\n          &:nth-child(", ") {\n            margin-left: 1%;\n            margin-right: 25.5%;\n          }\n        "])), count - 2, count - 1, count), mod === 6 && css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          &:nth-child(", ") {\n            margin-right: 25.5%;\n          }\n          &:nth-child(", ") {\n            margin-left: 12.75%;\n            margin-right: 1%;\n          }\n          &:nth-child(", ") {\n            margin-left: 1%;\n            margin-right: 1%;\n          }\n          &:nth-child(", ") {\n            margin-left: 1%;\n            margin-right: 12.75%;\n          }\n        "])), count - 3, count - 2, count - 1, count));
}, match.isMD, function (_ref4) {
  var count = _ref4.count;
  var primaryRowCount = 5;
  var secondaryRowCount = 4;
  var mod = count % (primaryRowCount + secondaryRowCount);
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        flex: 0 0 18.4%;\n        margin: 0 1%;\n\n        &:nth-child(9n - 8) {\n          margin-left: 0;\n        }\n\n        &:nth-child(9n - 4) {\n          margin-right: 0;\n        }\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n      "])), mod === 1 && css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n          &:nth-child(", ") {\n            margin-left: 1%;\n            margin-right: 20.4%;\n          }\n          &:nth-child(", ") {\n            margin: 0 1%;\n          }\n          &:nth-child(", ") {\n            margin-left: 1%;\n            margin-right: 21.4%;\n          }\n          &:nth-child(", "),\n          &:nth-child(", "),\n          &:nth-child(", ") {\n            margin: 0 1%;\n          }\n        "])), count - 6, count - 5, count - 3, count - 2, count - 1, count), mod === 2 && css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n          &:nth-child(", ") {\n            margin-right: 22%;\n          }\n          &:nth-child(", ") {\n            margin: 0 1% 0 0;\n          }\n          &:nth-child(", ") {\n            margin: 0 1%;\n          }\n        "])), count - 3, count - 2, count - 1), mod === 4 && css(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n          &:nth-child(", ") {\n            margin-right: 20.4%;\n          }\n        "])), count), mod === 6 && css(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n          &:nth-child(", ") {\n            margin-left: 20%;\n          }\n          &:nth-child(", ") {\n            margin-right: 20%;\n          }\n          &:nth-child(", ") {\n            margin: 0 1%;\n          }\n          &:nth-child(", ") {\n            margin-right: 21%;\n          }\n        "])), count - 5, count - 3, count - 1, count), mod === 7 && css(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n          &:nth-child(", "),\n          &:nth-child(", ") {\n            margin-right: 20.4%;\n          }\n          &:nth-child(", ") {\n            margin: 0 1% 0 0;\n          }\n        "])), count - 3, count, count - 2), mod === 8 && css(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n          &:nth-child(", ") {\n            margin-right: 20%;\n          }\n          &:nth-child(", ") {\n            margin-right: 1%;\n          }\n        "])), count - 4, count - 3));
});
var NameAndTitle = styled.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  min-height: 100px;\n  margin-top: 30px;\n  text-align: center;\n\n  ", " {\n    min-height: 75px;\n  }\n"])), match.isMD);

export default People;
//# sourceMappingURL=People.js.map

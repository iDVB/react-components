import { extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { fade, Accordion as Accordion$1, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { match } from '../_contexts/Theme.js';
import { Heading, P } from '../Typography/Typography.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
// item.details can be a string, or a React.node. If it is a string, it will be wrapped in a <P> component by default.

var Accordion = function Accordion(_ref) {
  var items = _ref.items,
      _ref$summaryHeadingVa = _ref.summaryHeadingVariant,
      summaryHeadingVariant = _ref$summaryHeadingVa === void 0 ? 'h3' : _ref$summaryHeadingVa,
      _ref$summaryHeadingCo = _ref.summaryHeadingComponent,
      summaryHeadingComponent = _ref$summaryHeadingCo === void 0 ? 'h3' : _ref$summaryHeadingCo,
      _ref$summaryExtraMUIP = _ref.summaryExtraMUIProps,
      summaryExtraMUIProps = _ref$summaryExtraMUIP === void 0 ? {} : _ref$summaryExtraMUIP,
      _ref$detailsExtraMUIP = _ref.detailsExtraMUIProps,
      detailsExtraMUIProps = _ref$detailsExtraMUIP === void 0 ? {} : _ref$detailsExtraMUIP,
      _ref$accordionExtraMU = _ref.accordionExtraMUIProps,
      accordionExtraMUIProps = _ref$accordionExtraMU === void 0 ? {} : _ref$accordionExtraMU;
  return /*#__PURE__*/React.createElement(AccordionContainer, null, items.map(function (_ref2) {
    var summary = _ref2.summary,
        details = _ref2.details;
    var itemId = nanoid();
    var summaryId = nanoid();
    var itemSummary = typeof summary === 'string' ? /*#__PURE__*/React.createElement(StyledHeading, {
      variant: summaryHeadingVariant,
      component: summaryHeadingComponent
    }, summary) : summary;
    var itemDetails = typeof details === 'string' ? /*#__PURE__*/React.createElement(P, null, details) : details;
    return /*#__PURE__*/React.createElement(StyledAccordion, _extends({
      key: itemId
    }, accordionExtraMUIProps), /*#__PURE__*/React.createElement(StyledAccordionSummary, _extends({
      expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null),
      "aria-controls": "panel-".concat(summaryId, "-content"),
      id: "panel-".concat(itemId, "-header")
    }, summaryExtraMUIProps), /*#__PURE__*/React.createElement(SummaryContainer, null, itemSummary)), /*#__PURE__*/React.createElement(StyledAccordionDetails, detailsExtraMUIProps, itemDetails));
  }));
};

var AccordionContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > * {\n    border-top: 2px solid\n      ", ";\n  }\n\n  > :last-child {\n    border-bottom: 2px solid\n      ", ";\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return fade(theme.palette.text.primary, 0.3);
}, function (_ref4) {
  var theme = _ref4.theme;
  return fade(theme.palette.text.primary, 0.3);
});
var StyledHeading = styled(Heading)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 0;\n"])));
var SummaryContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  max-width: 70%;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(2);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(2);
});
var StyledAccordion = styled(Accordion$1)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background: ", ";\n\n  :before {\n    display: none;\n  }\n\n  &.Mui-expanded {\n    margin-top: 0;\n    margin-bottom: 0;\n    ", " {\n      color: ", ";\n    }\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.background["default"];
}, Heading, function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.primary.main;
});
var StyledAccordionSummary = styled(AccordionSummary)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding-left: 0;\n  padding-right: 0;\n\n  & > .MuiAccordionSummary-content.Mui-expanded {\n    margin: 12px 0;\n  }\n"])));
var StyledAccordionDetails = styled(AccordionDetails)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: block;\n\n  ", " {\n    padding-left: 70px;\n    padding-right: 70px;\n  }\n"])), match.isMD);

export default Accordion;
//# sourceMappingURL=Accordion.js.map

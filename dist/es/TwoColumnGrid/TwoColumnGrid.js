import { objectWithoutProperties as _objectWithoutProperties, extends as _extends, defineProperty as _defineProperty } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import FadeIn from '../FadeIn/FadeIn.js';

var defaultProps = {
  columnContents: ['COLUMN ONE CONTENT HERE', 'COLUMN TWO CONTENT HERE'],
  columnProps: [{}, {}],
  columnWidths: ['50%', '50%'],
  fade: [true, true],
  innerSpacing: {
    mobile: 4,
    breakingPoint: 12
  }
};

var TwoColumnGrid = function TwoColumnGrid(props) {
  var _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
      _props$breakingPoint = props.breakingPoint,
      breakingPoint = _props$breakingPoint === void 0 ? 'md' : _props$breakingPoint,
      _props$columnContents = props.columnContents,
      columnContents = _props$columnContents === void 0 ? defaultProps.columnContents : _props$columnContents,
      _props$columnWidths = props.columnWidths,
      columnWidths = _props$columnWidths === void 0 ? defaultProps.columnWidths : _props$columnWidths,
      _props$columnProps = props.columnProps,
      columnProps = _props$columnProps === void 0 ? defaultProps.columnProps : _props$columnProps,
      _props$fade = props.fade,
      fade = _props$fade === void 0 ? defaultProps.fade : _props$fade,
      _props$innerSpacing = props.innerSpacing,
      innerSpacing = _props$innerSpacing === void 0 ? defaultProps.innerSpacing : _props$innerSpacing;
      props.children;
      var rest = _objectWithoutProperties(props, ["direction", "alignItems", "breakingPoint", "columnContents", "columnWidths", "columnProps", "fade", "innerSpacing", "children"]);

  var columnOneFadeDirection = direction === 'row-reverse' ? 'right' : 'left';
  var columnTwoFadeDirection = direction === 'row-reverse' ? 'left' : 'right';
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: _defineProperty({}, breakingPoint, 'flex'),
    alignItems: _defineProperty({}, breakingPoint, alignItems),
    flexDirection: _defineProperty({}, breakingPoint, direction)
  }, rest), /*#__PURE__*/React.createElement(FadeIn, {
    from: columnOneFadeDirection,
    enabled: fade[0]
  }, /*#__PURE__*/React.createElement(Box, _extends({
    paddingLeft: _defineProperty({}, breakingPoint, direction === 'row' ? 0 : innerSpacing.breakingPoint / 2),
    paddingRight: _defineProperty({}, breakingPoint, direction === 'row-reverse' ? 0 : innerSpacing.breakingPoint / 2),
    paddingBottom: _defineProperty({
      xs: innerSpacing.mobile / 2
    }, breakingPoint, 0),
    width: _defineProperty({
      xs: '100%'
    }, breakingPoint, columnWidths[0])
  }, columnProps[0]), columnContents[0])), /*#__PURE__*/React.createElement(FadeIn, {
    from: columnTwoFadeDirection,
    enabled: fade[1]
  }, /*#__PURE__*/React.createElement(Box, _extends({
    paddingLeft: _defineProperty({}, breakingPoint, direction === 'row' ? innerSpacing.breakingPoint / 2 : 0),
    paddingRight: _defineProperty({}, breakingPoint, direction === 'row-reverse' ? innerSpacing.breakingPoint / 2 : 0),
    paddingTop: _defineProperty({
      xs: innerSpacing.mobile / 2
    }, breakingPoint, 0),
    width: _defineProperty({
      xs: '100%'
    }, breakingPoint, columnWidths[1])
  }, columnProps[1]), columnContents[1])));
};

TwoColumnGrid.propTypes = {
  direction: PropTypes.oneOf(['row', 'row-reverse']),
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  columns: PropTypes.array,
  columnWidths: PropTypes.arrayOf(PropTypes.string),
  breakingPoint: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  innerSpacing: PropTypes.shape({
    mobile: PropTypes.number,
    breakingPoint: PropTypes.number
  }),
  fade: PropTypes.arrayOf(PropTypes.bool)
};

export default TwoColumnGrid;
//# sourceMappingURL=TwoColumnGrid.js.map

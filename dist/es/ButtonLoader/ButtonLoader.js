import { objectWithoutProperties as _objectWithoutProperties, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button.js';

var _templateObject, _templateObject2;

var ButtonLoader = function ButtonLoader(_ref) {
  var loading = _ref.loading,
      _ref$loaderColor = _ref.loaderColor,
      loaderColor = _ref$loaderColor === void 0 ? 'primary' : _ref$loaderColor,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ["loading", "loaderColor", "disabled"]);

  return /*#__PURE__*/React.createElement(ButtonContainer, null, /*#__PURE__*/React.createElement(Button, _extends({}, rest, {
    disabled: loading || disabled
  })), loading && /*#__PURE__*/React.createElement(LoaderContainer, null, /*#__PURE__*/React.createElement(CircularProgress, {
    color: loaderColor
  })));
};
ButtonLoader.defaultProps = {
  loading: false
};
ButtonLoader.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool
};
var ButtonContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n"])));
var LoaderContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: -50px;\n  top: 50%;\n  transform: translate(0, -50%);\n"])));

export default ButtonLoader;
//# sourceMappingURL=ButtonLoader.js.map

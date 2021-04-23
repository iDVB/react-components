import { objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

var _templateObject;

var TextField = function TextField(_ref) {
  var helperText = _ref.helperText,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      props = _objectWithoutProperties(_ref, ["helperText", "variant"]);

  var _useField = useField(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/React.createElement(StyledMuiTextField, _extends({
    variant: variant,
    error: meta.touched && !!meta.error,
    helperText: meta.touched && meta.error || helperText
  }, field, props));
};

var StyledMuiTextField = styled(MuiTextField)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  label.Mui-focused {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.palette.text.secondary;
});
TextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default TextField;
//# sourceMappingURL=TextField.js.map

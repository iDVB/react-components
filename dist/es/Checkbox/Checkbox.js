import { objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef } from 'react';
import { FormControl, FormControlLabel, Checkbox as Checkbox$1, FormHelperText } from '@material-ui/core';
import { useField } from 'formik';

var Checkbox = function Checkbox(_ref) {
  var helperText = _ref.helperText,
      props = _objectWithoutProperties(_ref, ["helperText"]);

  var _useField = useField(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/React.createElement(LabeledCheckbox, _extends({
    error: meta.touched && !!meta.error,
    helperText: meta.touched && meta.error || helperText
  }, field, props));
};

var LabeledCheckbox = /*#__PURE__*/forwardRef(function (props, ref) {
  var label = props.label,
      _props$labelPlacement = props.labelPlacement,
      labelPlacement = _props$labelPlacement === void 0 ? 'top' : _props$labelPlacement,
      onMouseOver = props.onMouseOver,
      onMouseLeave = props.onMouseLeave,
      onTouchStart = props.onTouchStart,
      onTouchEnd = props.onTouchEnd,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      helperText = props.helperText,
      error = props.error,
      restProps = _objectWithoutProperties(props, ["label", "labelPlacement", "onMouseOver", "onMouseLeave", "onTouchStart", "onTouchEnd", "onFocus", "onBlur", "helperText", "error"]);

  return /*#__PURE__*/React.createElement(FormControl, {
    error: error
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    ref: ref,
    htmlFor: restProps.id,
    label: label,
    labelPlacement: labelPlacement,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd,
    onFocus: onFocus,
    onBlur: onBlur,
    control: /*#__PURE__*/React.createElement(Checkbox$1, _extends({
      checked: restProps.value,
      color: "primary"
    }, restProps))
  }), helperText && /*#__PURE__*/React.createElement(FormHelperText, null, helperText));
});

export default Checkbox;
//# sourceMappingURL=Checkbox.js.map

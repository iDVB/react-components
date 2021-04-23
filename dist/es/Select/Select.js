import { objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { useRef, useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import MuiSelect from '@material-ui/core/Select';
import { useField } from 'formik';

var SelectField = function SelectField(_ref) {
  var helperText = _ref.helperText,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
      props = _objectWithoutProperties(_ref, ["helperText", "variant"]);

  var _useField = useField(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/React.createElement(MuiSelectField, _extends({
    variant: variant,
    error: meta.touched && !!meta.error,
    helperText: meta.touched && meta.error || helperText
  }, field, props));
};

var MuiSelectField = function MuiSelectField(_ref2) {
  var label = _ref2.label,
      options = _ref2.options,
      variant = _ref2.variant,
      id = _ref2.id,
      name = _ref2.name,
      helperText = _ref2.helperText,
      fullWidth = _ref2.fullWidth,
      restProps = _objectWithoutProperties(_ref2, ["label", "options", "variant", "id", "name", "helperText", "fullWidth"]);

  var inputLabel = useRef(null);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      labelWidth = _useState2[0],
      setLabelWidth = _useState2[1];

  useEffect(function () {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return /*#__PURE__*/React.createElement(FormControl, _extends({}, fullWidth ? {
    fullWidth: fullWidth
  } : null, variant ? {
    variant: variant
  } : null), /*#__PURE__*/React.createElement(InputLabel, {
    id: id,
    ref: inputLabel
  }, label), /*#__PURE__*/React.createElement(MuiSelect, _extends({}, restProps, {
    inputProps: {
      name: name,
      id: id
    },
    labelId: id,
    labelWidth: labelWidth
  }), options && options.map(function (_ref3) {
    var label = _ref3.label,
        value = _ref3.value;
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: value,
      value: value
    }, label);
  })), helperText && /*#__PURE__*/React.createElement(FormHelperText, null, helperText));
};

export default SelectField;
//# sourceMappingURL=Select.js.map

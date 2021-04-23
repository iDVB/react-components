import { objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import MuiRadioGroup from '@material-ui/core/RadioGroup';
import { useField } from 'formik';

var RadioGroup = function RadioGroup(_ref) {
  var helperText = _ref.helperText,
      props = _objectWithoutProperties(_ref, ["helperText"]);

  var _useField = useField(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/React.createElement(MuiRadioField, _extends({
    error: meta.touched && !!meta.error,
    helperText: meta.touched && meta.error || helperText
  }, field, props));
};

var MuiRadioField = function MuiRadioField(_ref2) {
  var label = _ref2.label,
      options = _ref2.options,
      id = _ref2.id,
      name = _ref2.name;
      _ref2.error;
      var helperText = _ref2.helperText,
      fullWidth = _ref2.fullWidth,
      restProps = _objectWithoutProperties(_ref2, ["label", "options", "id", "name", "error", "helperText", "fullWidth"]);

  return /*#__PURE__*/React.createElement(FormControl, _extends({
    component: "fieldset"
  }, fullWidth ? {
    fullWidth: fullWidth
  } : null), /*#__PURE__*/React.createElement(FormLabel, {
    component: "legend"
  }, label), /*#__PURE__*/React.createElement(MuiRadioGroup, _extends({
    id: id,
    name: name
  }, restProps, {
    "aria-label": label
  }), options && options.map(function (_ref3) {
    var label = _ref3.label,
        value = _ref3.value;
    return /*#__PURE__*/React.createElement(FormControlLabel, {
      key: value,
      value: value,
      control: /*#__PURE__*/React.createElement(Radio, {
        color: "primary"
      }),
      label: label
    });
  })), helperText && /*#__PURE__*/React.createElement(FormHelperText, null, helperText));
};

export default RadioGroup;
//# sourceMappingURL=RadioGroup.js.map

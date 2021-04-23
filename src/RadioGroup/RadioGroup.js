import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import MuiRadioGroup from '@material-ui/core/RadioGroup'
import { useField } from 'formik'

const RadioGroup = ({ helperText, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <MuiRadioField
      error={meta.touched && !!meta.error}
      helperText={(meta.touched && meta.error) || helperText}
      {...field}
      {...props}
    />
  )
}

const MuiRadioField = ({
  label,
  options,
  id,
  name,
  error,
  helperText,
  fullWidth,
  ...restProps
}) => {
  return (
    <FormControl component="fieldset" {...(fullWidth ? { fullWidth } : null)}>
      <FormLabel component="legend">{label}</FormLabel>
      <MuiRadioGroup id={id} name={name} {...restProps} aria-label={label}>
        {options &&
          options.map(({ label, value }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio color="primary" />}
              label={label}
            />
          ))}
      </MuiRadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default RadioGroup

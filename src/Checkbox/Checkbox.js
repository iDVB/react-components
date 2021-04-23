import React, { forwardRef } from 'react'
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel as MuiFormControlLabel,
  FormHelperText,
} from '@material-ui/core'
import { useField } from 'formik'

const Checkbox = ({ helperText, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <LabeledCheckbox
      error={meta.touched && !!meta.error}
      helperText={(meta.touched && meta.error) || helperText}
      {...field}
      {...props}
    />
  )
}

const LabeledCheckbox = forwardRef((props, ref) => {
  const {
    label,
    labelPlacement = 'top',
    onMouseOver,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
    onFocus,
    onBlur,
    helperText,
    error,
    ...restProps
  } = props
  return (
    <FormControl error={error}>
      <MuiFormControlLabel
        ref={ref}
        htmlFor={restProps.id}
        {...{
          label,
          labelPlacement,
          onMouseOver,
          onMouseLeave,
          onTouchStart,
          onTouchEnd,
          onFocus,
          onBlur,
        }}
        control={
          <MuiCheckbox
            checked={restProps.value}
            color="primary"
            {...restProps}
          />
        }
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
})

export default Checkbox

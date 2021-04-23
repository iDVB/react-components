import React, { useEffect, useRef, useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import MuiSelect from '@material-ui/core/Select'
import { useField } from 'formik'

const SelectField = ({ helperText, variant = 'outlined', ...props }) => {
  const [field, meta] = useField(props)
  return (
    <MuiSelectField
      variant={variant}
      error={meta.touched && !!meta.error}
      helperText={(meta.touched && meta.error) || helperText}
      {...field}
      {...props}
    />
  )
}

const MuiSelectField = ({
  label,
  options,
  variant,
  id,
  name,
  helperText,
  fullWidth,
  ...restProps
}) => {
  const inputLabel = useRef(null)
  const [labelWidth, setLabelWidth] = useState(0)

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  return (
    <FormControl
      {...(fullWidth ? { fullWidth } : null)}
      {...(variant ? { variant } : null)}
    >
      <InputLabel id={id} ref={inputLabel}>
        {label}
      </InputLabel>
      <MuiSelect
        {...restProps}
        inputProps={{
          name,
          id,
        }}
        labelId={id}
        labelWidth={labelWidth}
      >
        {options &&
          options.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default SelectField

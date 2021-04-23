import React from 'react'
import MuiTextField from '@material-ui/core/TextField'
import { useField } from 'formik'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextField = ({ helperText, variant = 'outlined', ...props }) => {
  const [field, meta] = useField(props)
  return (
    <StyledMuiTextField
      variant={variant}
      error={meta.touched && !!meta.error}
      helperText={(meta.touched && meta.error) || helperText}
      {...field}
      {...props}
    />
  )
}

const StyledMuiTextField = styled(MuiTextField)`
  label.Mui-focused {
    color: ${(props) => props.theme.palette.text.secondary};
  }
`

TextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TextField

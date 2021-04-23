import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../Button/Button'

const ButtonLoader = ({
  loading,
  loaderColor = 'primary',
  disabled,
  ...rest
}) => {
  return (
    <ButtonContainer>
      <Button {...rest} disabled={loading || disabled} />
      {loading && (
        <LoaderContainer>
          <CircularProgress color={loaderColor} />
        </LoaderContainer>
      )}
    </ButtonContainer>
  )
}

export default ButtonLoader

ButtonLoader.defaultProps = {
  loading: false,
}

ButtonLoader.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
}

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`

const LoaderContainer = styled.div`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translate(0, -50%);
`

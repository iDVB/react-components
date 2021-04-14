import React from 'react'
import { Backdrop } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { fade, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import styled, { css } from 'styled-components'

import { useModalContext } from '../_contexts/Modal'
import { match } from '../_contexts/Theme'

const defaultProps = {
  titleProps: {},
}

export default function ResponsiveDialog({
  dialogTitle,
  titleHeadingProps = defaultProps.titleProps,
  open,
  dialogContent,
  dialogActions,
  onClose,
  ...dialogProps
}) {
  const { setIsModalOpen } = useModalContext()

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'))

  React.useEffect(() => {
    setIsModalOpen(open)
  }, [open, setIsModalOpen])

  return (
    <StyledDialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        bgcolor: 'blue',
      }}
      BackdropComponent={StyledBackDrop}
      {...dialogProps}
      maxWidth="sm"
    >
      <StyledDialogTitle disableTypography={true} id="responsive-dialog-title">
        {dialogTitle}
      </StyledDialogTitle>
      <DialogContent>{dialogContent}</DialogContent>
      <StyledDialogActions>{dialogActions}</StyledDialogActions>
    </StyledDialog>
  )
}

const StyledBackDrop = styled(Backdrop)`
  ${({ theme }) => css`
    background-color: ${fade(theme.palette.secondary.main, 0.5)};
    backdrop-filter: blur(10px);
  `}
`

const StyledDialogTitle = styled(DialogTitle)`
  ${({ theme }) => css`
    padding-top: ${theme.spacing(3)}px;
  `}
`

const StyledDialogActions = styled(DialogActions)`
  ${({ theme }) => css`
    /* margin-top: ${theme.spacing(2)}px; */
    padding: ${theme.spacing(3)}px ${theme.spacing(3)}px;
  `}
`

const StyledDialog = styled(Dialog)`
  ${({ theme }) => css`
    [class*='MuiDialog-paper-'] {
      background-color: ${theme.palette.background.default};
      /* padding: ${theme.spacing(5)}px ${theme.spacing(2)}px; */

      ${match.isSM} {
        /* padding: ${theme.spacing(7)}px; */
        border-right: 4px solid ${theme.palette.primary.main};
      }
    }
  `}
`

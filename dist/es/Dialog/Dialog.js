import { objectWithoutProperties as _objectWithoutProperties, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { Backdrop } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme, fade } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styled, { css } from 'styled-components';
import { useModalContext } from '../_contexts/Modal.js';
import { match } from '../_contexts/Theme.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function ResponsiveDialog(_ref) {
  var dialogTitle = _ref.dialogTitle;
      _ref.titleHeadingProps;
      var open = _ref.open,
      dialogContent = _ref.dialogContent,
      dialogActions = _ref.dialogActions,
      onClose = _ref.onClose,
      dialogProps = _objectWithoutProperties(_ref, ["dialogTitle", "titleHeadingProps", "open", "dialogContent", "dialogActions", "onClose"]);

  var _useModalContext = useModalContext(),
      setIsModalOpen = _useModalContext.setIsModalOpen;

  var theme = useTheme();
  var fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  React.useEffect(function () {
    setIsModalOpen(open);
  }, [open, setIsModalOpen]);
  return /*#__PURE__*/React.createElement(StyledDialog, _extends({
    fullScreen: fullScreen,
    open: open,
    onClose: onClose,
    "aria-labelledby": "responsive-dialog-title",
    PaperProps: {
      bgcolor: 'blue'
    },
    BackdropComponent: StyledBackDrop
  }, dialogProps, {
    maxWidth: "sm"
  }), /*#__PURE__*/React.createElement(StyledDialogTitle, {
    disableTypography: true,
    id: "responsive-dialog-title"
  }, dialogTitle), /*#__PURE__*/React.createElement(DialogContent, null, dialogContent), /*#__PURE__*/React.createElement(StyledDialogActions, null, dialogActions));
}
var StyledBackDrop = styled(Backdrop)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    backdrop-filter: blur(10px);\n  "])), fade(theme.palette.secondary.main, 0.5));
});
var StyledDialogTitle = styled(DialogTitle)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding-top: ", "px;\n  "])), theme.spacing(3));
});
var StyledDialogActions = styled(DialogActions)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    /* margin-top: ", "px; */\n    padding: ", "px ", "px;\n  "])), theme.spacing(2), theme.spacing(3), theme.spacing(3));
});
var StyledDialog = styled(Dialog)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    [class*='MuiDialog-paper-'] {\n      background-color: ", ";\n      /* padding: ", "px ", "px; */\n\n      ", " {\n        /* padding: ", "px; */\n        border-right: 4px solid ", ";\n      }\n    }\n  "])), theme.palette.background["default"], theme.spacing(5), theme.spacing(2), match.isSM, theme.spacing(7), theme.palette.primary.main);
});

export default ResponsiveDialog;
//# sourceMappingURL=Dialog.js.map

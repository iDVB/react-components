import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { tracking } from '../_common/tracking.js';

var useStyles = makeStyles(function (theme) {
  return {
    root: {
      position: 'fixed',
      zIndex: 20,
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  };
});

function ScrollTop(props) {
  var children = props.children,
      window = props.window;
  var classes = useStyles(); // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  var trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  var handleClick = function handleClick(event) {
    tracking.track('Back to Top Button Clicked', {
      category: 'Page Interactions',
      action: 'Back to Top Click'
    });
    var anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return /*#__PURE__*/React.createElement(Zoom, {
    "in": trigger
  }, /*#__PURE__*/React.createElement("div", {
    onClick: handleClick,
    role: "presentation",
    className: classes.root
  }, children));
}

var BackToTop = function BackToTop(props) {
  return /*#__PURE__*/React.createElement(ScrollTop, props, /*#__PURE__*/React.createElement(Fab, {
    color: "primary",
    size: "small",
    "aria-label": "scroll back to top"
  }, /*#__PURE__*/React.createElement(KeyboardArrowUpIcon, null)));
};

export default BackToTop;
//# sourceMappingURL=BackToTop.js.map

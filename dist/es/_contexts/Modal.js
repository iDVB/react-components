import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';

var ModalContext = /*#__PURE__*/React.createContext();

var ModalProvider = function ModalProvider(_ref) {
  var children = _ref.children;
      _ref.disableBlur;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isModalOpen = _React$useState2[0],
      setIsModalOpen = _React$useState2[1];

  var value = {
    isModalOpen: isModalOpen,
    setIsModalOpen: setIsModalOpen
  };
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: value
  }, children);
};

var useModalContext = function useModalContext() {
  var context = React.useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }

  return context;
};

export { ModalProvider, useModalContext };
//# sourceMappingURL=Modal.js.map

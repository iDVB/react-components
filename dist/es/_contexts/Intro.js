import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState } from 'react';

var IntroContext = /*#__PURE__*/React.createContext();

var IntroProvider = function IntroProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      skipIntro = _useState2[0],
      setSkipIntro = _useState2[1];

  var value = {
    skipIntro: skipIntro,
    setSkipIntro: setSkipIntro
  };
  return /*#__PURE__*/React.createElement(IntroContext.Provider, {
    value: value
  }, children);
};

var useIntroContext = function useIntroContext() {
  var context = React.useContext(IntroContext);

  if (context === undefined) {
    throw new Error('useIntroContext must be used within a IntroProvider');
  }

  return context;
};

export { IntroProvider, useIntroContext };
//# sourceMappingURL=Intro.js.map

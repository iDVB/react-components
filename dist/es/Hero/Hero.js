import React from 'react';
import styled from 'styled-components';

var Hero = function Hero(props) {
  var _props$heading = props.heading,
      heading = _props$heading === void 0 ? 'Put Heading Here' : _props$heading;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImgHolder, null, /*#__PURE__*/React.createElement(StyledImg, null)), /*#__PURE__*/React.createElement(StyledHeading, {
    variant: "h1"
  }, heading));
};

var StyledHeading = styled.h1.withConfig({
  displayName: "Hero__StyledHeading",
  componentId: "b5r56t-0"
})(["position:relative;margin:0;color:black;z-index:2;"]);
var ImgHolder = styled.div.withConfig({
  displayName: "Hero__ImgHolder",
  componentId: "b5r56t-1"
})(["position:absolute;width:100%;height:100%;z-index:2;"]);
var StyledImg = styled.div.withConfig({
  displayName: "Hero__StyledImg",
  componentId: "b5r56t-2"
})(["height:100%;"]);

export default Hero;
//# sourceMappingURL=Hero.js.map

import React from 'react';
import styled from 'styled-components';

var CookieBanner = function CookieBanner() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Banner, null, /*#__PURE__*/React.createElement(BannerContainer, null, /*#__PURE__*/React.createElement(BannerCopy, {
    variant: "body2"
  }, "We use cookies and other tracking technologies to assist with navigation, analyze your use of our services, and assist with our promotional and marketing efforts.", ' ', /*#__PURE__*/React.createElement(BannerTextButton, null, "View cookie options")), /*#__PURE__*/React.createElement(BannerButton, {
    "aria-label": "Accept"
  }, "Accept"))));
};

var Banner = styled.div.withConfig({
  displayName: "CookieBanner__Banner",
  componentId: "e360sv-0"
})(["position:fixed;left:0;right:0;bottom:0;margin:0;padding:0;width:100%;color:#ffffff;background-color:#000000;font-size:12px;transition:all 0.3s;transform:translateY(0);z-index:9999;"]);
var BannerContainer = styled.div.withConfig({
  displayName: "CookieBanner__BannerContainer",
  componentId: "e360sv-1"
})(["margin:0;padding:20px;@media (min-width:600px){display:flex;align-items:center;padding:20px;}@media (min-width:960px){margin:0 7.5%;padding:20px 0;}"]);
var BannerCopy = styled.p.withConfig({
  displayName: "CookieBanner__BannerCopy",
  componentId: "e360sv-2"
})(["margin:0 0 20px 0;padding:0;@media (min-width:600px){flex:1 1 auto;margin:0 20px 0 0;}"]);
var BannerTextButton = styled.button.withConfig({
  displayName: "CookieBanner__BannerTextButton",
  componentId: "e360sv-3"
})(["color:#ffffff;background:none;border:none;text-decoration:underline;"]);
var BannerButton = styled.button.withConfig({
  displayName: "CookieBanner__BannerButton",
  componentId: "e360sv-4"
})(["margin:0;padding:20px 10px;font-weight:bold;text-align:center;width:100%;color:#000000;background-color:#ffffff;border:1px solid #ffffff;cursor:pointer;@media (min-width:600px){padding:10px;flex:0 0 100px;}"]);

export default CookieBanner;
//# sourceMappingURL=CookieBanner.js.map

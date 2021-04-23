import { objectWithoutProperties as _objectWithoutProperties, extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { brandColors } from '../_contexts/Theme.js';

var _templateObject, _templateObject2;

var KlickLogo = function KlickLogo(_ref) {
  var brandName = _ref.brandName,
      shapeK1Ref = _ref.shapeK1Ref,
      shapeLRef = _ref.shapeLRef,
      shapeIRef = _ref.shapeIRef,
      shapeCRef = _ref.shapeCRef,
      shapeK2Ref = _ref.shapeK2Ref,
      shapeDotRef = _ref.shapeDotRef,
      shapeSubRef = _ref.shapeSubRef,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'portrait' : _ref$orientation,
      rest = _objectWithoutProperties(_ref, ["brandName", "shapeK1Ref", "shapeLRef", "shapeIRef", "shapeCRef", "shapeK2Ref", "shapeDotRef", "shapeSubRef", "orientation"]);

  var parentTheme = useTheme();
  var brand = brandName || parentTheme.brandName || 'klick';
  var textColor = parentTheme.palette.text.primary;
  var backgroundColor = parentTheme.palette.background["default"];
  var primaryColor = parentTheme.themeType === 'onPrimary' ? parentTheme.palette.text.primary : brandColors[brand];
  var viewBox = orientation === 'portrait' ? '0 0 328.48 578.88' : '0 0 1434.48 508.88';
  var Label = brandNames[brand].label;
  return /*#__PURE__*/React.createElement(StyledSVG, _extends({
    viewBox: viewBox,
    overflow: "visible",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/React.createElement("g", {
    fill: textColor
  }, /*#__PURE__*/React.createElement("polygon", {
    ref: shapeK1Ref,
    points: "79.99 152.24 145.74 79.41 82.44 79.41 50.08 117.75 50.08 0 0 0 0 242.11 50.08 242.11 50.08 190.1 93.82 242.11 158 242.11 79.99 152.24"
  }), /*#__PURE__*/React.createElement("rect", {
    ref: shapeLRef,
    x: "170.25",
    width: "50.09",
    height: "242.11"
  }), /*#__PURE__*/React.createElement("rect", {
    ref: shapeIRef,
    x: "244.85",
    y: "79.41",
    width: "50.09",
    height: "162.71"
  }), /*#__PURE__*/React.createElement("circle", {
    ref: shapeDotRef,
    cx: "269.89",
    cy: "293.59",
    r: "25.2",
    fill: primaryColor
  }), /*#__PURE__*/React.createElement("path", {
    ref: shapeCRef,
    d: "M145.75,431.05V382.16H93.58c-22,0-33.48-15.16-33.48-32.9s12.57-32,33.48-32h52.17V268.39H93.42c-50.7,0-83.81,35.42-83.81,80.88,0,49.28,38.17,81.82,83.81,81.82Z"
  }), /*#__PURE__*/React.createElement("path", {
    ref: shapeK2Ref,
    d: "M250.26,420.65,316,347.81h-63.3l-32.37,38.35V268.39H170.25V510.51h50.09v-52l43.74,52h64.19Z"
  }), /*#__PURE__*/React.createElement(StyledGroup, {
    ref: shapeSubRef,
    orientation: orientation
  }, /*#__PURE__*/React.createElement(Label, {
    orientation: orientation,
    primaryColor: primaryColor,
    backgroundColor: backgroundColor
  }))));
};

var StyledGroup = styled.g(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  transform: ", ";\n"])), function (_ref2) {
  var orientation = _ref2.orientation;
  return orientation === 'portrait' ? 'none' : "translate(35%, -223%) scale(2.5)";
});

var LabelGroup = function LabelGroup() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M93,557.56c0,12.38-8.81,21.25-21.43,21.25S50,569.88,50,557.56s9-21.19,21.61-21.19c10.36,0,18.87,6.55,20.71,15.77H83.64a12.26,12.26,0,0,0-12-8.63c-7.68,0-13.21,5.9-13.21,14s5.53,14.11,13.21,14.11c6.19,0,11.07-3.75,12.32-9.17H71.62v-7H92.93C92.93,556,93,556.85,93,557.56Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M150.37,578.27h-8.63a60.55,60.55,0,0,1-.53-7.85c-.12-4.35-2.21-7.2-5.66-7.2H125v15h-8.28V537H136c8.39,0,13.75,4.58,13.75,11.9,0,5.06-2.5,8.81-6.85,10.6,4,1.3,6.43,4.58,6.67,9.88C149.66,572.8,149.84,576.67,150.37,578.27Zm-9-27.91c0-3.75-2.44-6.13-6.25-6.13H125v12.32h10.12C138.89,556.55,141.33,554.11,141.33,550.36Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M215.38,557.56c0,12.32-9,21.25-21.61,21.25s-21.61-8.93-21.61-21.25,9.05-21.19,21.61-21.19S215.38,545.3,215.38,557.56Zm-34.76-.06c0,8,5.53,13.75,13.15,13.75S207,565.48,207,557.5,201.45,544,193.77,544,180.62,549.64,180.62,557.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M271.39,563.22c0,9.22-6.78,15.59-16.48,15.59s-16.49-6.37-16.49-15.59V537h8.21V562.8c0,5.06,3.33,8.45,8.28,8.45s8.21-3.39,8.21-8.45V537h8.27Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M328.48,550.72c0,8.09-5.83,13.74-14.17,13.74h-9.7v13.81h-8.27V537h18C322.65,537,328.48,542.56,328.48,550.72Zm-8.45.11a6.25,6.25,0,0,0-6.61-6.6h-8.81v13.21h8.81A6.28,6.28,0,0,0,320,550.83Z"
  }));
};

var LabelKlick = function LabelKlick() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M32.82,536.72v41.33H24.55v-17H8.36v17H.11V536.72H8.38v17.07H24.57V536.72Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M72.27,544v9.7H91.36v7H72.27v10H93v7.38H64V536.72H93V544Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M148.78,570.33h-18l-2.67,7.72h-8.9l15.59-41.28h10l15.58,41.28h-8.92Zm-2.38-6.84-6.6-18.8-6.61,18.8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M215.3,570.69v7.36H187.93V536.72h8.27v34Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M267.36,544H255.29v34H247V544H234.94v-7.25h32.42Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M328.05,536.72v41.33h-8.27v-17H303.6v17h-8.27V536.72h8.27v17.07h16.18V536.72Z"
  }));
};

var LabelKatalyst = function LabelKatalyst() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M13.77,553.27l13.28,17.45H19.16L6.81,554.16v16.56H0v-34H6.81v15.73L19.3,536.71h7.89Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M67.47,564.4H52.67l-2.25,6.32h-7.3l12.84-34h8.23l12.83,34H69.67Zm-2-5.64-5.44-15.48-5.44,15.48Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M115.29,542.69h-9.94v28H98.54v-28h-10v-6h26.7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M151.26,564.4h-14.8l-2.25,6.32h-7.3l12.83-34H148l12.83,34h-7.35Zm-2-5.64-5.44-15.48-5.44,15.48Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M201.38,564.69v6H178.85v-34h6.81v28Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M230.79,556.9v13.82H224V557.1L210.8,536.71h7.69l8.82,14.51,8.77-14.51h7.74Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M284.49,547.3h-6.62c-.09-3.38-2.54-5.54-6.27-5.54-3.33,0-5.73,1.71-5.73,4.41,0,7.45,19.55,1.76,19.55,14.55,0,6.47-5.73,10.44-13.82,10.44s-13.47-4.51-13.62-11.37h6.81c0,3.38,2.7,5.83,7.16,5.83,3.82,0,6.51-1.81,6.51-4.65,0-7.35-19.55-1.87-19.55-14.36,0-6.37,5.34-10.39,12.89-10.39C279.1,536.22,284.39,540.63,284.49,547.3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M328.49,542.69h-9.95v28h-6.81v-28h-9.94v-6h26.7Z"
  }));
};

var LabelConsulting = function LabelConsulting() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14.34,564.48C6,564.48,0,558.55,0,550.38s6-14.07,14.34-14.07c7.47,0,13.08,4.7,14.1,11.58H22.79a8.35,8.35,0,0,0-8.45-6.52c-5.1,0-8.73,3.75-8.73,9s3.63,9.12,8.73,9.12a8.4,8.4,0,0,0,8.45-6.59h5.65C27.46,559.74,21.81,564.48,14.34,564.48Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M68.58,550.38c0,8.17-6,14.1-14.35,14.1s-14.34-5.93-14.34-14.1,6-14.07,14.34-14.07S68.58,542.24,68.58,550.38Zm-23.08,0c0,5.29,3.68,9.12,8.73,9.12S63,555.63,63,550.34s-3.67-9-8.77-9S45.5,545.12,45.5,550.34Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M104.4,536.71v27.41h-7l-10.59-20v20H81.33V536.71h7l10.59,20v-20Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M138.37,545.24H133c-.08-2.73-2.06-4.46-5.06-4.46-2.69,0-4.62,1.38-4.62,3.55,0,6,15.76,1.42,15.76,11.74,0,5.21-4.62,8.41-11.14,8.41s-10.86-3.64-11-9.17h5.49c0,2.73,2.17,4.71,5.77,4.71,3.08,0,5.25-1.47,5.25-3.76,0-5.92-15.76-1.5-15.76-11.57,0-5.14,4.3-8.38,10.39-8.38C134,536.31,138.29,539.87,138.37,545.24Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M173.25,554.13c0,6.12-4.5,10.35-10.94,10.35s-10.95-4.23-10.95-10.35V536.71h5.45v17.14a5.48,5.48,0,1,0,10.95,0V536.71h5.49Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M205,559.26v4.86H186.79V536.71h5.5v22.55Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M232.81,541.53h-8v22.59H219.3V541.53h-8v-4.82h21.53Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M250.15,564.12h-5.49V536.71h5.49Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M287.21,536.71v27.41h-7l-10.58-20v20h-5.5V536.71h7l10.58,20v-20Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M328.48,550.38c0,8.21-5.84,14.1-14.22,14.1s-14.34-5.93-14.34-14.1,6-14.07,14.34-14.07c6.87,0,12.52,4.35,13.75,10.47h-5.73a8.14,8.14,0,0,0-8-5.73c-5.1,0-8.77,3.91-8.77,9.29s3.67,9.36,8.77,9.36a8.06,8.06,0,0,0,8.18-6.08H314.3V549h14.14C328.44,549.35,328.48,549.9,328.48,550.38Z"
  }));
};

var LabelAppliedSciences = function LabelAppliedSciences(_ref3) {
  var orientation = _ref3.orientation;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("g", {
    style: orientation === 'landscape' ? {
      transform: "translateY(-3%)"
    } : {}
  }, /*#__PURE__*/React.createElement("g", {
    style: orientation === 'landscape' ? {
      transform: "translateX(-3%)"
    } : {}
  }, /*#__PURE__*/React.createElement("path", {
    d: "M115.56,561.34H102.27l-2,5.68H93.69l11.53-30.55h7.4L124.15,567h-6.6Zm-1.76-5.06-4.88-13.91L104,556.28Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M160.67,546.64c0,6-4.31,10.17-10.47,10.17H143V567h-6.11V536.47H150.2C156.36,536.47,160.67,540.61,160.67,546.64Zm-6.25.09a4.62,4.62,0,0,0-4.88-4.89H143v9.78h6.52A4.64,4.64,0,0,0,154.42,546.73Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M197.82,546.64c0,6-4.32,10.17-10.48,10.17h-7.17V567h-6.12V536.47h13.29C193.5,536.47,197.82,540.61,197.82,546.64Zm-6.25.09a4.63,4.63,0,0,0-4.89-4.89h-6.51v9.78h6.51A4.65,4.65,0,0,0,191.57,546.73Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M231.44,561.61V567H211.19V536.47h6.12v25.14Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M250.71,567h-6.12V536.47h6.12Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M272.28,541.84V549h14.13v5.19H272.28v7.4h15.31V567H266.16V536.47h21.43v5.37Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M328.48,551.7c0,9-6.51,15.32-15.71,15.32h-10.7V536.47h10.7C322,536.47,328.48,542.77,328.48,551.7Zm-6.25,0c0-5.77-3.92-9.82-9.55-9.82h-4.49v19.77h4.49C318.31,561.61,322.23,557.51,322.23,551.66Z"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M73.49,591H67.55c-.09-3-2.29-5-5.63-5-3,0-5.15,1.54-5.15,4,0,6.69,17.56,1.58,17.56,13.07,0,5.81-5.15,9.38-12.41,9.38s-12.11-4-12.24-10.22H55.8c0,3,2.42,5.24,6.43,5.24,3.43,0,5.85-1.63,5.85-4.18,0-6.6-17.56-1.67-17.56-12.9,0-5.72,4.8-9.33,11.57-9.33C68.65,581,73.41,585,73.49,591Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M102,612.43c-9.29,0-16-6.61-16-15.72S92.72,581,102,581c8.32,0,14.57,5.24,15.71,12.9h-6.29a9.31,9.31,0,0,0-9.42-7.26c-5.68,0-9.73,4.18-9.73,10s4,10.17,9.73,10.17a9.38,9.38,0,0,0,9.42-7.35h6.29C116.62,607.14,110.33,612.43,102,612.43Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M137,612h-6.12V581.48H137Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M158.6,586.85V594h14.13v5.19H158.6v7.4h15.32V612H152.49V581.48h21.43v5.37Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M213.22,581.48V612h-7.79l-11.8-22.32V612h-6.11V581.48h7.79L207.1,603.8V581.48Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M242.35,612.43c-9.28,0-16-6.61-16-15.72s6.69-15.67,16-15.67c8.32,0,14.57,5.24,15.72,12.9h-6.3a9.31,9.31,0,0,0-9.42-7.26c-5.67,0-9.72,4.18-9.72,10s4.05,10.17,9.72,10.17a9.38,9.38,0,0,0,9.42-7.35h6.3C257,607.14,250.67,612.43,242.35,612.43Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M277.38,586.85V594h14.13v5.19H277.38v7.4H292.7V612H271.26V581.48H292.7v5.37Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M327.64,591H321.7c-.09-3-2.29-5-5.63-5-3,0-5.15,1.54-5.15,4,0,6.69,17.56,1.58,17.56,13.07,0,5.81-5.15,9.38-12.41,9.38s-12.11-4-12.24-10.22H310c0,3,2.42,5.24,6.43,5.24,3.43,0,5.85-1.63,5.85-4.18,0-6.6-17.56-1.67-17.56-12.9,0-5.72,4.79-9.33,11.57-9.33C322.8,581,327.56,585,327.64,591Z"
  }))));
};

var LabelLabs = function LabelLabs() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M121.58,571v7.28H94.2V537.05h8.28v34Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M182.59,570.67h-18l-2.71,7.64H153l15.6-41.3h10l15.59,41.3h-8.93Zm-2.4-6.84L173.59,545,167,563.83Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M261.41,567.4c0,6.54-4.76,11-11.38,11H228.55v-41.3h19.67c6.67,0,11.43,4.22,11.43,10.47a9.87,9.87,0,0,1-6.24,9.46A10.31,10.31,0,0,1,261.41,567.4Zm-15-23.21h-9.63V554.3h9.63a5,5,0,0,0,5.12-4.88,1,1,0,0,0,0-.24,4.87,4.87,0,0,0-4.74-5ZM253,566a5,5,0,0,0-4.76-5.24H236.83v10.42h11a5,5,0,0,0,5.13-4.88V566Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M327.36,549.9h-8c-.12-4.11-3.1-6.73-7.62-6.73-4,0-7,2.09-7,5.36,0,9,23.74,2.14,23.74,17.68,0,7.85-7,12.67-16.78,12.67s-16.37-5.47-16.55-13.8h8.28c.06,4.1,3.27,7.08,8.68,7.08,4.64,0,7.93-2.2,7.93-5.65,0-8.94-23.75-2.26-23.75-17.45,0-7.73,6.48-12.62,15.64-12.62C320.82,536.44,327.26,541.81,327.36,549.9Z"
  }));
};

var LabelVentures = function LabelVentures() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M33.34,536.56l-12.54,34H12.87l-12.59-34h7.1l9.46,27.19,9.4-27.19Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M55.14,542.54v8H70.87v5.78H55.14v8.23h17v6H48.33v-34H72.19v6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M117.5,536.56v34h-8.67L95.7,545.72v24.83H88.89v-34h8.67l13.13,24.83V536.56Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M159.33,542.54h-9.94v28h-6.81v-28h-9.94v-6h26.69Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M201,558.16c0,7.59-5.58,12.84-13.57,12.84s-13.57-5.25-13.57-12.84v-21.6h6.76v21.26c0,4.16,2.75,6.95,6.81,6.95s6.76-2.79,6.76-6.95V536.56H201Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M246,570.55h-7.1a47.48,47.48,0,0,1-.45-6.46c-.09-3.58-1.81-5.93-4.65-5.93h-8.72v12.39h-6.81v-34h15.87c6.91,0,11.32,3.77,11.32,9.8a8.89,8.89,0,0,1-5.63,8.72c3.28,1.07,5.29,3.77,5.48,8.13A36.92,36.92,0,0,0,246,570.55Zm-7.45-23a4.76,4.76,0,0,0-5.14-5h-8.33v10.14h8.33A4.8,4.8,0,0,0,238.54,547.58Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M269.06,542.54v8h15.73v5.78H269.06v8.23h17.05v6H262.25v-34h23.86v6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M327.55,547.14h-6.61c-.1-3.38-2.55-5.53-6.27-5.53-3.33,0-5.73,1.71-5.73,4.4,0,7.45,19.54,1.77,19.54,14.55,0,6.47-5.73,10.44-13.81,10.44s-13.47-4.51-13.62-11.37h6.81c.05,3.38,2.69,5.83,7.15,5.83,3.82,0,6.51-1.81,6.51-4.65,0-7.35-19.54-1.87-19.54-14.36,0-6.36,5.34-10.38,12.88-10.38C322.16,536.07,327.45,540.48,327.55,547.14Z"
  }));
};

var LabelCareers = function LabelCareers(_ref4) {
  var primaryColor = _ref4.primaryColor,
      backgroundColor = _ref4.backgroundColor;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M48.92,567c-9.08,0-15.54-6.43-15.54-15.3s6.5-15.21,15.54-15.21c8.1,0,14.19,5.1,15.3,12.5H58.09a9.1,9.1,0,0,0-9.17-7.07c-5.51,0-9.46,4.07-9.46,9.72s3.95,9.9,9.46,9.9a9.09,9.09,0,0,0,9.17-7.16h6.13C63.14,561.8,57,567,48.92,567Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M102.38,561H89.45l-2,5.52H81.08l11.23-29.73H99.5l11.22,29.73H104.3Zm-1.71-4.93-4.76-13.53-4.75,13.53Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M154.8,566.56h-6.21a44.91,44.91,0,0,1-.39-5.68c-.07-3.12-1.57-5.17-4.06-5.17h-7.62v10.83h-5.91V536.83h13.88c6,0,9.9,3.31,9.9,8.58a7.76,7.76,0,0,1-4.92,7.62c2.87.94,4.62,3.3,4.79,7.1A33,33,0,0,0,154.8,566.56Zm-6.5-20.09a4.15,4.15,0,0,0-3.88-4.41,3.75,3.75,0,0,0-.67,0h-7.23v8.85h7.28a4.18,4.18,0,0,0,4.49-3.86,3.85,3.85,0,0,0,0-.59Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M181.88,542.12v7h13.74v5.06H181.88v7.19h14.9v5.27H175.92V536.83h20.86v5.29Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M224.23,542.12v7H238v5.06H224.23v7.19h14.91v5.27H218.28V536.83h20.86v5.29Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M284.88,566.56h-6.21a44.91,44.91,0,0,1-.39-5.68c-.08-3.12-1.57-5.17-4.06-5.17h-7.63v10.83h-5.95V536.83h13.87c6.05,0,9.9,3.31,9.9,8.58a7.76,7.76,0,0,1-4.92,7.62c2.86.94,4.62,3.3,4.79,7.1A33,33,0,0,0,284.88,566.56Zm-6.5-20.09a4.15,4.15,0,0,0-3.88-4.41,3.75,3.75,0,0,0-.67,0h-7.29v8.85h7.29a4.19,4.19,0,0,0,4.54-3.81,4.53,4.53,0,0,0,0-.64Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M327.63,546.09h-5.78c-.09-3-2.27-4.84-5.49-4.84-2.92,0-5,1.5-5,3.85,0,6.52,17.09,1.54,17.09,12.73,0,5.68-5,9.08-12.09,9.08S304.59,563,304.45,557h6c0,2.95,2.35,5.1,6.25,5.1,3.34,0,5.68-1.59,5.68-4.08,0-6.42-17.09-1.62-17.09-12.55,0-5.56,4.66-9.08,11.26-9.08C322.92,536.44,327.54,540.26,327.63,546.09Z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "227.59",
    y: "581.41",
    width: "100.85",
    height: "30.54",
    fill: primaryColor
  }), /*#__PURE__*/React.createElement("g", {
    fill: backgroundColor === '#000000' ? '#ffffff' : backgroundColor
  }, /*#__PURE__*/React.createElement("path", {
    d: "M259.48,601.47a5.26,5.26,0,0,1-5.11,5.39H243V586.63h10c3.28,0,5.68,2.07,5.68,5.19a4.8,4.8,0,0,1-2.93,4.54A5.09,5.09,0,0,1,259.48,601.47ZM252,591h-4v3.85h4a1.91,1.91,0,0,0,1.93-1.89v-.06a1.86,1.86,0,0,0-1.82-1.9Zm2.55,9.71a1.89,1.89,0,0,0-1.81-2h-4.78v3.94h4.64a1.89,1.89,0,0,0,2-1.81,1.48,1.48,0,0,0,0-.21Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M266.68,591v3.62h8.73v4.16h-8.73v3.73h9.42v4.39H261.81V586.64H276.1V591Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M294.57,591H289v15.9h-4.89V591H278.6v-4.35h16Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M306.94,603.69H299l-1,3.16h-5.28L300,586.63h5.9l7.33,20.23H308Zm-1.32-4.07L303,591.39l-2.7,8.23Z"
  })));
};

var brandNames = {
  group: {
    label: LabelGroup
  },
  klick: {
    label: LabelKlick
  },
  katalyst: {
    label: LabelKatalyst
  },
  consulting: {
    label: LabelConsulting
  },
  appliedsciences: {
    label: LabelAppliedSciences
  },
  ventures: {
    label: LabelVentures
  },
  labs: {
    label: LabelLabs
  },
  careers: {
    label: LabelCareers
  }
};
var StyledSVG = styled.svg(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n"])));

export default KlickLogo;
//# sourceMappingURL=KlickLogo.js.map

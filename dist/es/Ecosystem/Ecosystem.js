import { extends as _extends, taggedTemplateLiteral as _taggedTemplateLiteral, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { match } from '../_contexts/Theme.js';
import useInstance from '../_hooks/useInstance.js';
import KlickLogo from '../KlickLogo/KlickLogo.js';
import Planet from './Planet.js';
import Ring from './Ring.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
gsap.registerPlugin(ScrollTrigger);
var anglePlayhead = {
  playhead: 0
};
var gsapDefaults = {
  duration: 1,
  ease: 'none'
};

var Ecosystem = function Ecosystem(_ref) {
  var planets = _ref.planets;
  var stickyContainerRef = React.useRef();
  var galaxyRef = React.useRef();
  var planetsAngleTimeline = useInstance(function () {
    return gsap.timeline({
      paused: true,
      defaults: gsapDefaults
    });
  });
  var planetsWTimelines = useInstance(function () {
    return planets.map(function (planet) {
      return _objectSpread2(_objectSpread2({}, planet), {}, {
        position: 0,
        labelRef: /*#__PURE__*/React.createRef(),
        contentRef: /*#__PURE__*/React.createRef(),
        angleTimeline: planetsAngleTimeline,
        orbitTimeline: gsap.timeline({
          paused: true,
          defaults: gsapDefaults
        })
      });
    });
  });
  var megaTimeline = useInstance(function () {
    return gsap.timeline({
      defaults: gsapDefaults
    });
  });
  var trailingPlanetLabels = React.useMemo(function () {
    return planets.filter(function (item) {
      return !!item.trailingPlanetLabel;
    }).map(function (item) {
      return item.trailingPlanetLabel;
    });
  }, [planets]);
  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  var planetJSX = [];
  var planetContentJSX = [];
  planetsWTimelines.forEach(function (props, index) {
    planetJSX.push( /*#__PURE__*/React.createElement(Planet, _extends({
      key: index,
      isMobile: isMobile,
      hasTrailingPlanet: !!props.trailingPlanetLabel
    }, props)));
    planetContentJSX.push( /*#__PURE__*/React.createElement(PlanetContent, {
      ref: props.contentRef,
      variant: "blurb1",
      key: index,
      $color: props.color
    }, props.content));
  });
  useIsomorphicLayoutEffect(function () {
    var galaxy = galaxyRef.current;
    var stickyContainer = stickyContainerRef.current; // ZOOM

    megaTimeline.to({}, {
      duration: 2
    }).add('zoom');
    planetsWTimelines.forEach(function (planet) {
      megaTimeline.to(planet.labelRef.current, {
        opacity: 0,
        duration: 0.2
      }, 'zoom').fromTo(planet, {
        position: planet.startPosition
      }, {
        position: 0.75
      }, 'zoom+=0.8');
    });
    megaTimeline.to(galaxy, {
      x: '-27%',
      y: -100,
      z: 250,
      rotationX: isMobile ? 45 : 65,
      duration: 3,
      ease: 'power2.inOut'
    }, 'zoom').to(anglePlayhead, {
      playhead: 0.5,
      duration: 3,
      ease: 'power2.inOut'
    }, 'zoom'); // ORBIT

    megaTimeline.add('orbit');
    planetsWTimelines.forEach(function (planet, index) {
      var _trailingPlanet$label;

      if (trailingPlanetLabels.includes(planet.label)) return;
      var content = planet.contentRef.current;
      var hasTrailingPlanet = !!planet.trailingPlanetLabel; // this makes the position "wrap" between 0 and 1, so when it reaches 1.25, it will actually set to 0.25

      var wrapPositionBetweenRange = gsap.utils.wrap(0, 1);
      var trailingPlanet = planetsWTimelines.find(function (p) {
        return p.label === planet.trailingPlanetLabel;
      });
      var currentPlanets = [planet, trailingPlanet].filter(Boolean);
      var currentPlanetLabels = [planet.labelRef.current, trailingPlanet === null || trailingPlanet === void 0 ? void 0 : (_trailingPlanet$label = trailingPlanet.labelRef) === null || _trailingPlanet$label === void 0 ? void 0 : _trailingPlanet$label.current];
      megaTimeline.set(currentPlanetLabels, {
        clearProps: 'fontSize,lineHeight,x,y'
      }).set(currentPlanetLabels, getPlanetLabelSettings({
        isMobile: isMobile,
        hasTrailingPlanet: hasTrailingPlanet
      })).to(currentPlanets, {
        position: hasTrailingPlanet ? gsap.utils.wrap([1.27, 1.23]) : 1.25,
        ease: 'power1.out',
        stagger: 0.05,
        duration: 2,
        modifiers: {
          position: function position(pos) {
            return wrapPositionBetweenRange(pos);
          }
        }
      }, index === 0 ? 'orbit' : '-=0.8').to(currentPlanetLabels, {
        opacity: 1
      }, '>-1').to(content, {
        opacity: 1,
        visibility: 'visible'
      }, '>').to(currentPlanets, {
        position: 0.75,
        ease: 'power1.in'
      }, '>2').to(currentPlanetLabels, {
        opacity: 0,
        duration: 0.5
      }, '>-1.5').set(currentPlanetLabels, getPlanetLabelSettings({
        isMobile: isMobile,
        hasTrailingPlanet: hasTrailingPlanet
      })).set(currentPlanetLabels, {
        clearProps: 'fontSize,lineHeight,x,y'
      }).to(content, {
        opacity: 0,
        visibility: 'hidden',
        duration: 0.5
      }, '>-1.5');
    }); // ZOOM OUT

    megaTimeline.add('zoomOut');
    planetsWTimelines.slice().reverse().forEach(function (planet, index) {
      if (planet.startPosition > 0.5) {
        megaTimeline.to(planet, {
          position: planet.startPosition
        }, "zoomOut+=".concat(index * 0.5));
      } else {
        megaTimeline.to(planet, {
          position: 1
        }, "zoomOut+=".concat(index * 0.5)).fromTo(planet, {
          position: 0
        }, {
          position: planet.startPosition,
          ease: 'power1.out'
        }, '>');
      }

      megaTimeline.to(planet.labelRef.current, {
        opacity: 1,
        duration: 0.2
      }, '>-0.2');
    });
    megaTimeline.to(galaxy, {
      x: '0%',
      y: 0,
      z: 0,
      rotationX: 0,
      duration: 3,
      ease: 'power2.inOut'
    }, 'zoomOut+=1.2').to(anglePlayhead, {
      playhead: 1,
      duration: 3,
      ease: 'power2.inOut'
    }, 'zoomOut+=1.2').to({}, {
      duration: 2
    });
    var scrollTrigger = ScrollTrigger.create({
      trigger: stickyContainer,
      scrub: true,
      start: 'top top',
      end: 'bottom bottom',
      animation: megaTimeline,
      onUpdate: function onUpdate() {
        planetsAngleTimeline.progress(anglePlayhead.playhead || 0);
        planetsWTimelines.forEach(function (planet) {
          planet.orbitTimeline.progress(planet.position || planet.startPosition);
        });
      }
    });
    return function () {
      planetsAngleTimeline.clear();
      megaTimeline.remove(planetsAngleTimeline);
      planetsWTimelines.forEach(function (planet) {
        planet.orbitTimeline.clear();
      });
      megaTimeline.clear();
      scrollTrigger.kill();
    };
  }, [megaTimeline, planetsAngleTimeline, planetsWTimelines, isMobile, trailingPlanetLabels]);
  return /*#__PURE__*/React.createElement(StickyContainer, {
    ref: stickyContainerRef
  }, /*#__PURE__*/React.createElement(StyledConstellation, null, /*#__PURE__*/React.createElement(Universe, null, /*#__PURE__*/React.createElement(Galaxy, {
    ref: galaxyRef
  }, /*#__PURE__*/React.createElement(SolarSystem, null, /*#__PURE__*/React.createElement(Ring, {
    width: "100%"
  }), /*#__PURE__*/React.createElement(Ring, {
    width: "78%"
  }), /*#__PURE__*/React.createElement(Ring, {
    width: "55%",
    color: "rgb(0 0 0 / 100%)"
  }), /*#__PURE__*/React.createElement(StyledLogo, {
    brandName: "group"
  }), planetJSX)), planetContentJSX)));
};

function getPlanetLabelSettings(_ref2) {
  var isMobile = _ref2.isMobile,
      hasTrailingPlanet = _ref2.hasTrailingPlanet;
  var lookup = {
    withTrailingPlanet: {
      mobile: {
        fontSize: '4vw',
        x: gsap.utils.wrap(['-120%', undefined]),
        y: gsap.utils.wrap(['45%', undefined])
      },
      desktop: {
        fontSize: gsap.utils.wrap(['2vw', '3vw']),
        x: gsap.utils.wrap(['30%', undefined]),
        y: gsap.utils.wrap(['45%', undefined])
      }
    },
    withoutTrailingPlanet: {
      mobile: {
        fontSize: '4vw'
      },
      desktop: {
        fontSize: '4vw'
      }
    }
  };
  var planetKey = hasTrailingPlanet ? 'withTrailingPlanet' : 'withoutTrailingPlanet';
  var mobileKey = isMobile ? 'mobile' : 'desktop';
  return lookup[planetKey][mobileKey];
}

var PlanetContent = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  text-align: left;\n  transform: translate(-50%, 10%);\n  opacity: 0;\n  visibility: hidden;\n\n  & > p {\n    ", " {\n      max-width: 100%;\n      width: 600px;\n      transform: translateX(50%);\n    }\n  }\n\n  & > ul {\n    column-count: 2;\n    padding-left: 6%;\n    font-size: 1rem;\n  }\n  & > ul > li {\n    padding-left: 1em;\n    margin-bottom: 0.7em;\n  }\n  & > ul > li:before {\n    color: ", ";\n  }\n\n  ", " {\n    top: 60%;\n\n    & > ul {\n      padding-left: 10%;\n      font-size: 1.5625rem;\n    }\n  }\n"])), match.isLG, function (_ref3) {
  var $color = _ref3.$color;
  return $color;
}, match.isSM);
var Systems = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-position: center 40%;\n  background-repeat: no-repeat;\n  background-size: cover;\n"])));
var StickyContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  height: 1000vh;\n"])));
var StyledConstellation = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background-position: center 40%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n"])));
var Universe = styled(Systems)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  perspective: 1000px;\n"])));
var Galaxy = styled(Systems)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  transform-style: preserve-3d;\n"])));
var SolarSystem = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 90vw;\n  height: 90vw;\n  transform: translate(-50%, -50%);\n  transform-style: preserve-3d;\n\n  & > * {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  ", " {\n    width: 54vw;\n    height: 54vw;\n  }\n"])), match.isSM);
var StyledLogo = styled(KlickLogo)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 15%;\n"])));

export default Ecosystem;
//# sourceMappingURL=Ecosystem.js.map

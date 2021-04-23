import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import Helmet from 'react-helmet';
import { Location } from '@reach/router';

function SeoBase(_ref) {
  var siteUrl = _ref.siteUrl,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? '' : _ref$description,
      author = _ref.author,
      _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? "en" : _ref$lang,
      _ref$meta = _ref.meta,
      meta = _ref$meta === void 0 ? [] : _ref$meta,
      title = _ref.title,
      _ref$titleTemplate = _ref.titleTemplate,
      titleTemplate = _ref$titleTemplate === void 0 ? "%s" : _ref$titleTemplate,
      path = _ref.path,
      socialThumbPath = _ref.socialThumbPath,
      location = _ref.location;
  if (!title) throw new Error('You must specify a title for the SEO component.');
  var pathname = location.pathname;
  var metaPath = path || pathname;
  var metaFullUrl = "".concat(siteUrl).concat(metaPath).replace(/\/+$/, '');
  var socialThumbUrl = "".concat(siteUrl).concat(socialThumbPath);
  return /*#__PURE__*/React.createElement(Helmet, {
    htmlAttributes: {
      lang: lang,
      prefix: 'og: http://ogp.me/ns#'
    },
    title: title,
    titleTemplate: titleTemplate,
    meta: [{
      name: "description",
      content: description
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:description",
      content: description
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: metaFullUrl
    }, {
      property: "og:image",
      content: socialThumbUrl
    }, {
      name: "twitter:card",
      content: "summary"
    }, {
      name: "twitter:creator",
      content: author
    }, {
      name: "twitter:title",
      content: title
    }, {
      name: "twitter:description",
      content: description
    }, {
      name: "twitter:image",
      content: socialThumbUrl
    }].concat(meta)
  }, /*#__PURE__*/React.createElement("link", {
    rel: "preconnect",
    href: "http://res.cloudinary.com"
  }));
}

var Seo = function Seo(_ref2) {
  var props = _extends({}, _ref2);

  return /*#__PURE__*/React.createElement(Location, null, function (_ref3) {
    var location = _ref3.location;
    return /*#__PURE__*/React.createElement(SeoBase, _extends({
      location: location
    }, props));
  });
};

export default Seo;
//# sourceMappingURL=Seo.js.map

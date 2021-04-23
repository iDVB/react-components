var deleteAllCookies = function deleteAllCookies() {
  var hostname = window.location.hostname;
  var domain = hostname === 'localhost' ? hostname : ".".concat(hostname);
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf('=');
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = "".concat(name, "=;Path=/;Domain=").concat(domain, ";Expires=Thu, 01 Jan 1970 00:00:00 GMT");
  }
};

export { deleteAllCookies };
//# sourceMappingURL=cookieUtils.js.map

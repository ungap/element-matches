/*! (c) Andrea Giammarchi - ISC */
// borrowed from https://github.com/WebReflection/dom4/blob/master/src/dom4.js#L130
var elementMatches = (function (indexOf) {
  return 'matches' in document.documentElement ?
    function (selector) {
      return this.matches(selector);
    } :
    function (selector) {
      var el = this;
      return (
        el.matchesSelector ||
        el.webkitMatchesSelector ||
        el.khtmlMatchesSelector ||
        el.mozMatchesSelector ||
        el.msMatchesSelector ||
        el.oMatchesSelector ||
        fallback
      ).call(el, selector);
    };
  function fallback(selector) {
    var parentNode = this.parentNode;
    return !!parentNode && -1 < indexOf.call(
      parentNode.querySelectorAll(selector),
      this
    );
  }
}([].indexOf));
export default elementMatches;

/*! (c) Andrea Giammarchi - ISC */
var elementMatches=function(e){function t(t){var c=this.parentNode;return!!c&&-1<e.call(c.querySelectorAll(t),this)}return"matches"in document.documentElement?function(e){return this.matches(e)}:function(e){var c=this;return(c.matchesSelector||c.webkitMatchesSelector||c.khtmlMatchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.oMatchesSelector||t).call(c,e)}}([].indexOf);
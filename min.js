/*! (c) Andrea Giammarchi - ISC */
var elementMatches=function(c){return"matches"in document.documentElement?function(e){return this.matches(e)}:function(e){var t=this;return(t.matchesSelector||t.webkitMatchesSelector||t.khtmlMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||function(e){var t=this.parentNode;return!!t&&-1<c.call(t.querySelectorAll(e),this)}).call(t,e)}}([].indexOf);
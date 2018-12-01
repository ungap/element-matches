require('basichtml').init();

var elementMatches = require('../cjs');
test();

if (typeof process !== 'undefined') {
  var proto = document.documentElement;
  delete Object.getPrototypeOf(HTMLElement).prototype.matches;
  delete require.cache[require.resolve('../cjs')];
  elementMatches = require('../cjs');
  test();
}

function test() {
  console.assert(elementMatches.call(document.body, 'body'));
  console.assert(!elementMatches.call(document.body, 'html'));
}

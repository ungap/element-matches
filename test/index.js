require('basichtml').init();

var elementMatches = require('../cjs');
test();

if (typeof process !== 'undefined') {
  delete require.cache[require.resolve('../cjs')];
  delete Object.getPrototypeOf(HTMLElement).prototype.matches;
  elementMatches = require('../cjs');
}

function test() {
  console.assert(elementMatches.call(document.body, 'body'));
  console.assert(!elementMatches.call(document.body, 'html'));
}

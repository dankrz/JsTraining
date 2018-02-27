// Shorthand property names (ES2015)
var a = 'foo', b = 42, c = {};
var o = {a, b, c};

// Shorthand method names (ES2015)
var o = {
  property([parameters]) {}
};

// Computed property names (ES2015)
var prop = 'foo';
var o = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there'
};
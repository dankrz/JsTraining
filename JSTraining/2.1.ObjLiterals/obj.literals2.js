var o = {};
var o = {a: 'foo', b: 42, c: {}};

var a = 'foo', b = 42, c = {};
var o = {a: a, b: b, c: c};

var o = {
  property: function ([parameters]) {
      console.log(parameters);
  },
//   get property() {},
//   set property(value) {}
};
o.property("abc");
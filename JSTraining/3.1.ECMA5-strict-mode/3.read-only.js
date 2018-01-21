"use strict";
var testObj = Object.defineProperties({}, {
    prop1: {
        value: 10, writable: false // by default 
    },
    prop2: { get: function () { } }
}); 

testObj.prop1 = 20;
testObj.prop2 = 30;
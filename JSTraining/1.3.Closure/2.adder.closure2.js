function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log("add5(2) = ",add5(2));  
  console.log("add10(2) = ",add10(2)); 
(function () {
    function testFunction() {
        "use strict";
        // This causes a syntax error.  
        testvar = 4;
        return testvar;
    }
    //testvar = 5;
    testFunction();
})();

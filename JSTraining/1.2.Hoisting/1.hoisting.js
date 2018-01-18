(function(){

    var item = "ex";

    function f1(){
        item = "new ex";// suppose to modify the external variable

        var item = "in";
        console.log("inside item:", item);
    }
    f1();

    console.log("external item:", item);

})();
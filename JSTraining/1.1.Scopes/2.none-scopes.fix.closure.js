console.log('Non-scopes blockes fix');

function g() {
    var handlers = [];
    for (var index = 0; index < 3; index++) {
        (function(){ 
            var tempIndex = index;
            var element = function(){
                console.log('Handler with argument: '+tempIndex);
            }
            handlers.push(element);
        })();
    }
    return handlers;
}

var handlers = g();

function executeHandlers(handlers){
    handlers.forEach(function(item){
        item();
    });

}

executeHandlers(handlers);
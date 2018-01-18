function generateHandler() {
    var handlers = [];
    for (var index = 0; index < 3; index++) {
        var temp = index;
        var handlerFn = function(){
            console.log('Handler with argument: '+temp);
        }
        handlers.push(handlerFn);
    }
    return handlers;
}

var handlers = generateHandler();

function executeHandlers(handlers){
    handlers.forEach(function(item){
        item();
    });

}

executeHandlers(handlers);
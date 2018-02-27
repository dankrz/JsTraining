console.log('Non-scopes blockes fix with let')

function generateHandler() {
    var handlers = [];
    for (let index = 0; index < 3; index++) {
        var handlerFn = function(){
            console.log('Handler with argument: '+index);
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
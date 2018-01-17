console.log('Non-scopes blockes fix with let')

function g() {
    var handlers = [];
    for (let index = 0; index < 3; index++) {
        // 
        var element = function(){
            console.log('Handler with argument: '+index);
        }
        handlers.push(element);
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
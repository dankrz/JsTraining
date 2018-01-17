console.log('Non-scopes blockes')

function g() {
    var handlers = [];
    for (var index = 0; index < 3; index++) {
        var temp = index;
        var element = function(){
            console.log('Handler with argument: '+temp);
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
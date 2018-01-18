const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM('');
var $ = require("jquery")(window);

var array1 = [1, 2, 3, 4, 5, 6 , 9, -1 ,10];

function jqEach(){
    console.log('jqEach')
    
    $.each(array1, function(i, v){
        console.log("item :"+v+", index:"+i);
    });
}
// in jquery

//jqEach();
//jsForeach();


var orders = [
    {id:1, comapny: 'HP', value: 1000},
    {id:2, comapny: 'Microsoft', value: 2000},
    {id:3, comapny: 'BMW', value: 7000},
    {id:4, comapny: 'Honda', value: 2000},
    {id:5, comapny: 'Volvo', value: 34000},
    {id:6, comapny: 'Honda', value: 133000},
]

function jsFilter(){
    var hondaItems = orders.filter(function(item){
        return item.comapny === 'Honda'
    });
    console.log("hondaItems ids:"+hondaItems[0].id+", "+hondaItems[1].id)
    console.log("hondaItems length:"+hondaItems.length);
}
// in ecma 5


//jsFilter();
//jqGrep();
//firstInJS();

function jsSome(){
    var someOrderLT1000 = orders.some(function(item){
        return item.value < 1000;
    });
    if(someOrderLT1000){
        
    }else{

    }
    console.log("Is some order value less than 1000? Anwser:"+someOrderLT1000);
}


//jsSome();
//jsEvery();


function jsReduceMin(){
    var min = array1.reduce(function(prevVal, curentVal){
        return prevVal < curentVal ? prevVal : curentVal;
    }, Number.POSITIVE_INFINITY);
    console.log("min value of array1 is:"+min);
}

jsReduceMin();
//jsReduceSum();



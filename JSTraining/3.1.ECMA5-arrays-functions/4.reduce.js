var array1 = [1, 2, 3, 4, 5, 6 , 9, -1 ,10];

var min = array1.reduce(function(prevVal, curentVal){
    return prevVal < curentVal ? prevVal : curentVal;
}, Number.POSITIVE_INFINITY);

console.log("min value of array1 is:"+min);
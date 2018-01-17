var temp = 'outer';

function f1(){
    var temp = 'inner';
}

f1();

console.log(temp);
var temp = 'OUTER';

 function f1() {

    var temp = 'INNER';

}
 
f1();

console.log(temp);
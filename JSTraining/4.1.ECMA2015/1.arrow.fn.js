var evens = [2, 4, 6, 8, 10]; 

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

console.log('odds', odds);
console.log('nums', nums);

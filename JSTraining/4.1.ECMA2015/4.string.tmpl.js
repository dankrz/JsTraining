
// Multiline strings
console.log(`In ES5 this is
 not legal.`);

// Interpolate variable bindings
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

// Unescaped template strings
console.log(String.raw`In ES5 "\n" is a line-feed.`);

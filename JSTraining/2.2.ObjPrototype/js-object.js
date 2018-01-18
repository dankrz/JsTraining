var o = {};

console.log(JSON.stringify(Object.getOwnPropertyNames(o)));  
console.log(JSON.stringify(Object.getOwnPropertyNames(o.__proto__)));  
console.log(JSON.stringify(Object.getOwnPropertyNames(Object.prototype)));  
console.log(o.__proto__ === Object.prototype)
console.log(o.__proto__.__proto__ === null)
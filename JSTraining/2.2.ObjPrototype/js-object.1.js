var Animal = function(name){
    this.name = name;
};


Animal.prototype.makeSound = function () {
    return ('('+this.name+')');
};


var Cat = function () {
    Animal.call(this, "cat");
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.makeSound = function(){
    var base = Animal.prototype.makeSound.call(this);
    return ('meow '+base);
}

var pusheen = new Cat();
var sound = pusheen.makeSound();
console.log("sound:"+sound);
console.log('Object.getOwnPropertyNames(pusheen):',JSON.stringify(Object.getOwnPropertyNames(pusheen)));  
console.log("\nObject.getOwnPropertyNames(pusheen.__proto__):", JSON.stringify(Object.getOwnPropertyNames(pusheen.__proto__)));  
console.log("\nObject.getOwnPropertyNames(pusheen.__proto__.__proto__):", JSON.stringify(Object.getOwnPropertyNames(pusheen.__proto__.__proto__)));  
console.log("\npusheen.__proto__ === Animal.prototype", pusheen.__proto__ === Animal.prototype)
console.log("\npusheen.__proto__.__proto__ === Object.prototype", pusheen.__proto__.__proto__ === Object.prototype)
console.log("\npusheen.__proto__.__proto__.__proto__ === null", pusheen.__proto__.__proto__.__proto__ === null)

//console.log(JSON.stringify(Object.getOwnPropertyNames(Object.prototype)));  

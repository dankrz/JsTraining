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
//console.log(Cat.prototype.constructor === Animal.prototype.constructor)
Cat.prototype.constructor = Cat;
Cat.prototype.makeSound = function(){
    var base = Animal.prototype.makeSound.call(this);
    return ('meow '+base);
}

var pusheen = new Cat();
var sound = pusheen.makeSound();
console.log(sound);
// console.log(JSON.stringify(Object.getOwnPropertyNames(o)));  
// console.log(JSON.stringify(Object.getOwnPropertyNames(o.__proto__)));  
// console.log(JSON.stringify(Object.getOwnPropertyNames(Object.prototype)));  
// console.log(o.__proto__ === Object.prototype)
// console.log(o.__proto__.__proto__ === null)
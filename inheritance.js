// oop - inheritance
function Animal(name, emoji) {
	this.name = name;
	this.emoji = emoji;
}

Animal.prototype.printName = function () {
	console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
	//super(name, emoji)
	Animal.call(this, name, emoji);
	this.owner = owner;
}

//Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
	console.log("Let's play together");
};

function Tiger(name, emoji) {
	Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
	console.log("Hunting");
};

const dog1 = new Dog("Leo", "🐶", "Bella");
dog1.play();
dog1.printName();

const tiger1 = new Tiger("Tiger", "🐯");
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog); //true
console.log(dog1 instanceof Animal); //true
console.log(dog1 instanceof Tiger); //false
console.log(tiger1 instanceof Dog); //false
console.log(tiger1 instanceof Animal); //true
console.log(tiger1 instanceof Tiger); //true

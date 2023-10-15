// object can point to only one prototype.
//one and only parent
// Mixing -->> When you want to inherit multiple functions

//Object.play
const play = {
	play: function () {
		console.log(`${this.name} play!`);
	},
};

//Object.sleep
const sleep = {
	sleep: function () {
		console.log(`${this.name} sleep!`);
	},
};

//construtor.Dog
function Dog(name) {
	this.name = name;
}

//want to mix play object and sleep object in Dog's prototype.
Object.assign(Dog.prototype, play, sleep);

const dog = new Dog("leo");
console.log(dog);
dog.play(); // possible
dog.sleep(); // possible

//can use to class
class Animal {}
class Tiger extends Animal {
	constructor(name) {
		super();
		this.name = name;
	}
}

// javascript class looks like class
//but Internally, is's basing it on a prototype.
Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger("Tiger");
tiger.play();
tiger.sleep();

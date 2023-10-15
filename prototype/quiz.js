//class based oop

class Animal {
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}
	printName() {
		console.log(`${this.name} ${this.emoji}`);
	}
}

class Dog extends Animal {
	play() {
		console.log("Let's play together");
	}
}

class Tiger extends Animal {
	hunt() {
		console.log("Hunting");
	}
}

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

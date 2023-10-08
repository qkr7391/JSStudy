// class Tiger {
// 	constructor(color) {
// 		this.color = color;
// 	}
// 	eat() {
// 		console.log("Tiger is now Eating");
// 	}
// 	sleep() {
// 		console.log("Tiger is now Sleeping");
// 	}
// }

// class Dog {
// 	constructor(color) {
// 		this.color = color;
// 	}
// 	eat() {
// 		console.log("Dog is now Eating");
// 	}
// 	sleep() {
// 		console.log("Dog is now Sleeping");
// 	}
// 	play() {
// 		console.log("Dog is now Playing");
// 	}
// }

// >>>>>>>>>>> Inheritance

class Animal {
	constructor(color) {
		this.color = color;
	}
	eat() {
		console.log("Dog is now Eating");
	}
	sleep() {
		console.log("Dog is now Sleeping");
	}
}

class Tiger extends Animal {}
const tiger = new Tiger("Yellow");
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
	//when you makd a new property, you should call parent property too (color)
	constructor(color, ownerName) {
		super(color); //super means parent class
		this.ownerName = ownerName;
	}

	//adding function
	play() {
		console.log("Dog is now Playing");
	}

	//changing function -- overriding
	eat() {
		console.log("Dog is Eating and drinking");
	}

	//want to add more in the same function from parent class
	sleep() {
		super.sleep(); //call parent class
		console.log("Dog is running in his dream");
	}
}
const dog = new Dog("white", "Leo");
console.log(dog);
dog.eat();
dog.sleep();
dog.play();

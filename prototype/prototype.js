// 1st way
// const dog1 = { name: "leo", emoji: "🐶" };
// const dog2 = { name: "dubu", emoji: "🐕" };

// 2nd way --> constructor function
function Dog(name, emoji) {
	this.name = name;
	this.emoji = emoji;
	// // instance level function --> memory waste
	// this.printName = () => {
	// 	console.log(`${this.name} ${this.emoji}`);
	// };
}
//3rd way --> prototype level function
Dog.prototype.printName = function () {
	console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog("leo", "🐶");
const dog2 = new Dog("dubu", "🐕");
console.log(dog1, dog2);

dog1.printName();
dog2.printName();

// If you override a function with the same name at the instance level (child),
// the properties at the prototype level (parent) will be hidden (shadowing) when overriding.
//overriding
dog1.printName = function () {
	console.log("Hey,");
};
dog1.printName();

//static leber
Dog.hello = () => {
	console.log("Hello!");
};
Dog.hello();
Dog.MAX_AGE = 20;

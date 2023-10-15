// function Cat(name) {
// 	this.name = name;
// 	this.printName = function () {
// 		console.log(`Print Cat's Name: ${this.name}`);
// 	};
// 	// //1. bind function --> Bind passively
// 	// this.printName = this.printName.bind(this);
// }
function Cat(name) {
	this.name = name;
	//2. using arrow function : The arrow function remembers this in a lexical environment.
	// Points to tthis in the closest scope outside the arrow function.
	this.printName = () => {
		console.log(`Print Cat's Name: ${this.name}`);
	};
	// //1. bind function --> Bind passively
	// this.printName = this.printName.bind(this);
}
function Dog(name) {
	this.name = name;
	this.printName = function () {
		console.log(`Print Dog's Name: ${this.name}`);
	};
}

const cat = new Cat("Leo");
const dog = new Dog("Dubu");
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName(); //Print Cat's Name: Dubu ---> print dog's this.name
cat.printName(); //Print Cat's Name: Leo

function printOnMonitor(printName) {
	console.log("setting monitore, callback execute");
	printName(); //no object --> undefined
}

printOnMonitor(cat.printName); //undefined

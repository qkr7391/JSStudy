function Cat(name) {
	this.name = name;
	this.printName = function () {
		console.log(`Print Cat's Name: ${this.name}`);
	};
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

//----------------------
//this binding
// Java, C#, C++ ... (oop) >>> this -> always point instance of itself
//Statically, this is determined at the time the instance is created.

// JavaScirpt ... >>> This depends on the caller
//Dynamically determined by the caller.

dog.printName = cat.printName;
dog.printName(); //Print Cat's Name: Dubu ---> print dog's this.name
cat.printName(); //Print Cat's Name: Leo

function printOnMonitor(printName) {
	console.log("setting monitore, callback execute");
	printName(); //no object --> undefined
}

printOnMonitor(cat.printName); //undefined

const dog = { name: "Dubu", emoji: "🐶" };

console.log(Object.keys(dog)); // name, emoji
console.log(Object.values(dog)); // Dubu, 🐶
console.log(Object.entries(dog)); // name, Dubu, emoji, 🐶

console.log("name" in dog); //true
console.log(dog.hasOwnProperty("name")); // true ^^same

// Each properties in object >> save as property descriptors
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors); //writable: true, enumerable: true, configurable: true [name, emoji]

const desc = Object.getOwnPropertyDescriptor(dog, "name");
console.log(desc); // name only

Object.defineProperty(dog, "name", {
	value: "seolgi",
	writable: false,
	enumerable: false,
	configurable: false,
});

console.log(dog.name);
console.log(Object.keys(dog)); //no name
console.log(Object.values(dog)); //no name
delete dog.name; //not works
console.log(dog.name);

//----------------------------------
const student = {};
Object.defineProperties(student, {
	firstName: {
		value: "Leo",
		writable: true,
		enumerable: true,
		configurable: true,
	},
	lastName: {
		value: "Park",
		writable: true,
		enumerable: true,
		configurable: true,
	},
	fullName: {
		get() {
			return `${lastName} ${firstName}`;
		},
		set(name) {
			[this.lastName, this.firstName] = name.split(" ");
		},
		configurable: true,
	},
});
console.log(student);

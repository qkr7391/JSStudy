//Template for making object

//constructor function --> class
class Fruit {
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}
	display = () => {
		console.log(`${this.name} : ${this.emoji}`);
	};
}

// apple is Instance of class Fruit
const apple = new Fruit("apple", "🍎");
// orange is Instance of class Fruit
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// obj is just Object, not instance of any class
const obj = { name: "Leo" };

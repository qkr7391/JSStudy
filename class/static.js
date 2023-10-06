//static properties, method
class Fruit {
	static MAX_FRUITS = 10;

	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}

	//class level method
	static makdRandomFruit() {
		//can not reference this  class level method
		return new Fruit("banana", "🍌");
	}

	//instance level method
	display = () => {
		console.log(`${this.name} : ${this.emoji}`);
	};
}

//not working >> class is kind of template
// console.log(Fruit.name);
// Fruit.display();
const banana = Fruit.makdRandomFruit(); //instance
console.log(banana);
console.log(Fruit.MAX_FRUITS); //static function, properties
// apple is Instance of class Fruit
const apple = new Fruit("apple", "🍎");
// orange is Instance of class Fruit
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

Math.pow(); //static function
Number.isFinite(1);

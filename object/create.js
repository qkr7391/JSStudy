// const apple = {
// 	name: "apple",
// 	display: function () {
// 		console.log(`${this.name} : 🍎`);
// 	},
// };

// const orange = {
// 	name: "orange",
// 	display: function () {
// 		console.log(`${this.name} : 🍊`);
// 	},
// };

//constructor function
function Fruit(name, emoji) {
	this.name = name;
	this.emoji = emoji;
	this.display = function () {
		console.log(`${this.name} : ${this.emoji}`);
	};
	// return this; //can be omitted - automatically return
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");
console.log(apple);
console.log(orange);

console.log(apple.name);

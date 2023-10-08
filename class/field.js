// capsulation for control access
//private, public, protected - none js.
//# --> access in the class only.

class Fruit {
	//properties
	#name; //omit available
	#emoji; //omit available
	#type = "fruit;"; //initialize

	constructor(name, emoji) {
		this.#name = name;
		this.#emoji = emoji;
	}

	//#distplay = () => {   ->> inside only field}
	display = () => {
		console.log(`${this.#name} : ${this.#emoji}`);
	};
}

const apple = new Fruit("apple", "🍎");
// apple.#name = "orange"; //#field can not access from outside
console.log(apple);
apple.display(); //if #display, can not access from outside

// Closures are used to hide internal information and manipulate data through public functions.
//capsulation,  hide internal information
// similar with class - private field or method

function makeCounter() {
	let count = 0; //hide internal information
	function increase() {
		count++;
		console.log(count);
	}
	return increase;
}

//------------THesedays--------
const increase = makeCounter();
increase();
increase();
increase();

class Counter {
	#count = 0;
	increase() {
		this.#count++;
		console.log(this.#count);
	}
}
const counter = new Counter();
counter.increase();
counter.increase();
counter.increase();

// counter
// initialize over 0 and getting one

class Counter {
	#init;
	constructor(init) {
		if (isNaN(init) || init < 0) {
			this.#init = 0;
		} else {
			this.#init = init;
		}
	}

	get value() {
		return this.#init;
	}

	increment = () => {
		this.#init++;
		console.log(this.#init);
	};
}

const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);

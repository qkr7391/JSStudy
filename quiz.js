//[Symbol.iterator](): Iterator{ next() : {value, done}};
const multiple = {
	[Symbol.iterator]() {
		const max = 10;
		let num = 0;
		return {
			next() {
				return { value: num++ * 2, done: num > max ? true : false };
			},
		};
	},
};
for (const num of multiple) {
	console.log(num);
}

function* multipleGenerator() {
	try {
		for (let i = 0; i < 10; i++) {
			yield i ** 2; //wait until user call it
		}
	} catch (error) {
		console.log(error);
	}
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); //break and done
multiple.throw("Error!"); //need try/catch

next = multiple.next();
console.log(next.value, next.done);

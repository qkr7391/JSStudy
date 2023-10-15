//global variable will be kept until app is done
//Not Good for memory and name collision
const glabal = 1;
{
	// Exists only inside the block and is automatically destroyed when the block ends.
	const local = 1;
}

function print() {
	//Inside the function, if need variable only in the block,
	// declare and use inside of the block where you need.
	if (true) {
		let temp = 0;
	}
}

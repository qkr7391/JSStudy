//condition 1. Function that iterates from 0 to a given number of times.
//condition 2. Need to make a round perfomr a specific task given to them.
//condition 3. Print all the numbers that are traversed.
//condition 4. Print double value of all the numbers that are tracersed.
//function iterate(max, action)

function iterate(max, action) {
	for (let i = 0; i < max; i++) {
		action(i);
	}
}

function log(num) {
	console.log(num);
}

function doubleLog(num) {
	console.log(num * 2);
}

iterate(3, log);
iterate(3, doubleLog);

//same as above
iterate(3, (num) => console.log(num));
iterate(3, (num) => console.log(num * 2));

//1000ms = 1s
//setTimeout(callback function, 1000);
setTimeout(() => {
	console.log("after 1 sec, it will print out");
}, 1000);

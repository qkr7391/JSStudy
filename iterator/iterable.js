const arr = [1, 2, 3];
for (const item of arr) {
	console.log(item);
}

for (const item of arr.values()) {
	console.log(item);
}

//0,1,2
for (const item of arr.keys()) {
	console.log(item);
}

//0,1 1,2 2,3
for (const item of arr.entries()) {
	console.log(item);
}

//error >> object is not follow iteratable protocol
// const obj = { 0: 1, 1: 2 };
// for (const item of obj) {
// 	console.log(item);
// }
//0, 1 >> print key
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
	console.log(item);
}

////////////
const iterator = arr.values();
// console.log(iterator.next());
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done); //value - undefined. done - true

while (true) {
	const item = iterator.next();
	if (item.done) break;
	console.log(item.value);
}

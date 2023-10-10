//logical operator >> && , ||

//short-circuit evalutaion
const obj1 = { name: "🐶" };
const obj2 = { name: "🐱", owner: "Leo" };
if (obj1 && obj2) {
	console.log("Both true");
}
if (obj1 || obj2) {
	console.log("one of them is true");
}

//short-circuit evaluation
let result = obj1 && obj2; //true && ... >> obj2 assign to result
console.log(result);

let result2 = obj1 || obj2; //true || ... >> obj 1assign to result
console.log(result2);

console.clear();

//example
// && >> condtion is truthy, && need to do something
// || >> condition is falshy, || need to do something
function changeOwner(animal) {
	if (!animal.owner) {
		throw new Error("No Owner");
	}
	animal.owner = "Changed owner";
}

function makeOwner(animal) {
	if (animal.owner) {
		throw new Error("Has Owner");
	}
	animal.owner = "New owner";
}

//false --> not execute
obj1.owner && changeOwner(obj1); //when obj1 has owner -> changeOwner
//true --> execute
obj2.owner && changeOwner(obj2); //when obj2 has owner -> changeOwner
console.log(obj1);
console.log(obj2);

//false --> execute
obj1.owner || makeOwner(obj1); //when obj1 dont have owner ->makeOwner
//true --> not execute
obj2.owner || makeOwner(obj2); //when obj2 dont have owner ->makeOwner
console.log(obj1);
console.log(obj2);

// null or undefined check
let item = { price: 1 };
//             true --> execute
const price = item.price;
console.log(price);

let item2; //nothing assigned here
//              false --> not execute
const price2 = item2 && item2.price;
console.log(price2); //undefined

// || -> when value is falsy, assign "Hello" [0, -0, null, undefined]
function print(msg = "Hi") {
	const txt = msg || "Hello"; //msg = undefined --> assign "Hello"
	console.log(txt);
}
print(); //Hello
print(undefined); //Hello
print(null); //Hello
print(0); //Hello

//default parameter -> not send or undefined set
function print2(msg = "Hi") {
	// const txt = msg || "Hello";
	console.log(msg);
}
print2(); //Hi
print2(undefined); //Hi
print2(null); //null
print2(0); //0

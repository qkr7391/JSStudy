//JSON: JavaScript Object Notation
// Format text as an object for HTTP communication between server and client (browser, mobile)
//stringify(object) :JSON
//parse(JSON): object

//object Leo
const Leo = {
	name: "leo",
	age: 20,
	eat: () => {
		console.log("eat");
	},
};
console.log(Leo);

//Serializing - obj to string
//string - function is not included properties, data, state can only be string
const json = JSON.stringify(Leo);
console.log(json);

//Deserializing - string to obj
//change to obj
const obj = JSON.parse(json);
console.log(obj);

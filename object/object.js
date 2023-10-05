//Object literal { key : value}
//new Object()
//Object.create();
//key - char, num, string, symbol
//value - primeter, object(function)

let apple = {
	name: "apple",
	img: "🍎",
	0: 1,
	["hello-bye1"]: "🖐️",
};

//acess to  attiribute, data
apple.name; //dot notation
console.log(apple["hello-bye1"]); // bracket notation
apple["name"];

//add attribute
apple.emoji = "🍎";
console.log(apple.emoji);
console.log(apple["emoji"]);

//delete attribute
delete apple.emoji;
console.log(apple);

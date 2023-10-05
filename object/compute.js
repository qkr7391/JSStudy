const obj = {
	name: "leo",
	age: 20,
};
//static
obj.name;
obj.age;

//dynamic
function getValue(obj, key) {
	return obj[key]; //obj.key is not working because there is no key(only name, age)
}

console.log(getValue(obj, "name"));

function addKey(obj, key, value) {
	obj[key] = value;
}
addKey(obj, "job", "developer");
console.log(obj);

function deleteKey(obj, key) {
	delete obj[key];
}
deleteKey(obj, "job");
console.log(obj);

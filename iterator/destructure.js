//Destructuring Assignment
//Data Grouping
const fruits = ["🍏", "🍊", "🍋", "🍇"];
const [first, second, ...others] = fruits;
console.log(fruits[0]);
console.log(first);
console.log(second);
console.log(others);

//////////////
const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

//////////////
function createEmoji() {
	return ["apple", "🍎"];
}
const array = createEmoji();
console.log(array);

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

//////////////
const leo = { name: "leo", age: 20, job: "developer" };
function display(person) {
	console.log("name", person.name);
	console.log("age", person.age);
	console.log("job", person.job);
}
display(leo);

const leo2 = { name: "leo", age: 20, job: "developer" };
function display2({ name, age, job }) {
	console.log("name", name);
	console.log("age", age);
	console.log("job", job);
}
display2(leo2);

////////////////
const { name, age, job: occupation, pet = "dog" } = leo;
console.log(name);
console.log(age);
// console.log(job);
console.log(occupation);
console.log(pet);

console.clear();

/////////quiz
const prop = {
	name: "Button",
	styles: {
		size: 20,
		color: "black",
	},
};

//prop.styles.color >> ???
// function changeColor({ name, styles: { size, color } }) {
function changeColor({ styles: { color } }) {
	console.log(color);
}
changeColor(prop);

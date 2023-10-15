//var ->
// Not good for code readability and maintainability

// It is possible to declare and assign variables without the variable declaration keyword
// It's hard to tell if you're declaring or reassigning a variable
something = "😍";
console.log(something);

// Can not find name collision
// Duplicate declarations are possible
var love = "😍";
var love = "😍";
console.log(love); //working

// let num = 0;
// let num = 1; //error - crash

// does not recognize block-level scopes
var apple = "apple";
{
	var apple = "🍎";
}
console.log(apple); // 🍎

//Support function
function example() {
	var dog = "🐶";
}
// console.log(dog); //error - crash

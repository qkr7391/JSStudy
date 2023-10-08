const fruits = ["🍎", "🍐", "🍊", "🍋"];

//how to reference array items
console.log(fruits[0]);
console.log(fruits[1]);

console.log(fruits.length); //4 >> 4 items in array fruits

for (let index = 0; index < fruits.length; index++) {
	console.log(fruits[index]);
}

//bad way to add
fruits[4] = "🍌";
console.log(fruits);

delete fruits[1];
console.log(fruits);

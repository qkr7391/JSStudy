function getBanana() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("🍌");
		}, 1000);
	});
}

function getApple() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("🍎");
		}, 3000);
	});
}

function getOrange() {
	return Promise.reject(new Error("No Orange"));
}

//Bring banana and apple together
//return Promise
// function fetchFruits() {
// 	return getBanana() //
// 		.then((banana) =>
// 			getApple() //
// 				.then((apple) => [banana, apple])
// 		);
// }

//async version
async function fetchFruits() {
	const banana = await getBanana(); //return promise - await keyword
	const apple = await getApple(); //return promise - await keyword
	return [banana, apple];
}

fetchFruits() //
	.then((fruits) => console.log(fruits));

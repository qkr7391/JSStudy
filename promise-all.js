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
//4sec
getBanana() //
	.then((banana) =>
		getApple() //
			.then((apple) => [banana, apple])
	)
	.then(console.log);

//Promise.all -->> Run in parallel at once
//3sec(cus of apple)
Promise.all([getBanana(), getApple()]) //
	.then((fruits) => console.log("all ", fruits));

//Promise.race || return only fastest one
//1 sec
Promise.race([getBanana(), getApple()]) //
	.then((fruit) => console.log("race ", fruit));

//error version || only when fulfiled
Promise.all([getBanana(), getApple(), getOrange()]) //
	.then((fruits) => console.log("all-error ", fruits))
	.catch(console.log);

//fulfilled or rejected show as array
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
	.then((fruits) => console.log("all-settle ", fruits))
	.catch(console.log);

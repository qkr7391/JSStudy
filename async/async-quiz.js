function fetchEgg(chicken) {
	return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
	return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
	return Promise.reject("No chicken");
	// return Promise.resolve(`🥬 => 🐣`);
}

//promise version
function makdFriedEgg() {
	return getChicken()
		.catch(() => "🐓")
		.then(fetchEgg)
		.then(fryEgg);
}
makdFriedEgg().then(console.log);

//async version
async function getfryEgg() {
	let chicken;
	try {
		chicken = await getChicken();
	} catch {
		chicken = "🐓";
	}
	const egg = await fetchEgg(chicken);
	return fryEgg(egg);
}

getfryEgg().then(console.log);

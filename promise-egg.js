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

// // fetchEgg("🐔").then((egg) => console.log(egg));
// getChicken() //{return fetchEgg(chicken)}
// 	.then((chicken) => fetchEgg(chicken))
// 	.then((egg) => fryEgg(egg))
// 	.then((friedEgg) => console.log(friedEgg));

getChicken() //{return fetchEgg(chicken)}
	.catch(() => "🐓")
	.then(fetchEgg)
	.then(fryEgg)
	.then(console.log);

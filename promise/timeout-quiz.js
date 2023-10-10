function runInDelay(callback, seconds) {
	if (!callback) {
		throw new Error("callback function need");
	}
	if (!seconds || seconds < 0) {
		throw new Error("seconds should be bigger than 0");
	}
	setTimeout(callback, seconds * 1000);
}

try {
	runInDelay(() => {
		console.log("Timer done!");
	}, 2);
} catch (error) {
	console.log(error);
}

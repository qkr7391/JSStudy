function runInDelay(seconds) {
	return new Promise((resolve, reject) => {
		//for, setTimeout ...
		if (!seconds || seconds < 0) {
			reject(new Error("seconde is less than 0"));
		}
		setTimeout(resolve(), seconds * 1000);
		//same as above ^^^  setTimeout(()=> {resolve();}, seconds * 1000)
	});
}

runInDelay(2)
	.then(() => console.log("Timer done")) //sucessed
	.catch(console.error) //failed
	.finally(() => console.log("done")); //whatever

runInDelay(-1)
	.then(() => console.log("Timer done")) //sucessed
	.catch(console.error) //failed
	.finally(() => console.log("done")); //whatever

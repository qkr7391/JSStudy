//try catch finally

function readFile(path) {
	// throw new Error("cannot find path of file");
	return "context";
}

function processFile(path) {
	let content;
	try {
		content = readFile(path);
	} catch (error) {
		console.log(error.name);
		console.log(error.massage);
		console.log(error.stack);
		content = "basic content";
	} finally {
		console.log(
			"Finally, whether you succeed or fail, clean up your resources."
		);
	}
	const result = "hi " + content;
	return result;
}

const result = processFile("path");
console.log(result);

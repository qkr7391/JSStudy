//Bubbling up, Propagating
function a() {
	throw new Error("error!");
}

function b() {
	try {
		a();
	} catch (error) {
		console.log("I think that I cannot handle this");
		throw error;
	}
}

function c() {
	b();
}
try {
	c();
} catch (error) {
	console.log("Catched");
}
console.log("done!");

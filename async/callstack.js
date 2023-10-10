function a() {
	return 1;
}

function b() {
	return a() + 1;
}

function c() {
	return b() + 1;
}

const result = c();
// callstack --> c() -> b() -> a() -> return 1 -> return 1+1 -> return 2+1 -> 3
console.log(result);

// Since JavaScript runs synchronously, heavy/long tasks will slow down if they are executed in the middle.

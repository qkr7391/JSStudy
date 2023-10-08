console.log(globalThis); //global
console.log(this); // glabal object
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval("const num = 2; console.log(num)");
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat("12.43"));
console.log(parseInt("12.43"));
console.log(parseInt("11"));

//URL(URI, Uniform Resource Identifier)
// Ascii only
const URL = "https://하이얏.com"; //>>escape process needs
const encoded = encodeURI(URL);

console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

//partial
const part = "하야야야.com";
encodeURIComponent(part);
console.log(encodeURIComponent(part));

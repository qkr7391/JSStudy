const textobj = new String("Hello World");
const text = "Hello World";

console.log(textobj); //object
console.log(text); //string

console.log(text[0]); //array index
console.log(text.charAt(0)); //function

console.log(text.length);

console.log(text.indexOf("l")); //find index of selected char
console.log(text.lastIndexOf("l")); //from back

console.log(text.includes("tx"));

console.log(text.startsWith("He"));
console.log(text.endsWith("d"));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 2)); // take string from 0 til 2 (not including)
console.log(text.slice(2)); //slice before index 2
console.log(text.slice(-2)); // from back to value

const space = "        space       ";
console.log(space.trim());

const longTxt = "Get to the, point";
console.log(longTxt.split(" "));
console.log(longTxt.split(" ", 2));
console.log(longTxt.split(",", 2));
console.log(longTxt.split(", ", 2));

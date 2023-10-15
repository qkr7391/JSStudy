//Object.freeze
// add, delete, write, Overriding properties -->> impossible

const leo = { name: "leo" };
const dog = { name: "Dubu", emoji: "🐶", owner: leo };
Object.freeze(dog);
dog.name = "Seolgi";
dog.age = 2;
console.log(dog);
delete dog.name;
console.log(dog);

leo.name = "Leo"; // working
console.log(dog);

//Object.seal
// edit--> possible, ||| add, delete,  Overriding properties --> impossible
// const cat = {};
const cat = { ...dog }; // --> spread operator
// Object.assign(cat, dog); //same as upside
Object.seal(cat);
console.log(cat);
cat.name = "Bella";
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog)); //freeze or not check ---> true
console.log(Object.isSealed(cat)); // check sealed or not ---> true

//preevent Ectension
const tiger = { name: "Tiger" };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); //---> false || can not extens

tiger.name = "Tttiger";
console.log(tiger);
delete tiger.name;
console.log(tiger);
// tiger.age = 1; //Error - extension in impossible

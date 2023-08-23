// typeof -> can check data's type
//return string

let variable;
console.log(typeof variable); //undefined

variable = 123;
console.log(typeof variable); //number

variable = '';
console.log(typeof variable); //string

variable = null;
console.log(typeof variable); //object

//type set depending on assigning value

console.log('*********************');

variable = {};
console.log(typeof variable); //object


variable = function(){};
console.log(typeof variable); //function

variable = Symbol();
console.log(typeof variable); //Symbol

console.log('*********************');

console.log(typeof 123); //number
console.log(typeof '123'); //string

let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); //14 a + (b * 4)

result = a++ + b * 4;
console.log(result); //14 a + (b * 4) >> a = 3
console.log(a); //3

result = (a + b) * 4
console.log(result); //24
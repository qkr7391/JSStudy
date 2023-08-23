//Unary operator
//+ - !

let a = 5;
console.log(a);

a = -a; //(-1 * 5)
console.log(a); //-a
console.log(-a); //-(-a) >> a

a = -a;


a = -a; // (-a)
console.log(a);
a = +a; //+(-a)
console.log(a);


console.log('*****************');
let bool = true;
console.log(bool);
console.log(!bool);
console.log(!!bool);


console.clear();
console.log('*****************');
//change to number type that are not number types
console.log(+false); // 0
console.log(+null); //0
console.log(+''); //0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); //NaN

console.clear();
console.log('*****************');

console.log(1);
console.log(!1); //false
console.log(!!1); //true
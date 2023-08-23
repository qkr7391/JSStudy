// == != === !==

console.log(2 == 2); //t
console.log(2 === 2); //t
console.log(2 != 2); //f
console.log(2 !== 2); //f

console.log(2 == '2'); //t
console.log(2 === '2'); //f

console.log(true == 1); //t
console.log(true === 1); //f

console.log(false == 0); // t
console.log(false === 0); //f

console.clear();

const o1 = {
    name : 'js'
}

const o2 = {
    name : 'js'
}

console.log(o1 == o2);// false
console.log(o1 === o2);// false
// reference address is different

console.log(o1.name == o2.name); //t
console.log(o1.name === o2.name); //t



let o3 = o2; [copy of reference]
console.log(o3 == o2); //t
console.log(o3 === o2); //t
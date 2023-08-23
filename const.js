//let -> available reassigning 
//const -> not allowed reassigning

let a = 1;
a  = 2;
console.log(a);


const text = 'wow';
// text = 'no'; //error

const MAX = 10;
console.log(MAX);


//can not change apple = {} ...
const apple = {
    name : 'apple',
    color : 'red',
    display : '🍎'
}



//BUT!!!!!!!!
console.log(apple);

console.log('\n***');
apple.name = 'orange';
console.log(apple.name);

console.log('\n***');
apple.display = '🍊';
console.log(apple.display);

console.log('\n***');
console.log(apple);


//reassignable [let]
//mutable [let, const]
//[copy by value]
let a = 1;
let b = a;
console.log(a); //1
console.log(b); //1
b = 2;
console.log(a); //1
console.log(b); //2


console.log('************');
//[copy by reference]
let apple = {
    name : 'apple',
    color : 'red',
    display : '🍎'
}
let orange = apple;
console.log(apple.name); //apple
console.log(orange.name); //apple

orange.name = 'orange' 
console.log(apple.name); //orange
console.log(orange.name); //orange
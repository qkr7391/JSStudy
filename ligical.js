//logical operator
//&& || !

let num = 21;
if (num >= 0 && num < 9) {
    console.log('✌️');
}
else {
    console.log('👌');
}



if (num >= 0 || num < 9) {
    console.log('✌️');
}
else {
    console.log('👌');
}



if (num != 8) {
    console.log('✌️');
}
else {
    console.log('👌');
}


console.log(true && true); //t
console.log(true && false); //f
console.log(false && true); //f
console.log(false && false); //f

console.log(true || true); //t
console.log(true || false); //t
console.log(false || true); //t
console.log(false || false); //f


console.log(!'text'); //false
console.log(!!'text'); //true >> string to boolean
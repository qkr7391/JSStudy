let a = 0;
console.log(a);

a++;
console.log(a);

a--;
console.log(a);


//caution prefix vs postfix

console.clear();

a = 0;
let b = a++;
console.log(b); //0 >> declare first
console.log(a); //1


let c = 0;
let d = ++c;
console.log(d); //1
console.log(c); //1
// optional chaning operator
// ?.

// null or undefined check
let item = { price: 1 };
//             true --> execute
const price = item.price;
console.log(price);

// null or undefined check
let item2 = { price: 1 };
//             true --> execute
const price2 = item2?.price;
console.log(price2);

///////////////
let obj = { name: "🐶", owner: { name: "Leo" } };
// const ownerName = obj && obj.owner && obj.owner.name;
const ownerName = obj?.owner?.name;
console.log(ownerName);

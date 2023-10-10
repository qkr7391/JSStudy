let count = 0; // not export
// export let count = 0; //not a good way -->> getter, setter using is better
//export only one --> export default
// export default function increase() {
// 	count++;
// 	console.log(count);
// }
export function increase() {
	count++;
	console.log(count);
}
export function getCount() {
	return count;
}

console.log(new Date()); // now time

console.log(new Date("Dec 11, 2000"));
console.log(new Date("2022-12-17T03:24:00"));

console.log(Date.now());
console.log(Date.parse("2022-12-17T03:24:00"));

const now = new Date();
now.setFullYear(2027);
now.setMonth(0); // 0:1(Jan), 1:2(Feb) ...
console.log(now.getFullYear());
console.log(now.getDate()); // 0:1,
console.log(now.getDay()); //0:sun, 1: mon ...
console.log(now.getHours); //hours, minutes. seconds, time
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleString("en-US"));
console.log(now.toLocaleString("ko-KR"));

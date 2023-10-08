// print char one each
const text = "Hello World!";
for (let index = 0; index < text.length; index++) {
	console.log(text[index]);
}

//
const ids = "user1, user2, user3, user4";
console.log(ids.split(","));

//
setInterval(() => {
	const now = new Date();
	console.log(now.toLocaleString("en-US"));
}, 1000);

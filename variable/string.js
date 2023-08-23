let string = 'hello';
console.log(string);

string = `hi`;
console.log(string);

string = '"hello"'
console.log(string);

string = "'hello!'"
console.log(string);

string = "yo, js \n what's up"
console.log(string);

string = "yo, js \t\t what's up"
console.log(string);

string = "hello \\ nice to meet you"
console.log(string);

string = "hello \u09AC \t unicode"
console.log(string);


//template literal -> ``
let id = 'sarah';
let greetings = 'hello, ' + id + "\ngood to see you";
console.log(greetings);

greetings = `hello,, ${id}
good to see you`
console.log(greetings);
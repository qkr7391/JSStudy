//If blocks are nested, a child block can reference a variable in a parent block.
// However, the parent block cannot reference the child block's variables.

{
	const x = 1;
	{
		const y = 2;
		console.log(x); // >> 1
	}
	console.log(x); // >> 1
	// console.log(y); // >> crash
}

const text = "global"; //global scope, global variable
{
	const text = "inside block1"; // local variable, local scope
	{
		console.log(text); // >> "inside block1"
	}
}

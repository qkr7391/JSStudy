function execute() {
	console.log("1"); //1 excute
	//2 throw callback function to node API and pass
	setTimeout(() => {
		//4 and when callback in on task Queue, Event Loop get this to call stack and execute
		console.log("2");
	}, 3000);
	//3 execute this
	console.log(3);
}

execute(); // 1 3 3sec later 2

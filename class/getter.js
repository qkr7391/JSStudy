//Accessor property  -->> getther, setter

class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	//fullName() {   >> function
	//getter
	get fullName() {
		return `${this.lastName} ${this.firstName}`;
	}
	// setter
	set fullName(value) {
		console.log("set", value);
	}
}

const student = new Student("Leo", "Han");
console.log(student.firstName);
student.firstName = "Bella";
// console.log(student.fullName()); //call function
console.log(student.fullName); //using getter >> Han Bella
student.fullName = "Lena Han"; //using setter

console.log(student.fullName); //Han Bella, assign as a setter but it was not changed?
//Because, in the setter, I didn't change the name, I just show the value what I got.

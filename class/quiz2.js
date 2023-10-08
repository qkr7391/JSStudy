//Answer
class employee {
	wage = 0;
	constructor(name, part, hours) {
		this.name = name;
		this.part = part;
		this.hours = hours;
	}

	monthWage = () => {
		return this.wage * this.hours;
	};
}

class fulltime extends employee {
	constructor(name, part, hours, wage) {
		super(name, part, hours, wage);
		this.wage = 10000;
	}
}

class parttime extends employee {
	constructor(name, part, hours, wage) {
		super(name, part, hours, wage);
		this.wage = 8000;
	}
}

const ft1 = new fulltime("Leo Han", "Programmer", 160);
console.log(ft1);
console.log(ft1.monthWage());

const pt1 = new parttime("Deo Han", "Receptionist", 80);
console.log(pt1);
console.log(pt1.monthWage());

///////////////////Other version////////////////////////

class Employees {
	constructor(fullName, department, hoursperMon, payRate) {
		this.fullName = fullName;
		this.department = department;
		this.hoursperMon = hoursperMon;
		this.payRate = payRate;
	}

	payment() {
		return this.hoursperMon * this.payRate;
	}
}

class fulltimeE extends Employees {
	static PAY_RATE = 10000;
	constructor(fullName, department, hoursperMon) {
		super(fullName, department, hoursperMon, fulltimeE.PAY_RATE);
	}
}

class parttimeE extends Employees {
	static PAY_RATE = 8000;
	constructor(fullName, department, hoursperMon) {
		super(fullName, department, hoursperMon, parttimeE.PAY_RATE);
	}
}

const ft2 = new fulltimeE("Luna Han", "Business", 180);
const pt2 = new parttimeE("Juna Han", "Accounting", 90);
console.log("other version " + ft2.payment());
console.log("other version " + pt2.payment());

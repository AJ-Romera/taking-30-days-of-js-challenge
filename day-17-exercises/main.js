// Exercises: Level 1

// 1. Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem("firstName", "Antonio");
localStorage.setItem("lastName", "Romera Alfonso");
localStorage.setItem("age", 26);
localStorage.setItem("country", "Spain");
localStorage.setItem("city", "Cartaya");


// Exercises: Level 2

// 1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

let student = {
	firstName: "Antonio José",
	lastName: "Romera Alfonso",
	age: 26,
	skills: ["html", "css", "javascript", "Angular", "react", "git"],
	country: "Spain"
};

let studentJSON = JSON.stringify(student);
localStorage.setItem("student", studentJSON);


// Exercises: Level 3

// 1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


let personAccount = {
	firstName: "Antonio José",
	lastName: "Romera Alfonso",
	incomes: [
		{ income: 3000, description: "Dev job" },
		{ income: 250, description: "Passive income" },
		{ income: 550, description: "Investment income" },
	],
	expenses: [
		{ expense: 250, description: "Food" },
		{ expense: 300, description: "Insurances" },
		{ expense: 250, description: "Water, gas, electricity" },
		{ expense: 25, description: "WiFi" },
		{ expense: 100, description: "Clothes" },
		{ expense: 50, description: "Gym" },
		{ expense: 150, description: "Basic needs" }
    ],
    set addIncome(amount) {
		this.incomes.push(amount);
	},
	set addExpenses(cost) {
		this.expenses.push(cost);
	},
	totalIncome() {
		let totalIncome = 0;
		personAccount.incomes.forEach((incomeInfo) => (totalIncome += incomeInfo.income));
		return totalIncome;
	},
	totalExpense() {
		let totalExpense = 0;
		this.expenses.forEach((expenseInfo) => (totalExpense += expenseInfo.expense));
		return totalExpense;
	},
	accountBalance() {
		let accBalance = this.totalIncome() - this.totalExpense();
		return accBalance;
	},
	accountInfo() {
        const accInfo = `Full name: ${this.firstName} ${this.lastName}\nTotal income: ${this.totalIncome()}\nTotal expenses: ${this.totalExpense()}\nBalance: ${this.accountBalance()}`;
		return accInfo;
	}
};

console.log(personAccount);

personAccount.addIncome = { income: 200, description: "Crypto investment" };
personAccount.addExpenses = { expense: 600, description: "New hardware" };

console.log(personAccount.incomes);
console.log(personAccount.expenses);

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());

console.log(personAccount.accountBalance());

console.log(personAccount.accountInfo());
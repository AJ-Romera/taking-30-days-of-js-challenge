// Exercises: Level 1

// 1. Create a closure which has one inner function

console.log("------ exercise 1 ------");

function outerFunction() {
	let a = 1;
	function innerFunction() {
		console.log(a);
	}

	return innerFunction;
}
const innerFunc = outerFunction();

innerFunc();


// Exercises: Level 2

// 1. Create a closure which has three inner functions

console.log("------ exercise 2 ------");

function sumMultOrDiv() {
    let num1 = 2;
    let num2 = 6;
	function sum() {
		return num1 + num2;
	}
	function multiply() {
		return num1 * num2;
    }
    function divide() {
		return num1 / num2;
	}

	return {
		sum: sum(),
        multiply: multiply(),
        divide: divide()
	};
}
const func = sumMultOrDiv();

console.log(func.sum);
console.log(func.multiply);
console.log(func.divide);


// Exercises: Level 3

// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

console.log("------ exercise 3 ------");

function personAccount() {
	let firstName = "Antonio José";
	let lastName = "Romera Alfonso";
	let incomes = [
		{ income: 3000, description: "Dev job" },
		{ income: 250, description: "Passive income" },
		{ income: 550, description: "Investment income" },
	];
	let expenses = [
		{ expense: 250, description: "Food" },
		{ expense: 300, description: "Insurances" },
		{ expense: 250, description: "Water, gas, electricity" },
		{ expense: 25, description: "WiFi" },
		{ expense: 100, description: "Clothes" },
		{ expense: 50, description: "Gym" },
		{ expense: 150, description: "Basic needs" },
	];

	function addIncome(income) {
		incomes.push(income);
		return income;
	}

	function addExpense(expense) {
		expenses.push(expense);
		return expense;
	}

	function totalIncome() {
		let TE = 0;
		incomes.forEach((income) => {
			TE += income.income;
		});
		return TE;
	}

	function totalExpense() {
		let TE = 0;
		expenses.forEach((expense) => {
			TE += expense.expense;
		});
		return TE;
	}

	function accountBalance() {
		let result = totalIncome() - totalExpense();
		return result;
	}

	function accountInfo() {
		return `Name: ${firstName} ${lastName}\nBalance: ${accountBalance()} euro`;
	}

	return {
		addIncome: addIncome({ income: 200, description: "Crypto investment" }),
		addExpense: addExpense({ expense: 600, description: "New hardware" }),
		totalIncome: totalIncome(),
		totalExpense: totalExpense(),
		accountBalance: accountBalance(),
		accountInfo: accountInfo(),
	};
}

const accFunc = personAccount();

console.log(accFunc.addIncome);
console.log(accFunc.addExpense);
console.log(accFunc.totalIncome);
console.log(accFunc.totalExpense);
console.log(accFunc.accountBalance);
console.log(accFunc.accountInfo);
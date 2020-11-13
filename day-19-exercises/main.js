// Exercises: Level 1

// 1. Create a closure which has one inner function

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



// Exercises: Level 3

// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


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


// There are no exercises today. Anyways, let´s practice a little:

// try-catch-finally error handling

try {
	coolFunction();
} catch (error) {
	console.log("Name of the error:", error.name);
	console.log("Error message:", error.message);
} finally {
	console.log("You executed a try-catch successfully");
}

// nested error handling

try {
  try {
    throw new Error('oops');
  }
  finally {
    console.log('Finally');
  }
}
catch (e) {
  console.error('This is an error:', e.message);
}


/* // throw example
const throwErrorExample = () => {
	let myString = prompt("Enter a string: ");
	try {
		if (myString == "") throw "empty";
		if (!isNaN(myString)) throw "not a string, is a number";
		myString = String(myString);
		if (myString.length <= 6) throw "short string";
		if (myString.length > 6) throw "long string";
	} catch (err) {
		console.log(err);
	}
};
throwErrorExample();
*/

/* // ReferenceError:
let firstName = "Antonio José";
let fullName = firstName + " " + lastName;

console.log(fullName);
*/

/* // SyntaxError:
let sum = 2 plus 2; // is + instead of plus
console.log(sum);

console.log(`Not closed with the same quotation mark");
*/

/* // TypeError:
let num = 10;
console.log(num.toUpperCase());
*/

/* // RangeError:
function check(value) {
	if (["apple", "banana", "carrot"].includes(value) === false) {
		throw new RangeError(
			'The argument must be an "apple", "banana", or "carrot".'
		);
	}
}

try {
	check("cabbage");
} catch (error) {
	if (error instanceof RangeError) {
        console.error("Type of error:", error.name);
		console.error("Error message:", error.message);
	}
}
*/
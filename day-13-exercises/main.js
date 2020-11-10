// Exercises: Level 1

// 1. Display the countries array as a table

const countries = [
	["Finland", "Helsinki"],
	["Sweden", "Stockholm"],
	["Norway", "Oslo"],
];
console.table(countries);

// 2. Display the countries object as a table

const countriesObj = {
	Finland: "Helsinki",
	Sweden: "Stockholm",
	Norway: "Oslo"
};
console.table(countriesObj);

// 3. Use console.group() to group logs

console.group('Countries')
console.log(countries);
console.log(countriesObj);
console.groupEnd()

// EXTRA: example of groupCollapsed
console.groupCollapsed("Example");
console.log("This is");
console.log("an example of");
console.log("groupCollapsed");
console.groupEnd();


// Exercises: Level 2
// 1. 10 > 2 * 10 use console.assert()

console.assert(10 > 2 * 10, 'Absolutely false!');

// 2. Write a warning message using console.warn()

console.warn('This is a manual warning message!');

// 3. Write an error message using console.error()

console.error('This is a manual error message! The colors of this errors and warning makes the flag of my country, Spain');


// Exercises: Level 3
// Check the speed difference among the following loops: while, for, for of, forEach

const names = ["Antonio", "José", "Romera", "Alfonso", "AJ"];

console.time("while");
i = 0;
while (i <= names.length) {
    console.log(names[i]);
    i++;
}
console.timeEnd("while");

console.time("for");
for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
}
console.timeEnd("for");

console.time("for of");
for (const name of names) {
    console.log(name);
}
console.timeEnd("for of");

console.time("forEach");
names.forEach(name => console.log(name));
console.timeEnd("forEach");
const names = ["Asabeneh", "Brook", "David", "John"];
const countries = [
	["Finland", "Helsinki"],
	["Sweden", "Stockholm"],
	["Norway", "Oslo"],
];
const user = {
	name: "Asabeneh",
	title: "Programmer",
	country: "Finland",
	city: "Helsinki",
	age: 250,
};
const users = [
	{
		name: "Asabeneh",
		title: "Programmer",
		country: "Finland",
		city: "Helsinki",
		age: 250,
	},
	{
		name: "Eyob",
		title: "Teacher",
		country: "Sweden",
		city: "London",
		age: 25,
	},
	{
		name: "Asab",
		title: "Instructor",
		country: "Norway",
		city: "Oslo",
		age: 22,
	},
	{
		name: "Matias",
		title: "Developer",
		country: "Denmark",
		city: "Copenhagen",
		age: 28,
	},
];


// Exercises: Level 1

// 1. Display the countries array as a table

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
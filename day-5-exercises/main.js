// Exercises: Level 1

// 1. Declare an empty array;

/* const emptyArray = Array();
or... let emptyArray = new Array();
but better use... const emptyArray = [] /*

// 2. Declare an array with more than 5 number of elements

const animals = [
    'Wolf',
    'Lion',
    'Tiger',
    'Cat',
    'Puma',
    'Snake',
    'Whale'
]

// 3. Find the length of your array

console.log(animals.length);

// 4. Get the first item, the middle item and the last item of the array

let firstAnimal = animals[0];
console.log(firstAnimal); // Wolf

let middleIndex = parseInt(animals.length / 2); // There are lots of ways to get the middle index
let middleAnimal = animals[middleIndex];
console.log(middleAnimal); // Expect Cat 

let lastIndex = animals.length - 1;
let lastAnimal = animals[lastIndex];
console.log(lastAnimal); // Whale 

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [
    'Antonio',
    6,
    true,
    undefined,
    null,
    [1, 2, 'three'],
    { countries: ['Spain', 'Portugal', 'France', 'Italy', 'Egypt'] }
]

console.log(mixedDataTypes.length); // length > 5
console.log(mixedDataTypes);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]

// 7. Print the array using console.log()

console.log(itCompanies);

// 8. Print the number of companies in the array

console.log(itCompanies.length);

// 9. Print the first company, middle and last company

let firstCompany = itCompanies[0];
console.log(firstCompany); // Facebook

middleIndex = parseInt(itCompanies.length / 2);
let middleCompany = itCompanies[middleIndex];
console.log(middleCompany); // Apple 

lastIndex = itCompanies.length - 1;
let lastCompany = itCompanies[lastIndex];
console.log(lastCompany); // Amazon 

// 10. Print out each company

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11. Change each company name to uppercase one by one and print them out

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

let m1 = itCompanies.slice(0, 6);
let m2 = itCompanies.slice(6, 7);

let m1ToString = m1.join(', ');
let m2ToString = m2.toString();

const slicedItCompanies = [m1ToString, m2ToString];
console.log(`${slicedItCompanies.join(' and ')} are big IT companies.`);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
/*
let companyUserInput = String(prompt('Let´s see if your company is on the array', 'Type in your company´s name here, please'));
let company = companyUserInput[0].toUpperCase() + companyUserInput.slice(1);

let index = itCompanies.indexOf(company);

if(index != -1){
    console.log(`${company} does exist in the array`);
} else {
    console.log(`${company} does not exist in the array`);
}
// Another way:
let searchCompany = prompt("Enter company to search");
if (itCompanies.includes(searchCompany)) {
    console.log(searchCompany);
} else {
    console.log("company not found");
}
*/

// 14. Filter out companies which have more than one 'o' without the filter method
/*
// We can´t use for loops in this challenge yet, so it´s more complicated...

let index = parseInt(prompt('Select an index from the array'));

let firstO = itCompanies[index].indexOf('o');
let lastO = itCompanies[index].lastIndexOf('o');

if (firstO != lastO) {
    console.log(`${itCompanies[index]} has more than one o`);
} else {
    console.log(`${itCompanies[index]} has not got more than one o`);
}

// If we have to filter companies with two o together ('oo') it´s much easier:

console.log(itCompanies[0].includes("oo")); // True
console.log(itCompanies[1].includes("oo")); // True
console.log(itCompanies[2].includes("oo")); // False
console.log(itCompanies[3].includes("oo")); // False
console.log(itCompanies[4].includes("oo")); // False
console.log(itCompanies[5].includes("oo")); // False
console.log(itCompanies[6].includes("oo")); // False
*/

// 15. Sort the array using sort() method

// console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method

// console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array

// console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies from the array

// console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

// 19. Slice out the middle IT company or companies from the array

/* middleIndex // middleCompany from the exercise 9 contains the middle company index
console.log(itCompanies.slice(middleIndex, middleIndex+1)); */

// 20. Remove the first IT company from the array

/* itCompanies.shift();
console.log(itCompanies); */

// 21. Remove the middle IT company or companies from the array
    /* We have:
    ["Microsoft", "IBM", "Google", "Facebook", "Apple", "Amazon"]
    at the moment, so let´s remove "Google" and "Facebook". */

/* itCompanies.splice(2, 2); // From index 2 removes 2 elements including the element in index 2
console.log(itCompanies); */

// 22. Remove the last IT company from the array

/* itCompanies.pop()
console.log(itCompanies); */

// 23. Remove all IT companies

/* itCompanies.splice(0)
console.log(itCompanies); */


// Exercises: Level 2

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
    // Done

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

/* let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
13 */

/*
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let cleanSentence = text.replace(/\./g, '');
cleanSentence = cleanSentence.replace(/,/g, '');

let words = cleanSentence.split(' ');
console.log(words);
console.log(words.length);
*/

/* 3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

* Add 'Meat' in the beginning of your shopping cart if it has not been already added
* Add Sugar at the end of you shopping cart if it has not been already added
* Remove 'Honey' if you are allergic to honey
* Modify Tea to 'Green Tea' */

/*
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

if (shoppingCart.includes('Meat')) {
    console.log('You have meat in your cart already');
} else {
    shoppingCart.unshift('Meat');
    console.log('Added meat succesfully!');
}
console.log(shoppingCart);

if (shoppingCart.includes('Sugar')) {
    console.log('You have sugar in your cart already');
} else {
    shoppingCart.push('Sugar');
    console.log('Added sugar succesfully!');
}
console.log(shoppingCart);

let AllergicToHoney = true;

if (AllergicToHoney = false) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), shoppingCart.indexOf('Sugar')+1);
    console.log('You are allergic to honey, so I have removed it from your cart');
} else {
    console.log('Enjoy your honey!');
}
console.log(shoppingCart);

shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');
console.log(shoppingCart);
*/

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

/*
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
    console.log('Added Ethiopia succesfully!');
}
console.log(countries);
*/

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

/*
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log('Added Sass succesfully!');
}
console.log(webTechs);
*/

/* 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)

["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] */

/*
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

let fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
*/

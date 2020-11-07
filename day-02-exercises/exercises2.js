// 1. Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

// 2. Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal
let string10 = '10';
let number10 = 10;
console.log(typeof string10 === typeof number10); // false. String isn´t exactly equal than number

let string10ToInt = +string10; // String to number
/* Other ways:
let string10ToInt = parseInt(string10); or parseFloat...
let string10ToInt = Number(string10); */
console.log(string10ToInt); // Number
console.log(typeof string10ToInt === typeof number10); // true. Now both are the same number.

let number10ToString = number10.toString(); // Another way is casting number to string
console.log(number10ToString); // String
console.log(typeof string10 === typeof number10ToString); // true. Now both are the same string.

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10
console.log(parseFloat(9.8) === 10); // false
console.log(Math.round(parseFloat(9.8)) === 10); // I rounded 9.8 to 10

// 5. Check if 'on' is found in both python and jargon
let py = 'python';
let jargon = 'jargon';
console.log(py.includes('on')); // true. Python contains "on"
console.log(jargon.includes('on')); // true. jargon contains "on"
console.log(py.includes('on') && jargon.includes('on'));// true, "on" is found in both

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence
let sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon')); // true
console.log(sentence.search('jargon')); // Another way that indicates where is 'jargon'. 'jargon' is founded so it is in the sentence.
console.log(sentence.match('jargon')); // Other way

// 7. Generate a random number between 0 and 100 inclusively
let randomNumber = Math.random(); // Number between 0 and 0.9999...
let numBetween0and10 = randomNumber * 100; // Number between 0 and 99.9999...
let numBetween0and10RoundToCeil = Math.ceil(numBetween0and10); // Round to ceil, so we get a number between 0 and 100
console.log(numBetween0and10RoundToCeil);
console.log(Math.floor(Math.random() * 101)); // A lot easier, just one step.

// 8. Generate a random number between 50 and 100 inclusively
console.log(Math.floor(Math.random() * 51) + 50); // Num beetween 50 and 100.
/* Explanation of the above:
Math.floor(Math.random()*(max-min + 1)+min);
Math.floor(Math.random()*(100-50 + 1)+50);*/

// 9. Generate a random number between 0 and 255 inclusively
console.log(Math.floor(Math.random() * 256)); // Math.floor(Math.random()*(255 - 0 + 1)+0);

// 10. Access the 'JavaScript' string characters using a random number
let charOfJS = 'JavaScript';
// JavaScript has 10 characters. Indexes are from 0 to 9, so we need a random number between 0 and 9
let index = Math.floor(Math.random() * 10); // Math.floor(Math.random()*(9 - 0 + 1)+0);
console.log(charOfJS.charAt(index));

/* 11. Use console.log() and escape characters to print the following pattern:
        1 1 1 1 1
        2 1 2 4 8
        3 1 3 9 27
        4 1 4 16 64
        5 1 5 25 125 */

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125\n');
// Without \t was ok too.

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Since substr is deprecated I´m going to use substring instead
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(becauseSentence.substring(31, 54));
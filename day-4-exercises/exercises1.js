// Exercises: Level 1

/* 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive. */

let age = prompt('Enter your age:', 'Here');

if (age >= 18) {
    console.log('You are old enough to drive');
} else {
    console.log(`You are left with ${18-age} years to drive.`);
}

/* 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me. */

/* Solution. Uncomment when you need it

let yourAge = prompt('Enter your age:', 'Here');
let myAge = 26;

if (myAge >= yourAge) {
    console.log('I´m older or same age than you');
    // I would have used if else if else for the equal age condition, but we can only use one if and one else in this exercise.
} else {
    console.log(`You are ${yourAge-myAge} years older than me.`);
} */

/* 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.

  let a = 4
  let b = 3

  4 is greater than 3 */

/* Solution. Uncomment when you need it

let a = number(prompt('Tell me a number value for "a"', 'Here'));
let b = number(prompt('Tell me a number value for "b"', 'Here'));

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}

a > b
    ? console.log('a is greater than b')
    : console.log('a is less than b'); */

/* 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number. */

/* Solution. Uncomment when you need it

let num = parseInt(prompt('Type a number to tell you if it is odd or even', 'Here'));

if (num % 2 == 0) {
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
} */

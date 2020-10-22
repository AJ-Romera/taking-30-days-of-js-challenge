const countries = [
	"Albania",
	"Bolivia",
	"Canada",
	"Denmark",
	"Ethiopia",
	"Finland",
	"Germany",
	"Hungary",
	"Ireland",
	"Japan",
	"Kenya",
];

const webTechs = [
	"HTML",
	"CSS",
	"JavaScript",
	"React",
	"Redux",
	"Node",
	"MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// Exercises: Level 1

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
/*
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

i = 0;
while (i <= 10) {
  i++;
  console.log(i);
}

i = 0;
do {
  i++;
  console.log(i);
} while (i <= 10);
*/

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
/*
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

i = 10;
while (i >= 0) {
  i--;
  console.log(i);
}

i = 10;
do {
  i--;
  console.log(i);
} while (i >= 0);
*/

// 3. Iterate 0 to n using for loop
/*
let n = Number(prompt("enter number"));
for (let i = 0; i <= n; i++) {
  console.log(i);
}
*/

// 4. Write a loop that makes the following pattern using console.log():
/*
        #
        ##
        ###
        ####
        #####
        ######
        #######
  */

/*
let hashtag = '';
for (let i = 0; i <= 6; i++) {
  hashtag += "#";
  console.log(hashtag);
}
*/

// 5. Use loop to print the following pattern:
/*
        0 x 0 = 0
        1 x 1 = 1
        2 x 2 = 4
        3 x 3 = 9
        4 x 4 = 16
        5 x 5 = 25
        6 x 6 = 36
        7 x 7 = 49
        8 x 8 = 64
        9 x 9 = 81
        10 x 10 = 100
  */

/*
for (let i = 0; i <= 10 ; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}
*/

// 6. Use loop print the following pattern:
/*
        i    i^2   i^3
        0    0     0
        1    1     1
        2    4     8
        3    9     27
        4    16    64
        5    25    125
        6    36    216
        7    49    343
        8    64    512
        9    81    729
        10   100   1000
*/

/*
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log('i  i^2  i^3');
    }
	console.log(`${i}   ${i ** 2}   ${i ** 3}`);
}
*/

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

/*
for (let i = 0; i <= 100; i++) {
    if (i == 0) {
        console.log('This are the even numbers from 0 to 100:');
        console.log(`${i}`);
    } else if (i % 2 == 0) {
        console.log(`${i}`);
    }
}
*/

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers

/*
for (let i = 0; i <= 100; i++) {
    if (i == 0) {
        console.log('This are the odd numbers from 0 to 100:');
    } else if (i % 2 !== 0) {
        console.log(`${i}`);
    }
}
*/

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

/* To find out if a number is prime (divisible only by itself and by one), we divide it successively by the first prime numbers: 2, 3, 5, 7, 11,...
When do we stop dividing?:

- If we obtain exact division: is not prime
- If the quotient is less than the divisor, stop, it is prime */

/*
for (let i = 0; i <= 100; i++) {
    let exactDivision = (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0 || i % 11 == 0);
    let quotientIsLessThanDivisor = (i / 2) < 2 || (i / 3) < 3 || (i / 5) < 5 || (i / 7) < 7 || (i / 11) < 11;

    if (!exactDivision && quotientIsLessThanDivisor) {
        console.log(i)
    } else if (i == 0) {
        console.log('2, 3, 5, 7, 11 are already prime numbers');
    }
}
*/

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
/*
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);
*/

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
/*
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even += i;
    } else if (i % 2 !== 0) {
        odd += i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`);
*/

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// [2550, 2500]
/*
let sumEvensOdds = [0, 0];
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEvensOdds[0] += i;
    } else if (i % 2 !== 0) {
        sumEvensOdds[1] += i;
    }
}
console.log(sumEvensOdds);
*/

// 13. Develop a small script which generate array of 5 random numbers
/*
let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.round(Math.random()*10)); // Random numbers from 0 to 10
}
console.log(arr);
*/

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
/*
let UniqueArr = [];
for (let i = 5; UniqueArr.length < i;) {
    let random = Math.floor(Math.random() * 10);
    if (UniqueArr.indexOf(random) === -1) {
        UniqueArr.push(random);
    }
}
console.log(UniqueArr);
*/

// 15. Develop a small script which generate a six characters random id:
// 5j2khz

/*
let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
let randomChars = '';
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
}
console.log(randomChars);
*/
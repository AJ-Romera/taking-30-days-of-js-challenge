// Exercises: Level 1

// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."

let pattern = /\d+/g;
let matches = text.match(pattern);
console.log(matches);

let totalAnnualIncome = Number(matches[0] * 12) + Number(matches[1]) + Number(matches[2] * 12);
console.log(`This person has a total annual income of ${totalAnnualIncome} euro`);

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

/*
    points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
    sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
    distance = 12
*/

let text2 = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction"

let points = text2.match(/-*\d+/g);
console.log(points);

let sortedPoints = points.sort(function (a, b) {
    return a - b;
});
console.log(sortedPoints); // They were already sorted, but the exercise is not well formulated.

let distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
console.log(`The distance between the two furthest particles is ${distance}`);

// 3. Write a pattern which identify if a string is a valid JavaScript variable

/*
    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True
*/

const pattern2 = /[F/f]irst[Nn]ame|[F/f]irst_[Nn]ame/;
const isValidVariable = (str) => {
	console.log(pattern2.test(str));
};
isValidVariable("first_name");
isValidVariable("first-name");
isValidVariable("firstname");

/* *** This is just a dumb example, a very nice regExp for this is found here:

https://gist.githubusercontent.com/mathiasbynens/6334847/raw/073a6f5df8bf0a218a5088f77ab194fe042a560c/ecmascript-6.js

Normally, the regExp used for this kind of purposes are really big. Fortunately there are plenty of good regExp in the internet, or even libraries... be smart, don´t reinvent the wheel.
*/
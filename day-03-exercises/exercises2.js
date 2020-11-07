// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
    /* Enter base: 20 <br>
    Enter height: 10 <br>
    The area of the triangle is 50 */

    /* Uncomment this when you need to use it

    alert('I´m going to tell you the area of a triangle with your given base and height');
    let b = prompt('Give me the base of the triangle', 'Here');
    let h = prompt('Give me the height of the triangle', 'Here');
    let trianglesArea = 0.5 * +b * +h;
    console.log(`The area of the triangle is ${trianglesArea}`);   */

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
    /* Enter side a: 5 <br>
    Enter side b: 4 <br>
    Enter side c: 3 <br>
    The perimeter of the triangle is 12 */

    /* Uncomment this when you need to use it

    alert('I´m going to tell you the perimeter of a triangle with your given side a, side b and side c');
    let a = prompt('Give me the side a of the triangle', 'Side a');
    let b = prompt('Give me the side c of the triangle', 'Side b');
    let c = prompt('Give me the side b of the triangle', 'Side c');
    let trianglePerimeter = +a + +b + +c; // parseInt and parseFloat are nice too
    console.log(`The perimeter of the triangle is ${trianglePerimeter}`); */

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width) and the perimeter of rectangle (perimeter = 2 x (length + width))

/* Uncomment this when you need to use it

alert('I´m going to tell you the area and perimeter of a rectangle with your given length and width');
let length = prompt('Give me the length of the rectangle', 'Length');
let width = prompt('Give me the width of the rectangle', 'Width');
let rectangleArea = +length * +width;
let rectanglePerimeter = 2 * (+length + +width);
console.log(`The area of the rectangle is ${rectangleArea} and the perimeter of the rectangle is ${rectanglePerimeter}`);  */

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

/* Uncomment this when you need to use it

alert('I´m going to tell you the area and circumference of a circle with your given radius');
let r = prompt('Give me the radius of the circle', 'Radius');
const pi = 3.14;
let circleArea = pi * +r * +r;
let circleCircumference = 2 * pi * +r;
console.log(`The area of the circle is ${circleArea} and the circumference of the circle is ${circleCircumference}`);  */

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

/* Uncomment this when you need to use it

// Slope
let equation = 'y = 2x -2';
let indexOfEqual = equation.indexOf('=');
let indexOfX = equation.indexOf('x');
slope = equation.substring(indexOfEqual+1, indexOfX).trim();
console.log(`The slope is ${slope}`);
// y-intercept
let x = 0;
let y = 2*x -2;
console.log(`y-intercept is ${y}`); // y-intercept is -2
// x-intercept
// -2 = 2*x -2
// -2+2 = 2*x
x = (-2 + 2) / 2
console.log(`x-intercept is ${x}`); // x-intercept is 0  */

// 6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)

/* Uncomment this when you need to use it

let x1 = 2, y1 = 2, x2 = 6, y2 = 10;
let m = (y2-y1)/(x2-x1);
console.log(m); // The slope is 2. */

// 7. Compare the slope of above two questions.

/* Uncomment this when you need to use it

console.log(slope == m); // true. Same slope value
console.log(slope === m); // false. Same slope value, but m is a number while slope is a tring  */

// 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

/* Uncomment this when you need to use it

let x = prompt('Give me the value of x', 'Value')
let y = x ** 2 + 6 * x + 9;
console.log(y); // If you give x the value -3, Y is 0.
// Another way to do it is with a for loop BUT we haven´t learn that on the challenge yet, so maybe that would be cheating  */

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person
    /* Enter hours: 40 <br>
    Enter rate per hour: 28 <br>
    Your weekly earning is 1120 */

    /* Uncomment this when you need to use it

    let hours = Number(prompt('Enter your weekly hours', 'Here'));
    let rate = Number(prompt('Enter your rate per hour', 'Here'));
    let pay = hours * rate;
    console.log(`your weekly pay is ${pay}$`)  */

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short

/* Uncomment this when you need to use it

let firstName = "Antonio José";
firstName.length > 7 ? console.log('Your name is long') : console.log('Your name is short');  */

// 11. Compare your first name length and your family name length and you should get this output.
    /* let firstName = 'Asabeneh' <br>
    let lastName = 'Yetayeh' <br><br>
    Your first name, Asabeneh is longer than your family name, Yetayeh */

    const firstName = "Antonio Romera";
    const lastName = "Romera";
    firstName.length >= lastName.length ? console.log('Your first name is greater than your family name, or same length') : console.log('Your family name is greater than your name');

// 12. Declare two variables myAge and yourAge and assign them initial values, then say who is older and how much years of difference.
    /* let myAge = 250 <br>
    let yourAge = 25 <br><br>
    I am 225 years older than you. */

    /* Uncomment this when you need to use it

    let myAge = 26;
    let yourAge = prompt('Tell me your age please, if you are a madame forgive me, Im a computer and you have the cam off');
    myAge >= yourAge ? console.log(`I am ${myAge-yourAge} years older than you`) : console.log(`You are ${yourAge-myAge} years older than me`); */

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
    /* Enter birth year: 1995 <br>
    You are 25. You are old enough to drive <br><br>
    Enter birth year: 2005 <br>
    You are 15. You will be allowed to drive after 3 years. */

    /* Uncomment this when you need to use it

    let bornYear = Number(prompt("What year were you born? please"));
    let currentYear = Number(prompt("What year is at the moment?"));
    let age = currentYear - bornYear;

    age >= 18 ? console.log(`You are ${age} years old. You are old enough to drive`) : console.log(`You are ${age} years old. You will be allowed to drive after ${18-age} years if you get the driver license.`);  */

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
    /* Enter number of yours you live: 100 <br>
    You lived 3153600000 seconds. */

    /* Uncomment this when you need to use it

    alert('I´m going to tell you the number of seconds you have lived or you can still live');
    let years = Number(prompt('How many years do you want to convert into seconds?', '100'));
    // seconds of a year: year * 12 months * 30 days * 24 hours * 60 minutes * 60 seconds
    let seconds = years * 12 * 30 * 24 * 60 * 60;

    years < 100  ? console.log(`There are ${seconds} seconds in ${years} years`) : console.log(`Who wants to live forever? Enjoy your life. There are ${seconds} seconds in ${years} years, that´s a lot of time`);  */

// 15. Create a human readable time format using the Date time object
    /* YYYY-MM-DD HH:mm
    DD-MM-YYYY HH:mm
    DD/MM/YYYY HH:mm */

    let date = new Date();
    
    let YYYMMDD = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let DDMMYYYY = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let DdMmYYYy = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    console.log(YYYMMDD);
    console.log(DDMMYYYY);
    console.log(DdMmYYYy);
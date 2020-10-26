// Exercises: Level 1

// 1. Declare a function fullName and it print out your full name.
/*
function fullName() {
    console.log('Antonio José Romera Alfonso');
}
fullName();
*/

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
/*
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName('Antonio José', 'Romera Alfonso'));
*/
  
// 3. Declare a function addNumbers and it takes two parameters and it returns sum.
  
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(addNumbers(6, 1));
  
// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
  
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
console.log(areaOfRectangle(10, 6));
  
// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
  
function perimeterOfRectangle(length, width) {
    let perimeter = 2*(length + width);
    return perimeter;
}
console.log(perimeterOfRectangle(10, 6));
  
// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.;
  
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    return volume;
}
console.log(volumeOfRectPrism(10, 6, 8));
  
// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
  
function areaOfCircle(radius) {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle(10));
  
// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
  
function circumOfCircle(radius) {
    let circumference = 2 * Math.PI * radius;
    return circumference;
}
console.log(circumOfCircle(10));
  
// 9. Density of a substance is calculated as follows: density = mass/volume. Write a function which calculates density.
  
function densityOfSubstance(mass, volume) {
    let density = mass / volume;
    return density;
}
console.log(densityOfSubstance(6, 26));
  
// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
  
function movingObjectSpeed(totalDistance, totalTime) {
    let speed = totalDistance / totalTime;
    return speed;
}
console.log(movingObjectSpeed(100, 30));
  
// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
  
function weightOfSubstance(mass, gravity) {
    let weight = mass * gravity;
    return weight;
}
console.log(weightOfSubstance(5.972, 9.807));
  
// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
  
function convertCelciusToFahrenheit(oC) {
    let oF = (oC * 9 / 5) + 32;
    return oF;
}
console.log(convertCelciusToFahrenheit(37));
  
// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
/*
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more
*/
/*
let weight = prompt('Tell me your weight in Kg');
let height = prompt('Tell me your height in m2');

function BMI(weight, height) {
    let bmi = weight / (height * height);

    switch (true) {
        case bmi < 18.5:
            return console.log(`Your BMI is ${bmi.toFixed(2)}, you are underweight`);
            break;
    
        case bmi <= 24.9:
            return console.log(`Your BMI is ${bmi.toFixed(2)}, you are normal weight`);
            break;
    
        case bmi <= 29.9:
            return console.log(`Your BMI is ${bmi.toFixed(2)}, you are overweight`);
            break;
    
        case bmi >= 30:
            return console.log(`Your BMI is ${bmi.toFixed(2)}, you are obese`);
            break;
    
        default:
            console.log(`Error, try again`);
            break;
    }
}
BMI(weight, height);
*/
  
// 14. Write a function called checkSeason, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer.
/*
let monthUserInput = prompt('Tell me a month and I return the season in that month');
let month = monthUserInput.toLowerCase();

function checkSeason(month) {
    switch (month) {
        case 'september':
        case 'october':
        case 'november':
            return 'The season is Autumn';
            break;
        case 'december':
        case 'january':
        case 'february':
            return 'The season is Winter';
            break;
        case 'march':
        case 'april':
        case 'may':
            return 'The season is Spring';
            break;
        case 'june':
        case 'july':
        case 'august':
            return 'The season is Summer';
            break;
        default:
            return 'invalid Month';
    }
}
console.log(checkSeason(month));
*/

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
/*
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
*/
/*
let num1 = prompt('Tell me the first number');
let num2 = prompt('Tell me the second number');
let num3 = prompt('Tell me the third number');

function findMax (num1, num2, num3) {
    switch (true) {
        case num1 > num2 && num1 > num3 :
            return `${num1} is the maximum number you have entered`;
            break;

        case num2 > num1 && num2 > num3 :
            return `${num2} is the maximum number you have entered`;
            break;

        case num3 > num1 && num3 > num2 :
            return `${num3} is the maximum number you have entered`;
            break;
        
        default:
            return `Error, try again`;
            break;
    }
}
console.log(findMax(num1, num2, num3));
*/

// Exercises: Level 2

// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// All of this is not necesary, there are already very good libraries to solve equations. Devs make complicated things easy, not the other way round.
/*
let a = prompt('Tell me the value of a');
let b = prompt('Tell me the value of b');
let c = prompt('Tell me the value of c');

function solveLinEquation(a, b, c) {
    const x = (-b -c)/a
    const y = (-c -(-a * -x)) / b; 
    return `x is ${x} and y is ${y}`;
}

console.log(solveLinEquation(a, b, c));
*/

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
/*
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/
/*
// Source: https://www.programiz.com/javascript/examples/quadratic-roots

let a = prompt('Tell me the value of a');
let b = prompt('Tell me the value of b');
let c = prompt('Tell me the value of c');

function solveQuadEquation(a, b, c) {
    // program to solve quadratic equation
    let root1, root2;

    // calculate discriminant
    let discriminant = b * b - 4 * a * c;

    // condition for real and different roots
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        // result
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

    // condition for real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);

        // result
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    }

    // if roots are not real
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

        // result
        console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
    }
}
console.log(solveQuadEquation(a, b, c));
*/

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
/*
function printArray(array) {
    for (const value of array) {
        console.log(value);
    }
}
printArray([6, 12, 1, 24]);
*/

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
/*
    showDateTime()
    08/01/2020 04:08
*/

function showDateTime() {
    let date = new Date();
    let datee = date.getDate();
    let month = date.getUTCMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${datee}/${month + 1}/${year} ${hour}:${minutes} `
}
console.log(showDateTime());

// 5. Declare a function name swapValues. This function swaps value of x to y.
/*
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
*/
/*
function swapValues(a, b) {
    let x = b;
    let y = a;
    console.log(`x = ${x}, y = ${y}`);
}
swapValues(3, 4);

// OR

function swapValues(x, y) {
    console.log(`x = ${y}, y = ${x}`);
}
swapValues(4, 5);
*/

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
/*
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
*/

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}
reverseArray(['banana', 'orange', 'mango', 'lemon'])

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

capitalizeArray = (array) => {
    let capitalizedarray = [];

    for (const arr of array) {
        capitalizedarray.push(arr[0].toUpperCase()+arr.slice(1));
    }

    return console.log(capitalizedarray);
}
capitalizeArray(['spain', 'portugal', 'france', 'italy']);

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
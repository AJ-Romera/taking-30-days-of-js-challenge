// Exercises: Level 2

/* 1. Write a code which can give grades to students according to theirs scores:

80-100, A
70-89, B, there is an error here, it should be 70-79 instead of 70-89
60-69, C
50-59, D
0-49, F */

// Can be done with many conditionals, I´m going to do it with if else if and switch

/*
let score = parseInt(prompt('Score of the examinee', 'Score'));

if (score >= 80 && score <= 100) {
    console.log('You have a grade of A');
} else if (score >= 70 && score <= 79) {
    console.log('You have a grade of B');
} else if (score >= 60 && score <= 69) {
    console.log('You have a grade of C');
} else if (score >= 50 && score <= 59) {
    console.log('You have a grade of D');
} else if (score >= 0 && score <= 49) {
    console.log('You have a grade of F');
} else {
    console.log('Has not taken the exam');
} 

switch (true) {
    case score >= 80 && score <= 100:
        console.log('You have a grade of A');
        break;
    case score >= 70 && score <= 79:
        console.log('You have a grade of B');
        break;
    case score >= 60 && score <= 69:
        console.log('You have a grade of C');
        break;
    case score >= 50 && score <= 59:
        console.log('You have a grade of D');
        break;
    case score >= 0 && score <= 49:
        console.log('You have a grade of F');
        break;
    default:
        console.log('Has not taken the exam');
} */

/* 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:

September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

/*
let monthUserInput = String(prompt('Write a month and I will tell you the season'));
let month = monthUserInput.toLowerCase();

switch (month) {
    case "september":
    case "october":
    case "november":
        console.log('The season is Autumn');
        break;
    case "december":
    case "january":
    case "february":
        console.log('The season is Winter');
        break;
    case "march":
    case "april":
    case "may":
        console.log('The season is Spring');
        break;
    case "june":
    case "july":
    case "august":
        console.log('The season is Summer');
        break;
    default:
        console.log('Please, enter a valid month');
}
*/

/* 3. Check if a day is weekend day or a working day. Your script will take day as an input.

    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day. */

let dayUserInput = String(prompt('What is the day today?'));
let day = dayUserInput.toLowerCase();

switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log(`${day[0].toUpperCase() + day.slice(1)} is a working day`);
        break;
    case "saturday":
    case "sunday":
        console.log(`${day[0].toUpperCase() + day.slice(1)} is a weekend day`);
        break;
    default:
        console.log('Please, enter a valid day');
}
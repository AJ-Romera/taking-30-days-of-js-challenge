// Exercises: Level 3

// 1. Write a program which tells the number of days in a month.
/*
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days. */

/*
let monthUserInput = String(prompt('Enter month to check its number of days'));
let month = monthUserInput.toLowerCase();

switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month[0].toUpperCase() + month.slice(1)} has 31 days`),
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month[0].toUpperCase() + month.slice(1)} has 30 days`),
        break;
    case "february":
        console.log(`${month[0].toUpperCase() + month.slice(1)} has 28 days`);
        break;
    default:
        console.log('Invalid month entered');
}
*/

// 2. Write a program which tells the number of days in a month, now consider leap year.

/*
// Although it´s not necesary, I´m going to make a script that tell if the year is a leap year or not
let year = parseInt(prompt('Type one year to see if it is leap year or not'));
let monthUserInput = String(prompt('Enter month to check its number of days'));
let month = monthUserInput.toLowerCase();

if (((year % 4 == 0) && (year % 100 != 0 )) || (year % 400 == 0)){
    console.log(`The year ${year} is a leap year`);
    switch (month) {
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            console.log(`${month[0].toUpperCase() + month.slice(1)} has 31 days`);
            break;
        case "april":
        case "june":
        case "september":
        case "november":
            console.log(`${month[0].toUpperCase() + month.slice(1)} has 30 days`);
            break;
        case "february":
            console.log(`${month[0].toUpperCase() + month.slice(1)} has 29 days in ${year} because it´s a leap year`);
            break;
        default:
            console.log('Invalid month entered');
    }
} else {
    console.log(`The year ${year} is not a leap year`);
    switch (month) {
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            console.log(`${month[0].toUpperCase() + month.slice(1)} has 31 days`);
            break;
        case "april":
        case "june":
        case "september":
        case "november":
            console.log(`${month[0].toUpperCase() + month.slice(1)} has 30 days`);
            break;
        case "february":
            console.log(`${month[0].toUpperCase() + month.slice(1)} has 28 days in ${year} because it´s not a leap year`);
            break;
        default:
            console.log('Invalid month entered');
    }
}
*/
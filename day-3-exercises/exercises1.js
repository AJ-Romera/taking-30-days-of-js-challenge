// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Antonio José';
let lastName = 'Romera Alfonso';
let country = 'Spain';
let age = 26;
let isMarried = false;
let year = 2020;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false, string !== number

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10); // false, not equal in value (and data type)

// 4. Boolean value is either true or false.
    /* i. Write three JavaScript statement which provide truthy value.
    ii. Write three JavaScript statement which provide falsy value. */

    // Truthy value
let trueValue1 = 5 >= 4;
let trueValue2 = 'Strings are true, except empty strings';
let trueValue3 = true;
console.log(trueValue1); // Positive and negative numbers are true. 0 is false
console.log(trueValue2); // Strings are true, except empty strings
console.log(trueValue3); // Boolean true is true

    // Falsy value
let falseValue1 = 4 - 4;
let falseValue2;
let falseValue3 = false;
console.log(falseValue1); // 0 is false
console.log(falseValue2); // undefined is false
console.log(falseValue3); // Boolean false is false

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    /* i. 4 > 3 true
    ii. 4 >= 3 true
    iii. 4 < 3 false
    iv. 4 <= 3 false
    v. 4 == 4 true
    vi. 4 === 4 true
    vii. 4 != 4 false
    viii. 4 !== 4 false
    ix. 4 != '4' true (wrong, is false, )
    x. 4 == '4' false (wrong, is true, compare only the value)
    xi. 4 === '4' false
    xii. Find the length of python and jargon and make a falsy comparison statement. */

    console.log('----Comparisons results----');
    console.log(4 > 3);
    console.log(4 >= 3);
    console.log(4 < 3);
    console.log(4 <= 3);
    console.log(4 == 4);
    console.log(4 === 4);
    console.log(4 != 4);
    console.log(4 !== 4);
    console.log(4 != '4');
    console.log(4 == '4');
    console.log(4 === '4');
    console.log('python'.length !== 'jargon'.length); // false
    
// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
    /* i. 4 > 3 && 10 < 12 true
    ii. 4 > 3 && 10 > 12 false
    iii. 4 > 3 || 10 < 12 true
    iv. 4 > 3 || 10 > 12 true
    v. !(4 > 3) false
    vi. !(4 < 3) true
    vii. !(false) true
    viii. !(4 > 3 && 10 < 12) false
    ix. !(4 > 3 && 10 > 12) true
    x. !(4 === '4') true
    xi. There is no 'on' in both dragon and python. false */

    console.log('----Comparisons results----');
    console.log(4 > 3 && 10 < 12);
    console.log(4 > 3 && 10 > 12);
    console.log(4 > 3 || 10 < 12);
    console.log(4 > 3 || 10 > 12);
    console.log(!(4 > 3));
    console.log(!(4 < 3));
    console.log(!(false));
    console.log(!(4 > 3 && 10 < 12));
    console.log(!(4 > 3 && 10 > 12));
    console.log(!(4 === '4'));
    console.log(!('dragon'.includes('on') && 'python'.includes('on')));

// 7. Use the Date object to do the following activities
    /* i. What is the year today?
    ii. What is the month today as a number?
    iii. What is the date today?
    iv. What is the day today as a number?
    v. What is the hours now?
    vi. What is the minutes now?
    vii. Find out the numbers of seconds elapsed from January 1, 1970 to now. */

    const now = new Date();

    let currentYear = now.getFullYear();
    console.log(`We are in the year ${currentYear} currently`);

    let currentMonth = now.getMonth() + 1;
    console.log(`We are in the month ${currentMonth} currently`);

    let currentDate = now.getDate();
    console.log(`We are in the ${currentDate} day of the month currently`);

    let currentDay = now.getDay();
    console.log(`We are in the ${currentDay} day of the week currently`);

    let currentHours = now.getHours();
    console.log(`We are in the hour ${currentHours} currently`);

    let currentMinutes = now.getMinutes();
    console.log(`We are in the minute ${currentMinutes} currently`);

    let allSeconds = now.getTime() / 60;
    console.log(`${allSeconds} seconds have passed since January 1, 1970`);

    console.log(`Date and time: ${currentDate}/${currentMonth}/${currentYear} ${currentHours}:${currentMinutes}`)
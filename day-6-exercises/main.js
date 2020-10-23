/* const countries = [
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
*/

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


// Exercises: Level 2

// 1. Develop a small script which generate any number of characters random id:

  /* fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba */

/*
let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
let randomChars = '';
let n = parseInt(prompt('How long do you want the random id to be?'));
for (let i = 0; i < n; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
}
console.log(randomChars);
*/

// 2. Write a script which generates a random hexadecimal number.

    // '#ee33df'

/*
let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
let randomChars = '';
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
}
console.log(`${'#' + randomChars}`);
*/

// 3. Write a script which generates a random rgb color number.

    // rgb(240,180,80)

/*
let rgbRandNums = []
for (let i = 0; i < 3; i++) {
    let random = (Math.floor(Math.random() * 256));
    rgbRandNums.push(random)
}
console.log(`rgb(${rgbRandNums[0]}, ${rgbRandNums[1]}, ${rgbRandNums[2]})`); 
*/

// 4. Using the above countries array, create the following new array.

    // ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

/*
const newArr = []
for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase());
}
console.log(newArr);
*/
    
// 5. Using the above countries array, create an array for countries length'.

    // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

/*
countriesLength = [];
for(let i = 0; i < countries.length; i++){
    countriesLength.push(countries[i].length);
}
console.log(countriesLength);
*/

// 6. Use the countries array to create the following array of arrays:

  /* [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
] */

/*
const arrayOfArrays = [];
for(let i = 0; i < countries.length; i++){
    arrayOfArrays.push([countries[i], countries[i].toUpperCase().slice(0, 3), countries[i].length]);
}
console.log(arrayOfArrays);

// Other way:

const arrayOfArrays = [];
for (const country of countries) {
    console.log([country, country.toUpperCase().slice(0, 3), country.length]);
}
*/

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

    // ['Finland', 'Iceland']

/*
let countWithLand = []
let countWithoutLand = []
for (const country of countries) {
    if (country.includes('land')) {
        countWithLand.push(country);
    } else {
        countWithoutLand.push(country);
    }
}
console.log('Countries containing the word land:');
console.log(countWithLand);
console.log('All these countries are without land:');
console.log(countWithoutLand);
*/

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

    // ['Albania', 'Bolivia','Ethiopia']

/*
let countWithIa = []
let countWithoutIa = []
for (const country of countries) {
    if (country.slice(country.length-2, country.length).includes('ia')) { // Check if country includes 'ia' only in the last 2 characters of the country, this prevents from countries containing ia at any point.
        countWithIa.push(country);
    } else {
        countWithoutIa.push(country);
    }
}
console.log('Countries ending in ia:');
console.log(countWithIa);
console.log('These are countries ends without ia:');
console.log(countWithoutIa);
*/

// 9. Using the above countries array, find the country containing the biggest number of characters.

    // Ethiopia

/*
let countriesCharLength = [];
for(const country of countries){
    countriesCharLength.push(country.length);
}
let highestLength = Math.max(...countriesCharLength); // Finds the maximum value in the array
console.log(`The country containing the biggest number of characters is: \n\n${countries[countriesCharLength.indexOf(highestLength)]}\n\nWith ${highestLength} characters long.`);
*/

// 10. Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']

/*
let containOnly5Chars = [];
for(const country of countries){
    if (country.length === 5) {
        containOnly5Chars.push(country);
    }
}
console.log(containOnly5Chars);
*/

// 11. Find the longest word in the webTechs array

/*
let webTechsLength = [];
for(const webTech of webTechs){
    webTechsLength.push(webTech.length);
}
let highestLength = Math.max(...webTechsLength); // Finds the maximum value in the array
console.log(`The web tech containing the biggest number of characters is: \n\n${webTechs[webTechsLength.indexOf(highestLength)]}\n\nWith ${highestLength} characters long.`);
*/

// 12. Use the webTechs array to create the following array of arrays:

    // [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

/*
let arrayOfArrays = [];
for (const webTech of webTechs) {
    arrayOfArrays.push([webTech, webTech.length])
}
console.log(arrayOfArrays);
*/

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

/*
for (let i = 0; i < mernStack.length ; i++) {
    console.log(mernStack[i].slice(0, 1));
}

// OR

for (let i = 0; i < mernStack.length ; i++) {
    console.log(mernStack[i][0]);
}

// OR

for (const mern of mernStack) {
    console.log(mern[0])
}
*/

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

/*
let techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < techs.length; i++) {
    console.log(techs[i]);
}

// OR

for (let tech of techs) {
    console.log(tech);
}
*/

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

/*
let fruits = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}
*/

// 16. Print all the elements of array as shown below.

  /* const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB*/

/*
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]


const firstArray = fullStack[0];
const secondArray = fullStack[1];

const oneArrayOnly = firstArray.concat(secondArray);

for (const one of oneArrayOnly) {
    console.log(one);
}
*/


// Exercises: Level 3

// 1. Copy countries array(Avoid mutation)
/*
const countriesCopy = [...countries];
countriesCopy.push('This should only be pushed in countriesCopy array');
countries.push('This should only be pushed in countries array');
console.log(countriesCopy);
console.log(countries);
*/

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
/*
const countriesCopy = [...countries];
const sortedCountries = countriesCopy.sort(); // Already sorted manually
console.log(sortedCountries);
*/

// 3. Sort the webTechs array and mernStack array
/*
const sortedWebTechs = webTechs.sort(); // Already sorted manually
const sortedMernStack = mernStack.sort(); // Already sorted manually
console.log(sortedWebTechs);
console.log(sortedMernStack);
*/

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

/*
let countWithLand = []
for (const country of countries) {
    if (country.includes('land')) {
        countWithLand.push(country);
    }
}
console.log('Countries containing the word land:');
console.log(countWithLand);
*/

// 5. Find the country containing the highest number of characters in the countries array
/*
let countriesLength = [];
for(const country of countries){
    countriesLength.push(country.length);
}
let highestLength = Math.max(...countriesLength); // Finds the maximum value in the array
console.log(countriesLength);
console.log(`The country containing the biggest number of characters is: \n\n${countries[countriesLength.indexOf(highestLength)]}\n\nWith ${highestLength} characters long.`);
*/

// 6. Extract all the countries contain the word 'land' from the countries array and print it as array
// Duplicated exercise

// 7. Extract all the countries containing only four characters from the countries array and print it as array
/*
let containOnly5Chars = [];
for(const country of countries){
    if (country.length === 4) {
        containOnly5Chars.push(country);
    }
}
console.log(containOnly5Chars);
*/

// 8. Extract all the countries containing two or more words from the countries array and print it as array
/*
let contain2OrMoreWords = [];
for(const country of countries){
    if (country.split(' ').length >= 2) {
        contain2OrMoreWords.push(country);
    }
}
console.log(contain2OrMoreWords);
*/

// 9. Reverse the countries array and capitalize each country and stored it as an array
/*
countries.reverse();

const reversedAndCapitalisedCountries = [];
for(const country of countries){
    if (country.split(' ').length >= 2) {
        reversedAndCapitalisedCountries.push(country[0].slice(0, 1).toUpperCase()+country[1].slice(0, 1).toUpperCase()+country[2].slice(0, 1).toUpperCase()+country[3].slice(0, 1).toUpperCase()+country.slice(1)); // This is easier with a for lopp, not for...of loop
    } else {
        reversedAndCapitalisedCountries.push(country.slice(0, 1).toUpperCase()+country.slice(1));
    }
}

console.log(reversedAndCapitalisedCountries);
*/
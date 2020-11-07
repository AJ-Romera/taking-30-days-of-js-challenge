// Exercises:Level 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const threeCountries = ["Finland", "Sweden", "Norway"];

// 1. create an empty set

const emptySet = new Set();
console.log(emptySet);

// 2. Create a set containing 0 to 10 using loop

const zeroToTenSet = new Set();
for (let i = 0; i <= 10; i++) {
    zeroToTenSet.add(i);
}
console.log(zeroToTenSet);

// 3. Remove an element from a set

zeroToTenSet.delete(3);
console.log(zeroToTenSet);

// 4. Clear a set

zeroToTenSet.clear();
console.log(zeroToTenSet);

// 5. Create a set of 5 string elements from array

const fiveCountries = new Set(threeCountries);
console.log(fiveCountries);
console.log(fiveCountries.size); // 3
fiveCountries.add("Spain");
fiveCountries.add("Portugal");
console.log(fiveCountries);
console.log(fiveCountries.size); // 5

// 6. Create a map of countries and number of characters of a country

const countriesMap = new Map();
console.log(countriesMap);
for (const country of fiveCountries) {
    countriesMap.set(country, country.length)
}
console.log(countriesMap);


// Exercises:Level 2

// 1. Find a union b

let u = [...a, ...b]

let A = new Set(a);
let B = new Set(b);
let U = new Set(u);

console.log(U);

// 2. Find a intersection b

let i = a.filter((num) => B.has(num));
let I = new Set(i);

console.log(I);

// 3. Find a with b

const aWithB = new Map();
console.log(aWithB);

for (let i = 0; i < a.length; i++) {
    aWithB.set(a[i], b[i]);
    
}

console.log(aWithB);

// Maybe this exercise was asking for the difference between set a and set b, so there we go:

let d = a.filter((num) => !B.has(num));
let D = new Set(d);

console.log(D);


// Exercises:Level 3

// 1. How many languages are there in the countries object file.

langs = []

for (const country of countries) {
    langs.push(country.languages.join(','))
}
allLangs = langs.join().split(',');
//console.log(allLangs); // Array with all languages, including repeated ones

let languagesSet = new Set(allLangs);
console.log(`There are ${languagesSet.size} different languages in the countries array`); // Array with all languages, repeated ones are out

// 2. *** Use the countries data to find the 10 most spoken languages:
/*
    // Your output should look like this:

    console.log(mostSpokenLanguages(countries, 10))
    [
    ({ English: 91 },
    { French: 45 },
    { Arabic: 25 },
    { Spanish: 24 },
    { Russian: 9 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Chinese: 5 },
    { Swahili: 4 }, // This one is wrong in this example
    { Serbian: 4 })
    ]

    // Your output should look like this

    console.log(mostSpokenLanguages(countries, 3))

    [ {'English':91}, {'French':45}, {'Arabic':25} ]
*/

function mostSpokenLanguages(countries, n) {

    const languagesCounter = [];
    const count = {};

    for (const l of languagesSet) {
        const filteredLang = allLangs.filter((lng) => lng === l);
        languagesCounter.push({ l: l, count: filteredLang.length });
    }
    //console.log(languagesCounter);

    languagesCounter.sort((a, b) => {
        if (b.count < a.count) return -1
        if (b.count > a.count) return 1
        return 0
    })
    return languagesCounter.splice(0, n); // sorted ascending

};

console.log(mostSpokenLanguages(countries, 10));
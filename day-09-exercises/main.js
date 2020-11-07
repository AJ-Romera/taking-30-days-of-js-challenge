// Exercises: Level 1


    const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const products = [
        { product: 'banana', price: 3 },
        { product: 'mango', price: 6 },
        { product: 'potato', price: ' ' },
        { product: 'avocado', price: 8 },
        { product: 'coffee', price: 10 },
        { product: 'tea', price: '' }
    ]

// 1. Explain the difference between forEach, map, filter, and reduce.

/*
    forEach: Takes a callback function and run that callback function on each element of array one by one. Modifies the original array.

    map: Returns a new array. The provided callback to map modifies the array elements and save them into the new array upon completion that array get returned as the mapped array.

    filter: Filter out items and return a new array. Does not update the original array.

    reduce: Is used to reduce the array to one single value.
*/

// 2. Define a call function before you them in forEach, map, filter or reduce.

const priceLessSeven = products.filter((product) => product.price < 7);
console.log(priceLessSeven); // Filter products with price less than 7

// 3. Use forEach to console.log each country in the countries array.

countries.forEach(country => console.log(country));

// 4. Use forEach to console.log each name in the names array.

names.forEach(name => console.log(name));

// 5. Use forEach to console.log each number in the numbers array.

numbers.forEach(num => console.log(num));

// 6. Use map to create a new array by changing each country to uppercase in the countries array.

const countriesToUppercase = countries.map(country => country.toUpperCase());
console.log(countriesToUppercase);

// 7. Use map to create an array of countries length from countries array.

const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

// 8. Use map to create a new array by changing each number to square in the numbers array

const numSquare = numbers.map(num => num * num);
console.log(numSquare);

// 9. Use map to change to each name to uppercase in the names array

names.map(name => console.log(name.toUpperCase()));

// 10. Use map to map the products array to its corresponding prices.

let productPrices = products.map((product) => {
	return `${product.product}:${product.price}`;
});
console.log(productPrices);

// 11. Use filter to filter out countries containing land.

const countriesContainingLand = countries.filter((country) => country.toLowerCase().includes("land"));
console.log(countriesContainingLand);

// 12. Use filter to filter out countries having six character.

const countriesHavingSixCharacters = countries.filter((country) => country.length === 6);
console.log(countriesHavingSixCharacters);

// 13. Use filter to filter out countries containing six letters and more in the country array.

const countriesHavingSixCharactersOrMore = countries.filter((country) => country.length >= 6);
console.log(countriesHavingSixCharactersOrMore);

// 14. Use filter to filter out country start with 'E';

const countriesStartsWithE = countries.filter((country) => country.toLowerCase().startsWith("e"));
console.log(countriesStartsWithE);

// 15. Use filter to filter out only prices with values.

const pricesWithValueOnly = products.filter((product) => product.price > 0);
console.log(pricesWithValueOnly);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringList = (arr) => {
	let onlyStringArray = arr.filter((item) => {
		return typeof item === "string";
	});
	return onlyStringArray;
};

let onlyStringArray = getStringList(["This is a string", 6, "Antonio", 7, 26]);
console.log(onlyStringArray);

// 17. Use reduce to sum all the numbers in the numbers array.

let sumOfNums = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});
console.log(sumOfNums);

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

let joinCountries = countries.reduce((accumulator, currentValue) => {
	return accumulator.concat(', ') + currentValue;
});
console.log(joinCountries);

// 19. Explain the difference between some and every

/*
    some() method is used to check whether at least ONE of the elements of the array satisfies the given condition or not. The only difference is that the some() method will return true if any predicate is true while every() method will return true only if ALL predicate are true.
*/

// 20. Use some to check if some names' length greater than seven in names array

let lenghtGreaterThanSeven = names.some(name => name.length > 7);
console.log(lenghtGreaterThanSeven); // true, because Asabeneth lenght is greater than 7, it doesn´t matter if there are more names with lenght > 7 because some method only needs one of the elements that satisfies the given condition.

// 21. Use every to check if all the countries contain the word land

let containLand = countries.every(country => country.toLowerCase().includes('land'));
console.log(containLand); // false, there are some countries that contain 'land' but not every country includes 'land' 

// 22. Explain the difference between find and findIndex.

    // The findIndex() method returns the INDEX of the element while find() method returns the element itself. findIndex() takes a predicate and returns the INDEX OF THE FIRST ELEMENT in the array that satisfies the predicate. If no element exists -1 is returned.

// 23. Use find to find the first country containing only six letters in the countries array

let containOnlySixLetters = countries.find(country => country.length === 6);
console.log(containOnlySixLetters);

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array

let containOnlySixLettersIndex = countries.findIndex(country => country.length === 6);
console.log(containOnlySixLettersIndex);

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

let findNorwayIndex = countries.findIndex(country => country.toLowerCase().includes('norway'));
console.log(findNorwayIndex);

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

let findRussiaIndex = countries.findIndex(country => country.toLowerCase().includes('russia'));
console.log(findRussiaIndex);


// Exercises: Level 2

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

let totalPrice = products
	.map((product) => {
		return product.price;
	})
	.filter((price) => {
		return price > 0;
	})
	.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	});
console.log(totalPrice);

// 2. Find the sum of price of products using only reduce reduce(callback))

let totalProductPrice = products.reduce((accumulator, currentValue) => {

    for (const product of products) {

        if (product.price > 0) { // If there were no empty prices in the array, it would have been a lot easier. The same as this, but without the for and the if. This exercise is a bit tricky
            return accumulator + +currentValue.price
        }

    }
    
}, 0)
console.log(totalProductPrice);


// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// *** I changed the name to countries array to countries2 because we already have a countries array here, at the beginning.

/*
let wordToFilter = prompt('Im going to filter all countries that includes your input word');
const categorizeCountries = countries2.filter((country) =>
	country.name.includes(wordToFilter)
);
console.log(categorizeCountries);
*/

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

/*
// This is the solution but only for one letter, so the array has always only 1 element:

let startWithLetter = prompt('I will filter out all the countries that start with the letter you write here');
const countriesStartWithLetter = countries2.filter((country) =>
	country.name.toLowerCase().startsWith(startWithLetter)
);
console.log(countriesStartWithLetter);

let charAndTimesArray = [];

const charAndTimes = charAndTimesArray.push({'Letter': startWithLetter, 'Times': countriesStartWithLetter.length});

console.log(charAndTimesArray);
*/

// This is my solution, it works nice. This exercise took me more than 2 hours!!

let letters = 'ÅABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
let lettersArray = letters.split('');

let charAndTimesArray = [];

n = 0;
while (n < lettersArray.length) {

    let letter = lettersArray[n];

    const times = countries2.filter((country) =>
        country.name.startsWith(letter)
    );

    const charAndTimes = charAndTimesArray.push({
        Letter: letter,
        Times: times.length,
    });

    n++;
    
}

console.log(charAndTimesArray);

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

// One solution
const getFirstTenCountries = countries2
    .splice(0, 10)
    .map(country => country.name)
    .sort();

console.log(getFirstTenCountries);

// Another solution
const getFirstTenCountriesIncludesIa = countries2
	.filter((country) => country.name.includes('ia'))
	.map((country) => country.name)
    .sort()
    .splice(0, 10);

console.log(getFirstTenCountriesIncludesIa);

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

const getLastTenCountries = countries2
	.splice(countries2.length - 10, countries2.length);
	//.map((country) => country.name)
	//.sort();

console.log(getLastTenCountries);

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


let timesArray = [];

let times = charAndTimesArray.forEach((arr) => timesArray.push(arr.Times));
console.log(timesArray); // Number of times a initial is repeated.

let numOfTimesRepeated = charAndTimesArray[0].Times;

for (let i = 0; i < charAndTimesArray.length; i++) {
	if (charAndTimesArray[i].Times > numOfTimesRepeated) {
		numOfTimesRepeated = charAndTimesArray[i].Times;
	}
}

console.log(numOfTimesRepeated); // The most repeated initial letter is repeated 33 times, but... what letter is it?

console.log(timesArray.indexOf(numOfTimesRepeated)); // The most repeated letter is at index 20

console.log(charAndTimesArray[20]); // S is the most repeated initial and is repeated 33 times.

// Exercises: Level 3

// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population

/*
// Sort by name
countries2.sort((a, b) => {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
})
console.log(countries2) // Sorted ascending
*/

/*
// Sort by capital
countries2.sort((a, b) => {
  if (a.capital < b.capital) return -1
  if (a.capital > b.capital) return 1
  return 0
})
console.log(countries2) // Sorted ascending
*/

/*
// Sort by population
countries2.sort((a, b) => {
  if (a.population < b.population) return -1
  if (a.population > b.population) return 1
  return 0
})
console.log(countries2) // Sorted descending
*/

// 2. *** Find the 10 most spoken languages:

/*
    // Your output should look like this
    console.log(mostSpokenLanguages(countries, 10))
    [
    {country: 'English',count:91},
    {country: 'French',count:45},
    {country: 'Arabic',count:25},
    {country: 'Spanish',count:24},
    {country:'Russian',count:9},
    {country:'Portuguese', count:9},
    {country:'Dutch',count:8},
    {country:'German',count:7},
    {country:'Chinese',count:5},
    {country:'Swahili',count:4}
    ]

    // Your output should look like this
    console.log(mostSpokenLanguages(countries, 3))
    [
    {country: 'English',count: 91},
    {country: 'French',count: 45},
    {country: 'Arabic',count: 25},
    ]```
*/





let languageAndCountArray = []
let language = []

function mostSpokenLanguages(countries2, n) {
	for (let i = 0; i < countries2.length; i++) {
		let languages = language.push(countries2[i].languages[0]);

		let count = countries2.filter((country) =>
			country.languages[0].includes(countries2[i].languages)
		);

		languageAndCountArray.push({ country: language[i], count: count.length });
    }

	languageAndCountArray.sort((a, b) => {
		if (b.count < a.count) return -1;
		if (b.count > a.count) return 1;
		return 0;
    });

	return languageAndCountArray.splice(0, n); // sorted ascending
};

console.log(mostSpokenLanguages(countries2, 16)); // Something is wrong with duplicates, I have tried a lot of different things to remove duplicates, non of them worked so, Im done with this exercise.

// 3. *** Use countries_data.js file create a function which create the ten most populated countries

/*
    console.log(mostPopulatedCountries(countries, 10))

    [
    {country: 'China', population: 1377422166},
    {country: 'India', population: 1295210000},
    {country: 'United States of America', population: 323947000},
    {country: 'Indonesia', population: 258705000},
    {country: 'Brazil', population: 206135893},
    {country: 'Pakistan', population: 194125062},
    {country: 'Nigeria', population: 186988000},
    {country: 'Bangladesh', population: 161006790},
    {country: 'Russian Federation', population: 146599183},
    {country: 'Japan', population: 126960000}
    ]

    console.log(mostPopulatedCountries(countries, 3))
    [
    {country: 'China', population: 1377422166},
    {country: 'India', population: 1295210000},
    {country: 'United States of America', population: 323947000}
    ]
    ```
*/

nameAndPopulationArray = []

function mostPopulatedCountries(countries2, n) {
    for (let i = 0; i < countries2.length; i++) {
        nameAndPopulationArray.push({country: countries2[i].name,population: countries2[i].population})
    }

    nameAndPopulationArray.sort((a, b) => {
        if (b.population < a.population) return -1
        if (b.population > a.population) return 1
        return 0
    })
    return nameAndPopulationArray.splice(0, n); // sorted ascending
};

console.log(mostPopulatedCountries(countries2, 3));



// 4. *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

/*
    const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

    console.log('Count:', statistics.count()) // 25
    console.log('Sum: ', statistics.sum()) // 744
    console.log('Min: ', statistics.min()) // 24
    console.log('Max: ', statistics.max()) // 38
    console.log('Range: ', statistics.range() // 14
    console.log('Mean: ', statistics.mean()) // 30
    console.log('Median: ',statistics.median()) // 29
    console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
    console.log('Variance: ',statistics.var()) // 17.5
    console.log('Standard Deviation: ', statistics.std()) // 4.2
    console.log('Variance: ',statistics.var()) // 17.5
    console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/

/*
    console.log(statistics.describe())
    Count: 25
    Sum:  744
    Min:  24
    Max:  38
    Range:  14
    Mean:  30
    Median:  29
    Mode:  (26, 5)
    Variance:  17.5
    Standard Deviation:  4.2
    Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/
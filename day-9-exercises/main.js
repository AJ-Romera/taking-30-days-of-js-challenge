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

const invoiceItems = [
	{ service: "consultoría", price: 3000 },
	{ service: "desarrollo", price: 18000 },
	{ service: "soporte", price: 1000 },
];


const invoiceAmount = invoiceItems.reduce((totalPrice, nextprice) => totalPrice + nextprice.price, 0);

console.log(invoiceAmount);

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

const categorizeCountries = countries.some(country => )

const categorizeCountries = (countries) => {
    let coun = countries.filter(country => {
        return country.toLowerCase().includes("ia") || country.toLowerCase().includes("island") || country.toLowerCase().includes("land") || country.toLowerCase().includes("stan");
    })
    return coun;
}
console.log(categorizeCountries(countries));

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.



// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array



// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.



// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)



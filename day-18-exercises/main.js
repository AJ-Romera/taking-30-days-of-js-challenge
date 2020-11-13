const countriesAPI = "https://restcountries.eu/rest/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Exercises: Level 1

// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
/*
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        let countries = data;
        countries.forEach(country => {
            console.log(`country: ${country.name} capital: ${country.capital} languages: ${country.languages[0].name} population: ${country.population} area: ${country.area}`) // I don´t know the way to get all languages.
        });
    })
    .catch(error => console.log(error));
*/

// Exercises: Level 2

// 1. Print out all the cat names in to catNames variable.
/*
let catNames = []
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        let cats = data;
        cats.forEach((cat) => catNames.push(cat.name));
        console.log(catNames);
    })
    .catch(error =>  console.log(error));
*/


// Exercises: Level 3

// 1. Read the cats api and find the average weight of cat in metric unit.
// *** These weights provided by the API doesn't have metric units, I think the metric unit is pounds.

/*
let catWeights = [];

fetch(catsAPI)
	.then((response) => response.json())
	.then((data) => {
		let cats = data;
        cats.forEach((cat) => catWeights.push({name: cat.name, avgWeight: cat.weight.imperial}));
        catWeights.forEach((weight) => console.log(`The average weight of ${weight.name} is ${weight.avgWeight} pounds`))
        // For me, 9 - 14 pounds is an average weight, if you need the average of this average just do (9 + 14) / 2
	})
    .catch((error) => console.log(error));
*/

// 2. Read the countries api and find out the 10 largest countries
// 3. Read the countries api and count total number of languages in the world used as officials.
// *** I´m going to do both exercises at the same time using async and await

let largestCountries = [];
let languages = [];

const fetchData = async () => {
    try {
        const response = await fetch(countriesAPI);
        const data = await response.json()
        countries = data;

        countries.forEach((country) => {
            largestCountries.push({ country: country.name, area: country.area });
        })

        largestCountries.sort(function (a, b) {
            if (a.area < b.area) {
                return 1;
            }
            if (a.area > b.area) {
                return -1;
            }
            return 0;
        })

        largestCountries.length = 10;
        
        console.log(largestCountries);

        //total number of languages in the world;
        countries.forEach(country => {
            country.languages.forEach(language => {
                if (languages.indexOf(language.name) === -1) { // This condition is to prevent repeated languages
                    languages.push(language.name)
                }
            })
        })

        console.log(`The total number of languages in the world used as officials is ${languages.length}`)

        // console.log(languages); // uncomment this to log the full list of official languages in the world according to the API information

    } catch (err) {
        console.log(err)
    }
}
console.log('===== async and await')
fetchData();
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

let catNames = []
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        let cats = data;
        cats.forEach((cat) => catNames.push(cat.name));
        console.log(catNames);
    })
    .catch(error =>  console.log(error));
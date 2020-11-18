// Exercises: Level 2

// 1. Use the countries array to display all the countries. See the design.
    // The design is here: https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/22_Day_Manipulating_DOM_object/22_day_starters/design/dom_min_project_countries_aray_day_2.2.png

let body = document.querySelector('body');
let h2 = document.querySelector('h2');
let h3 = document.querySelectorAll('h3');
let h4 = document.querySelector('#total-countries');
let div = document.querySelector('.countries-wrapper');

// Body styles

body.style.fontFamily = 'Arial, Helvetica, sans-serif';

// h2 styles

h2.style.textAlign = 'center';
h2.style.fontSize = '50px';
h2.style.margin = '1px auto';
h2.innerHTML = h2.innerHTML.toUpperCase();
h2.style.letterSpacing = '15px';

// h3 styles

h3.forEach((h) => {
    h.style.textAlign = 'center';
    h.style.fontWeight = '600';
    h.style.fontSize = '14px';
    h.style.marginTop = '2px';
    h.style.marginBottom = '2px';
});

// h4 styles

h4.innerHTML = `Total Number of countries: ${countries.length}`;
h4.style.textAlign = 'center';
h4.style.fontWeight = 'bold';
h4.style.fontSize = '18px';
h4.style.marginTop = '5px';
h4.style.marginBottom = '5px';

// div styles

div.style.display = 'flex';
div.style.flexWrap = 'wrap';
div.style.justifyContent = 'center';
div.style.margin = '70px auto';
div.style.width = '1120px'

// World Countries List Magic

countries.forEach(country => {
    let box = document.createElement('div')
    box.innerHTML = country;
    box.innerHTML = box.innerHTML.toUpperCase();
    box.style.width = '160px';
    box.style.height = '170px';
    box.style.fontWeight = '600';
    box.style.fontSize = '16px';
    box.style.textAlign = 'center';
    box.style.display = 'flex';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'center';
    box.style.margin = '6px';
    box.style.borderRadius = '5px';
    box.style.boxShadow = '0px 0px 4px 1px rgba(125,125,125,0.2)';
    div.appendChild(box)
});

// Exercises: Level 1

// 1. Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
/**
    * Even numbers background is green
    * Odd numbers background is yellow
    * Prime numbers background is red
*/

let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let p = document.querySelectorAll('p');
let div = document.createElement('div');

// Body styles

body.style.fontFamily = 'Arial, Helvetica, sans-serif';

// h1 styles

h1.style.textAlign = 'center';
h1.style.fontWeight = 'bold';
h1.style.fontSize = '40px';
h1.style.margin = '10px auto';

// h2 and h3 styles

h2.style.textAlign = 'center';
h2.style.textDecoration = 'underline';
h2.style.fontWeight = '500';
h2.style.fontSize = '25px';
h2.style.margin = '1px auto';

h3.style.textAlign = 'center';
h3.style.textDecoration = 'underline';
h3.style.fontWeight = '300';
h3.style.marginTop = '2px';

// div styles

div.style.display = 'flex';
div.style.flexWrap = 'wrap';
div.style.justifyContent = 'center';
div.style.margin = '0 auto';
div.style.width = '1100px'

document.body.appendChild(div);

// Get prime numbers

function primeFactorsTo(max)
{
    let store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

// Num Gen App Magic

for (let i = 0; i <= 100; i++) {
    if (primeFactorsTo(100).includes(i)) {
        let box = document.createElement('div');
        box.textContent = i;
        box.style.color = 'white';
        box.style.fontSize = '45px';
        box.style.width = '170px';
        box.style.height = '90px';
        box.style.backgroundColor = '#FD5E53';
        box.style.margin = '3px';
        box.style.lineHeight = '90px';
        box.style.textAlign = 'center';
        div.appendChild(box);
    } else if (i % 2 === 0) {
        let box = document.createElement('div');
        box.textContent = i;
        box.style.color = 'white';
        box.style.fontSize = '45px';
        box.style.width = '170px';
        box.style.height = '90px';
        box.style.backgroundColor = '#21BF73';
        box.style.margin = '3px';
        box.style.lineHeight = '90px';
        box.style.textAlign = 'center';
        div.appendChild(box);
    } else {
        let box = document.createElement('div');
        box.textContent = i;
        box.style.color = 'white';
        box.style.fontSize = '45px';
        box.style.width = '170px';
        box.style.height = '90px';
        box.style.backgroundColor = '#FDDB3A';
        box.style.margin = '3px';
        box.style.lineHeight = '90px';
        box.style.textAlign = 'center';
        div.appendChild(box);
    }
}

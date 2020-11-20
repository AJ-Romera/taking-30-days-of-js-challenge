// Exercises: Level 1
// 1. Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.

let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let div = document.createElement('div');

// Body styles
body.style.fontFamily = 'Arial, Helvetica, sans-serif';

// h1 styles
h1.style.textAlign = 'center';
h1.style.fontWeight = 'bold';
h1.style.fontSize = '40px';
h1.style.margin = '1px auto';
h1.style.color = '#21BF73';

// h2 and h3 styles
h2.style.textAlign = 'center';
h2.style.fontWeight = '500';
h2.style.fontSize = '25px';
h2.style.margin = '1px auto';

h3.style.textAlign = 'center';
h3.style.fontWeight = '300';
h3.style.marginTop = '2px';

// div styles
div.style.display = 'flex';
div.style.flexWrap = 'wrap';
div.style.justifyContent = 'center';
div.style.margin = '0 auto';
div.style.width = '75%'

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
let p = document.querySelector('p');
let number = document.querySelector('#number');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    div.textContent = '';
    num = number.value;
    p.innerHTML = '';

    if (typeof (Number(num)) === "number" && Number(num) > 0) {
        for (let i = 0; i < num; i++) {
            if (primeFactorsTo(num).includes(i)) {
                let box = document.createElement('div');
                box.textContent = i;
                box.style.color = 'white';
                box.style.fontSize = '40px';
                box.style.width = '100px';
                box.style.height = '50px';
                box.style.backgroundColor = '#FD5E53';
                box.style.margin = '3px';
                box.style.lineHeight = '50px';
                box.style.textAlign = 'center';
                div.appendChild(box);
            } else if (i % 2 === 0) {
                let box = document.createElement('div');
                box.textContent = i;
                box.style.color = 'white';
                box.style.fontSize = '40px';
                box.style.width = '100px';
                box.style.height = '50px';
                box.style.backgroundColor = '#21BF73';
                box.style.margin = '3px';
                box.style.lineHeight = '50px';
                box.style.textAlign = 'center';
                div.appendChild(box);
            } else {
                let box = document.createElement('div');
                box.textContent = i;
                box.style.color = 'white';
                box.style.fontSize = '40px';
                box.style.width = '100px';
                box.style.height = '50px';
                box.style.backgroundColor = '#FDDB3A';
                box.style.margin = '3px';
                box.style.lineHeight = '50px';
                box.style.textAlign = 'center';
                div.appendChild(box);
            }
        }
    } else if (num.length === 0) {
        p.textContent = 'Field is required';
        p.style.color = 'red';
    } else if (typeof (num) === "string") {
        p.textContent = "Please enter number values only";
        p.style.color = "red";
    }
})

// wrapper (p, Input and button) styles
let wrapper = document.querySelector('.wrapper');

wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.justifyContent = 'center';
wrapper.style.margin = '0 auto';
wrapper.style.marginBottom = '30px';
wrapper.style.width = '65%';

p.style.width = '87%';
p.style.margin = '3px 10px';

number.style.width = '60%';
number.style.minHeight = '34px';
number.style.padding = '1px 15px';

button.style.width = '22%';
button.style.height = '40px';
button.style.padding = '1px 2px';
button.style.marginLeft = '20px';
button.style.fontSize = '17px';
button.style.color = 'white';
button.style.backgroundColor = '#21BF73';



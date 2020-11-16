// Exercises: Level 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

console.log("======exercise-1======");

let firstPByTagname = document.querySelector('p');
console.log(firstPByTagname);

// 2. Get get each of the the paragraph using document.querySelector('#id') and by their id

console.log('======exercise-2======');

let firstPById = document.querySelector('#firstP');
let secondPById = document.querySelector('#secondP');
let thirdPById = document.querySelector('#thirdP');
let fourthPById = document.querySelector('#fourthP');

console.log(firstPById);
console.log(secondPById);
console.log(thirdPById);
console.log(fourthPById);

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

console.log("======exercise-3======");

let allP = document.querySelectorAll('p');
console.log(allP);

// 4. Loop through the nodeList and get the text content of each paragraph

console.log("======exercise-4======");

allP.forEach((p) => console.log(p));

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph

console.log("======exercise-5======");

firstPById.textContent = 'First Paragraph';
secondPById.textContent = 'Second Paragraph';
thirdPById.textContent = 'Third Paragraph';
fourthPById.textContent = 'Fourth Paragraph';

// We just need the fourth paragraph text for this exercise, I add text to all p for level 2 exercises

console.log(fourthPById);

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods

/**
 *  console.log("======exercise-6======");
 * 
 *  // Set id and class adding attribute:
 * 
 *  // .class doesn´t work with some elements like this example
 * 
 *  allP[0].class = 'paragraph';
 *  allP[0].id = "p1";
 *  
 *  allP[1].class = 'paragraph';
 *  allP[1].id = "p2";
 *  allP[2].class = 'paragraph';
 *  allP[2].id = "p3";
 *  allP[3].class = 'paragraph';
 *  allP[3].id = "p4";
 *  
 *  console.log(allP);
 *  
 *  // Set id and class using attribute:
 *  allP[0].setAttribute('class', 'paragraph');
 *  allP[0].setAttribute('id', 'p1');
 *  allP[1].setAttribute('class', 'paragraph');
 *  allP[1].setAttribute('id', 'p2');
 *  allP[2].setAttribute('class', 'paragraph');
 *  allP[2].setAttribute('id', 'p3');
 *  allP[3].setAttribute('class', 'paragraph');
 *  allP[3].setAttribute('id', 'p4');
 *  
 *  console.log(allP);
 *  
 *  // Set id and class without using attribute:
 *  
 *  allP[0].className = 'paragraph';
 *  allP[0].id = "p1";
 *  allP[1].className = 'paragraph';
 *  allP[1].id = "p2";
 *  allP[2].className = 'paragraph';
 *  allP[2].id = "p3";
 *  allP[3].className = 'paragraph';
 *  allP[3].id = "p4";
 *  
 *  console.log(allP);
 *  
 *  // Set class using classList (append the class, doesn't override the original)
 *  
 *  allP[0].classList.add = 'paragraph';
 *  allP[1].classList.add = 'paragraph';
 *  allP[2].classList.add = 'paragraph';
 *  allP[3].classList.add = 'paragraph';
 *  
 *  console.log(allP);
*/


// Exercises: Level 2

// 1. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

// I prefer doing the styles in a styles.css file

firstPById.style.color = 'green';
secondPById.style.background = 'blue';
thirdPById.style.border = '2px dashed black';
fourthPById.style.fontSize = '26px';
fourthPById.style.fontFamily = "Helvetica";

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

let paragraphs = document.querySelectorAll('p');
paragraphs.forEach((p, i) => {
    // i is the index, even index is an odd paragraph and viceversa

	if (i % 2 === 0) {
		p.style.color = 'green';
	} else {
		p.style.color = 'red';
	}
});

// 3. Set text content, id and class to each paragraph

// We did all of this in exercises level 1


// Exercises: Level 3
    // DOM: Mini project 1

// 1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
/**
 *  The year color is changing every 1 second
 *  The date and time background color is changing every on seconds
 *  Completed challenge has background green
 *  Ongoing challenge has background yellow
 *  Coming challenges have background red
 */

// I´ll do this in DOMMiniProject1 HTML file and JS file.
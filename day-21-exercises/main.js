// Exercise: Level 1

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

fourthPById.textContent = 'Fourth Paragraph';
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

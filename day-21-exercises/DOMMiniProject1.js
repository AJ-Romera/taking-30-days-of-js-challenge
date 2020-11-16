// 1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
/**
 *  The year color is changing every 1 second DONE
 *  The date and time background color is changing every one seconds
 *  Completed challenge has background green
 *  Ongoing challenge has background yellow
 *  Coming challenges have background red
 */

let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let list = document.querySelectorAll("li");

// Body styling
body.style.textAlign = 'center';
body.style.fontFamily = 'sans-serif';

// H1
h1.style.fontSize = '32px'

// Change year color
h1.innerHTML = 'Asabeneh Yetayeh challenges in <span id="year">2020<span>';

let year = document.getElementById('year');

let changeYearColor = () => {
	let random1 = Math.floor(Math.random() * 255);
	let random2 = Math.floor(Math.random() * 255);
	let random3 = Math.floor(Math.random() * 255);
	color = `rgb(${random1},${random2},${random3})`;
	year.style.color = color;
};
setInterval(changeYearColor, 1000);

year.style.fontSize = '80px'

// h2 decoration
h2.style.textDecoration = "underline"

// Date in a paragraph

let changeTime = () => {
    let date = new Date();   
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'];
    let YYYYMMDD = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;

    p.textContent = YYYYMMDD;
};
setInterval(changeTime, 1000);

// Paragraph styles

p.style.border = "0.1px solid black"
p.style.width = "250px";
p.style.margin = "0 auto";
p.style.padding = "10px", '0px';
p.style.fontWeight = '500';

let changePColor = () => {
	let random1 = Math.floor(Math.random() * 255);
	let random2 = Math.floor(Math.random() * 255);
	let random3 = Math.floor(Math.random() * 255);
	color = `rgb(${random1},${random2},${random3})`;
	// year.style.color = color;
	p.style.backgroundColor = color;
};
setInterval(changePColor, 1000);

// List Style

list.forEach((li) => {
	li.style.listStyle = "none";
    li.style.margin = "5px auto";
    li.style.padding = "2.5px 20px";
	li.style.width = "650px";
    li.style.height = "50px";
    li.style.lineHeight = "50px";
    li.style.textAlign = "left";

	if (li.textContent.toLowerCase().includes("done")) {
		li.style.backgroundColor = "#5BBC7A";
	} else if (li.textContent.toLowerCase().includes("ongoing")) {
		li.style.backgroundColor = "#F7DC5C";
	} else {
		li.style.backgroundColor = "#EB695B";
	}
});

// Exercises: Level 3

// 1. Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.

/**
 * First of all, this project is for practice purposes
 * I did it as clean as possible
 * but it´s not a real serious project so it can be imporved to be more professional
 * I mean, some styles are unordered, icons can be improved, some colors shouldn´t be random
 * for practice I dont want to spend as much time as working on a serious project.
 */

let body = document.querySelector('body');
let div = document.querySelector('.wrapper');
let h1 = document.createElement('h1');
let h2 = document.createElement('h2');
let p = document.createElement('p');
let ul = document.createElement('ul');

let list = [];
for (let i = 0; i < asabenehChallenges2020.challenges.length; i++) {
    list.push(document.createElement('li'));
}

// html structure

div.appendChild(h1); // h1 inside div.wrapper
div.appendChild(h2);
div.appendChild(p);
div.appendChild(ul);

for (const li of list) {
    ul.appendChild(li);
}

// Body styling
body.style.textAlign = 'center';
body.style.fontFamily = 'sans-serif';

// h1
h1.style.fontSize = '34px'

// h2 
h2.innerHTML = `${asabenehChallenges2020.challengeSubtitle}`;

// ul styles
ul.style.display = 'flex';
ul.style.flexWrap = 'wrap';
ul.style.justifyContent = 'center';
ul.style.justifyItems = 'center';
ul.style.margin = '70px auto';

// Change year color
h1.innerHTML = `${asabenehChallenges2020.challengeTitle} in <span id="year">2020<span>`;

let year = document.getElementById('year');

let changeYearColor = () => {
	let random1 = Math.floor(Math.random() * 255);
	let random2 = Math.floor(Math.random() * 255);
	let random3 = Math.floor(Math.random() * 255);
	color = `rgb(${random1},${random2},${random3})`;
	year.style.color = color;
};
setInterval(changeYearColor, 1000);

year.style.fontSize = '100px'

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
	p.style.backgroundColor = color;
};
setInterval(changePColor, 1000);

// List info

for (let i = 0; i < asabenehChallenges2020.challenges.length; i++) {
    let topics = asabenehChallenges2020.challenges[i].topics;
    let topic = '';
    for (let i = 0; i < topics.length; i++) {
        topic = topic + topics[i]+'<br>';
    }
    list[i].innerHTML = `<span class='underlinedSpan'>${asabenehChallenges2020.challenges[i].name}</span><details><summary>${asabenehChallenges2020.challenges[i].name.slice(11)}</summary><p>${topic}</p></details>${asabenehChallenges2020.challenges[i].status}`;
    
    // You can get summary element and style it.

    // Underline 
    if (list[i].innerHTML.toLowerCase().includes("done")) {
        let span = list[i].querySelector('.underlinedSpan');
        span.style.textDecoration = 'underline';
	} else if (list[i].innerHTML.toLowerCase().includes("ongoing")) {
        let span = list[i].querySelector('.underlinedSpan');
        span.style.textDecoration = 'underline';
    }
}

// List Style
list.forEach((li) => {
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
	li.style.listStyle = "none";
    li.style.margin = "5px auto";
    li.style.padding = "2.5px 20px";
	li.style.width = "70%";
    li.style.minHeight = "75px";
    li.style.alignItems = 'center';
    li.style.textAlign = 'left';

	if (li.textContent.toLowerCase().includes("done")) {
        li.style.backgroundColor = "#5BBC7A";
	} else if (li.textContent.toLowerCase().includes("ongoing")) {
		li.style.backgroundColor = "#F7DC5C";
	} else {
		li.style.backgroundColor = "#EB695B";
	}
});

// Second part of the exercise
let fullNameTitle = document.createElement('h1');
let socialIconsP = document.createElement('p');
let aboutMeParagraph = document.createElement('p');
let titlesSkillsAndQualificationsSection = document.createElement('section');
let keywordsSection = document.createElement('section');

// Structure
div.appendChild(fullNameTitle); // fullNameTitle child of div_2
div.appendChild(socialIconsP);
div.appendChild(aboutMeParagraph);
div.appendChild(titlesSkillsAndQualificationsSection);
div.appendChild(keywordsSection);

// fullNameTitle
fullNameTitle.innerHTML = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;

// fullNameTitle Styles
fullNameTitle.style.marginBottom = '5px';

// SocialIconsP
// For using icons I added my fontawesomekit to the head of miniproject3-challenges-2020.html

let socialIcon = asabenehChallenges2020.author.socialLinks;
let socialIcons = [];

for (const icon of socialIcon) {
    socialIcons.push(icon.fontawesomeIcon);
}

socialIconsP.innerHTML =  `${socialIcons[1]} ${socialIcons[2]} ${socialIcons[0]}`
// For some reason, linkedIn icon should be the last icon or it won´t work

// SocialIconsP Styles
socialIconsP.style.fontSize = '35px';
socialIconsP.style.marginTop = '5px';

// aboutMeParagraph
aboutMeParagraph.innerHTML = `${asabenehChallenges2020.author.bio}`

// aboutMeParagraph style
aboutMeParagraph.style.display = 'flex';
aboutMeParagraph.style.justifyContent = 'space-between';
aboutMeParagraph.style.listStyle = "none";
aboutMeParagraph.style.margin = "5px auto";
aboutMeParagraph.style.marginBottom = '50px';
aboutMeParagraph.style.padding = "2.5px 20px";
aboutMeParagraph.style.width = "55%";
aboutMeParagraph.style.minHeight = "75px";
aboutMeParagraph.style.alignItems = 'center';
aboutMeParagraph.style.textAlign = 'center';

// Section structure
let titles = document.createElement('div');
let skills = document.createElement('div');
let qualifications = document.createElement('div');

titlesSkillsAndQualificationsSection.appendChild(titles);
titlesSkillsAndQualificationsSection.appendChild(skills);
titlesSkillsAndQualificationsSection.appendChild(qualifications);

// Section content
    // Titles
let titlesArray = asabenehChallenges2020.author.titles;
let titlesIcons = [
    '<i class="fas fa-seedling fa-lg" style="color:green"></i>',
    '<i class="fas fa-laptop-code fa-lg" style="color:rebeccapurple"></i>',
    '<i class="fas fa-desktop fa-lg" style="color:grey"></i>',
    '<i class="fas fa-plus-circle fa-lg" style="color:darkgreen"></i>',
    '<i class="fas fa-user-edit fa-lg" style="color:red"></i>',
];
let titlesNames = [];

for (let i = 0; i < titlesArray.length; i++) {
    titlesNames.push(titlesArray[i][1]);
}

let title = '';
for (let i = 0; i < titlesIcons.length; i++) {
    title = title + titlesIcons[i] + ' ' + titlesNames[i] + '<br>';
}

    // Skills
let skillsArray = asabenehChallenges2020.author.skills;
let skillsIcons = [
    '<i class="fas fa-check-circle fa-lg" style="color:green"></i>',
    '<i class="fas fa-check-circle fa-lg" style="color:green"></i>',
    '<i class="fas fa-check-circle fa-lg" style="color:green"></i>',
    '<i class="fas fa-check-circle fa-lg" style="color:green"></i>',
    '<i class="fas fa-check-circle fa-lg" style="color:green"></i>',
    '<i class="fas fa-check-circle fa-lg" style="color:green"></i>',
];

let skill = '';
for (let i = 0; i < skillsArray.length; i++) {
    skill = skill + skillsIcons[i] + ' ' + skillsArray[i] + '<br>';
}

    // Qualifications
let qualificationsArray = asabenehChallenges2020.author.qualifications;
let qualificationsIcons = [
    '<i class="fas fa-graduation-cap fa-lg" style="color:midnightblue"></i>',
    '<i class="fas fa-user-graduate fa-lg" style="color:blue"></i>',
    '<i class="fas fa-user-graduate fa-lg" style="color:blue"></i>',
    '<i class="fas fa-user-graduate fa-lg" style="color:blue"></i>',
];

let qualification = '';
for (let i = 0; i < qualificationsArray.length; i++) {
    qualification = qualification + qualificationsIcons[i] + ' ' + qualificationsArray[i] + '<br>';
}

titles.innerHTML = `<b>Titles</b><br>${title}`;
skills.innerHTML = `<b>Skills</b><br>${skill}`;
qualifications.innerHTML = `<b>Qualifications</b><br>${qualification}`;

// Titles... Section styles
titlesSkillsAndQualificationsSection.style.display = 'flex';
titlesSkillsAndQualificationsSection.style.justifyContent = 'space-between';
titlesSkillsAndQualificationsSection.style.listStyle = "none";
titlesSkillsAndQualificationsSection.style.margin = "5px auto";
titlesSkillsAndQualificationsSection.style.padding = "2.5px 20px";
titlesSkillsAndQualificationsSection.style.width = "68%";
titlesSkillsAndQualificationsSection.style.minHeight = "75px";
titlesSkillsAndQualificationsSection.style.textAlign = 'left';
titlesSkillsAndQualificationsSection.style.fontSize = '16px';
titlesSkillsAndQualificationsSection.style.lineHeight = '35px';

let titlesB = titlesSkillsAndQualificationsSection.querySelectorAll('b');
for (i = 0; i < titlesB.length; i++) {
    titlesB[i].style.fontSize = '20px';
}

// Keywords Section styles
keywordsSection.style.display = 'flex';
keywordsSection.style.justifyContent = 'space-between';
keywordsSection.style.listStyle = "none";
keywordsSection.style.margin = "5px auto";
keywordsSection.style.padding = "2.5px 20px";
keywordsSection.style.minHeight = "75px";
keywordsSection.style.textAlign = 'center';
keywordsSection.style.fontSize = '16px';
keywordsSection.style.flexWrap = 'wrap';
keywordsSection.style.width = "90%";
keywordsSection.style.alignItems = 'center';
keywordsSection.style.justifyContent = 'center';

// Keywords title
    // HTML structure
let keywordsTitle = document.createElement('h3');
keywordsSection.appendChild(keywordsTitle);

    // content
keywordsTitle.innerHTML = 'Keywords';

    // style
keywordsTitle.style.display = 'flex';
keywordsTitle.style.flexWrap = 'nowrap';
keywordsTitle.style.width = "65%";

// Keywords div
    // HTML structure
let keywordsDiv = document.createElement('div');
keywordsSection.appendChild(keywordsDiv);

    // style
keywordsDiv.style.display = 'flex';
keywordsDiv.style.flexWrap = 'wrap';
keywordsDiv.style.width = "70%";
keywordsDiv.style.textAlign = 'center';
keywordsDiv.style.alignItems = 'center';
keywordsDiv.style.justifyContent = 'space-evenly';

    // content
let keywordsArray = asabenehChallenges2020.keywords;
keywordsArray.forEach(key => {
    // Create div for each box
    let box = document.createElement('div');

    // box styles
    box.innerHTML = `<i># ${key}</i>`;
    box.style.width = 'auto';
    box.style.height = 'auto';
    box.style.fontWeight = '600';
    box.style.fontSize = '17px';
    box.style.display = 'flex';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'center';
    box.style.textAlign = 'center';
    box.style.margin = '5px';
    box.style.padding = '7px 15px';
    box.style.borderRadius = '20px';
    box.style.boxShadow = '0px 0px 4px 1px rgba(125,125,125,0.2)';

    // box background. *** It shouldn´t be random colors in a real project
    let rand1 = Math.floor(Math.random() * 255);
    let rand2 = Math.floor(Math.random() * 255);
    let rand3 = Math.floor(Math.random() * 255);
    let color = `rgb(${rand1},${rand2},${rand3})`;
    box.style.backgroundColor = color;

    // Box as a child of keywordsDiv
    keywordsDiv.appendChild(box);
});


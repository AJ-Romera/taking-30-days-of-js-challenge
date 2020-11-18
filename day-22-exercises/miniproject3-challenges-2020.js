// Exercises: Level 3

// 1. Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.

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

// Structure
div.appendChild(fullNameTitle); // fullNameTitle child of div_2
div.appendChild(socialIconsP);
div.appendChild(aboutMeParagraph);
div.appendChild(titlesSkillsAndQualificationsSection);

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
let titlesArray = asabenehChallenges2020.author.titles;
let titlesEmoticons = [];
let titlesNames = [];

for (let i = 0; i < titlesArray.length; i++) {
    titlesEmoticons.push(titlesArray[i][0]);
    titlesNames.push(titlesArray[i][1]);
}
console.log(titlesEmoticons);
console.log(titlesNames);

let title = '';
for (let i = 0; i < titlesEmoticons.length; i++) {
    title = title + titlesEmoticons[i] + titlesNames[i] + '<br>';
}


titles.innerHTML = `<b>Titles</b><br>${title}`;
skills.innerHTML = `<b>Titles</b><br>${title}`;
qualifications.innerHTML = `<b>Titles</b><br>${title}`;

// Section styles

titlesSkillsAndQualificationsSection.style.display = 'flex';
titlesSkillsAndQualificationsSection.style.justifyContent = 'space-between';
titlesSkillsAndQualificationsSection.style.listStyle = "none";
titlesSkillsAndQualificationsSection.style.margin = "5px auto";
titlesSkillsAndQualificationsSection.style.padding = "2.5px 20px";
titlesSkillsAndQualificationsSection.style.width = "70%";
titlesSkillsAndQualificationsSection.style.minHeight = "75px";
titlesSkillsAndQualificationsSection.style.alignItems = 'center';
titlesSkillsAndQualificationsSection.style.textAlign = 'left';
titlesSkillsAndQualificationsSection.style.fontSize = '16px';
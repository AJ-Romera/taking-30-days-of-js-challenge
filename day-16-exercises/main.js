const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
	firstName: "Asabeneh",
	lastName: "Yetayehe",
	age: 250,
	isMarried: true,
	skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

// Exercises: Level 1

// 1. Change skills array to JSON using JSON.stringify()

const skillsJSON = JSON.stringify(skills, undefined, 4);
console.log(skillsJSON);

// 2. Stringify the age variable

const ageJSON = JSON.stringify(age, undefined, 4);
console.log(ageJSON);

// 3. Stringify the isMarried variable

const isMarriedJSON = JSON.stringify(isMarried, undefined, 4);
console.log(isMarriedJSON);

// 4. Stringify the student object

const studentJSON = JSON.stringify(student, undefined, 4);
console.log(studentJSON);


// Exercises: Level 2

// 1. Stringify the students object with only firstName, lastName and skills properties

const filterStudentJSON = JSON.stringify(student, ["firstName", "lastName", "skills"], 4);
console.log(filterStudentJSON);


// Exercises Level 3

// 1. Parse the txt JSON to object.

let txtObj = JSON.parse(txt);
console.log(txtObj);

// 2. Find the the user who has many skills from the variable stored in txt.

alexSkills = txtObj["Alex"].skills.length;
asabSkills = txtObj["Asab"].skills.length;
brookSkills = txtObj["Brook"].skills.length;
danielSkills = txtObj["Daniel"].skills.length;
johnSkills = txtObj["John"].skills.length;
thomasSkills = txtObj["Thomas"].skills.length;
paulSkills = txtObj["Paul"].skills.length;

console.log(alexSkills); 3 
console.log(asabSkills); 8 // This one
console.log(brookSkills); 5
console.log(danielSkills); 4
console.log(johnSkills); 6
console.log(thomasSkills); 4
console.log(paulSkills); 7

// Asab is the most skilled user.
// This can be automated somehow, but json.parse reviver doesn´t work, for, forof, forEach, forIn, etc does not work either, so i had to do it manually this time.
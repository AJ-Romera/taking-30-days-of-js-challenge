// Exercises: Level 1

// 1. Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem("firstName", "Antonio");
localStorage.setItem("lastName", "Romera Alfonso");
localStorage.setItem("age", 26);
localStorage.setItem("country", "Spain");
localStorage.setItem("city", "Cartaya");


// Exercises: Level 2

// 1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

let student = {
	firstName: "Antonio José",
	lastName: "Romera Alfonso",
	age: 26,
	skills: ["html", "css", "javascript", "Angular", "react", "git"],
	country: "Spain"
};

let studentJSON = JSON.stringify(student);
localStorage.setItem("student", studentJSON);
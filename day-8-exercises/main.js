// Exercises: Level 1

// 1. Create an empty object called dog

const dog = [];

// 2. Print the the dog object on the console

console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = 'Dana';
dog.legs = 4;
dog.color = 'Steel blue and gold';
dog.age = 5;
dog.bark = function() {
    return 'Woof woof';
};

console.log(dog);
console.log(dog.bark());

// 4. Get name, legs, color, age and bark value from the dog object

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark()); // Or console.log(dog.bark);

/* Another way

console.log(dog['name']);
console.log(dog['legs']);
console.log(dog['color']);
console.log(dog['age']);
console.log(dog['bark']); */

// 5. Set new properties the dog object: breed, getDogInfo

dog.breed = "Yorkshire Terrier";
dog.getDogInfo = function() {
    let statement = ''
    return `${this.name} is a ${this.breed} with ${this.legs} legs.\nShe is ${this.age} years old.\nHer color is ${this.color} and her bark is ${this.bark()}.`;
};

console.log(dog);
console.log(dog.getDogInfo());


// Exercises: Level 2

// 1. Find the person who has many skills in the users object.
// I´m going to solve exercise 1 and 2 at the same time.
// 2. Count logged in users,count users having greater than equal to 50 points from the following object.

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// Find most skilled user:

let mostSkilled;
let max = 0;

function findMostSkilled() {
    for (const user in users) {
        if (users[user].skills.length > max) {
            max = users[user].skills.length;
            mostSkilled = user;
        }
    }
    return `${mostSkilled} is the most skilled person with ${max} skills`;
}
    
console.log(findMostSkilled());

// Count logged in users:

let countLoggedIn = 0;

function areLoggedIn() {
	for (const user in users) {
		if (users[user].isLoggedIn === true) {
			countLoggedIn++;
		}
	}
	return `${countLoggedIn} user(s) is/are logged in`;
}

console.log(areLoggedIn());

// Count users having greater than equal to 50 points from the following object.

let countUsers50Points = 0;

function moreThan50points() {
	for (const user in users) {
		if (users[user].points >= 50) {
			countUsers50Points++;
		}
	}
	return `${countUsers50Points} user(s) has/have 50 or more points`;
}

console.log(moreThan50points());

// 3. Find people who are MERN stack developer from the users object

let MERNDevs = [];

function findMERNDevs() {
    for (const user in users) {
        if (users[user].skills.includes('Express', 'MongoDB', 'React', 'Node')) { // The order of elements doesn´t matter.
            MERNDevs.push(user);
        }
    }
    return MERNDevs;
}
    
console.log(findMERNDevs());

// 4. Set your name in the users object without modifying the original users object

const newUsers = [];
Object.assign(newUsers, users);

newUsers.push('Antonio José');

console.log(newUsers);

// 5. Get all keys or properties of users object

const keys = Object.keys(newUsers);
console.log(keys);

// 6. Get all the values of users object

const values = Object.values(newUsers);
console.log(values);

// 7. Use the countries object to print a country name, capital, populations and languages.
/*
console.log(countries);

let index = prompt('Give me an index an I tell you that country name, capital, population and languajes');
let print = `The country´s name is ${countries[index].name}\nIt´s capital is ${countries[index].capital}\nHas a population of ${countries[index].population} inhabitants\nIts most common language(s) is/are
${countries[index].languages.join(', ')}`;
console.log(print);
*/


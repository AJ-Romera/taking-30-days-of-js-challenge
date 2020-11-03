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


// Exercises: Level 3

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
	firstName: "Asabeneh",
	lastName: 250,
	incomes: {
		incomes: [2000, 400],
		description: ['Monthly salary', 'Monthly passive income'],
	},
	expenses: {
		expenses: [300, 150, 250, 150],
		description: ['Food', 'Water, electricity, gas, internet', 'Monthly insurance', 'Personal'],
	},
	totalIncome: function () {
        let sum = 0;
        for (let i = 0; i < this.incomes.incomes.length; i++) {
            sum += this.incomes.incomes[i] ;
        }
		return `${sum}`;
	},
	totalExpense: function () {
		let sum = 0;
		for (let i = 0; i < this.expenses.expenses.length; i++) {
			sum += this.expenses.expenses[i];
		}
		return `${sum}`;
	},
	addIncome: function (income, description) {
		return this.incomes.incomes.push(income) && this.incomes.description.push(description);
	},
	addExpense: function (expenses, description) {
		this.expenses.expenses.push(expenses) && this.expenses.description.push(description);
	},
	accountBalance: function () {
		return this.totalIncome() - this.totalExpense();
	}
};

personAccount.addIncome(10000, 'Successful app');
console.log(personAccount.incomes);
personAccount.addExpense(6000, "Pay to dev");
console.log(personAccount.expenses);
console.log(`You have a total income of ${personAccount.totalIncome()} this month`);
console.log(`You have a total expense of ${personAccount.totalExpense()} this month`);
console.log(`Balance this month: ${personAccount.accountBalance()}`);

// 2. **** Questions: 2, 3 and 4 are based on the following two arrays:users and products
// I renamed users array to appUsers, because we alredy have an users array.
    const appUsers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
        {
            _id: "eedfcf",
            name: "mobile phone",
            description: "Huawei Honor",
            price: 200,
            ratings: [
                { userId: "fg12cy", rate: 5 },
                { userId: "zwf8md", rate: 4.5 }
            ],
            likes: [],
        },
        {
            _id: "aegfal",
            name: "Laptop",
            description: "MacPro: System Darwin",
            price: 2500,
            ratings: [],
            likes: ["fg12cy"],
        },
        {
            _id: "hedfcg",
            name: "TV",
            description: "Smart TV:Procaster",
            price: 400,
            ratings: [{ userId: "fg12cy", rate: 5 }],
            likes: ["fg12cy"],
        },
    ];

// Imagine you are getting the above users collection from a MongoDB database.

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp(username, email, password) {
    let userExists = false; // This is a 'flag', it's the first time i use it
    
	for (let i = 0; i < appUsers.length; i++) {
		if (appUsers[i].username === username || appUsers[i].email === email) {
			console.log("User exists");
			userExists = true;
		}
	}

	if (!userExists) {
		let id = [];
		let chars = "abcdefghiklmnopqrstuvwxyz";
		let date = new Date();
		for (let i = 0; i < 6; i++) {
			id.push(chars[Math.floor(Math.random() * chars.length)]);
		}
		id = id.join("");
		appUsers.push({
			_id: id,
			username: username,
			email: email,
			password: password,
			createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
			isLoggedIn: "false",
		});
		console.log(
			`User ${appUsers[appUsers.length - 1].username} created successfully`
		);
	}
}
signUp('María', "maría@maría.com", '123465');
console.log(appUsers);

// b. Create a function called signIn which allows user to sign in to the application

function signIn(username, password) {
    let index;
    
    for (const user of appUsers) {

        if (user.username === username && user.password === password) {
            console.log("User exists");
            index = appUsers.indexOf(user); // 5
        }
        
    }
    if ((appUsers[index].isLoggedIn)) {
        appUsers[index].isLoggedIn = true;
        console.log(`${appUsers[index].username}, now you are logged in`);
    }
    
    console.log(appUsers); // isLoggedIn now is true, you can check it in the console

}
signIn("María", "123465");

// 3. The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product

function rateProduct(name, rate) {
    for (const product of products) {
        if (product.name.toLowerCase().includes(name)) {
            let chars = '0123456789abcdefghijklmnñopqrstuvwxyz';
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)]);
            }
            id = id.join('');
            product.ratings.push({
                userId: id,
                rate: rate
            })
            console.log('Filter');
        } else {
            console.log('Error: No product to rate');
        }
    }
}

rateProduct('laptop', 3.5);
console.log(products);

// b. Create a function called averageRating which calculate the average rating of a product

const averageRating = (name) => {
	let avg = 0;
	let count = 0;
	for (let i = 0; i < products.length; i++) {
		if (name.toLowerCase() === products[i].name.toLowerCase()) {

            for (const rating of products[i].ratings) {
                //console.log(rating.rate); // See each rating of the product
                count++;
                avg += rating.rate;
            }

		}
	}
    return console.log(`The ratings average of ${name} is ${avg = avg / count}`);
    
};

averageRating('mobile phone'); 


// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

const likeProduct = (name) => {
    let productFound = false;

	for (const product of products) {
		if (name.toLowerCase() === product.name.toLowerCase()) {
            productFound = true;
            console.log('Product found');

			if (product.likes.length === 0) {
				let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
				let id = [];
				for (let i = 0; i < 6; i++) {
					id.push(chars[Math.floor(Math.random() * chars.length)]);
				}
				id = id.join("");
                product.likes.push(id);

                console.log(`Liked ${name} successfully!`);
                liked = true;
            } else {
                product.likes.pop();
                console.log(`You removed your like to ${name} successfully!`);
            }
		}
    }
    
    if (!productFound) {
        console.log("No product available");
    }

};

likeProduct("mobile phone");
console.log(products); // mobile phone is liked now
// Exercises: Level 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
	constructor(name, age, color, legs) {
		this.name = name;
		this.age = age;
		this.color = color;
		this.legs = legs;
		this.food = [];
	}
	getNameAndAge() {
		const nameAndAge = `The name of the animal is ${this.name} and he/she is ${this.age} year(s) old.`;
		return nameAndAge;
	}
	set setFood(food) {
		this.food.push(food);
	}
	get getFood() {
		return this.food;
	}
	static favoriteFood() {
		const food = ["feed", "meet", "chicken", "rice"];
		const index = Math.floor(Math.random() * food.length);
		return food[index];
	}
}

const animal1 = new Animal("Chica", 8, "black", 4); // Object instantation

console.log(animal1);

console.log(animal1.getNameAndAge()); // Class method || regular method

animal1.setFood = "feed"; // Setter
animal1.setFood = "chicken"; // Setter
console.log(animal1.getFood); // Getter

console.log(Animal.favoriteFood()); // Static method

// 2. Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
	constructor(name, age, color, legs, gender, says = "woof") {
		super(name, age, color, legs);
		this.gender = gender;
		this.says = says;
	}
}

const dog1 = new Dog("Dana", 5, "brown", 4, "female", "woof woof");
console.log(dog1);

class Cat extends Animal {
	constructor(name, age, color, legs, gender, says = "meow") {
		super(name, age, color, legs);
		this.gender = gender;
		this.says = says;
	}
}

const cat1 = new Cat("Mishi", 6, "light grey", 4, "female", "meow meow");
console.log(cat1);


// Exercises: Level 2

// 1. Override the method you create in Animal class

class Pig extends Animal {
	constructor(name, age, color, legs, gender, says = "oink") {
		super(name, age, color, legs);
		this.gender = gender;
		this.says = says;
	}
	getNameAndAge() { // I'm going to override this method adding the pronoum depending on the gender
		const nameAndAge = `The name of the animal is ${this.name} and ${this.gender == 'male' ? 'he' : 'she'} is ${this.age} year(s) old.`;
		return nameAndAge;
    }
}

const pig1 = new Pig("Floyd", 4, "Pink", 4, "male", "oink oink");
console.log(pig1);
console.log(pig1.getNameAndAge());


//Exercises: Level 3

// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

/* ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/

/* // you output should look like this:
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)] */

class Statistics {
	constructor(numArray) {
		this.numArray = numArray;
	}

	count() {
		let count = this.numArray.length;
		return count;
	}

	sum() {
		let sum = 0;
		this.numArray.forEach((num) => (sum += num));
		return sum;
	}

	min() {
		let minValue = Math.min(...this.numArray);
		return minValue;
	}

	max() {
		let maxValue = Math.max(...this.numArray);
		return maxValue;
	}

	range(start, end) {
		let range = this.numArray.splice(start, end);
		return range;
	}

	mean() {
		// mean and average is the same thing
		let mean = this.sum() / this.numArray.length;
		return mean;
	}

	median() {
		let median = 0;
		let numsLen = this.numArray.length;

		this.numArray.sort();

		if (numsLen % 2 === 0) {
			median =
				(this.numArray[numsLen / 2 - 1] + this.numArray[numsLen / 2]) / 2;
		} else {
			median = this.numArray[(numsLen - 1) / 2];
		}

		return median;
	}

	mode(numbers) {
		var modes = [],
			count = [],
			i,
			number,
			maxIndex = 0;

		for (i = 0; i < numbers.length; i += 1) {
			number = numbers[i];
			count[number] = (count[number] || 0) + 1;
			if (count[number] > maxIndex) {
				maxIndex = count[number];
			}
		}

		for (i in count)
			if (count.hasOwnProperty(i)) {
				if (count[i] === maxIndex) {
					modes.push({ mode: Number(i), count: count[i] });
				}
			}

		return modes;
	}

	var(arr) {
		let len = 0;
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == "") {
			} else {
				len = len + 1;
				sum = sum + parseFloat(arr[i]);
			}
		}
		let v = 0;
		if (len > 1) {
			let mean = sum / len;
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] == "") {
				} else {
					v = v + (arr[i] - mean) * (arr[i] - mean);
				}
			}
			return v / len;
		} else {
			return 0;
		}
	}

	std(array) {
		return Math.sqrt(this.var(array));
	}

	freqDist(arr) {
		return arr.reduce((op, inp) => {
			op[inp] = op[inp] || 0;
			op[inp]++;
			return op;
		}, {});
    }
    
    describe() {
        const statsInfo = `${this.count()}\n${this.sum()}\n${this.min()}\n${this.max()}\n${this.mean()}\n${this.median()}\n${this.mode(ages)}\n${this.var(ages)}\n${this.std(ages)}`;

        return statsInfo;
    }

}

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

let statistics = new Statistics(ages);
console.log(statistics);

console.log("Count:", statistics.count()); // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range(4, 14)) // 14. Use only when necesary.
// *** I think that range maybe is another thing, like in this web: https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
console.log('Mean: ', statistics.mean()) // 29.76
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode(ages)) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var(ages)) // 17.5
console.log('Standard Deviation: ', statistics.std(ages)) // 4.2
console.log('Frequency Distribution: ', statistics.freqDist(ages)) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

console.log(statistics.describe());

// 2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo ,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
	constructor(firstName, lastName, coin) {
		this.firstName = firstName;
        this.lastName = lastName;
        this.coin = coin;
		this.incomes = [];
		this.expenses = [];
	}

	set addIncome(amount) {
		this.incomes.push(amount);
	}
	set addExpenses(cost) {
		this.expenses.push(cost);
	}

	totalIncome() {
		let totalIncome = 0;
		this.incomes.forEach((income) => (totalIncome += income[0]));
		return totalIncome;
	}
	totalExpense() {
		let totalExpense = 0;
		this.expenses.forEach((expense) => (totalExpense += expense[0]));
		return totalExpense;
	}

    accountBalance() {
        let accBalance = this.totalIncome() - this.totalExpense();
        return accBalance;
    }

	accountInfo() {
		const accInfo = `Full name: ${this.firstName} ${this.lastName}\nTotal income: ${this.totalIncome()} ${this.coin}\nTotal expenses: ${this.totalExpense()} ${this.coin}\nBalance: ${this.accountBalance()} ${this.coin}`;
		return accInfo;
	}
	
}

let myAccount = new PersonAccount("Antonio", "Romera", "euro");
console.log(myAccount);

myAccount.addIncome = [ 2000, "Dev job" ];
myAccount.addIncome = [ 1000, "Crypto investment" ];
myAccount.addIncome = [ 200, "Investment passive income" ];

myAccount.addExpenses = [ 350, "Food" ];
myAccount.addExpenses = [ 250, "Insurances" ];
myAccount.addExpenses = [ 200, "Water, electricity, gas" ];
myAccount.addExpenses = [ 150, "Clothes" ];
myAccount.addExpenses = [ 100, "Basic needs" ];
myAccount.addExpenses = [100, "Gym"];

console.log(myAccount.incomes);
console.log(myAccount.expenses);

console.log(myAccount.totalIncome());
console.log(myAccount.totalExpense());

console.log(myAccount.accountBalance());

console.log(myAccount.accountInfo());

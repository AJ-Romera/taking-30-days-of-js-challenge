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
		const nameAndAge = `The name of the animal is ${this.name} and he/she is ${this.age} years old.`;
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

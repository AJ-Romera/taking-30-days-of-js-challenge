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


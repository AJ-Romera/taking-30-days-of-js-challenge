// Exercises: Level 1

// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."

let pattern = /\d+/g;
let matches = text.match(pattern);
console.log(matches);

let totalAnnualIncome = Number(matches[0] * 12) + Number(matches[1]) + Number(matches[2] * 12);
console.log(`This person has a total annual income of ${totalAnnualIncome} euro`);

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

/*
    points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
    sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
    distance = 12
*/

let text2 = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction"

let points = text2.match(/-*\d+/g);
console.log(points);

let sortedPoints = points.sort(function (a, b) {
    return a - b;
});
console.log(sortedPoints); // They were already sorted, but the exercise is not well formulated.

let distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
console.log(`The distance between the two furthest particles is ${distance}`);

// 3. Write a pattern which identify if a string is a valid JavaScript variable

/*
    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True
*/

const pattern2 = /[F/f]irst[Nn]ame|[F/f]irst_[Nn]ame/;
const isValidVariable = (str) => {
	console.log(pattern2.test(str));
};
isValidVariable("first_name");
isValidVariable("first-name");
isValidVariable("firstname");

/* *** This is just a dumb example, a very nice regExp for this is found here:

https://gist.githubusercontent.com/mathiasbynens/6334847/raw/073a6f5df8bf0a218a5088f77ab194fe042a560c/ecmascript-6.js

Normally, the regExp used for this kind of purposes are really big. Fortunately there are plenty of good regExp in the internet, or even libraries... be smart, don´t reinvent the wheel.
*/


// Exercises: Level 2

// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

/*
    paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    console.log(tenMostFrequentWords(paragraph))

    [
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}]

    console.log(tenMostFrequentWords(paragraph, 10))

    [{word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1}
    ]
*/

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords(text, n) {

    let paragraph = text;
    
    let cleanParagraph = paragraph.replace(/\./g, ""); // The paragraph w/out points
    let wordsArray = cleanParagraph.split(/\s+/) // \s is space, + is one or more. This array contains all words of the paragraph including repeated words.
    //console.log(wordsArray);

    const wordsSet = new Set(wordsArray); // It removes all repeated words
    //console.log(wordsSet);

    const noRepeatedWords = [...wordsSet] // convert set to array. Now the new array does not contain repeated words.
    //console.log(noRepeatedWords);

    let wordsCount = []; 

    for (let i = 0; i < n; i++) {
        const count = wordsArray.filter((word) => word === noRepeatedWords[i]); // Filter/count repeated words
        wordsCount.push({ word: noRepeatedWords[i], count: count.length }); // Push the info we want (the word and the counter of the repetition of that word)
    }

    wordsCount.sort((a, b) => { // descending sort, showing the most repeated words first
        if (b.count < a.count) return -1;
        if (b.count > a.count) return 1;
        return 0;
    });

    return wordsCount; // returns the array
}

console.log(tenMostFrequentWords(paragraph, 10)); // Show the "n" most repeated words in the given text


// Exercises: Level 3

// 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

/*
console.log(cleanText(sentence))
I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
 ``` */

function cleanText(text) {

    let givenText = text;
    let cleanText = givenText.replace(/[^a-zA-Z ]/g, "");
    return cleanText;
    
}
console.log(cleanText(sentence));

let cleanSentence = sentence.replace(/[^a-zA-Z ]/g, ""); // Clean the sentence
console.log(tenMostFrequentWords(cleanSentence, 3)); // The three most frequent words of the clean sentence

// There is no need to make a new function, because we already have one for this purpose. Please remember: Don´t repeat functions, variables, blocks of code, etc. Always KISS (Keep It Simple Stupid) and keep the code as clean as possible.



// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

/*
 ```js
 console.log(mostFrequentWords(cleanedText))
 [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]
 ``` */

 // This is already done, nonsense exercise
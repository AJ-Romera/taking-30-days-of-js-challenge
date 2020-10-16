// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let lovePattern = /love/gi;
console.log(loveSentence.match(lovePattern).length); // 3

// 2. Use match() to count the number of all because in the following sentence: 'You cannot end a sentence with because because because is a conjunction'
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
let becausePattern = /because/gi;
console.log(becauseSentence.match(becausePattern).length); // 3

/* 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching' */
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let cleanSentence = sentence.replace(/%/g, '');
cleanSentence = cleanSentence.replace(/\$/g, '');
cleanSentence = cleanSentence.replace(/@/g, '');
cleanSentence = cleanSentence.replace(/&/g, '');
cleanSentence = cleanSentence.replace(/#/g, '');
cleanSentence = cleanSentence.replace(/;/g, '');

console.log(cleanSentence); // The sentence is now clean

// Now let´s find the most frequent word
// We haven´t learn loops yet in 30DaysofJavascript but it´s needed and I know how to do it anyway. 

var wordCounts = { };
var words = cleanSentence.split(/\b/);

for(var i = 0; i < words.length; i++)
    wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;

console.log(wordCounts); // 'I' and 'teaching' are the most frequent words by 3 times each.


// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month'
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' 

let numbers = text.match(/\d+/g);
console.log(numbers);

// Monthly income:
console.log(+numbers[0] + +numbers[1]/12 + +numbers[2]); // 20833,33 euro per month
// But the above is only valid if you can prorate the annual bonus, so it´s wrong...
let monthlyIncome = +numbers[0] + +numbers[2];
console.log(monthlyIncome); //20000 euro is his/her monthly income

// Annual income:
let annualIncome = (monthlyIncome * 12) + +numbers[1];
console.log(annualIncome); // 250000 euro annually, not bad :)
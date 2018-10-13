//variables used
var randomNumber;
var randomQuote;
var test;
var quote;
var h = 0;

//Array of Quotes, Authors, Citations, Years, and Categories as as applicable

var quotes = [
 {quote: "We can only learn to love by loving.",
  source: "Iris Murdoch",
  citation: "O Magazine",
  year: "February 2004",
  //category: "Thought Provoking"
},

 {quote: "We touch other peoples lives simply by existing.",
  source: "JK Rowling",
  citation: "Harvard Commencement Address",
  year: "2008",
  //category: "Thought Provoking"
},

 {quote: "To be proud of learning is the greatest ignorance.",
  source: "Jeremy Taylor",
  //category: "Thought Provoking"
 },

 {quote: "Everything that irritates us about others can lead us to an understanding of ourselves.",
  source: "Carl Jung",
  //category: "Thought Provoking"
 },

 {quote: "Eat a live toad the first thing in the morning and nothing worse will happen to you the rest of the day.",
  source: "Unknown",
  //category: "Humor"
 },

 {quote: "Life was so much easier when I was doing pizza slime galaxy videos.",
  source: "Shane Dawson",
  //citation: "Twitter",
  year: "2018",
  //category: "Humor"
},

 {quote:"You are not weird. You are not stupid. You do not need to try harder. You are not a failed version of normal. You are different, you are beautiful, and you are not alone.",
  source: "Jessica McCabe",
  citation: "Failing at Normal: An ADHD Success Story",
  year: "2017",
  //category: "Inspirational"
},

 {quote:"Even if you're on the right track, you'll get run over if you just sit there.",
  source: "Will Rodgers",
  //category: "Humor"
 },

 {quote: "A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.",
  source: "Bob Dylan",
  //category: "Thought Provoking"
 },

 {quote: "I like to play blackjack. I'm not addicted to gambling, I'm addicted to sitting in a semi-circle.",
  source: "Mitch Hedgeburg",
  //category: "Humor"
 },
];

// get random quote randomly pulls a quote & information from the quotes array

function getRandomQuote(array) {

//get a random number to pull an object from the array
//Between 0 and array.length
for (var props in array) {
var betweenNumberUpper = array.length;
randomNumber = Math.floor(Math.random() * betweenNumberUpper);
randomQuote = array[randomNumber];
//use random number to pull an object from the array
}; return randomQuote;
};

// Create the printQuote funtion and name it printQuote

function printQuote() {
quote = getRandomQuote(quotes);
var objectArray = [];
for (var key in quote) {
  objectArray.push(quote[key]);
};
console.log(objectArray[1]);
console.log(objectArray);
//  objectQuote = getRandomQuote(quotes);
/*for (var key in objectQuote) {
console.log(key);
console.log(objectQuote[key]);
document.getElementsByClassName(key)[0].innerHTML = objectQuote[key];

};
*/  //connecting elements to HTML
  //document.getElementsByClassName('quote')[0].innerHTML = 'Hi There';

};




// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//variables used
var randomNumber;
var randomQuote;


//Array of Quotes, Authors, Citations, Years, and Categories as as applicable

var quotes = [
 {quote: "We can only learn to love by loving.",
  speaker: "Iris Murdoch",
  source: "O Magazine",
  year: "February 2004",
  category: "Thought Provoking"
},

 {quote: "We touch other peoples lives simply by existing.",
  speaker: "JK Rowling",
  source: "Harvard Commencement Address",
  year: "2008",
  category: "Thought Provoking"
},

 {quote: "To be proud of learning is the greatest ignorance.",
  speaker: "Jeremy Taylor",
  category: "Thought Provoking"
 },

 {quote: "Everything that irritates us about others can lead us to an understanding of ourselves.",
  speaker: "Carl Jung",
  category: "Thought Provoking"
 },

 {quote: "Eat a live toad the first thing in the morning and nothing worse will happen to you the rest of the day.",
  speaker: "Unknown",
  category: "Humor"
 },

 {quote: "Life was so much easier when I was doing pizza slime galaxy videos.",
  speaker: "Shane Dawson",
  source: "Twitter",
  year: "2018",
  category: "Humor"
},

 {quote:"You are not weird. You are not stupid. You do not need to try harder. You are not a failed version of normal. You are different, you are beautiful, and you are not alone.",
  speaker: "Jessica McCabe",
  source: "Failing at Normal: An ADHD Success Story",
  year: "2017",
  category: "Inspirational"
},

 {quote:"Even if you're on the right track, you'll get run over if you just sit there.",
  speaker: "Will Rodgers",
  category: "Humor"
 },

 {quote: "A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.",
  speaker: "Bob Dylan",
  category: "Thought Provoking"
 },

 {quote: "I like to play blackjack. I'm not addicted to gambling, I'm addicted to sitting in a semi-circle.",
  speaker: "Mitch Hedgeburg",
  category: "Humor"
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
console.log(getRandomQuote(quotes));
// Create the printQuote funtion and name it printQuote



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

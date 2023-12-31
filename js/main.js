var quotes = [
  `Be yourself; everyone else is already taken
_
Oscar Wilde`,
  `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
_
 Marilyn Monroe
`,
  `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
_
Albert Einstein
`,
  `"So many books, so little time."
_
Frank Zappa
`,
  `"A room without books is like a body without a soul."
_
Marcus Tullius Cicero
`,
  `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
_
Bernard M. Baruch
`,
  `"You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth."
_
William W. Purkey
`,
  `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."
_
Dr. Seuss
`,
  `"You only live once, but if you do it right, once is enough."
_
 Mae West
`,
  `"Be the change that you wish to see in the world."
_
Mahatma Gandhi
`,
  `"In three words I can sum up everything I've learned about life: it goes on."
_
Robert Frost
`,
  `"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."
_
 J.K. Rowling, Harry Potter and the Goblet of Fire
`,
  `"Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend"
_
Albert Camus
`,
  `"If you tell the truth, you don't have to remember anything."
_
Mark Twain
`,
  `"Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ."
_
C.S. Lewis, The Four Loves
`,
  `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
_
 Maya Angelou
`,
];
function newQuote(){
    var newIndex = Math.round(Math.random() * 10)
    var newword = quotes[newIndex]
    document.getElementById("Quote").innerHTML=newword
}
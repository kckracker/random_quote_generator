const quoteButton = document.querySelector('#load-quote')
/* Creating array to store objects containing quote, source, citation, year, and tags, where available.
*/
let quotes = [
    {
    quote: ` I wish it need not have happened in my time, said Frodo. So do I, said Gandalf, and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.`,
    source: 'J.R.R. Tolkien',
    citation:'The Lord of the Rings',
    year: 1954,
    tags:`'adventuring' 'death' 'time'`
    },
    {
    quote: `To know what would have happened, child? said Aslan. No. Nobody is ever told that.`,
    source: 'C.S. Lewis',
    citation:'Prince Caspian',
    year: 1951
    },
    {
    quote: `Never let your sense of morals prevent you from doing what is right.`,
    source: 'Isaac Asimov',
    citation:'The Foundation',
    year: 1951,
    tags:`'wisdom' 'inspirational' 'philosophy'`        
    },
    {
    quote: `I’d rather be myself, he said. Myself and nasty. Not somebody else, however jolly.`,
    source: 'Alduous Huxley',
    citation:'Brave New World',
    year: 1932      
    },
    {
    quote: ` “There is no greatness where there is not simplicity, goodness, and truth.” `,
    source: 'Leo Tolstoy',
    citation:'War and Peace',
    year: 1867,
    tags:`'goodness' 'simplicity' 'truth'`         
    }
];
// Testing array of objects prints correctly in console
//console.log(quotes);

/*Adding function to generate random number, assign to a variable
and return the variable amount.
*/

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length );
    return randomNumber;
}
// Testing getRandomQuote function in console
// console.log(getRandomQuote());


/* Creating new function to store 3 random numbers.
Placing variable inside function to store array of 3 random numbers to place inside rgb value later.
*/
function randomColor () {
    let color = []
    for (let i=0; i<3; i++)
    color.push(Math.floor(Math.random(i) * 256));
    return color;
}

// Creating timer variable to store interval method globally. Resetting method syntax discovered at https://www.w3schools.com/jsref/met_win_cleartimeout.asp
let timer;

// Utilizing the setInterval() method for 5 seconds (5000 milliseconds) to automatically re-run the function.
function quoteTimer(){
   timer = setInterval(printQuote, 5000);
}
function resetTimer(){
    clearInterval(timer);
}
/* Building function to call random quote based on quotes array.
Adding variable inside function to store value of getRandomQuote() in order to ensure object properties align correctly.
*/
function printQuote () {
    resetTimer();
    let randomObject = getRandomQuote();
    let quote = `
    <p class="quote"> ${quotes[randomObject].quote}
    <p class="source"> ${quotes[randomObject].source}
    `;

    // Creating conditional statement to verify properties exist and print

    if (quotes[randomObject].citation ) {
        quote += `
            <span class="citation"> ${quotes[randomObject].citation} <span>
        `;
    } 
    if ( quotes[randomObject].year ) {
        quote += `
        <span class="year"> ${quotes[randomObject].year} <span>
        `;
    }
    if ( quotes[randomObject].tags ) {
        quote += `
        <span class="tags"> ${quotes[randomObject].tags} <span>
        `;
    }
    /* Added class named "color-change" to body tag in order to more easily target the background color.
    Selecting the style and name of the property I want to change. 
        *I read of this method at https://www.w3schools.com/js/js_htmldom_css.asp which provided some example of how this may work for my purposes here.*
    Assigning the rgb of background color the value of the randomColor function created earlier.
    */
    document.getElementById('color-change').style.backgroundColor = `rgb(${randomColor()})`;
    document.getElementById('quote-box').innerHTML = quote;
    quoteTimer();
}

//Included code for refreshing quote by clicking button
document.getElementById('load-quote').addEventListener("click", () => {
    printQuote();
    },
     false);

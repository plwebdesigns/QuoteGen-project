// Array for 5 objects with with 2 keys, quote and source
var quotes =[
    {quote: "Success is not final, failure is not fatal; it is the courage to continue that counts.", source: "Winston Churchill"},
    {quote: "Love means to commit yourself without garantee.", source: "Anne Campbell"},
    {quote: "You must do the things you think you cannot do.", source: "Eleanor Roosevelt"},
    {quote: "Books are the plane, and the train, and the road. They are the destination, and the journey. They are home.", source: "Anne Quindlen", 
    citation: "How Reading Changed My Life"},
    {quote: "If we ever forget that we are One Nation Under God, then we will be a nation gone under.", source: "Ronald Reagan", year: "1984"}
]

function getRandomQuote() {
    // get random number from 0 to length of quotes array
    var ranNumber = Math.floor(Math.random() * quotes.length);
    
    // returns random quotes object
    return quotes[ranNumber];
}

function printQuote(){
    
    var randQuote = getRandomQuote(); // variable to store random quotes object
    var message = ''; // variable for html and quote properties


    // test if object contains either citation or year properties
    if ( randQuote.hasOwnProperty('citation')) {
        if ( randQuote.hasOwnProperty('year')) {
            // compose html and object properties to be displayed w/citation and year
            message = '<p class="quote">' + randQuote.quote  + '</p>';
            message += '<p class="source">' + randQuote.source + '<span class="citation">' + randQuote.citation + '</span>';
            message += '<span class="year">' + randQuote.year + '</span></p>';

        } else {
            // compose html and object properties to be displayed with citation
            message = '<p class="quote">' + randQuote.quote  + '</p>';
            message += '<p class="source">' + randQuote.source + '<span class="citation">' + randQuote.citation + '</span></p>'
        }
    } else if ( randQuote.hasOwnProperty('year')) {
        // compose html and object properties to be displayed with year
        message = '<p class="quote">' + randQuote.quote  + '</p>';
        message += '<p class="source">' + randQuote.source + '<span class="year">' + randQuote.year + '</span></p>';

    } else {
        // compose html and object properties to be displayed w/o citation or year
        message = '<p class="quote">' + randQuote.quote  + '</p>';
        message += '<p class="source">' + randQuote.source + '</p>';
    }
    

    //display html plus random quote and source
    document.getElementById('quote-box').innerHTML = message;

}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


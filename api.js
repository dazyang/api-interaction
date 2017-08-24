// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var quoteContainer = document.getElementById("receiveQuote")
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var requestProverb = new XMLHttpRequest();
    requestProverb.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs")
    requestProverb.onload= function(){
        //onload();What should happen when the data is loaded.
            var responseGet = JSON.parse(requestProverb.responseText);
            render(respondGet);
    }
    requestProverb.send();
});

//The function below is going to add HTML to the page.
function render(data){
    quoteContainer.insertAdjacentHTML('beforeend', "Hello")

}


//console.log(xhr.status);
//console.log(xhr.statusText);

// var newProverb = requestProverb.responseText;
// var proverbSource =
// var proverbTranslation = newProverb.translation;

// console.log(newProverb);
// console.log(proverbSource);
// console.log(proverbTranslation);

//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var sourceContainer = document.getElementById("receiveProverb")
var transContainer = document.getElementById("transProverb")
var Btn = document.getElementById("pressBtn");

Btn.addEventListener("click", function(){
    var getProverb = new XMLHttpRequest();
    getProverb.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs")
    getProverb.onload = function(){
        //onload();What should happen when the data is loaded.
     var newProverb = JSON.parse(getProverb.responseText);
     render(newProverb);
     console.log(newProverb);
    };
    getProverb.send();
});

//The function below is going to add HTML to the page.
function render(data){
     var htmlString = "";
     for (i = 0; i < data.length; i++){
       htmlString += "<p>" + data[i].source + ".</p>";
    }
     sourceContainer.insertAdjacentHTML('beforeend', htmlString);
}

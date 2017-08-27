// //var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var sourceContainer = document.getElementById("receiveProverb");
var transContainer = document.getElementById("transProverb");
var Btn = document.getElementById("pressBtn");

Btn.addEventListener("click", function(){
    var getProverb = new XMLHttpRequest();
    getProverb.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs")
    getProverb.onload = function(){
     //onload();What should happen when the data is loaded.
     var newProverb = JSON.parse(getProverb.responseText);
     console.log(newProverb);
     sourceContainer.innerHTML = newProverb.source;
     transContainer.innerHTML = newProverb.translation;

    };
    getProverb.send();
});

// //The function below is going to add HTML to the page.
// function render(data){
//      var Maori = "";
//      var English = "";
//
//      for (i = 0; i < data.length; i++){
//        Maori = data[i].source;
//        English = data[i].translation;
//     }
//
//      sourceContainer.insertAdjacentHTML('beforeend', Maori);
//      transContainer.insertAdjacentHTML('beforeend', English);
// }

// /* Aaron's code example */
// function getProverb() {
//   $(document).ready(function() {
//     $.ajax({
//         url: "https://eda-te-reo.herokuapp.com/api/proverbs"
//     }).then(function(data) {
//        $('.receiveProverb').text(data.source);
//        $('.transProverb').text(data.translation);
//   	 });
//   });
// }


/* ----- jQuery Ajax below----- */

// $(function (){
//
//     var $orders = $('#receiveQuote');
//
//     $.ajax({
//         type: 'GET',
//         url: "https://eda-te-reo.herokuapp.com/api/proverbs",
//         success:function(orders) {
//             //console.log('success', data)
//             $.each(orders, function(i, orders){
//                 $orders.append('Hello')
//             }
//         };
//     });
// });

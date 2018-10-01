$(document).ready(function(){
       $.getJSON("romaji-hiragana.json", function (json) {
              document.getElementById("romaji").innerHTML = json;
       });
});

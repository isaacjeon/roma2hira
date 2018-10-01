var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "romaji-hiragana.js",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

document.getElementById("button").onclick = function(){
    document.getElementById("hiragana").defaultValue = json;
};

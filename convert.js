document.getElementById("button").onclick = function(){convert()};

function convert(){
    var rstr = document.getElementById("romaji").value;
    var hstr = "";
    while (rstr.length > 0) {
        var first = rstr.charAt(0);
        var second = rstr.charAt(1);
        var third = rstr.charAt(2);        
        var rstr = rstr.slice(1);
        if (isVowel(first) || first == ".") {
            hstr += eval("r2h." + first);
            continue;
        }
        var temp = eval("r2h." + first + second);
        if (temp != undefined) {
            rstr = rstr.slice(1);
            hstr += temp;
        } else if (first == 'n') {
            hstr += eval("r2h." + first);
        } else if (first == second) {
            hstr += "っ";
        }
        else {
            temp = eval("r2h." + first + second + third);
            if (temp != undefined) {
                rstr = rstr.slice(1);
                hstr += temp;
            } else {
                hstr += first;
            }
        }
    }
    document.getElementById("hiragana").value = hstr;
}

function isVowel(x){
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
        return true;
    else
        false;
}

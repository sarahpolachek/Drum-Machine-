function play(str) {
    if (str === "q" || str === "Q") {
        document.getElementById('display').innerHTML = "Acoustic Kick";
    } else if (str === "w" || str === "W") {
        document.getElementById('display').innerHTML = "Kes Kick";
    } else if (str === "e" || str === "E") {
        document.getElementById('display').innerHTML = "Loose Kick";
    } else if (str === "a" || str === "A") {
        document.getElementById('display').innerHTML = "Cymbals Crash";
    } else if (str === "s" || str === "S") {
        document.getElementById('display').innerHTML = "Cymbals Multi Crash";
    } else if (str === "d" || str === "D") {
        document.getElementById('display').innerHTML = "Cymbals Trash";
    } else if (str === "z" || str === "Z") {
        document.getElementById('display').innerHTML = "Acoustic Snare";
    } else if (str === "x" || str === "X") {
        document.getElementById('display').innerHTML = "Snare Piccolo Sidestick";
    } else if (str === "c" || str === "C") {
        document.getElementById('display').innerHTML = "Snare Tama Wood";
    }


    var audio = document.getElementById(str);
    audio.play();
}

window.document.onkeyup = function (event) {
    let keystroke = event.key
    if (keystroke === "q" || keystroke === "Q") {
        play("Q");
    } else if (keystroke === "w" || keystroke === "W") {
        play("W");
    } else if (keystroke === "e" || keystroke === "E") {
        play("E");
    } else if (keystroke === "a" || keystroke === "A") {
        play("A");
    } else if (keystroke === "s" || keystroke === "S") {
        play("S");
    } else if (keystroke === "d" || keystroke === "D") {
        play("D");
    } else if (keystroke === "z" || keystroke === "Z") {
        play("Z");
    } else if (keystroke === "x" || keystroke === "X") {
        play("X");
    } else if (keystroke === "c" || keystroke === "C") {
        play("C");
    }
}

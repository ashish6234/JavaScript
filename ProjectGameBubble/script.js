function MakeBubble() {
    var clutter = "";

    for (var i = 1; i < 70; i++) {
        var randomNumb = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${randomNumb} </div>`;

    }

    document.querySelector("#pbotm").innerHTML = clutter;
}
var timer =60;

function runTime() {
    setInterval(function() {
        timer--
    }, 1000);
}

MakeBubble();
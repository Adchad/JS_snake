
var mouseIsDown = false
var great_div_DOM = document.querySelector('.greatdiv');


var xpadded,ypadded;

let matriceStylee = Array(60).fill().map(() => Array(25).fill(""));

var offsetx = 100;
var offsety = 100;
var currentColor = "black"

for (let x = 0; x < matriceStylee.length; x++) {
    for (let y = 0; y < matriceStylee[0].length; y++) {
        xpadded = ("00" + x).slice (-3);
        ypadded = ("00" + y).slice (-3);
        great_div_DOM.innerHTML += "<div class=\"insidediv\" id=\"indiv-"+ xpadded +"-"+ ypadded + "\"></div>\n";
        document.querySelector("#indiv-"+ xpadded +"-"+ ypadded).style.left = x*23 + offsetx + "px";
        document.querySelector("#indiv-"+ xpadded +"-"+ ypadded).style.top = y*23 + offsety + "px";
           
    }

}

great_div_DOM.addEventListener('mousemove',drawOnover);
great_div_DOM.addEventListener('click',drawOnClick);
great_div_DOM.addEventListener('drag', function(){mouseIsDown = false});
great_div_DOM.addEventListener('mousedown', function(){mouseIsDown = true});
great_div_DOM.addEventListener('mouseup', function(){mouseIsDown = false});



document.getElementById("btn-1").addEventListener('click', function() {
    currentColor = "chocolate";
});

document.getElementById("btn-2").addEventListener('click', function() {
    currentColor = "aliceblue";
});

document.getElementById("btn-3").addEventListener('click', function() {
    currentColor = "firebrick";
});
document.getElementById("btn-4").addEventListener('click', function() {
    currentColor = "white";
});
document.getElementById("btn-5").addEventListener('click', function() {
    currentColor = "black";
});

document.querySelector(".btn-erase").addEventListener('click',erase);

function drawOnClick(event){
    var targetId = event.target.id;
    var xa,ya;
    if(targetId.slice(0,5) === "indiv"){ 
              
        document.getElementById(targetId).style.backgroundColor = currentColor;

        xa = targetId.slice(6,9) - 0;
        ya = targetId.slice(10,13) - 0;
        matriceStylee[xa][ya] = currentColor;

    }

}

function drawOnover(event){
    var targetId = event.target.id;
    var xa,ya;
    if(targetId.slice(0,5) === "indiv"){
        if(mouseIsDown ){ 
            document.getElementById(targetId).style.backgroundColor = currentColor;
            xa = targetId.slice(6,9)-0;
            ya = targetId.slice(10,13)-0;
            matriceStylee[xa][ya] = currentColor;

        }
    }
}

function erase(){
    matriceStylee = Array(40).fill().map(() => Array(20).fill(""));
    document.querySelectorAll('.insidediv').forEach(item => { item.style.backgroundColor = "white"  ;});
   
}

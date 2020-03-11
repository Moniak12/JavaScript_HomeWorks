/*document.write(12332123123123)

document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelector('className');
document.querySelectorAll();*/

var editQuad = document.getElementById("quad");

function newColor(){
    if(editQuad.style.backgroundColor == "red"){
        editQuad.style.backgroundColor = "green";
    } else {
        editQuad.style.backgroundColor = "red";
    }
}

var allLinks = document.links; //all links from site

for(var i = 0; i < 8; i++){
    var textLink = document.createTextNode(allLinks[i].href);
    var newBreak = document.createElement("br");
    document.body.appendChild(textLink);
    document.body.appendChild(newBreak);
}


/*----Firs_HomeWork----*/

var main = document.getElementById("threebtns");
var first = document.getElementById("btn1");
var second = document.getElementById("btn2");
var third = document.getElementById("btn3");

function changeColor(){
main.style.backgroundColor = "red";
first.style.backgroundColor = "blue";
second.style.backgroundColor = "pink";
third.style,backgroundColor = "black";
}

function changeStyleDiv(){
    document.getElementById('btn2').style.backgroundColor = 'green';
 }
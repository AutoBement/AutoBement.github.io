var randomKey;
var numberEnter;

window.onload = function(){newNumber();};
window.setInterval(function(){newNumber();}, 650);

function newNumber() {
  var label = document.getElementById("out");
  randomKey = 97 + Math.floor(Math.random() * 26);
  numberEnter = Math.floor(Math.random() * 10);
  label.innerHTML = "Press " + String.fromCharCode(randomKey) + " to enter " + numberEnter;
}

function checkKeyPress(e){
  var keyNum;
  if(window.event) {keyNum = e.keyCode;}
  else if(e.which){keyNum = e.which;}
  if (keyNum == randomKey) {
    var current = document.getElementById("phone").innerHTML;
    document.getElementById("phone").innerHTML = current + numberEnter;
  }
  else {
    alert("Incorrect key pressed. Try again.")
  }
}
function submitNumber() {
    alert("ERROR TRY AGAIN");
    document.getElementById("phone").innerHTML = "";
}
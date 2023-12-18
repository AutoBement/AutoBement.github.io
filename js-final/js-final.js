// Defining variables
var keyRand;
var numRand;

window.onload = function(){newNum();};
window.setInterval(function(){newNum();}, 250);

function newNum() {
  // Creating a variable for the output 
  var stringOutput = document.getElementById("output");
  //  Math for the random key to press
  keyRand = 97 + Math.floor(Math.random() * 26);
  // Math for the random number
  numRand = Math.floor(Math.random() * 10);
  // Combining everything together 
  stringOutput.innerHTML = "Press " + String.fromCharCode(keyRand) + " to enter " + numRand;
}


function checkKeyPress(e){
  var keyNum;

  if(window.event) {keyNum = e.keyCode;}
  else if(e.which){keyNum = e.which;}

  if (keyNum == keyRand) {
    var maximum = 10;
    var current = document.getElementById("phone").innerHTML;
    document.getElementById("phone").innerHTML = current + numRand;
    var currentNumber = document.getElementById("phone").innerHTML;
    if (currentNumber.length > maximum) {
      var length = currentNumber.substring(0,10);
      document.getElementById("phone").innerHTML = length;
      alert("You have 10 digits. Please submit your number.")
    }

  }
  else {
    alert("Incorrect key pressed. Try again.")
  }
}


function submitNumber() {
  alert("Thank you for submiting your number!");
  document.getElementById("phone").innerHTML = "";
}
function clearNumber() {
  alert("Number cleared.");
  document.getElementById("phone").innerHTML = "";
}

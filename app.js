var userName = prompt("What is your name?");
var counter = 0;

var ans1 = prompt("Is my first name Frazier?").toLowerCase();
if (ans1 === 'yes'){
  ans1 = 'y';
} else if (ans1 === 'no'){
  ans1 = 'n';
}
console.log("User answer to Q1: " + ans1);
if (ans1 === "y"){
  alert("Good job " + userName + "!");
  counter++;
} else {
  alert("Wrong! My name actually is Frazier. Remember that " + userName);
}



var ans2 = prompt("Is my favorite color blue?").toLowerCase();
if (ans2 === 'yes'){
  ans2 = 'y';
} else if (ans1 === 'no'){
  ans2 = 'n';
}
console.log("User answer to Q2: "+ ans2);
if (ans2 === 'n'){
  alert("Good job " + userName + "! My favorite color is green.");
  counter++;
} else {
  alert("Wrong! My favorite color is green. Remember that " + userName);
}



var ans3 = prompt("Was I born in Washington?").toLowerCase();
if (ans3 === 'yes'){
  ans3 = 'y';
} else if (ans1 === 'no'){
  ans3 = 'n';
}
console.log("User answer to Q3: "+ ans3);
if (ans3 === "n"){
  alert("Good job " + userName + "! I was born in New York.");
  counter++;
} else {
  alert("Wrong! I was born in New York. Remember that " + userName);
}




var guessed = false;
var ans4;
var numToGuess = Math.floor(Math.random()*5 + 1);
console.log("User answer to Q4: "+ ans4);
while (guessed === false) {
  ans4 = Number(prompt("What number between 1 and 5 am I thinking of?"));

  if (ans4 === numToGuess){
    alert("Good job " + userName + "!");
    counter++;
    guessed = true;
  } else if(ans4 >= numToGuess) {
    alert("Too high " + userName + "! Guess again.");
  } else if (ans4 <= numToGuess) {
    alert("Too low " + userName + "! Guess again.");
  } else {
    alert("Critical error!! " + userName + " evacuate immediately!");
  }
};

alert('Congratulations ' + userName + ' you got ' + counter + ' questions correct!');

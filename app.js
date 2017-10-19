'use strict';
// Main informational
alert('HI! Welcome to my portfolio webpage. You will learn a lot about me here but just to make things a little bit more fun I wanted to add a guessing game. I will ask you a few questions about me and just answer yes or no (or Y/N). Have fun!');

//Ask the user for their name

//changing var viewer into a function

function question(questionTxt) {
  var result = prompt(questionTxt);
  console.log('input:', result);
  return result;
}

var viewer;
viewer = question('Before we get started. What\'s your name?');
alert('Thanks, ' + viewer + '!');

// Question 1
var hat;
hat = question(viewer + ', does Jeremy own a cool deadpool hat?');
hat = hat.toUpperCase();

if (hat === 'YES' || hat === 'Y'){
  alert('Damn right he does... Kappa. Good start, ' + viewer + '!');
} else {
  alert('That\'s not right... I\'m pretty sure he does.');
}

// Question 2
var games = prompt(viewer + ', is Jeremy\'s favorite game league of legends');
games = games.toUpperCase();
console.log('League of legends fan: ', games);

if (games === 'YES' || games === 'Y'){
  alert('Yes sir... You so right.');
} else {
  alert('That\'s not right... I\'m pretty sure he loves that junk.');
}

// Question 3
var awesome = prompt(viewer + ', is Jeremy Awesome?');
awesome = awesome.toUpperCase();
console.log('Jeremy awesome: ', awesome);

if (awesome === 'YES' || awesome === 'Y'){
  alert('HECK YES!');
} else {
  alert('Oh... I\'m sorry you feel that way');
}

// Question 4
var gf = prompt(viewer + ', does Jeremy have a beautiful girlfriend?');
gf = gf.toUpperCase();
console.log('Girlfriend: ', gf);

if (gf === 'YES' || gf === 'Y'){
  alert('Yes... Yes he does.');
} else {
  alert('You know he does...');
}

// Question 5
var home = prompt(viewer + ', does Jeremy live in Seattle?');
home = home.toUpperCase();
console.log('Home: ', home);

if (home === 'YES' || home === 'Y'){
  alert('Nope, sorry. I could never deal with all the buses in seattle.');
} else {
  alert('You right you right...');
}

//End notification to user
alert('Well it was fun playing with you but that\'s all I got for now. I hope you enjoyed getting to know me and if you want to know more, feel free to read my portfolio or reach out in person. I love meeting new people and hope I get to know you all very well before class ends. Click on my sections to learn more.');

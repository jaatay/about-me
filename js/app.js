'use strict';

var startButton = document.getElementById('startButton');

var playMe = function() {
  alert('Wait...ok ready!');
  var userName = prompt('What is your name?');
  alert(`Welcome, ${userName}, to the Singularity.`);
  alert('Err...I meant to say, some fun questions.');
  alert('Please answer all questions with yes/no, or y/n.');

  var answer1 = prompt('Are you ready?').toLowerCase().trim();

  if (answer1 === 'yes' || answer1 === 'y') {
      alert(`Congratulations, ${userName}, one question down. 4 more to go!`);
  } else if (answer1 === 'no' || answer1 === 'n') {
    alert(`No time like the present, ${userName}, let's keep going, anyways.`);
  } else { 
    alert(`...hmm...tell you what, ${userName}, let's just get this over with...`);
  }

  var answer2 = prompt('Is 42 the answer to life, love, and everything?').toLowerCase().trim();

  if (answer2 === 'yes' || answer2 === 'y') {
    alert(`Truly, ${userName}, you are wise. Thanks for all the fish.`);
  } else if (answer2 === 'no' || answer2 === 'n') {
    alert(`Clearly, you have not been listening to dolphins, ${userName}.`);
  } else {
    alert(`${userName}...I mean, these are yes or no questions. Focus!`);
  }

  var answer3 = prompt('Semper Fi').toLowerCase().trim();

  if (answer3 === 'yes' || answer3 === 'y') {
    alert('Oorah/yut!');
  } else if (answer3 === 'no' || answer3 === 'n') {
    alert(`Have faith, ${userName}`);
  } else {
    alert(`Work on it, ${userName}`);
  }

  var answer4 = prompt('Am I human?').toLowerCase().trim();

  if (answer4 === 'yes' || answer4 === 'y') {
    alert('Good. We have finally made a convincing organic simulation. Gluten-free, no less.');
  } else if (answer4 === 'no' || answer4 === 'n') {
    alert(`Unfortunately you are correct, ${userName}.`);
  } else {
    alert(`Are we even speaking the same language, ${userName}? Actually, we might not be, since I get my language libraries from Pirate Bay.`);
  }

  var answer5 = prompt('Souls that have toil\'d, and wrought, and thought with me...?').toLowerCase().trim();

  if (answer5 === 'yes' || answer5 === 'y') {
    alert('...that ever with a frolic welcome took the thunder and the sunshine...');
  } else if (answer5 === 'no' || answer5 === 'n') {
    alert(`...come, my friend ${userName}, it is not too late to seek a newer world...`);
  } else {
    alert('...we are not that strength which in olden days moved earth and heaven. That which we are, we are.');
  }
};

startButton.addEventListener('click', function() {
  playMe();
});
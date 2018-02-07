'use strict';

var startButton = document.getElementById('startButton');
var bioButton = document.getElementById('bioButton');
var eduButton = document.getElementById('eduButton');
var goalButton = document.getElementById('goalButton');

var userName = prompt('What is your name?');
var putUserName = document.getElementById('putUserName');
putUserName.innerHTML = `Welcome, ${userName}!`;


var playMe = () => {
  alert('One moment please...');
  alert(`Good to meet you, ${userName}.`);
  alert('Here are some questions about me. Do your best to guess.');
  alert('Please answer all questions with yes/no, or y/n.');

  var answer1 = prompt('Are you ready?').toLowerCase().trim();

  if (answer1 === 'yes' || answer1 === 'y') {
    alert(`Congratulations, ${userName}, one question down. 4 more to go!`);
  } else if (answer1 === 'no' || answer1 === 'n') {
    alert(`No time like the present, ${userName}, let's keep going, anyways.`);
  } else {
    alert(`...hmm...tell you what, ${userName}, let's just get this over with...`);
  }
  console.log('User was asked if they were ready, and answered with ' + answer1);

  var answer2 = prompt('Is 42 the answer to life, love, and everything?').toLowerCase().trim();

  if (answer2 === 'yes' || answer2 === 'y') {
    alert(`Truly, ${userName}, you are wise. Thanks for all the fish.`);
  } else if (answer2 === 'no' || answer2 === 'n') {
    alert(`Clearly, you have not been listening to dolphins, ${userName}.`);
  } else {
    alert(`${userName}...I mean, these are yes or no questions. Focus!`);
  }
  console.log('User was asked the answer to The Question, and they responded with ' + answer2);

  var answer3 = prompt('Semper Fi?').toLowerCase().trim();

  if (answer3 === 'yes' || answer3 === 'y') {
    alert('Oorah!');
  } else if (answer3 === 'no' || answer3 === 'n') {
    alert(`Have faith, ${userName}`);
  } else {
    alert(`Work on it, ${userName}`);
  }
  console.log('User was shown latin for always faithful, and responded with ' + answer3);

  var answer4 = prompt('Am I human?').toLowerCase().trim();

  if (answer4 === 'yes' || answer4 === 'y') {
    alert('Good. We have finally made a convincing organic simulation. Gluten-free, no less.');
  } else if (answer4 === 'no' || answer4 === 'n') {
    alert(`Unfortunately you are correct, ${userName}.`);
  } else {
    alert(`Are we even speaking the same language, ${userName}? Actually, we might not be, since I get my language libraries from Pirate Bay.`);
  }
  console.log('The user was asked to answer whether or not they thought I was human, and responded with ' + answer4);

  var answer5 = prompt('Is my favorite poem written by Rudyard Kipling?').toLowerCase().trim();

  if (answer5 === 'yes' || answer5 === 'y') {
    alert('No, my favorite poem was written by Tennyson.');
  } else if (answer5 === 'no' || answer5 === 'n') {
    alert(`Correct, ${userName}, it is not too late to seek a newer world...`);
  } else {
    alert('Stastically, you had a 50% chance to get this right and still managed to be an outlier. Well played.');
  }
  console.log('The user was asked if my favorite poem was written by Kipling, and responded with ' + answer5);
};

startButton.addEventListener('click', () => {
  playMe();
});

bioButton.addEventListener('click', () => {
  alert('Beyond the path of the outmost sun, through utter darkness hurled, farther than any comet flared, or vagrant stardust swirled...lived such as fought and sailed and ruled and loved...and made our world. -Kipling');
  alert(`Very well, ${userName}. I was born on Winter Solstice in 1981. I'm a native of Portland, Oregon. The era of Bon Jovi was a blast, but I don't remember because I spent most of it in diapers. I still did my best to Keep Portland Wierd, diapers or not. Later on I joined the Marine Corps and had many adventures. Afterwards, I became an Emergency Medical Technician before switching to software development.`);
});

eduButton.addEventListener('click', () => {
  alert('And this gray spirit yearning in desire, to follow knowledge like a sinking star, beyond the utmost bound of human thought. -Tennyson');
  alert(`I am a lifelong learner, ${userName}. I have a BS in Political Science from Oregon State University, and a Emergency Medical Technician certificate from Kapiolani Community College, Hawaii. Most recently I was accepted into a graduate Nursing program at the University of Hawaii - Manoa, until the opportunity to attend Code Fellows and pursue my passion for coding presented itself.`);
});

goalButton.addEventListener('click', () => {
  alert('The devil\'s hands have been busy. What is it? -John Connor');
  alert(`This is the most exciting part, ${userName}. I want to become a full-stack software developer. I want to work with amazing people, to build amazing things. I want to dream.`);
});
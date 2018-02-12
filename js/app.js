
'use strict';

var startButton = document.getElementById('startButton');
var bioButton = document.getElementById('bioButton');
var eduButton = document.getElementById('eduButton');
var goalButton = document.getElementById('goalButton');

var userName = prompt('What is your name?');
var putUserName = document.getElementById('putUserName');
putUserName.innerHTML = `Welcome, ${userName}!`;

var playMe = () => {

  var scoreCount = 0;
  var triesLeft = 4;
  var triesLeftState = 6;
  var tryAgain = true;
  var rightAnswers = ['liquid' , 'solid'];

  alert('One moment please...');
  alert(`Good to meet you, ${userName}.`);
  alert('Here are 7 questions about me. Do your best to guess the correct answer!');
  alert('Also, please answer all questions with yes/no, or y/n, except questions 6 and 7.');

  function question1 () {

    var answer1 = prompt('Are you ready?').toLowerCase().trim();

    if (answer1 === 'yes' || answer1 === 'y') {
      alert(`Congratulations, ${userName}, one question down. 6 more to go!`);
      scoreCount++;
    } else if (answer1 === 'no' || answer1 === 'n') {
      alert(`No time like the present, ${userName}, let's keep going, anyways.`);
    } else {
      alert(`...hmm...tell you what, ${userName}, let's just get this over with...`);
    }
    console.log(`User was asked if they were ready, and answered with ${answer1}.`);
  }
  
  function question2 () {

    var answer2 = prompt('Is 42 the answer to life, love, and everything?').toLowerCase().trim();

    if (answer2 === 'yes' || answer2 === 'y') {
      alert(`Truly, ${userName}, you are wise.`);
      scoreCount++;
    } else if (answer2 === 'no' || answer2 === 'n') {
      alert(`Clearly, you have not been listening to dolphins, ${userName}.`);
    } else {
      alert(`${userName}...I mean, these are yes or no questions. Focus!`);
    }
    console.log(`User was asked the answer to The Question, and they responded with ${answer2}`);
  }

  function question3 () {

    var answer3 = prompt('Semper Fi?').toLowerCase().trim();

    if (answer3 === 'yes' || answer3 === 'y') {
      alert('Oorah!');
      scoreCount++;
    } else if (answer3 === 'no' || answer3 === 'n') {
      alert(`Have faith, ${userName}`);
    } else {
      alert(`Work on it, ${userName}`);
    }
    console.log(`User was shown the Marine Corps motto: always faithful, and responded with ${answer3}`);
  }

  function question4 () {

    var answer4 = prompt('Am I the eldest sibling in my family?').toLowerCase().trim();

    if (answer4 === 'yes' || answer4 === 'y') {
      alert(`Good job, ${userName}. I have one younger brother.`);
      scoreCount++;
    } else if (answer4 === 'no' || answer4 === 'n') {
      alert(`Unfortunately you are incorrect, ${userName}. I have one younger brother.`);
    } else {
      alert(`Are we even speaking the same language, ${userName}? Actually, we might not be, since I get my language libraries from Pirate Bay.`);
    }
    console.log(`The user was asked to answer whether or not they thought I was the eldest sibling, and responded with ${answer4}`);
  }

  function question5 () {

    var answer5 = prompt('Is my favorite poem written by Rudyard Kipling?').toLowerCase().trim();

    if (answer5 === 'yes' || answer5 === 'y') {
      alert('No, my favorite poem is "Ulysses" by Tennyson.');
    } else if (answer5 === 'no' || answer5 === 'n') {
      alert(`Correct, ${userName}, my favorite poem is "Ulysses."`);
      scoreCount++;
    } else {
      alert('Stastically, you had a 50% chance to get this right and still managed to be an outlier. Well played.');
    }
    console.log(`The user was asked if my favorite poem was written by Kipling, and responded with ${answer5}`);
  }

  

  function question6 () {

    alert(`Okay, ${userName}, question 6 is a little different. This time, I want you to guess my favorite number! You will have 4 tries to get it right.`);

    while (triesLeft > 0) {
      
      var answer6 = Number(prompt('What is my favorite number?').trim());
      triesLeft--;
      console.log(`User was asked to guess my favorite number, responded with ${answer6}.`);

      if (answer6 === 42) {
        alert('Awesome! Got it right!');
        scoreCount++;
        break;
      } else if (answer6 > 42) {
        alert(`Sorry, ${userName}, that is not correct. You have ${triesLeft} tries left! Your number is too high!`);
      } else {
        alert(`Sorry, ${userName}, that is not correct. You have ${triesLeft} tries left! Your number is too low!`);
      }

      if (triesLeft === 0) {
        alert('Better luck next time! Just remember, there\'s only 1 universal number! Hint: 42.');
      }
    }
  }

  function question7 () {

    alert(`Alright, ${userName}, last but not least...you have 6 tries to guess the correct answer to...`);

    while (triesLeftState > 0) {
      var answer7 = prompt('What state have I lived in besides Washington?').toLowerCase();
      triesLeftState--;
      console.log(`User was asked to name a state I've lived in, and responded with ${answer7}.`);

      for (var i = 0; i < rightAnswers.length; i++) {
        if (answer7 === rightAnswers[i]) {
          alert(`Got it, ${userName}!`);
          scoreCount++;
          tryAgain = false;
        }
      }

      if (tryAgain === false) {
        alert('The correct answers were any of the following: liquid or solid.');
        break;
      } else {
        alert(`You have ${triesLeftState} tries remaining.`);
      }

      if (triesLeftState === 0) {
        alert('The correct answers were any of the following: liquid or solid.');
      }
    }
  }

  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();

  alert(`Thanks for playing, ${userName}! Your score was ${scoreCount} out of 7! Let's talk again, soon.`);

};

startButton.addEventListener('mouseenter' , () => {
  startButton.style.backgroundColor = 'white';
  startButton.style.color = 'black';
  setTimeout(function(){
    startButton.style.backgroundColor = 'black';
    startButton.style.color = 'white';
  }, 100);
});

bioButton.addEventListener('mouseenter' , () => {
  bioButton.style.backgroundColor = 'white';
  bioButton.style.color = 'black';
  setTimeout(function(){
    bioButton.style.backgroundColor = 'black';
    bioButton.style.color = 'white';
  }, 100);
});

eduButton.addEventListener('mouseenter' , () => {
  eduButton.style.backgroundColor = 'white';
  eduButton.style.color = 'black';
  setTimeout(function(){
    eduButton.style.backgroundColor = 'black';
    eduButton.style.color = 'white';
  }, 100);
});

goalButton.addEventListener('mouseenter' , () => {
  goalButton.style.backgroundColor = 'white';
  goalButton.style.color = 'black';
  setTimeout(function(){
    goalButton.style.backgroundColor = 'black';
    goalButton.style.color = 'white';
  }, 100);
});

startButton.addEventListener('click', () => {
  playMe();
  startButton.blur();
});

bioButton.addEventListener('click', () => {
  alert(`Very well, ${userName}. I was born on Winter Solstice in 1981. I'm a native of Portland, Oregon. The era of Bon Jovi was a blast, but I don't remember because I spent most of it in diapers. I still did my best to Keep Portland Wierd, diapers or not. Later on I joined the Marine Corps and traveled the world. My favorite experience was several deployments as an embedded advisor with foreign forces: small teams leveraging a diverse set of experiences to achieve cross-cultural objectives. Afterwards, I became an Emergency Medical Technician before switching to software development.`);
  bioButton.blur();
});

eduButton.addEventListener('click', () => {
  alert(`I am a lifelong learner, ${userName}. I have a BS in Political Science from Oregon State University, and a Emergency Medical Technician certificate from Kapiolani Community College, Hawaii. Most recently I was in a Nursing graduate program at the University of Hawaii - Manoa, until the opportunity to attend Code Fellows and pursue my passion for coding presented itself, leading me to Seattle.`);
  eduButton.blur();
});

goalButton.addEventListener('click', () => {
  alert(`This is the most exciting part, ${userName}. I want to become a full-stack software developer. I want to work with amazing people, and build amazing things. I want to dream.`);
  goalButton.blur();
});
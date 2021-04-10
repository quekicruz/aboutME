'use strict;'

let userName = getUserName();

function getUserName() {
  // prompts user for userName and introduces user to site 
  let userName2 = prompt('Hafa Adai, What is your name?')
  //  console.log('Great to meet you '+ userName)
  if (userName2 === '' || userName2 === null) {
    alert('Is that really your name?');
    getUserName();
  } 
  return userName2
}

// calls welcomeUsername
welcomeUserName();

// welcomes user
function welcomeUserName() {
  alert(`Welcome to the Life of Q ${userName}!`);
}

// alert for strange input in 1st question game
function thatsWeird() {
  alert('Thats a weird response??');
}

// alert to begin guessing game
alert('Before you learn more about me, I have prepared a little guessing game to allow for some fun. Please answer Yes or No to the following questions');


// Calls questions game
userQuestions();


function userQuestions() {
  // 1st Question
  let island = prompt('Am I from Guam?');
  switch (island) {
    case 'yes':
    alert('Wow! How did you know that?');
    break;
    case 'Yes':
    alert('Wow! How did you know that?');
    break;
    case 'no':
    alert('But I am from Guam :/');
    break;
    case 'No':
    alert('But I am from Guam :/');
    break;
    case '':
    thatsWeird();
    break;
    case null:
    thatsWeird();
    break;
  }
 
  // 2nd Question
  let degree = prompt('Did I study business?');
  switch (degree) {
    case 'yes':
    alert('Wow! How did you know that?');
    break;
    case 'Yes':
    alert('Wow! How did you know that?');
    break;
    case 'no':
    alert('But I am from Guam :/');
    break;
    case 'No':
    alert('But I am from Guam :/');
    break;
    case '':
    thatsWeird();
    break;
    case null:
    thatsWeird();
    break;
  }


  // 3rd Question
  let profession = prompt('Was I a personal trainer?');
  switch (profession) {
    case 'yes':
    alert('You rock! I love me some good exercise');
    break;
    case 'Yes':
    alert('You rock! I love me some good exercise');
    break;
    case 'no':
    alert('But I love me some exercise though :/');
    break;
    case 'No':
    alert('But I love me some exercise though :/');
    break;
    case '':
    thatsWeird();
    break;
    case null:
    thatsWeird();
    break;
  }

  // 4th Question
  let sibling = prompt('Do I have a sister?');
  switch (sibling) {
    case 'yes':
    alert('She is still the one that bullies me til this day.');
    break;
    case 'Yes':
    alert('She is still the one that bullies me til this day.');
    break;
    case 'no':
    alert('I mean you could not have known that');
    break;
    case 'No':
    alert('I mean you could not have known that');
    break;
    case '':
    thatsWeird();
    break;
    case null:
    thatsWeird();
    break;
  }

  // 5th Question
  let team = prompt('Am I Lakers fan?');
  switch (team) {
    case 'yes':
    alert('That is right! Clippers fan for life!');
    break;
    case 'Yes':
    alert('That is right! Clippers fan for life!');
    break;
    case 'no':
    alert('Sheesh you do not know me, do you?');
    break;
    case 'No':
    alert('Sheesh you do not know me, do you?');
    break;
    case '':
    thatsWeird();
    break;
    case null:
    thatsWeird();
    break;
  }


// Guess number game

let gameAnswer = prompt('Would you like to play a number guessing game with me?');
  if (gameAnswer == 'yes' || gameAnswer === 'Yes') {
    guess()
  } else {
    alert('Ahhh that is alright ' + userName);
  }


function guess() {
  let correctAnswer = Math.floor((Math.random() * 100) + 1);
  let userGuess = prompt('Please enter a number 1-100');
  let numberOfGuesses = 3;
  for (let i = 0; i < numberOfGuesses; i++) {
    let guessLeft = numberOfGuesses - i;
    if (userGuess < correctAnswer) {
      userGuess = prompt(guessLeft + ' Guesses left. Too Low! Please enter a number 1-100');
    } else if (userGuess > correctAnswer) {
      userGuess = prompt(guessLeft + ' Guesses left. Too High! Please enter a number 1-100');
    }
    if (userGuess !== correctAnswer) {
    }
    if (userGuess == correctAnswer) {
      break;
    }
  } if (userGuess == correctAnswer) {
    alert('Great Job ' + userName2 + '! ');
  } else {
    alert('Its okay! The correct answer was ' + correctAnswer);
  }
}

// Guessing game for travel destinations
alert('I have one more game before you can go');

// Array for travel destinations 

let travelDestinations = ['Dubai', 'Paris', 'Malta', 'Cape Town', 'Spain', 'Rio', 'Japan'];
console.log(travelDestinations);


// Number of Guesses user has 

let travelGuesses = 5;

// create a flag- variable you set to let you know condition has changed, true false

let correctTravelGuess = false;

// Loop for the guesses


finalQuestions();

function finalQuestions() {
  while (travelGuesses > 0 && correctTravelGuess === false) {
    let travelGuess = prompt('What is one of my dream travel destination spots?');
    travelGuesses--;
    // loop through all movies; nested loops
    // for loops are great for checking array
    console.log(travelGuess, 'user guess')
    for (let i = 0; i < travelDestinations.length; i++) {
      // console.log(travelDestinations[i])
      if (travelGuess === travelDestinations[i]) {
        console.log('its a match');
        alert('You got one!');
        correctTravelGuess = true;
      }

    }
    // if the user has still not gotten it right then I willl alert
    if (correctTravelGuess === false) {
      alert('Sorry but that not is not the right answer');
    }
    
  }
}

}

'use strict;'

function getUserName() {
  // prompts user for userName and introduces user to site 
  let userName = prompt('Hafa Adai, What is your name?')
  //  console.log('Great to meet you '+ userName)
  while (userName === '' || userName === null) {
    alert ('Is that really your name?')}
  return userName
}


function welcomeUserName() {
  alert (`Welcome to Me ${userNameName}!`);
}

function thatsWeird(){
  alert ('Thats a weird response??')
}

// alert to begin guessing game
alert('Before you learn more about me, I have prepared a little guessing game to allow for some fun. Please answer Yes or No to the following questions')

function userQuestions() {
// 1st Question
  let island = prompt('Am I from Guam?')
  if(island === 'yes'|| island === 'Yes') {
    alert('Wow! How did you know that?')
    // console.log('Guam will always have my heart!')
  }
  if(island === 'no' || island === 'No'){
    alert('Ahhhh better luck next time!')
  }else{
    thatsWeird()
  }

  // 2nd Question
  let degree = prompt('Did I study business?')
  if(degree === 'no'|| degree === 'No') {
    alert('Yup, I could never.')
    // console.log('Business is not for everyone')
  }else{
    alert('Wow, I appreciate that you think that')
  }

  // 3rd Question
  let profession = prompt('Was I a personal trainer?')
  if(profession === 'yes'|| profession === 'Yes') {
    alert('You rock! I love me some good exercise')
    // console.log('Being a personal trainer was a lot of fun')
  }else{
    alert('But I love me some exercise though :/')
  }

  // 4th Question
  let sibling = prompt('Do I have a sister?')
  if(sibling === 'yes'|| sibling === 'Yes') {
    alert('She is still the one that bullies me til this day.')
    // console.log('Its love/hate relationship with us two')
  }else{
    alert('I mean you could not have known that')
  }

  // 5th Question
  let team = prompt('Am I Lakers fan?')
  if(team === 'no'|| team === 'No') {
    alert('That is right! Clippers fan for life!')
    // console.log('Lakers are the worst smh')
  }else{
    alert('Sheesh you do not know me, do you?')
  }

}

// Guess number game

  let gameAnswer = prompt('Would you like to play a number guessing game with me?')
  if (gameAnswer.toLowerCase() == 'yes'){
      guess()}else{
        alert('Ahhh that is alright! Enjoy the site ' + userNameName + '!');

      }

      function guess(){
        let correctAnswer = 55
            let userGuess = prompt('Please enter a number 1-100');
            let numberOfGuesses = 3;
            for(let i = 0; i < numberOfGuesses; i++) {
                let guessLeft = numberOfGuesses - i;
                 if(userGuess < correctAnswer){
                     userGuess = prompt(guessLeft + ' Guesses left. To Low! Please enter a number 1-100')
                 } else if (userGuess > correctAnswer) {
                     userGuess = prompt(guessLeft + ' Guesses left. To High! Please enter a number 1-100');}
                if(userGuess !== correctAnswer) {
                }
                if (userGuess == correctAnswer){
                     break;
                    }
                  } if (userGuess == correctAnswer){
                    alert('Great Job ' + userName + '! ');
                   }else {
                 alert('Its okay! The correct answer was 55!')
              }
        }

// Guessing game for travel destinations
alert ('But wait! The fun does not stop quite just yet! I have one more guessing game for you!') 

// Array for travel destinations 

let travelDestinations = ['Dubai','Paris','Malta','Cape Town','Spain','Rio','Japan'] ;
console.log(travelDestinations) ;


// Number of Guesses user has 

let travelGuesses = 5 ;

// create a flag- variable you set to let you know condition has changed, true false

let correctTravelGuess = false ; 

// Loop for the guesses

while (travelGuesses > 0 && correctTravelGuess === false) {
  let travelGuess = prompt('What is one of my dream travel destination spots?');
    travelGuesses--;
  // loop through all movies; nested loops
  // for loops are great for checking array
  console.log(travelGuess, 'user guess')
  for (let i = 0; i < travelDestinations.length; i++ ) {
    // console.log(travelDestinations[i])
    if (travelGuess === travelDestinations[i]) {
      console.log('its a match');
      alert ('You got one!');
      correctTravelGuess = true; 
    }
    
  } 
  // if the user has still not gotten it right then I willl alert
    if (correctTravelGuess === false) {
      alert ('Sorry but that not is not the right answer'); 
    }
   
}












// function guessAnswer(){
//   let correctAnswer = 45
//       let userGuess = prompt('Please enter a number 1-100');
//       let numberOfGuesses = 6;
//       for(let i = 0; i < numberOfGuesses; i++) {
//           let guessLeft = numberOfGuesses - i;
//            if(userGuess < correctAnswer){
//                userGuess = prompt(guessLeft + ' Guesses left. To Low. Please enter a number 1-100')
//            } else if (userGuess > correctAnswer) {
//                userGuess = prompt(guessLeft + ' Guesses left. To High! Please enter a number 1-100');
//            }
//           if (userGuess == correctAnswer){
//                alert('You are too good '+ userName);
//                break;}
//            }
//   }


// alert('Thanks for playing '+ userName + '! ' + 'I hope you enjoy the site!' )






// if (island === 'Guam'|| island === 'guam'){
//   alert('Aye! Great Job '+ userName)
// } else {
//   alert('Its alright! Try Again!')
// }


// let profession = prompt('What did I do before Code Fellows?, )


// let degree = prompt('What did I get my degree in?')

// let userNameName = getUserName();

// welcomeUserName();
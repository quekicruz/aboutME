'use strict'

let userName = prompt('Hafa Adai, What is your name?')
//  console.log('Great to meet you '+ userName)
alert ('Welcome to Me'+ ' ' + userName + '!')

alert('Before you learn more about me, I have prepared a little guessing game to allow you for some fun. Please answer Yes or No to the following questions')

let island = prompt('Am I from Guam?')
if(island === 'yes'|| island === 'Yes') {
  alert('Wow! How did you know that?')
  // console.log('Guam will always have my heart!')
}else{
  alert('Ahhhh better luck next time!')
}

let degree = prompt('Did I study business?')
if(degree === 'no'|| degree === 'No') {
  alert('Yup, I could never.')
  // console.log('Business is not for everyone')
}else{
  alert('Wow, I appreciate that you think that')
}
let profession = prompt('Was I a personal trainer?')
if(profession === 'yes'|| profession === 'Yes') {
  alert('You rock! I love me some good exercise')
  // console.log('Being a personal trainer was a lot of fun')
}else{
  alert('But I love me some exercise though :/')
}

let sibling = prompt('Do I have a sister?')
if(sibling === 'yes'|| sibling === 'Yes') {
  alert('She is still the one that bullies me til this day.')
  // console.log('Its love/hate relationship with us two')
}else{
  alert('I mean you could not have known that')
}
let team = prompt('Am I Lakers fan?')
if(team === 'no'|| team === 'No') {
  alert('That is right! Clippers fan for life!')
  // console.log('Lakers are the worst smh')
}else{
  alert('Sheesh you do not know me, do you?')
}

alert('Thanks for playing '+ userName + '! ' + 'I hope you enjoy the site!' )






// if (island === 'Guam'|| island === 'guam'){
//   alert('Aye! Great Job '+ userName)
// } else {
//   alert('Its alright! Try Again!')
// }


// let profession = prompt('What did I do before Code Fellows?, )


// let degree = prompt('What did I get my degree in?')

// let industry = prompt('What type of developer would I like to become?')